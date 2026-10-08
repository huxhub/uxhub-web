import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
const base = process.env.PREVIEW_URL || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const artifacts = await fs.mkdtemp(
  path.join(os.tmpdir(), "uxhub-hover-verify-"),
);
try {
  await page.goto(base, { waitUntil: "networkidle" });
  await page.waitForSelector(".chrome-intro", { state: "detached" });
  const button = page.getByRole("link", {
    name: "Explore our services",
    exact: true,
  });
  const before = await button.boundingBox();
  await button.hover();
  await page.waitForTimeout(180);
  await page.screenshot({ path: path.join(artifacts, "button-enter.png") });
  await page.waitForTimeout(400);
  assert.equal(await button.locator("[data-hover-wipe]").count(), 1);
  const after = await button.boundingBox();
  assert.ok(
    Math.abs(after.width - before.width - 48) < 1,
    "Reference horizontal padding is 24px each side",
  );
  assert.equal(await button.locator('[class*="__ghost"]').count(), 1);
  await page.screenshot({ path: path.join(artifacts, "button-held.png") });
  await page.mouse.move(800, 400);
  await page.waitForTimeout(100);
  assert.equal(await button.locator('[class*="__exiting"]').count(), 1);
  await page.screenshot({ path: path.join(artifacts, "button-exit.png") });
  await page.waitForTimeout(500);
  assert.equal(await button.locator("[data-hover-wipe]").count(), 0);
  // Rapid reversals must leave no stale bar or duplicate accessible link.
  for (let i = 0; i < 4; i++) {
    await button.hover();
    await page.waitForTimeout(40);
    await page.mouse.move(800, 400);
  }
  await page.waitForTimeout(650);
  assert.equal(await button.locator("[data-hover-wipe]").count(), 0);
  await page.getByRole("button", { name: "Menu", exact: true }).click();
  const primary = page
    .getByRole("dialog")
    .getByRole("link", { name: "About", exact: true });
  const left = (await primary.boundingBox()).x;
  await primary.hover();
  await page.waitForTimeout(600);
  assert.equal(await primary.locator("[data-hover-wipe]").count(), 2);
  assert.equal((await primary.boundingBox()).x, left);
  assert.equal(
    await primary.evaluate((el) => getComputedStyle(el).paddingLeft),
    "0px",
  );
  await page.screenshot({ path: path.join(artifacts, "menu-primary.png") });
  const secondary = page
    .getByRole("dialog")
    .getByRole("link", { name: "Product Growth", exact: true });
  await secondary.hover();
  await page.waitForTimeout(550);
  assert.equal(await secondary.locator("[data-hover-wipe]").count(), 1);
  const contact = page.locator(".menu-contacts a").first();
  await contact.hover();
  await page.waitForTimeout(550);
  assert.equal(await contact.locator("[data-hover-wipe]").count(), 2);
  await page.keyboard.press("Escape");
  const footer = page
    .locator("footer")
    .getByRole("link", { name: "Services", exact: true })
    .first();
  await footer.hover();
  await page.waitForTimeout(550);
  assert.equal(await footer.locator("[data-hover-wipe]").count(), 1);
  await footer.screenshot({ path: path.join(artifacts, "footer-link.png") });
  await page.mouse.move(1400, 20);
  await page.waitForTimeout(550);
  await button.scrollIntoViewIfNeeded();
  await page.keyboard.press("Tab");
  await button.focus();
  await page.waitForTimeout(550);
  assert.equal(
    await button.locator("[data-hover-wipe]").count(),
    1,
    "Keyboard focus gets the same wipe",
  );
  await page.locator("body").click({ position: { x: 1000, y: 300 } });
  await page.goto(base + "/services", { waitUntil: "networkidle" });
  const disclosure = page.getByRole("button", {
    name: "0→1 Product Strategy",
    exact: true,
  });
  await disclosure.hover();
  await disclosure.click();
  assert.equal(await disclosure.getAttribute("aria-expanded"), "true");
  await page
    .getByRole("link", { name: "Explore Product Growth", exact: true })
    .click();
  await page.waitForURL("**/product-growth");
  assert.equal(
    await page.locator("[data-hover-wipe]").count(),
    0,
    "Route changes clean transient hover layers",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(base, { waitUntil: "networkidle" });
  const reduced = page.getByRole("link", {
    name: "Explore our services",
    exact: true,
  });
  await reduced.hover();
  assert.equal(
    await reduced
      .locator('[class*="__fill"]')
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  await page.mouse.move(800, 400);
  assert.equal(await reduced.locator("[data-hover-wipe]").count(), 0);
  assert.deepEqual(errors, []);
  console.log(
    "Hover checks pass: horizontal entry/exit, text inversion, 24px padding, rapid reversals, menu rules, text underline, contact rules, footer links, keyboard focus, route cleanup, and reduced motion.",
  );
} finally {
  await browser.close();
}
