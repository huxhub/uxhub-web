import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { load } from 'cheerio';
import { chromium } from '@playwright/test';

const pages = JSON.parse(await fs.readFile('src/content/pages.json', 'utf8'));
const index = JSON.parse(await fs.readFile('scraped_content/index.json', 'utf8'));
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
for (const { id } of index.pages) {
  const $ = load(await fs.readFile(`scraped_content/html/${id}.html`, 'utf8'));
  $('br').replaceWith(' ');
  $('script,style,svg,header,footer,button,#form-success,#panelStepSuccess,#loginModal,.p2s-lang-selector,.p2s-stepper-wrap').remove();
  const root = id === 'registration' ? $('.p2s-page-container') : $('main');
  const target = load(pages[id === 'product' ? 'product/price-intelligence' : id].html);
  const text = normalize(target('body').text());
  root.find('*').contents().each((_, node) => {
    if (node.type !== 'text') return;
    const copy = normalize(node.data);
    if (copy.length > 2) assert.ok(text.includes(copy), `${id}: missing ${copy}`);
  });
  const ids = target('[id]').map((_, node) => target(node).attr('id')).get();
  assert.equal(ids.length, new Set(ids).size, `${id}: duplicate IDs`);
  target('[data-uxhub-content] button[aria-controls]').each((_, button) => {
    assert.equal(target(`[id="${target(button).attr('aria-controls')}"]`).length, 1);
  });
}

const browser = await chromium.launch();
const page = await browser.newPage({ reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});
try {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const id of Object.keys(pages)) {
      const response = await page.goto(`${process.env.PREVIEW_URL || 'http://localhost:3000'}/${id === 'home' ? '' : id}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, id);
      const buttons = page.locator('[data-uxhub-content] button[aria-controls]');
      for (const button of await buttons.all()) {
        await button.scrollIntoViewIfNeeded();
        const controlledPanel = page.locator(`[id="${await button.getAttribute('aria-controls')}"]`);
        assert.equal(await controlledPanel.evaluate((el) => el.inert), true, `${id}: collapsed panel must be inert`);
        await button.click();
        assert.equal(await button.getAttribute('aria-expanded'), 'true');
        const panel = page.locator(`[id="${await button.getAttribute('aria-controls')}"]`);
        assert.equal(await panel.evaluate((el) => el.inert), false);
        const copy = panel.locator('.uxhub-copy');
        assert.equal(await copy.evaluate((el) => getComputedStyle(el).display), 'grid', `${id}: missing content styles`);
        for (const card of await copy.locator('.copy-card').all()) {
          assert.equal(await card.evaluate((el) => getComputedStyle(el).borderTopWidth), '1px', `${id}: unstyled card`);
        }
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${id}: overflow at ${width}px`);
        await button.click();
        assert.equal(await panel.evaluate((el) => el.inert), true);
      }
    }
  }
  assert.deepEqual(errors, []);
  console.log('Verified source-copy coverage for all seven pages, unique accordion IDs, and styled desktop/mobile accordions on every route without horizontal overflow or browser errors.');
} finally {
  await browser.close();
}
