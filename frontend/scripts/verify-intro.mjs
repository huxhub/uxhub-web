import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
const browser = await chromium.launch();
const page = await browser.newPage();
const base = process.env.PREVIEW_URL || 'http://localhost:3000';
try {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.uxhub-intro');
    assert.equal(await page.locator('.site-brand').innerText(), '');
    assert.equal(await page.locator('.site-brand').getAttribute('aria-label'), 'UX Hub home');
    assert.equal(await page.locator('.site-brand svg').isVisible(), false);
    await page.waitForSelector('.uxhub-intro.docking');
    assert.equal(await page.locator('.site-brand svg').isVisible(), false, 'Navbar logo stays hidden during docking');
    assert.equal(await page.locator('html').getAttribute('data-intro-playing'), '');
    await page.waitForSelector('.uxhub-intro', { state: 'detached' });
    assert.equal(await page.locator('.site-brand svg').isVisible(), true);
    assert.equal(await page.locator('html').getAttribute('data-intro-playing'), null);
  }
  await page.goto(base + '/services');
  assert.equal(await page.locator('.site-brand svg').isVisible(), true);
  for (const [index, count] of [11, 13, 11].entries()) {
    const practice = page.locator('[data-service-practice]').nth(index);
    assert.equal(await practice.locator('.services-capability-link').count(), count);
    for (const item of await practice.locator('.services-capability-link').all()) {
      await item.scrollIntoViewIfNeeded();
      assert.equal(await item.isVisible(), true);
    }
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base);
  assert.equal(await page.locator('.site-brand svg').isVisible(), true);
  assert.equal(await page.locator('.uxhub-intro').isVisible(), false);
  console.log('Verified logo-only header, desktop/mobile docking handoff, inner-page and reduced-motion visibility, and all 35 visible service capabilities.');
} finally {
  await browser.close();
}
