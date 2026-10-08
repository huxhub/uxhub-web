import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
const base = process.env.PREVIEW_URL || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const artifacts = await fs.mkdtemp(path.join(os.tmpdir(), "uxhub-verify-"));
try {
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForSelector(".chrome-intro", {
    state: "detached",
    timeout: 12000,
  });
  await page.waitForFunction(
    () =>
      document.querySelector("canvas[class*=hero-module]")?.dataset.active ===
      "true",
  );
  await page.waitForTimeout(3300);
  assert.equal(
    await page.locator("h1").innerText(),
    "Build, launch and grow your business.",
  );
  const typography = await page.locator("h1").evaluate((el) => ({
    font: getComputedStyle(el).fontFamily,
    size: getComputedStyle(el).fontSize,
    x: el.getBoundingClientRect().x,
    width: el.getBoundingClientRect().width,
  }));
  assert.ok(typography.font.includes("Instrument Sans"));
  assert.equal(typography.size, "64px");
  assert.equal(typography.x, 32);
  assert.equal(typography.width, 620);
  await page.screenshot({ path: path.join(artifacts, "desktop.png") });
  const first = await page.locator("canvas[class*=hero-module]").screenshot();
  await page.waitForTimeout(500);
  const second = await page.locator("canvas[class*=hero-module]").screenshot();
  assert.ok(!first.equals(second), "Chrome shader should animate");
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifacts, "menu.png") });
  assert.equal(await page.getByRole("dialog").count(), 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page
    .getByRole("link", { name: "Explore our services", exact: true })
    .click();
  await page.waitForTimeout(1200);
  assert.ok(await page.evaluate(() => scrollY > 500));
  await page.evaluate(() => scrollTo({ top: 2700, behavior: "instant" }));
  await page.waitForTimeout(1600);
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.screenshot({ path: path.join(artifacts, "infrastructure.png") });
  const { default: pages } = await import("../src/data/page-metadata.js");
  for (const route of Object.keys(pages)) {
    const response = await page.request.get(
      base + "/" + (route === "home" ? "" : route),
    );
    assert.equal(response.status(), 200, route);
  }
  await page.goto(base + "/services", { waitUntil: "networkidle" });
  assert.equal(await page.locator('[data-service-practice]').count(), 3);
  assert.equal(await page.locator('.services-capability-link').count(), 35);
  await page.getByRole("link", { name: "0→1 Product Strategy 01", exact: true }).click();
  await page.waitForURL("**/product-growth");
  await page.goto(base + "/global-presence", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "KSA", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "KSA", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForSelector(".chrome-intro", {
    state: "detached",
    timeout: 12000,
  });
  await page.waitForTimeout(3500);
  assert.ok(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  assert.equal(
    await page.locator("h1").evaluate((el) => getComputedStyle(el).fontSize),
    "40px",
  );
  await page.screenshot({ path: path.join(artifacts, "mobile.png") });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "About", exact: true })
    .click();
  await page.waitForURL("**/about");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  assert.equal(await page.locator(".chrome-intro").isVisible(), false);
  for (const route of Object.keys(pages)) {
    await page.goto(base + "/" + (route === "home" ? "" : route), {
      waitUntil: "networkidle",
    });
    const text = await page.locator("body").innerText();
    assert.ok(
      !/Cypher|Storm Group|BVI|Zurich|Dubai|hedge fund|investment management/i.test(
        text,
      ),
      "Stale content on " + route,
    );
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("href")));
    for (const href of links) {
      const pathname = href.split("#")[0].slice(1);
      assert.ok(
        !pathname || pages[pathname],
        "Unknown navigation target " + href,
      );
    }
  }
  assert.deepEqual(errors, []);
  console.log(
    "Verified: animated WebGL hero; desktop typography and spacing; menu and keyboard; dark scroll transition; all " +
      Object.keys(pages).length +
      " routes; service accordions; practice navigation; market tabs; mobile layout; reduced motion. No browser errors.",
  );
} finally {
  await browser.close();
}
