import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("services");

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={pageSchemas("services")} />
      <main className="page-shell-module__L3Btcq__root">
        <div className="container-module__fR7GYG__root container-module__fR7GYG__full">
          <div className="page-title-module__wYBNpq__inner ruled">
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50" data-services-intro="">
              THREE CONNECTED PRACTICES
            </p>
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium page-title-module__wYBNpq__title">
              <span className="sheen-text-module__IBglNG__root">
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    Services
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    Services
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
              </span>
            </h1>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 page-title-module__wYBNpq__body">
              Strategy, technology and growth—connected.
            </p>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50" data-services-intro="">
              We build the capabilities digital businesses need to move from opportunity to scale.
            </p>
          </div>
        </div>
        <section
          id="product-growth"
          className="section-shell-module__wD-FXq__root"
          data-service-practice="product-growth"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full service-practice-section">
            <div className="capability-section-module__eDmFjG__root service-practice-columns" data-scroll-split="">
              <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header" data-scroll-sticky="">
                <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                  PRACTICE 01 — PRODUCT GROWTH
                </p>
                <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                  From 0→1 to scalable growth.
                </h2>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                  Find the opportunity, define the right product and build the roadmap to market and scale.
                </p>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50">
                  CONCEPT → MARKET → SCALE
                </p>
              </div>
              <div className="capability-section-module__eDmFjG__listWrap">
                <ul className="group-module__k4-mDG__group disclosure-list-module__SPVnsG__root capability-section-module__eDmFjG__list">
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        0→1 Product Strategy
                      </span>
                      <span data-capability-number="">
                        01
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Product Discovery
                      </span>
                      <span data-capability-number="">
                        02
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Product-Market Fit
                      </span>
                      <span data-capability-number="">
                        03
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Product Strategy
                      </span>
                      <span data-capability-number="">
                        04
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Growth Strategy
                      </span>
                      <span data-capability-number="">
                        05
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Go-to-Market Strategy
                      </span>
                      <span data-capability-number="">
                        06
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Product Analytics
                      </span>
                      <span data-capability-number="">
                        07
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Customer Journey
                      </span>
                      <span data-capability-number="">
                        08
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Conversion Optimization
                      </span>
                      <span data-capability-number="">
                        09
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Growth Roadmaps
                      </span>
                      <span data-capability-number="">
                        10
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/product-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Product Scaling
                      </span>
                      <span data-capability-number="">
                        11
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link service-practice-action" href="/contact">
              <span className="wipe-button-module__-tlSna__content">
                <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                  Start a Product Project
                </span>
                <svg
                  width="10"
                  height="21"
                  viewBox="0 0 10.0051 20.6718"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    opacity="0.9"
                    d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                    fill="currentColor"
                  >

                  </path>
                </svg>
              </span>
              <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

              </span>
            </Link>
          </div>
        </section>
        <section
          id="e-commerce-growth"
          className="section-shell-module__wD-FXq__root"
          data-service-practice="e-commerce-growth"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full service-practice-section">
            <div className="capability-section-module__eDmFjG__root service-practice-columns" data-scroll-split="">
              <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header" data-scroll-sticky="">
                <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                  PRACTICE 02 — E-COMMERCE GROWTH
                </p>
                <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                  Turn e-commerce into a growth engine.
                </h2>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                  Build stronger acquisition, conversion, retention and commercial performance across channels.
                </p>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50">
                  TRAFFIC → CONVERSION → RETENTION
                </p>
              </div>
              <div className="capability-section-module__eDmFjG__listWrap">
                <ul className="group-module__k4-mDG__group disclosure-list-module__SPVnsG__root capability-section-module__eDmFjG__list">
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        E-commerce Strategy
                      </span>
                      <span data-capability-number="">
                        01
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Marketplace Growth
                      </span>
                      <span data-capability-number="">
                        02
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Performance Marketing
                      </span>
                      <span data-capability-number="">
                        03
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Conversion Rate Optimization
                      </span>
                      <span data-capability-number="">
                        04
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Competitor Analysis
                      </span>
                      <span data-capability-number="">
                        05
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Attribution
                      </span>
                      <span data-capability-number="">
                        06
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Data Analytics
                      </span>
                      <span data-capability-number="">
                        07
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        CRM &amp; Retention
                      </span>
                      <span data-capability-number="">
                        08
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Customer Acquisition
                      </span>
                      <span data-capability-number="">
                        09
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Marketplace Strategy
                      </span>
                      <span data-capability-number="">
                        10
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        E-commerce Analytics
                      </span>
                      <span data-capability-number="">
                        11
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        E-commerce P&amp;L
                      </span>
                      <span data-capability-number="">
                        12
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/e-commerce-growth" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Growth Planning
                      </span>
                      <span data-capability-number="">
                        13
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link service-practice-action" href="/contact">
              <span className="wipe-button-module__-tlSna__content">
                <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                  Scale Your E-commerce
                </span>
                <svg
                  width="10"
                  height="21"
                  viewBox="0 0 10.0051 20.6718"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    opacity="0.9"
                    d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                    fill="currentColor"
                  >

                  </path>
                </svg>
              </span>
              <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

              </span>
            </Link>
          </div>
        </section>
        <section
          id="digital-experience"
          className="section-shell-module__wD-FXq__root"
          data-service-practice="digital-experience"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full service-practice-section">
            <div className="capability-section-module__eDmFjG__root service-practice-columns" data-scroll-split="">
              <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header" data-scroll-sticky="">
                <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                  PRACTICE 03 — DIGITAL EXPERIENCE
                </p>
                <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                  Digital experiences built for growth.
                </h2>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                  Create websites, commerce platforms and digital products that move customers and businesses forward.
                </p>
                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50">
                  BRAND → EXPERIENCE → GROWTH
                </p>
              </div>
              <div className="capability-section-module__eDmFjG__listWrap">
                <ul className="group-module__k4-mDG__group disclosure-list-module__SPVnsG__root capability-section-module__eDmFjG__list">
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Premium Website Development
                      </span>
                      <span data-capability-number="">
                        01
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        E-commerce Development
                      </span>
                      <span data-capability-number="">
                        02
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Shopify Development
                      </span>
                      <span data-capability-number="">
                        03
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Custom E-commerce
                      </span>
                      <span data-capability-number="">
                        04
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        UX/UI Design
                      </span>
                      <span data-capability-number="">
                        05
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Conversion-focused Design
                      </span>
                      <span data-capability-number="">
                        06
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Digital Product Development
                      </span>
                      <span data-capability-number="">
                        07
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Platform Development
                      </span>
                      <span data-capability-number="">
                        08
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        CRM Integrations
                      </span>
                      <span data-capability-number="">
                        09
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        ERP Integrations
                      </span>
                      <span data-capability-number="">
                        10
                      </span>
                    </Link>
                  </li>
                  <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item" style={{"--stagger":"0"}}>
                    <Link href="/digital-experience" className="disclosure-list-module__SPVnsG__trigger services-capability-link">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                        Analytics &amp; Tracking
                      </span>
                      <span data-capability-number="">
                        11
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link service-practice-action" href="/contact">
              <span className="wipe-button-module__-tlSna__content">
                <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                  Build Digital Experience
                </span>
                <svg
                  width="10"
                  height="21"
                  viewBox="0 0 10.0051 20.6718"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    opacity="0.9"
                    d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                    fill="currentColor"
                  >

                  </path>
                </svg>
              </span>
              <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

              </span>
            </Link>
          </div>
        </section>
        <section id="start-a-conversation" className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capability-section-module__eDmFjG__root">
            <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header" data-scroll-sticky="">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                START A CONVERSATION
              </p>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                Ready to build what&apos;s next?
              </h2>
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                Tell us what you&apos;re trying to build, launch or grow.
              </p>
              <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link" href="/contact">
                <span className="wipe-button-module__-tlSna__content">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                    Start a Conversation
                  </span>
                  <svg
                    width="10"
                    height="21"
                    viewBox="0 0 10.0051 20.6718"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      opacity="0.9"
                      d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                      fill="currentColor"
                    >

                    </path>
                  </svg>
                </span>
                <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

                </span>
              </Link>
              <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link" href="/services">
                <span className="wipe-button-module__-tlSna__content">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                    Explore Our Services
                  </span>
                  <svg
                    width="10"
                    height="21"
                    viewBox="0 0 10.0051 20.6718"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      opacity="0.9"
                      d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                      fill="currentColor"
                    >

                    </path>
                  </svg>
                </span>
                <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <PageMotion />
    </>
  );
}
