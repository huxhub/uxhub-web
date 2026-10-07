import fs from 'node:fs/promises';
import { load } from 'cheerio';

const read = async (file) => JSON.parse(await fs.readFile(file, 'utf8'));
const pages = await read('src/content/pages.json');
const priceRoute = 'product/price-intelligence';
// Refresh detail copy on repeat imports without treating the listing as its template.
if (pages[priceRoute]) pages.product = pages[priceRoute];
const index = await read('scraped_content/index.json');
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const bodyClass = 'text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50';
const headingClass = 'text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium';
const layouts = await read('scripts/templates/layouts.json');
const template = load(layouts.capabilities.html);
const sectionTemplate = template('main > section').last().clone();
const itemTemplate = sectionTemplate.find('li').first().clone();
const linkTemplate = itemTemplate.find('a').first().clone();
const report = { scrapedAt: index.scrapedAt, pages: [], notes: 'Source copy rendered with existing section, typography and disclosure styles. Navigation and decorative SVGs are not duplicated. Hidden success states and simulated login are excluded. Forms continue on the original website because their backends are not in this repository.' };

function localLink(href, source) {
  if (!href || /^(javascript:|#)/i.test(href)) return null;
  const url = new URL(href, source);
  if (!['https:', 'http:', 'mailto:', 'tel:'].includes(url.protocol)) return null;
  if (url.hostname === 'uxhubglobal.com') {
    const key = url.pathname.replace(/^\//, '').replace(/\.html$/, '');
    if (!key || key === 'index') return '/';
    if (index.pages.some((page) => page.id === key)) return '/' + key;
  }
  return url.href;
}

// Map source content structure into the current site's visual language.
// Original CSS and scripts stay out; semantic roles survive the import.
const roleGroups = {
  'copy-actions': 'button-row pt-hero-cta-group',
  'copy-grid': 'industry-grid why-grid insight-grid pt-hero-competitor-row pt-problem-quadrant-card pt-monitor-grid pt-channels-unified-box pt-dash-metrics-row pt-features-3x3-card pt-usecases-grid pt-pitch-cols-row p2s-form-grid field-row',
  'copy-card': 'pt-hero-card pt-comp-card pt-quadrant-item pt-engine-card pt-monitor-tile pt-dash-card pt-dash-metric pt-feat-cell pt-uc-card pt-hero-floating-alert pt-alert-pill-item pt-chan-cell',
  'copy-row': 'pt-card-product-row pt-map-header pt-map-row pt-react-row pt-alert-prices pt-dash-topbar pt-chart-top',
  'copy-tags': 'logo-row tag-row mini-visual pt-marketplaces-pills pt-channels-pills-row',
  'copy-eyebrow': 'f-eyebrow pt-eyebrow pt-label-mono pt-card-topbadge pt-dark-eyebrow pt-engine-step pt-map-label pt-metric-label pt-alert-badge-red pt-dash-top-badge pt-quadrant-label',
  'copy-value': 'pt-prod-price pt-comp-price-val pt-mon-price pt-win-value pt-metric-val',
  'copy-field': 'p2s-input-group',
};
function copyRoles(el) {
  const classes = new Set((el.attr('class') || '').split(/\s+/));
  return Object.entries(roleGroups).filter(([, names]) => names.split(' ').some((name) => classes.has(name))).map(([role]) => role).join(' ');
}
function renderCopy($, node, source) {
  if (node.type === 'text') return escape(normalize(node.data));
  if (node.type !== 'tag') return '';
  const el = $(node);
  if (el.is('script,style,svg,noscript,template,button') || el.is('#form-success,#panelStepSuccess,#loginModal,.p2s-lang-selector,.p2s-stepper-wrap')) return '';
  if (el.is('br')) return ' ';
  if (el.is('input,textarea')) {
    const hint = el.attr('placeholder');
    return hint ? `<span class="copy-hint">${escape(hint)}</span>` : '';
  }
  if (el.is('select')) return `<span class="copy-hint">${el.find('option').map((_, option) => escape(normalize($(option).text()))).get().join(' / ')}</span>`;
  if (el.is('img')) return '';
  const children = () => el.contents().map((_, child) => renderCopy($, child, source)).get().filter(Boolean).join(' ');
  if (el.is('a')) {
    const href = localLink(el.attr('href'), source);
    const text = children();
    return href && text ? `<a class="copy-link" href="${escape(href)}">${text}</a>` : text;
  }
  if (el.is('strong,b,em')) return `<${node.name}>${children()}</${node.name}>`;
  if (el.is('h1,h2,h3,h4,h5,h6')) return `<h3 class="${headingClass}">${children()}</h3>`;
  if (el.is('table')) return `<div class="copy-table-scroll" tabindex="0" role="region" aria-label="Pricing comparison"><table class="copy-table">${children()}</table></div>`;
  if (el.is('thead,tbody,tfoot,tr,th,td')) return `<${node.name}${el.is('th') ? ' scope="col"' : ''}>${children()}</${node.name}>`;
  if (el.is('.capability-list')) {
    return `<ol class="copy-capabilities">${el.children().map((_, item) => `<li>${renderCopy($, item, source)}</li>`).get().join('')}</ol>`;
  }
  const content = children();
  if (!normalize(content)) return '';
  const roles = copyRoles(el);
  if (el.is('span,label,small,option')) return `<span class="${roles || 'copy-inline'}">${content}</span>`;
  if (el.is('p')) return `<p class="${bodyClass} ${roles}">${content}</p>`;
  if (el.is('ul,ol')) return `<${node.name} class="copy-list">${children()}</${node.name}>`;
  if (el.is('li')) return `<li>${content}</li>`;
  // Containers always retain grouping, even when they contain only short labels.
  return `<div class="copy-stack ${roles}">${content}</div>`;
}

function addDetails(page, key, groups, title, description) {
  const $ = load(page.html);
  $('[data-uxhub-content]').remove();
  const section = sectionTemplate.clone().attr('id', `${key}-details`).attr('data-uxhub-content', key);
  section.find('[class*="__number"]').first().text('UX HUB');
  section.find('h2').first().text(title);
  section.find('[class*="capability-section"][class*="__body"]').first().text(description);
  const list = section.find('ul').empty();
  groups.forEach((group, i) => {
    const item = itemTemplate.clone().attr('style', '--stagger:0');
    const id = `${key}-details-${i}`;
    item.find('button').attr('aria-controls', id).attr('id', `${id}-trigger`);
    item.find('[class*="disclosure-list"][class*="__title"]').text(group.title);
    item.find('[class*="__panel"]').first().attr('id', id).attr('aria-labelledby', `${id}-trigger`);
    item.find('[class*="__panelContent"]').html(`<div class="uxhub-copy">${group.html}</div>`);
    list.append(item);
  });
  $('main').append(section);
  page.html = $('body').html();
}

for (const entry of index.pages) {
  const key = entry.id;
  const source = await read(`scraped_content/json/${key}.json`);
  const $ = load(await fs.readFile(`scraped_content/html/${key}.html`, 'utf8'));
  $('br').replaceWith(' ');
  $('#form-success,#panelStepSuccess,#loginModal').remove();
  if (key === 'registration' && !pages[key]) {
    const shell = load(pages.about.html);
    shell('main > section').remove();
    shell('h1').text('Welcome to Price2Spy');
    shell('main p').first().text(source.metadata.description);
    pages[key] = { html: shell('body').html() };
  }
  const page = pages[key];
  page.title = source.metadata.title;
  page.description = source.metadata.description;
  page.source = source.url;
  const roots = key === 'registration'
    ? $('.p2s-left-col, .p2s-card-top-row, #panelStep1, #panelStep2, #panelStep3')
    : $('main > section');
  const fallback = { home: 'Businesses and industries', insights: 'Topics and upcoming articles', product: 'Know when the market moves.' };
  const groups = roots.map((i, root) => {
    const heading = $(root).find('h1,h2').first();
    const title = normalize(heading.text()) || (key === 'registration' ? `Registration — Step ${Math.max(1, i - 1)}` : fallback[key] || entry.label);
    const clone = $(root).clone();
    if (heading.length) clone.find('h1,h2').first().remove();
    let html = renderCopy($, clone[0], source.url);
    if ($(root).find('form').length) {
      const link = linkTemplate.clone().attr('href', source.url);
      link.find('[class*="__content"] span').first().text(key === 'contact' ? 'Transmit Enquiry — Continue to UX Hub' : 'Continue Registration');
      html += link.prop('outerHTML');
    }
    return { title, html };
  }).get();
  if (key !== 'services') addDetails(page, key, groups, {
    home: 'Build. Launch. Grow.', about: 'Strategy. Execution. Growth.', services: 'Three connected practices', product: 'Pricing intelligence in detail', insights: 'Ideas for building digital growth.', contact: 'Start a Conversation', registration: 'Register and try Price2Spy for free',
  }[key], key === 'contact' ? "Tell us what you're trying to build, launch or grow across India and KSA." : key === 'registration' ? '14-day free trial • No credit card required' : source.metadata.description);
  if (key === 'contact') {
    const contact = load(page.html);
    contact('a[href="/contact"]').filter((_, a) => !contact(a).closest('[data-uxhub-content]').length).attr('href', source.url);
    page.html = contact('body').html();
  }
  report.pages.push({ route: key === 'home' ? '/' : '/' + key, source: source.url, sections: groups.map(({ title }) => title) });
}

// Services are primary page content, not a second copy hidden in an appendix.
{
  const source = load(await fs.readFile('scraped_content/html/services.html', 'utf8'));
  source('br').replaceWith(' ');
  const $ = load(pages.services.html);
  $('main > section').remove();
  const hero = $('main > div').first();
  hero.find('[data-services-intro]').remove();
  hero.find('p').first().text(normalize(source('.page-hero h1').text()));
  hero.find('p').first().after(`<p class="${bodyClass}" data-services-intro>${escape(normalize(source('.page-hero p').text()))}</p>`);
  const eyebrow = normalize(source('.page-hero .f-eyebrow').text());
  hero.find('h1').before(`<p class="${bodyClass}" data-services-intro>${escape(eyebrow)}</p>`);
  const routes = ['product-growth', 'e-commerce-growth', 'digital-experience'];
  source('.service-band').each((i, root) => {
    const practice = source(root);
    const section = sectionTemplate.clone().attr('id', routes[i]).attr('data-service-practice', routes[i]);
    section.find('[class*="__number"]').first().text(normalize(practice.find('.f-eyebrow').text()));
    section.find('h2').first().text(normalize(practice.find('h2').text()));
    section.find('[class*="capability-section"][class*="__body"]').first().text(normalize(practice.find('.service-intro p').text()));
    const cta = linkTemplate.clone().attr('href', '/contact');
    cta.find('[class*="__content"] span').first().text(normalize(practice.find('.service-intro a').text()));
    section.find('[class*="capability-section"][class*="__header"]').append(cta);
    const list = section.find('ul').empty();
    practice.find('.capability-list > span').each((_, capability) => {
      const item = itemTemplate.clone().removeAttr('data-open').attr('style', '--stagger:0');
      const number = normalize(source(capability).find('b').text());
      const copy = source(capability).clone();
      copy.find('b').remove();
      const title = normalize(copy.text());
      item.empty().append(`<a href="/${routes[i]}" class="disclosure-list-module__SPVnsG__trigger services-capability-link"><span class="${headingClass}">${escape(title)}</span><span data-capability-number>${escape(number)}</span></a>`);
      list.append(item);
    });
    const stages = practice.find('.mini-visual span').map((_, node) => normalize(source(node).text())).get().join(' → ');
    section.find('[class*="capability-section"][class*="__header"]').append(`<p class="${bodyClass}">${escape(stages)}</p>`);
    $('main').append(section);
  });
  const ctaSource = source('.final-cta');
  const ctaSection = sectionTemplate.clone().attr('id', 'start-a-conversation');
  ctaSection.find('[class*="__number"]').first().text(normalize(ctaSource.find('.f-eyebrow').text()) || 'START A CONVERSATION');
  ctaSection.find('h2').first().text(normalize(ctaSource.find('h2').text()));
  ctaSection.find('[class*="capability-section"][class*="__body"]').first().text(normalize(ctaSource.find('p').text()));
  ctaSection.find('[class*="__listWrap"]').remove();
  ctaSource.find('a').each((_, node) => {
    const cta = linkTemplate.clone().attr('href', localLink(source(node).attr('href'), 'https://uxhubglobal.com/services.html'));
    cta.find('[class*="__content"] span').first().text(normalize(source(node).text()));
    ctaSection.find('[class*="capability-section"][class*="__header"]').append(cta);
  });
  $('main').append(ctaSection);
  pages.services.html = $('body').html();
}

// Practice pages expose the complete corresponding service lists as well.
const serviceSource = load(await fs.readFile('scraped_content/html/services.html', 'utf8'));
for (const [key, selector] of [['product-growth', '.service-product'], ['e-commerce-growth', '.service-commerce'], ['digital-experience', '.service-experience']]) {
  const root = serviceSource(selector);
  addDetails(pages[key], key, [{ title: normalize(root.find('h2').text()), html: renderCopy(serviceSource, root[0], 'https://uxhubglobal.com/services.html') }], 'Our capabilities', 'From opportunity to scale.');
}
for (const [key, page] of Object.entries(pages)) {
  const $ = load(page.html);
  $('a[href]').each((_, a) => {
    const href = $(a).attr('href');
    // Keep explicit form hand-offs external; all other page navigation stays local.
    if (/^https:\/\/uxhubglobal.com\/.*\.html/.test(href) && !$(a).closest('[data-uxhub-content]').length) {
      if (!(key === 'contact' && href.endsWith('/contact.html'))) {
        $(a).attr('href', localLink(href, 'https://uxhubglobal.com'));
      }
    }
  });
  page.html = $('body').html();
}
// Keep the product catalogue separate from the complete pricing product detail.
pages[priceRoute] = pages.product;
for (const page of Object.values(pages)) {
  const $ = load(page.html);
  $('a[href="/product"]').attr('href', '/' + priceRoute);
  page.html = $('body').html();
}
{
  const $ = load(pages.services.html);
  $('main > section').remove();
  $('[data-services-intro]').remove();
  $('h1').text('Products');
  $('main > div p').first().text('Explore products built for digital business growth.');
  const section = sectionTemplate.clone().attr('id', 'price-intelligence');
  section.find('[class*="__number"]').first().text('01 — OUR PRODUCTS');
  section.find('h2').first().text('Price Intelligence');
  section.find('[class*="capability-section"][class*="__body"]').first().text('Monitor competitor prices across the GCC. Get alerted when prices change. Make faster, data-driven pricing decisions.');
  section.find('[class*="__listWrap"]').remove();
  const link = linkTemplate.clone().attr('href', '/' + priceRoute);
  link.find('[class*="__content"] span').first().text('Explore Price Intelligence');
  section.find('[class*="capability-section"][class*="__header"]').append(link);
  $('main').append(section);
  pages.product = {
    title: 'Products | UX Hub',
    description: 'Explore UX Hub products for digital business growth, including Price Intelligence for GCC e-commerce.',
    html: $('body').html(),
  };
}
const productSource = report.pages.find((page) => page.route === '/product');
if (productSource) productSource.route = '/' + priceRoute;
report.pages.push({ route: '/product', sections: ['Price Intelligence'], notes: 'Product listing linking to the full product detail.' });

// Price Intelligence is a complete product page. Preserve the source page's
// purposeful grids, cards and dashboards instead of compressing it into accordions.
{
  const source = load(await fs.readFile('scraped_content/html/product.html', 'utf8'));
  const main = source('main').first();
  main.addClass('pt-page price-intelligence-page');
  main.find('script, noscript').remove();
  main.find('a[href="registration.html"]').attr('href', '/registration');
  main.find('a[href="contact.html"]').attr('href', '/contact');
  main.find('a[href="product.html"]').attr('href', '/' + priceRoute);
  pages[priceRoute] = {
    ...pages[priceRoute],
    html: main.prop('outerHTML'),
  };
}

// Add a restrained supporting note to the open lower-left area of the home hero.
{
  const $ = load(pages.home.html);
  $('[data-home-hero-note]').remove();
  const hero = $('[class*="hero-module__kIxoYa__root"]').first();
  hero.append(
    '<div class="home-hero-note" data-home-hero-note><span>Digital Business Growth Consultancy</span><p>India ↔ KSA · Strategy, technology and growth connected.</p></div>',
  );
  pages.home.html = $('body').html();
}
const footer = await read('src/content/footer.json');
const footerDom = load(footer.html);
footerDom('[data-uxhub-footer-copy]').remove();
footerDom('p').last().append('<span data-uxhub-footer-copy><br>LinkedIn — Coming Soon<br>BUILD · LAUNCH · GROW · SCALE</span>');
footer.html = footerDom('body').html();
await fs.writeFile('src/content/footer.json', JSON.stringify(footer, null, 2) + '\n');
await fs.writeFile('src/content/pages.json', JSON.stringify(pages, null, 2) + '\n');
await fs.writeFile('src/content/home.json', JSON.stringify(pages.home, null, 2) + '\n');
await fs.writeFile('src/content/uxhub-sources.json', JSON.stringify(report, null, 2) + '\n');
console.log(`Imported ${index.pages.length} scraped pages using the existing layout components.`);
