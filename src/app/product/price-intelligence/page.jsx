import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("product/price-intelligence");

export default function ProductPriceIntelligencePage() {
  return (
    <>
      <StructuredData data={pageSchemas("product/price-intelligence")} />
      <main className="pt-page price-intelligence-page">
        {"\n    "}
        {"\n    "}
        <section className="pt-hero">
          {"\n      "}
          <div className="pt-hero-bg-grid">

          </div>
          {"\n      "}
          <div className="pt-shell pt-hero-grid">
            {"\n        "}
            {"\n        "}
            <div className="pt-hero-content">
              {"\n          "}
              <span className="pt-eyebrow">
                UXHUB PRICING SUPER INTELLIGENCE
              </span>
              {"\n          "}
              <h1 className="pt-hero-headline">
                Are You Losing Sales
                <br />
                Because Your
                <br />
                Competitors Change
                <br />
                {"Prices Before\n            You"}
                <br />
                Know It?
              </h1>
              {"\n\n          "}
              <p className="pt-hero-lead">
                {"Monitor competitor prices across the GCC. Get alerted when prices change. Make faster,\n            data-driven pricing decisions."}
              </p>
              {"\n\n          "}
              <p className="pt-hero-sub">
                {"Track your products against competitors across marketplaces and e-commerce websites.\n            Know who changed their price, what changed, and when it happened — so your team can react faster."}
              </p>
              {"\n\n          "}
              <div className="pt-hero-cta-group">
                {"\n            "}
                <Link href="/registration" className="pt-btn-blue">
                  {"\n              START YOUR FREE 14-DAY TRIAL →\n            "}
                </Link>
                {"\n            "}
                <Link href="/contact" className="pt-btn-white">
                  {"\n              TALK TO A PRICING EXPERT →\n            "}
                </Link>
                {"\n          "}
              </div>
              {"\n\n          "}
              <div className="pt-hero-microcopy">
                {"\n            14-day free trial • No credit card required\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-hero-card-col">
              {"\n          "}
              <div className="pt-hero-card">
                {"\n            "}
                {"\n            "}
                <div className="pt-card-topbar">
                  {"\n              "}
                  <div className="pt-window-dots">
                    {"\n                "}
                    <span>

                    </span>
                    {"\n                "}
                    <span>

                    </span>
                    {"\n                "}
                    <span>

                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <span className="pt-card-topbadge">
                    ILLUSTRATIVE MARKET VIEW
                  </span>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {"\n            "}
                <div className="pt-card-product-row">
                  {"\n              "}
                  <div className="pt-prod-left">
                    {"\n                "}
                    <span className="pt-label-mono">
                      PRODUCT
                    </span>
                    {"\n                "}
                    <div className="pt-prod-title">
                      Premium Travel Luggage 28&quot;
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-prod-right">
                    {"\n                "}
                    <span className="pt-label-mono">
                      YOUR PRICE
                    </span>
                    {"\n                "}
                    <div className="pt-prod-price">
                      SAR 299
                    </div>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {"\n            "}
                <div className="pt-hero-competitor-row">
                  {"\n              "}
                  <div className="pt-comp-card pt-comp-alert">
                    {"\n                "}
                    <div className="pt-comp-name">
                      Competitor A
                    </div>
                    {"\n                "}
                    <div className="pt-comp-price-val red">
                      {"SAR 279 "}
                      <span className="arrow">
                        ↓
                      </span>
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-comp-card">
                    {"\n                "}
                    <div className="pt-comp-name">
                      Competitor B
                    </div>
                    {"\n                "}
                    <div className="pt-comp-price-val green">
                      {"SAR 319 "}
                      <span className="arrow">
                        ↑
                      </span>
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-comp-card">
                    {"\n                "}
                    <div className="pt-comp-name">
                      Competitor C
                    </div>
                    {"\n                "}
                    <div className="pt-comp-price-val red">
                      {"SAR 289 "}
                      <span className="arrow">
                        ↓
                      </span>
                    </div>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {"\n            "}
                <div className="pt-hero-chart-box">
                  {"\n              "}
                  <div className="pt-chart-top">
                    {"\n                "}
                    <span className="pt-chart-title">
                      Competitor price history • 30 days
                    </span>
                    {"\n                "}
                    <div className="pt-chart-legend">
                      {"\n                  "}
                      <span className="legend-item">
                        <span className="line-dot blue">

                        </span>
                        {" — You"}
                      </span>
                      {"\n                  "}
                      <span className="legend-item">
                        <span className="line-dot red">

                        </span>
                        {" — Comp. A"}
                      </span>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-hero-chart-svg">
                    {"\n                "}
                    <svg
                      viewBox="0 0 460 140"
                      width="100%"
                      height="140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {"\n                  "}
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="20"
                        x2="460"
                        y2="20"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="60"
                        x2="460"
                        y2="60"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="100"
                        x2="460"
                        y2="100"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="130"
                        x2="460"
                        y2="130"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n\n                  "}
                      {"\n                  "}
                      <path
                        d="M 0 60 L 60 60 L 100 25 L 140 25 L 180 80 L 220 80 L 260 120 L 300 80 L 360 80 L 460 80"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >

                      </path>
                      {"\n\n                  "}
                      {"\n                  "}
                      <path
                        d="M 0 40 L 40 40 L 90 20 L 150 45 L 200 65 L 240 55 L 280 65 L 340 90 L 400 110 L 460 125"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >

                      </path>
                      {"\n                "}
                    </svg>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {"\n            "}
                <div className="pt-hero-floating-alert">
                  {"\n              "}
                  <div className="pt-alert-bell-icon">
                    {"\n                "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {"\n                  "}
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9">

                      </path>
                      {"\n                  "}
                      <path d="M13.73 21a2 2 0 0 1-3.46 0">

                      </path>
                      {"\n                "}
                    </svg>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-alert-body">
                    {"\n                "}
                    <span className="pt-alert-badge-red">
                      PRICE CHANGE DETECTED
                    </span>
                    {"\n                "}
                    <div className="pt-alert-text">
                      Competitor A reduced the price.
                    </div>
                    {"\n                "}
                    <div className="pt-alert-prices">
                      {"\n                  "}
                      <span className="pt-alert-shift">
                        SAR 299 → SAR 279
                      </span>
                      {"\n                  "}
                      <span className="pt-alert-diff-pill">
                        - SAR 20
                      </span>
                      {"\n                "}
                    </div>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-marketplaces-section">
          {"\n      "}
          <div className="pt-shell text-center">
            {"\n        "}
            <h2 className="pt-marketplaces-heading">
              Your competitors are watching the market. You should be too.
            </h2>
            {"\n\n        "}
            <div className="pt-marketplaces-pills">
              {"\n          "}
              <span className="pt-market-pill">
                Amazon
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                Noon
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                Trendyol
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                Jarir
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                Centrepoint
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                E-commerce Websites
              </span>
              {"\n          "}
              <span className="pt-market-pill">
                Other Marketplaces
              </span>
              {"\n        "}
            </div>
            {"\n\n        "}
            <p className="pt-marketplaces-subtext">
              {"Monitor leading marketplaces and e-commerce websites across the GCC, subject\n          to platform availability and monitoring configuration."}
            </p>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-problem-section">
          {"\n      "}
          <div className="pt-shell pt-problem-grid">
            {"\n        "}
            {"\n        "}
            <div className="pt-problem-copy">
              {"\n          "}
              <span className="pt-eyebrow">
                THE PROBLEM
              </span>
              {"\n          "}
              <h2>
                Your competitors don&apos;t wait
                <br />
                for your weekly pricing
                <br />
                review.
              </h2>
              {"\n          "}
              <p className="pt-problem-p1">
                {"Prices change every day. Competitors launch promotions. Marketplace sellers change\n            prices. Products go in and out of stock."}
              </p>
              {"\n          "}
              <p className="pt-problem-p2">
                {"By the time someone manually discovers the change, the opportunity may already be\n            gone."}
              </p>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-problem-quadrant-card">
              {"\n          "}
              <div className="pt-quadrant-item">
                {"\n            "}
                <div className="pt-quadrant-icon">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                    >

                    </line>
                    {"\n                "}
                    <polyline points="19 12 12 19 5 12">

                    </polyline>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-quadrant-label">
                  PRICE CHANGES
                </div>
                {"\n            "}
                <p className="pt-quadrant-desc">
                  Competitors can change prices without your team noticing.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              <div className="pt-quadrant-item">
                {"\n            "}
                <div className="pt-quadrant-icon">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0">

                    </path>
                    {"\n                "}
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2">

                    </path>
                    {"\n                "}
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8">

                    </path>
                    {"\n                "}
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-quadrant-label">
                  MANUAL MONITORING
                </div>
                {"\n            "}
                <p className="pt-quadrant-desc">
                  Checking hundreds or thousands of products manually doesn&apos;t scale.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              <div className="pt-quadrant-item">
                {"\n            "}
                <div className="pt-quadrant-icon">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <line
                      x1="19"
                      y1="5"
                      x2="5"
                      y2="19"
                    >

                    </line>
                    {"\n                "}
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="2.5"
                    >

                    </circle>
                    {"\n                "}
                    <circle
                      cx="17.5"
                      cy="17.5"
                      r="2.5"
                    >

                    </circle>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-quadrant-label">
                  MARGIN PRESSURE
                </div>
                {"\n            "}
                <p className="pt-quadrant-desc">
                  Without market visibility, you may discount unnecessarily.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              <div className="pt-quadrant-item">
                {"\n            "}
                <div className="pt-quadrant-icon">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    >

                    </circle>
                    {"\n                "}
                    <polyline points="12 6 12 12 16 14">

                    </polyline>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-quadrant-label">
                  REACTIVE DECISIONS
                </div>
                {"\n            "}
                <p className="pt-quadrant-desc">
                  Discover pricing problems only after they start affecting performance.
                </p>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-dark-section" id="engine">
          {"\n      "}
          <div className="pt-shell">
            {"\n        "}
            <div className="pt-dark-header">
              {"\n          "}
              <span className="pt-dark-eyebrow">
                THE UXHUB PRICING SUPER INTELLIGENCE ENGINE
              </span>
              {"\n          "}
              <h2 className="pt-dark-title">
                MAP. MONITOR. REACT.
                <br />
                WIN.
              </h2>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-dark-engine-row">
              {"\n          "}
              <div className="pt-engine-text">
                {"\n            "}
                <div className="pt-engine-step">
                  {"\n              "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {"\n                "}
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">

                    </path>
                    {"\n                "}
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n              "}
                  <span>
                    01 — MAP
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Map your products against competitors.
                </h3>
                {"\n            "}
                <p>
                  Match your products with comparable competitor products and understand exactly where you stand.
                </p>
                {"\n            "}
                <div className="pt-engine-highlight">
                  Know exactly who you&apos;re competing against.
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-engine-card pt-map-card">
                {"\n            "}
                <div className="pt-map-header">
                  {"\n              "}
                  <div className="pt-map-prod-col">
                    {"\n                "}
                    <span className="pt-map-label">
                      YOUR PRODUCT
                    </span>
                    {"\n                "}
                    <div className="pt-map-prod-title">
                      Premium Travel Luggage 28&quot;
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-map-vs-badge">
                    VS
                  </div>
                  {"\n              "}
                  <div className="pt-map-prod-col text-right">
                    {"\n                "}
                    <span className="pt-map-label">
                      COMPETITOR PRODUCT
                    </span>
                    {"\n                "}
                    <div className="pt-map-prod-title">
                      Premium Luggage 28&quot;
                    </div>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-map-table">
                  {"\n              "}
                  <div className="pt-map-row">
                    {"\n                "}
                    <span className="pt-map-key">
                      Brand
                    </span>
                    {"\n                "}
                    <span className="pt-map-val">
                      Voyager
                    </span>
                    {"\n                "}
                    <span className="pt-map-val text-right">
                      Voyager
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-map-row">
                    {"\n                "}
                    <span className="pt-map-key">
                      Model
                    </span>
                    {"\n                "}
                    <span className="pt-map-val">
                      VX-28
                    </span>
                    {"\n                "}
                    <span className="pt-map-val text-right">
                      VX-28
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-map-row">
                    {"\n                "}
                    <span className="pt-map-key">
                      SKU
                    </span>
                    {"\n                "}
                    <span className="pt-map-val">
                      UXL-2801
                    </span>
                    {"\n                "}
                    <span className="pt-map-val text-right">
                      VG-28-BLK
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-map-row">
                    {"\n                "}
                    <span className="pt-map-key">
                      Price
                    </span>
                    {"\n                "}
                    <span className="pt-map-val">
                      SAR 299
                    </span>
                    {"\n                "}
                    <span className="pt-map-val text-right">
                      SAR 289
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-map-row">
                    {"\n                "}
                    <span className="pt-map-key">
                      Availability
                    </span>
                    {"\n                "}
                    <span className="pt-map-val">
                      In stock
                    </span>
                    {"\n                "}
                    <span className="pt-map-val text-right">
                      In stock
                    </span>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-map-status">
                  {"\n              "}
                  <span className="pt-green-dot">

                  </span>
                  {" Match confirmed\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-dark-engine-row">
              {"\n          "}
              <div className="pt-engine-text">
                {"\n            "}
                <div className="pt-engine-step">
                  {"\n              "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {"\n                "}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    >

                    </circle>
                    {"\n                "}
                    <path d="m4.93 4.93 4.24 4.24">

                    </path>
                    {"\n                "}
                    <path d="m14.83 9.17 4.24-4.24">

                    </path>
                    {"\n                "}
                    <path d="m14.83 14.83 4.24 4.24">

                    </path>
                    {"\n                "}
                    <path d="m9.17 14.83-4.24 4.24">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n              "}
                  <span>
                    02 — MONITOR
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Automatically monitor competitor prices.
                </h3>
                {"\n            "}
                <p>
                  Stop manually checking marketplaces and competitor websites.
                </p>
                {"\n            "}
                <div className="pt-engine-highlight">
                  Turn manual price checking into automated monitoring.
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-engine-card pt-monitor-grid">
                {"\n            "}
                <div className="pt-monitor-tile">
                  {"\n              "}
                  <div className="pt-mon-chan">
                    Amazon
                  </div>
                  {"\n              "}
                  <div className="pt-mon-price">
                    SAR 299
                  </div>
                  {"\n              "}
                  <div className="pt-mon-status">
                    <span className="pt-green-dot">

                    </span>
                    {" Monitored"}
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-monitor-tile">
                  {"\n              "}
                  <div className="pt-mon-chan">
                    Noon
                  </div>
                  {"\n              "}
                  <div className="pt-mon-price">
                    SAR 289
                  </div>
                  {"\n              "}
                  <div className="pt-mon-status">
                    <span className="pt-green-dot">

                    </span>
                    {" Monitored"}
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-monitor-tile">
                  {"\n              "}
                  <div className="pt-mon-chan">
                    Competitor Website
                  </div>
                  {"\n              "}
                  <div className="pt-mon-price">
                    SAR 309
                  </div>
                  {"\n              "}
                  <div className="pt-mon-status">
                    <span className="pt-green-dot">

                    </span>
                    {" Monitored"}
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-monitor-tile">
                  {"\n              "}
                  <div className="pt-mon-chan">
                    Marketplace Seller
                  </div>
                  {"\n              "}
                  <div className="pt-mon-price">
                    SAR 279
                  </div>
                  {"\n              "}
                  <div className="pt-mon-status">
                    <span className="pt-green-dot">

                    </span>
                    {" Monitored"}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-dark-engine-row">
              {"\n          "}
              <div className="pt-engine-text">
                {"\n            "}
                <div className="pt-engine-step">
                  {"\n              "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {"\n                "}
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9">

                    </path>
                    {"\n                "}
                    <path d="M13.73 21a2 2 0 0 1-3.46 0">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n              "}
                  <span>
                    03 — REACT
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Get alerted when prices change.
                </h3>
                {"\n            "}
                <p>
                  Know when a competitor changes their price so your team can investigate and respond faster.
                </p>
                {"\n            "}
                <div className="pt-engine-highlight">
                  Know what changed before it becomes a bigger problem.
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-engine-card pt-react-card">
                {"\n            "}
                <div className="pt-react-header">
                  {"\n              "}
                  <span className="pt-red-dot">

                  </span>
                  {" PRICE CHANGE ALERT\n            "}
                </div>
                {"\n            "}
                <div className="pt-react-list">
                  {"\n              "}
                  <div className="pt-react-row">
                    {"\n                "}
                    <span className="pt-react-key">
                      Competitor
                    </span>
                    {"\n                "}
                    <span className="pt-react-val">
                      Brand X
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-react-row">
                    {"\n                "}
                    <span className="pt-react-key">
                      Product
                    </span>
                    {"\n                "}
                    <span className="pt-react-val">
                      Premium Travel Luggage
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-react-row">
                    {"\n                "}
                    <span className="pt-react-key">
                      Previous
                    </span>
                    {"\n                "}
                    <span className="pt-react-val">
                      SAR 299
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-react-row">
                    {"\n                "}
                    <span className="pt-react-key">
                      New
                    </span>
                    {"\n                "}
                    <span className="pt-react-val">
                      SAR 269
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-react-row">
                    {"\n                "}
                    <span className="pt-react-key">
                      Change
                    </span>
                    {"\n                "}
                    <span className="pt-react-val red-text">
                      -10.0%
                    </span>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-dark-engine-row">
              {"\n          "}
              <div className="pt-engine-text">
                {"\n            "}
                <div className="pt-engine-step">
                  {"\n              "}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {"\n                "}
                    <circle
                      cx="12"
                      cy="8"
                      r="7"
                    >

                    </circle>
                    {"\n                "}
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88">

                    </polyline>
                    {"\n              "}
                  </svg>
                  {"\n              "}
                  <span>
                    04 — WIN
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Make faster, data-driven pricing decisions.
                </h3>
                {"\n            "}
                <p>
                  {"Use competitive market visibility to understand pricing movements, protect competitiveness and make\n              better commercial decisions."}
                </p>
                {"\n            "}
                <div className="pt-engine-highlight">
                  Better visibility. Faster decisions.
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-engine-card pt-win-card">
                {"\n            "}
                <div className="pt-win-header">
                  {"\n              "}
                  <span className="pt-win-label">
                    Price position vs market
                  </span>
                  {"\n              "}
                  <span className="pt-win-badge">
                    Illustrative
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-win-value">
                  +4.2%
                </div>
                {"\n            "}
                <div className="pt-win-chart">
                  {"\n              "}
                  <svg
                    viewBox="0 0 420 90"
                    width="100%"
                    height="90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {"\n                "}
                    <path
                      d="M 0 70 L 60 65 L 110 70 L 160 55 L 210 60 L 260 50 L 310 40 L 360 30 L 420 25"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-gcc-section">
          {"\n      "}
          <div className="pt-shell pt-gcc-grid">
            {"\n        "}
            <div className="pt-gcc-copy">
              {"\n          "}
              <span className="pt-eyebrow">
                REGIONAL FOCUS
              </span>
              {"\n          "}
              <h2>
                Built for GCC E-commerce
              </h2>
              {"\n          "}
              <p>
                {"Whether you sell through marketplaces, your own website, or multiple online channels, competitive pricing\n            becomes harder to manage as your product catalog and channel mix grow."}
              </p>
              {"\n          "}
              <div className="pt-gcc-callout">
                {"\n            Monitor competitive pricing across markets, currencies and online channels based on your monitoring\n            requirements.\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-gcc-map-card">
              {"\n          "}
              <div className="pt-gcc-grid-bg">

              </div>
              {"\n          "}
              <svg
                className="pt-gcc-map-svg"
                viewBox="0 0 500 340"
                width="100%"
                height="340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {"\n            "}
                {"\n            "}
                <line
                  x1="220"
                  y1="180"
                  x2="250"
                  y2="70"
                  stroke="#bfdbfe"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >

                </line>
                {"\n            "}
                <line
                  x1="220"
                  y1="180"
                  x2="310"
                  y2="120"
                  stroke="#bfdbfe"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >

                </line>
                {"\n            "}
                <line
                  x1="220"
                  y1="180"
                  x2="330"
                  y2="160"
                  stroke="#bfdbfe"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >

                </line>
                {"\n            "}
                <line
                  x1="220"
                  y1="180"
                  x2="370"
                  y2="190"
                  stroke="#bfdbfe"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >

                </line>
                {"\n            "}
                <line
                  x1="220"
                  y1="180"
                  x2="410"
                  y2="245"
                  stroke="#bfdbfe"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >

                </line>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(250, 70)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-24"
                    y="8"
                    width="48"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="'Manrope', sans-serif"
                  >
                    Kuwait
                  </text>
                  {"\n            "}
                </g>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(310, 120)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-26"
                    y="8"
                    width="52"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="'Manrope', sans-serif"
                  >
                    Bahrain
                  </text>
                  {"\n            "}
                </g>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(330, 160)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-22"
                    y="8"
                    width="44"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="'Manrope', sans-serif"
                  >
                    Qatar
                  </text>
                  {"\n            "}
                </g>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(220, 180)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="10"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#ffffff"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-42"
                    y="14"
                    width="84"
                    height="22"
                    rx="4"
                    fill="#ffffff"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="29"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Manrope', sans-serif"
                  >
                    Saudi Arabia
                  </text>
                  {"\n            "}
                </g>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(370, 190)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-20"
                    y="8"
                    width="40"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="'Manrope', sans-serif"
                  >
                    UAE
                  </text>
                  {"\n            "}
                </g>
                {"\n\n            "}
                {"\n            "}
                <g transform="translate(410, 245)">
                  {"\n              "}
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#2563eb"
                  >

                  </circle>
                  {"\n              "}
                  <rect
                    x="-22"
                    y="8"
                    width="44"
                    height="20"
                    rx="4"
                    fill="#ffffff"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  >

                  </rect>
                  {"\n              "}
                  <text
                    x="0"
                    y="22"
                    textAnchor="middle"
                    fill="#0f172a"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="'Manrope', sans-serif"
                  >
                    Oman
                  </text>
                  {"\n            "}
                </g>
                {"\n          "}
              </svg>
              {"\n          "}
              <div className="pt-gcc-map-tag">
                ABSTRACT VIEW • SAR PRIMARY
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-channels-section">
          {"\n      "}
          <div className="pt-shell text-center">
            {"\n        "}
            <span className="pt-eyebrow">
              CHANNELS
            </span>
            {"\n        "}
            <h2 className="pt-channels-headline">
              See what your competitors are doing
              <br />
              across the channels that matter.
            </h2>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-channels-unified-box">
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  01
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  Marketplaces
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  02
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  E-commerce Websites
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  03
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  Retailers
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  04
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  Distributors
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  05
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  Brands
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-chan-cell">
                {"\n            "}
                <span className="pt-chan-num">
                  06
                </span>
                {"\n            "}
                <div className="pt-chan-title">
                  Sellers
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-channels-pills-row">
              {"\n          "}
              <span className="pt-chan-pill">
                Amazon
              </span>
              {"\n          "}
              <span className="pt-chan-pill">
                Noon
              </span>
              {"\n          "}
              <span className="pt-chan-pill">
                Trendyol
              </span>
              {"\n          "}
              <span className="pt-chan-pill">
                Jarir
              </span>
              {"\n          "}
              <span className="pt-chan-pill">
                Centrepoint
              </span>
              {"\n        "}
            </div>
            {"\n\n        "}
            <p className="pt-channels-disclaimer">
              {"Marketplace monitoring availability depends on the specific marketplace,\n          website structure and monitoring configuration."}
            </p>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-dashboard-section" id="analytics">
          {"\n      "}
          <div className="pt-shell-wide">
            {"\n        "}
            <div className="pt-dashboard-header-text">
              {"\n          "}
              <span className="pt-eyebrow">
                ANALYTICS
              </span>
              {"\n          "}
              <h2 className="pt-dashboard-main-title">
                See the market. Not just your own store.
              </h2>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-dash-card">
              {"\n          "}
              {"\n          "}
              <div className="pt-dash-topbar">
                {"\n            "}
                <div className="pt-dash-top-left">
                  {"\n              Market overview • Premium Travel Luggage 28\"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-top-badge">
                  {"\n              ILLUSTRATIVE EXAMPLE\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-dash-metrics-row">
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Your Average Price
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    SAR 299
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Market Average
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    SAR 287
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Lowest Competitor
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    SAR 269
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Highest Competitor
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    SAR 329
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Price Position
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val green-text">
                    +4.2%
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Price Changes
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    18
                  </div>
                  {"\n            "}
                </div>
                {"\n            "}
                <div className="pt-dash-metric">
                  {"\n              "}
                  <div className="pt-metric-label">
                    Competitors Monitored
                  </div>
                  {"\n              "}
                  <div className="pt-metric-val">
                    24
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-dash-middle-split">
                {"\n            "}
                {"\n            "}
                <div className="pt-dash-chart-panel">
                  {"\n              "}
                  <div className="pt-panel-title">
                    Historical pricing • 90 days
                  </div>
                  {"\n              "}
                  <div className="pt-dash-chart-svg">
                    {"\n                "}
                    <svg
                      viewBox="0 0 620 200"
                      width="100%"
                      height="200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {"\n                  "}
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="30"
                        x2="620"
                        y2="30"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="75"
                        x2="620"
                        y2="75"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="120"
                        x2="620"
                        y2="120"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n                  "}
                      <line
                        x1="0"
                        y1="165"
                        x2="620"
                        y2="165"
                        stroke="#f1f5f9"
                        strokeWidth="1"
                      >

                      </line>
                      {"\n\n                  "}
                      {"\n                  "}
                      <path
                        d="M 20 120 L 70 120 L 120 40 L 170 40 L 220 120 L 270 120 L 320 160 L 370 120 L 420 120 L 600 120"
                        stroke="#2563eb"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >

                      </path>
                      {"\n\n                  "}
                      {"\n                  "}
                      <path
                        d="M 20 90 L 70 75 L 120 40 L 170 80 L 220 110 L 270 135 L 320 130 L 370 150 L 420 135 L 470 165 L 530 175 L 600 175"
                        stroke="#64748b"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >

                      </path>
                      {"\n\n                  "}
                      {"\n                  "}
                      <path
                        d="M 20 65 L 70 65 L 120 40 L 170 70 L 220 95 L 270 100 L 320 120 L 370 140 L 420 130 L 470 160 L 530 175 L 600 175"
                        stroke="#ef4444"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >

                      </path>
                      {"\n                "}
                    </svg>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-dash-chart-legend">
                    {"\n                "}
                    <span className="item">
                      <span className="color-dash blue">

                      </span>
                      {" Your price"}
                    </span>
                    {"\n                "}
                    <span className="item">
                      <span className="color-dash gray">

                      </span>
                      {" Market avg"}
                    </span>
                    {"\n                "}
                    <span className="item">
                      <span className="color-dash red">

                      </span>
                      {" Lowest"}
                    </span>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n\n            "}
                {"\n            "}
                <div className="pt-dash-alerts-panel">
                  {"\n              "}
                  <div className="pt-panel-title">
                    Recent alerts
                  </div>
                  {"\n              "}
                  <div className="pt-alert-pill-item">
                    {"\n                "}
                    <div className="pt-alert-pill-left">
                      {"\n                  "}
                      <div className="pt-alert-prod">
                        Brand X
                      </div>
                      {"\n                  "}
                      <div className="pt-alert-sub">
                        SAR 299 → 269
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="pt-alert-tag red-tag">
                      ↓ 2h ago
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-alert-pill-item">
                    {"\n                "}
                    <div className="pt-alert-pill-left">
                      {"\n                  "}
                      <div className="pt-alert-prod">
                        Competitor A
                      </div>
                      {"\n                  "}
                      <div className="pt-alert-sub">
                        SAR 299 → 279
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="pt-alert-tag red-tag">
                      ↓ 5h ago
                    </div>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div className="pt-alert-pill-item">
                    {"\n                "}
                    <div className="pt-alert-pill-left">
                      {"\n                  "}
                      <div className="pt-alert-prod">
                        Competitor B
                      </div>
                      {"\n                  "}
                      <div className="pt-alert-sub">
                        SAR 309 → 319
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <div className="pt-alert-tag green-tag">
                      ↑ 1d ago
                    </div>
                    {"\n              "}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-dash-table-wrap">
                {"\n            "}
                <table className="pt-dash-table">
                  
                  <thead>
                    
                    <tr>
                      
                      <th>
                        RANK
                      </th>
                      
                      <th>
                        COMPETITOR
                      </th>
                      
                      <th>
                        CHANNEL
                      </th>
                      
                      <th>
                        PRICE
                      </th>
                      
                      <th className="text-right">
                        30D CHANGE
                      </th>
                      
                    </tr>
                    
                  </thead>
                  
                  <tbody>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #1
                      </td>
                      
                      <td className="pt-comp-cell">
                        Brand X
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Noon
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 269
                      </td>
                      
                      <td className="text-right red-text">
                        - 10.0%
                      </td>
                      
                    </tr>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #2
                      </td>
                      
                      <td className="pt-comp-cell">
                        Competitor A
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Amazon
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 279
                      </td>
                      
                      <td className="text-right red-text">
                        - 6.7%
                      </td>
                      
                    </tr>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #3
                      </td>
                      
                      <td className="pt-comp-cell">
                        Competitor C
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Website
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 289
                      </td>
                      
                      <td className="text-right red-text">
                        - 3.3%
                      </td>
                      
                    </tr>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #4
                      </td>
                      
                      <td className="pt-comp-cell">
                        Marketplace Seller
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Amazon
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 299
                      </td>
                      
                      <td className="text-right gray-text">
                        0.0%
                      </td>
                      
                    </tr>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #5
                      </td>
                      
                      <td className="pt-comp-cell">
                        Competitor B
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Noon
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 319
                      </td>
                      
                      <td className="text-right green-text">
                        +3.2%
                      </td>
                      
                    </tr>
                    
                    <tr>
                      
                      <td className="pt-rank">
                        #6
                      </td>
                      
                      <td className="pt-comp-cell">
                        Premium Store
                      </td>
                      
                      <td className="pt-chan-cell-txt">
                        Website
                      </td>
                      
                      <td className="pt-price-cell">
                        SAR 329
                      </td>
                      
                      <td className="text-right green-text">
                        +1.9%
                      </td>
                      
                    </tr>
                    
                  </tbody>
                  
                </table>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-features-section" id="features">
          {"\n      "}
          <div className="pt-shell">
            {"\n        "}
            <div className="pt-features-header">
              {"\n          "}
              <span className="pt-eyebrow">
                FEATURES
              </span>
              {"\n          "}
              <h2 className="pt-features-title">
                More than price tracking.
              </h2>
              {"\n        "}
            </div>
            {"\n\n        "}
            <div className="pt-features-3x3-card">
              {"\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    >

                    </circle>
                    {"\n                "}
                    <path d="m4.93 4.93 4.24 4.24">

                    </path>
                    {"\n                "}
                    <path d="m14.83 9.17 4.24-4.24">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Competitor Price Monitoring
                </h4>
                {"\n            "}
                <p>
                  Track competitor pricing across relevant websites and marketplaces.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9">

                    </path>
                    {"\n                "}
                    <path d="M13.73 21a2 2 0 0 1-3.46 0">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Price Change Alerts
                </h4>
                {"\n            "}
                <p>
                  Know when competitors increase or decrease their prices.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    >

                    </circle>
                    {"\n                "}
                    <polyline points="12 6 12 12 14 14">

                    </polyline>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Historical Price Data
                </h4>
                {"\n            "}
                <p>
                  Understand how competitor prices move over time.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">

                    </path>
                    {"\n                "}
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Product Matching
                </h4>
                {"\n            "}
                <p>
                  Map your products against comparable competitor products.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1">

                    </path>
                    {"\n                "}
                    <path d="M18 8h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Price Comparison
                </h4>
                {"\n            "}
                <p>
                  Understand where your pricing sits against the market.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">

                    </path>
                    {"\n                "}
                    <polyline points="9 22 9 12 15 12 15 22">

                    </polyline>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Marketplace Monitoring
                </h4>
                {"\n            "}
                <p>
                  Monitor relevant online marketplace listings.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Stock Availability
                </h4>
                {"\n            "}
                <p>
                  Identify relevant changes in competitor availability where supported.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  MAP Monitoring
                </h4>
                {"\n            "}
                <p>
                  Monitor pricing against minimum advertised price requirements where applicable.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-feat-cell">
                {"\n            "}
                <div className="pt-feat-icon-box">
                  {"\n              "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <line
                      x1="18"
                      y1="20"
                      x2="18"
                      y2="10"
                    >

                    </line>
                    {"\n                "}
                    <line
                      x1="12"
                      y1="20"
                      x2="12"
                      y2="4"
                    >

                    </line>
                    {"\n                "}
                    <line
                      x1="6"
                      y1="20"
                      x2="6"
                      y2="14"
                    >

                    </line>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h4>
                  Pricing Analytics
                </h4>
                {"\n            "}
                <p>
                  Turn market data into actionable pricing intelligence.
                </p>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-usecases-section" id="use-cases">
          {"\n      "}
          <div className="pt-shell">
            {"\n        "}
            <div className="pt-usecases-header">
              {"\n          "}
              <span className="pt-eyebrow">
                USE CASES
              </span>
              {"\n          "}
              <h2 className="pt-usecases-title">
                Built for teams that compete on price.
              </h2>
              {"\n        "}
            </div>
            {"\n\n        "}
            <div className="pt-usecases-grid">
              {"\n          "}
              {"\n          "}
              <div className="pt-uc-card">
                {"\n            "}
                <div className="pt-uc-icon">
                  {"\n              "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z">

                    </path>
                    {"\n                "}
                    <line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                    >

                    </line>
                    {"\n                "}
                    <path d="M16 10a4 4 0 0 1-8 0">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  E-commerce Brands
                </h3>
                {"\n            "}
                <p>
                  Monitor competitor prices and protect your market position.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-uc-card">
                {"\n            "}
                <div className="pt-uc-icon">
                  {"\n              "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">

                    </path>
                    {"\n                "}
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                    >

                    </circle>
                    {"\n                "}
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87">

                    </path>
                    {"\n                "}
                    <path d="M16 3.13a4 4 0 0 1 0 7.75">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Marketplace Sellers
                </h3>
                {"\n            "}
                <p>
                  Understand pricing movements across competing sellers.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-uc-card">
                {"\n            "}
                <div className="pt-uc-icon">
                  {"\n              "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <rect
                      x="1"
                      y="3"
                      width="15"
                      height="13"
                    >

                    </rect>
                    {"\n                "}
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8">

                    </polygon>
                    {"\n                "}
                    <circle
                      cx="5.5"
                      cy="18.5"
                      r="2.5"
                    >

                    </circle>
                    {"\n                "}
                    <circle
                      cx="18.5"
                      cy="18.5"
                      r="2.5"
                    >

                    </circle>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Retailers &amp; Distributors
                </h3>
                {"\n            "}
                <p>
                  Track competitor and reseller pricing across online channels.
                </p>
                {"\n          "}
              </div>
              {"\n\n          "}
              {"\n          "}
              <div className="pt-uc-card">
                {"\n            "}
                <div className="pt-uc-icon">
                  {"\n              "}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {"\n                "}
                    <path d="M2 20h20">

                    </path>
                    {"\n                "}
                    <path d="M5 20V8l5 4V4l5 4v12">

                    </path>
                    {"\n              "}
                  </svg>
                  {"\n            "}
                </div>
                {"\n            "}
                <h3>
                  Manufacturers
                </h3>
                {"\n            "}
                <p>
                  Monitor market pricing and identify potential pricing violations.
                </p>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-pitch-section">
          {"\n      "}
          <div className="pt-shell">
            {"\n        "}
            <div className="pt-pitch-header">
              {"\n          "}
              <h2>
                Stop discovering pricing problems after
                <br />
                your sales drop.
              </h2>
              {"\n          "}
              <p>
                {"Your pricing team shouldn't have to discover competitive changes through declining sales, customer\n            complaints or manual marketplace checks."}
              </p>
              {"\n        "}
            </div>
            {"\n\n        "}
            {"\n        "}
            <div className="pt-pitch-cols-row">
              {"\n          "}
              <div className="pt-pitch-col">
                {"\n            "}
                <span className="pt-pitch-num">
                  01
                </span>
                {"\n            "}
                <div className="pt-pitch-step-title">
                  KNOW EARLIER
                </div>
                {"\n            "}
                <p className="pt-pitch-desc">
                  Know when competitors change prices.
                </p>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-pitch-col">
                {"\n            "}
                <span className="pt-pitch-num">
                  02
                </span>
                {"\n            "}
                <div className="pt-pitch-step-title">
                  UNDERSTAND FASTER
                </div>
                {"\n            "}
                <p className="pt-pitch-desc">
                  See how the market is moving.
                </p>
                {"\n          "}
              </div>
              {"\n          "}
              <div className="pt-pitch-col">
                {"\n            "}
                <span className="pt-pitch-num">
                  03
                </span>
                {"\n            "}
                <div className="pt-pitch-step-title">
                  REACT SMARTER
                </div>
                {"\n            "}
                <p className="pt-pitch-desc">
                  Make faster, data-driven pricing decisions.
                </p>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n\n    "}
        {"\n    "}
        <section className="pt-giant-banner">
          {"\n      "}
          <div className="pt-giant-text">
            {"\n        KNOW WHEN THE "}
            <span className="highlight">
              MARKET
            </span>
            {" MOVES.\n      "}
          </div>
          {"\n    "}
        </section>
        {"\n  "}
      </main>
      <PageMotion />
    </>
  );
}
