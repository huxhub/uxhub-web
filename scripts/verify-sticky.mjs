import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const base = process.env.PREVIEW_URL || 'http://localhost:3000';
try {
  for (const route of ['', 'about', 'insights', 'markets', 'services']) {
    await page.goto(`${base}/${route}`, { waitUntil: 'networkidle' });
    if (route === '') {
      assert.equal(await page.locator('[data-scroll-sticky] [data-home-summary]').count(), 0);
      assert.equal(await page.locator('#home-details + [data-home-summary-section] [data-home-summary]').count(), 1);
      assert.equal(await page.getByRole('link', { name: 'Open in ChatGPT' }).count(), 2);
      assert.equal(await page.getByRole('link', { name: 'Open in Claude' }).count(), 2);
      const disclosures = page.locator('#home-details button[aria-controls]');
      await disclosures.nth(0).click();
      assert.equal(await disclosures.nth(0).getAttribute('aria-expanded'), 'true');
      await disclosures.nth(1).click();
      assert.equal(await disclosures.nth(0).getAttribute('aria-expanded'), 'false');
      assert.equal(await disclosures.nth(1).getAttribute('aria-expanded'), 'true');
    }
    if (route === 'markets') {
      assert.equal(await page.getByRole('img', { name: 'UX Hub', exact: true }).count(), 1);
      await page.getByRole('button', { name: 'KSA', exact: true }).click();
      assert.equal(await page.getByRole('button', { name: 'KSA', exact: true }).getAttribute('aria-pressed'), 'true');
    }
    const sections = page.locator('[data-scroll-split]');
    assert.equal(await sections.count(), route === 'services' ? 3 : 1);
    for (const section of await sections.all()) {
      const measure = () => section.evaluate(el => {
        const left = el.querySelector('[data-scroll-sticky]');
        const right = [...el.children].find(child => child !== left);
        return {
          scrollY: window.scrollY,
          left: left.getBoundingClientRect().top,
          right: right.getBoundingClientRect().top,
          leftBottom: left.getBoundingClientRect().bottom,
          rightBottom: right.getBoundingClientRect().bottom,
          leftHeight: left.offsetHeight,
          rightHeight: right.offsetHeight,
        };
      });
      await section.evaluate(el => {
        const left = el.querySelector('[data-scroll-sticky]');
        window.scrollTo(0, 0);
        window.scrollTo(0, left.getBoundingClientRect().top - parseFloat(getComputedStyle(left).top) + 40);
      });
      await page.waitForTimeout(100);
      const before = await measure();
      await page.evaluate(() => window.scrollBy(0, 160));
      await page.waitForTimeout(100);
      const after = await measure();
      if (before.rightHeight - before.leftHeight > 220) {
        assert.ok(Math.abs(after.left - before.left) < 2, `${route || 'home'}: left column must stay pinned`);
      }
      const scrolled = after.scrollY - before.scrollY;
      assert.ok(Math.abs(after.right - before.right + scrolled) < 2, `${route || 'home'}: right column must follow document scrolling`);

      // Near the end, the introduction must release at the content boundary.
      await section.evaluate(el => {
        const left = el.querySelector('[data-scroll-sticky]');
        const right = [...el.children].find(child => child !== left);
        window.scrollBy(0, right.getBoundingClientRect().bottom - left.offsetHeight - parseFloat(getComputedStyle(left).top) + 40);
      });
      await page.waitForTimeout(100);
      const end = await measure();
      if (end.rightHeight >= end.leftHeight) {
        assert.ok(Math.abs(end.leftBottom - end.rightBottom) < 2, `${route || 'home'}: sticky text must stop at the right column's bottom (${end.leftBottom}, ${end.rightBottom})`);
      }
      const extraSpace = await section.evaluate(el => {
        const style = getComputedStyle(el);
        const height = Math.max(...[...el.children].map(child => child.getBoundingClientRect().height));
        return el.getBoundingClientRect().height - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom) - height;
      });
      assert.ok(Math.abs(extraSpace) < 2, `${route || 'home'}: artificial scroll space remains`);

      if (route === 'services') {
        assert.equal(await section.locator('[data-scroll-sticky] a').count(), 0);
        const action = section.locator('..').locator('.service-practice-action');
        assert.equal(await action.count(), 1);
        assert.ok(await action.evaluate(el => el.getBoundingClientRect().top >= el.previousElementSibling.getBoundingClientRect().bottom));
        assert.ok(await action.evaluate(el => {
          const button = el.getBoundingClientRect();
          const columns = el.previousElementSibling.getBoundingClientRect();
          const section = el.parentElement.getBoundingClientRect();
          return button.top - columns.bottom >= 48 && section.bottom - button.bottom >= 48;
        }), 'Service action needs balanced space above and below');
        assert.ok(await action.evaluate(el => {
          const button = el.getBoundingClientRect();
          const columns = el.previousElementSibling.getBoundingClientRect();
          return Math.abs(button.left - columns.left) < 2 && Math.abs(button.right - columns.right) < 2;
        }), 'Service action must span both columns');
      }
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(100);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route}: mobile overflow`);
    for (const sticky of await page.locator('[data-scroll-sticky]').all()) {
      assert.notEqual(await sticky.evaluate(el => getComputedStyle(el).position), 'sticky');
    }
    await page.setViewportSize({ width: 1440, height: 900 });
  }
  assert.deepEqual(errors, []);
  console.log('Verified sticky boundaries, no artificial scroll space, service buttons below their lists, and desktop/mobile layouts without browser errors.');
} finally {
  await browser.close();
}
