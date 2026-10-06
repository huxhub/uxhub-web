import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const base = process.env.PREVIEW_URL || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
await fs.mkdir("artifacts", { recursive: true });
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
    "Bridging capital with frontier opportunities",
  );
  const typography = await page
    .locator("h1")
    .evaluate((el) => ({
      font: getComputedStyle(el).fontFamily,
      size: getComputedStyle(el).fontSize,
      x: el.getBoundingClientRect().x,
      width: el.getBoundingClientRect().width,
    }));
  assert.ok(typography.font.includes("Instrument Sans"));
  assert.equal(typography.size, "64px");
  assert.equal(typography.x, 32);
  assert.equal(typography.width, 620);
  await page.screenshot({ path: "artifacts/desktop.png" });
  const first = await page.locator("canvas[class*=hero-module]").screenshot();
  await page.waitForTimeout(500);
  const second = await page.locator("canvas[class*=hero-module]").screenshot();
  assert.ok(!first.equals(second), "Chrome shader should animate");
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "artifacts/menu.png" });
  assert.equal(await page.getByRole("dialog").count(), 1);
  await page.keyboard.press("Escape");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page
    .getByRole("link", { name: "Explore capabilities", exact: true })
    .click();
  await page.waitForTimeout(1200);
  assert.ok(await page.evaluate(() => scrollY > 500));
  await page.evaluate(() => scrollTo({ top: 2700, behavior: "instant" }));
  await page.waitForTimeout(1600);
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.screenshot({ path: "artifacts/infrastructure.png" });
  const pages = JSON.parse(await fs.readFile("src/content/pages.json", "utf8"));
  for (const route of Object.keys(pages)) {
    const response = await page.request.get(
      base + "/" + (route === "home" ? "" : route),
    );
    assert.equal(response.status(), 200, route);
  }
  await page.goto(base + "/leadership", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const broken = await page
    .locator("img")
    .evaluateAll((images) =>
      images
        .filter((image) => image.complete && !image.naturalWidth)
        .map((image) => image.src),
    );
  assert.deepEqual(broken, []);
  await page.locator('a[href="/leadership/bijan-alizadeh"]').first().click();
  await page.waitForURL("**/leadership/bijan-alizadeh");
  assert.ok((await page.locator("body").innerText()).includes("Bijan"));
  await page.goto(base + "/global-presence", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Dubai", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Dubai", exact: true })
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
  await page.screenshot({ path: "artifacts/mobile.png" });
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Philosophy", exact: true })
    .click();
  await page.waitForURL("**/philosophy");
  assert.equal(await page.getByRole("dialog").count(), 0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  assert.equal(await page.locator(".chrome-intro").isVisible(), false);
  assert.deepEqual(errors, []);
  console.log(
    "Verified: animated WebGL hero; desktop typography and spacing; menu and keyboard; dark scroll transition; all " +
      Object.keys(pages).length +
      " routes; images; profile navigation; location tabs; mobile layout; reduced motion. No browser errors.",
  );
} finally {
  await browser.close();
}
