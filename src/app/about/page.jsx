import Effects from "@/components/Effects";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("about");

export default function AboutPage() {
  return (
    <>
      <StructuredData data={pageSchemas("about")} />
      <main className="page-shell-module__L3Btcq__root">
        <div className="container-module__fR7GYG__root container-module__fR7GYG__full">
          <div className="page-title-module__wYBNpq__inner ruled">
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium page-title-module__wYBNpq__title">
              <span className="sheen-text-module__IBglNG__root">
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    About
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    About
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
                {" "}
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    UX
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    UX
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
                {" "}
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    Hub
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    Hub
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
              </span>
            </h1>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 page-title-module__wYBNpq__body">
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"2"}}>
                We build businesses for the digital economy.
              </span>
            </p>
          </div>
        </div>
        <section className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner timeline-module__KMKj8q__root">
            <div className="group-module__k4-mDG__group">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                    Our Approach
                  </span>
                </div>
              </div>
            </div>
            <div className="group-module__k4-mDG__group">
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium timeline-module__KMKj8q__title">
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                  Strategy.
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                  Execution.
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                  Growth.
                </span>
              </h2>
            </div>
            <ol className="timeline-module__KMKj8q__rows">
              <li className="group-module__k4-mDG__group timeline-module__KMKj8q__cell">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up timeline-module__KMKj8q__row" style={{"--stagger":"0"}}>
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium timeline-module__KMKj8q__number">
                    01
                  </span>
                  <div className="timeline-module__KMKj8q__content">
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                      Strategy + Execution
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 timeline-module__KMKj8q__body">
                      We combine strategic thinking with hands-on execution.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group-module__k4-mDG__group timeline-module__KMKj8q__cell">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up timeline-module__KMKj8q__row" style={{"--stagger":"1"}}>
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium timeline-module__KMKj8q__number">
                    02
                  </span>
                  <div className="timeline-module__KMKj8q__content">
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                      Digital-First
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 timeline-module__KMKj8q__body">
                      We build and grow digital businesses, not simply deliver digital services.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group-module__k4-mDG__group timeline-module__KMKj8q__cell">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up timeline-module__KMKj8q__row" style={{"--stagger":"2"}}>
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium timeline-module__KMKj8q__number">
                    03
                  </span>
                  <div className="timeline-module__KMKj8q__content">
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                      0→1 Expertise
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 timeline-module__KMKj8q__body">
                      We turn new ideas and opportunities into real products and businesses.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="section-shell-module__wD-FXq__root" data-theme="dark">
          <div className="section-shell-module__wD-FXq__backdrop" aria-hidden="true">
            <Effects kind="swirl" className="metallic-swirl-module__rq4KqG__canvas t-shaped-module__zuOJwG__swirl" />
          </div>
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full t-shaped-module__zuOJwG__root">
            <div className="group-module__k4-mDG__group t-shaped-module__zuOJwG__info">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                    Connected Practices
                  </span>
                </div>
              </div>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium text-module__DYGPWq__color-white t-shaped-module__zuOJwG__statement">
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                  Product,
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                  e-commerce,
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                  technology
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"3"}}>
                  and
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"4"}}>
                  growth—connected.
                </span>
              </h2>
            </div>
            <ul className="group-module__k4-mDG__group t-shaped-module__zuOJwG__grid">
              <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up t-shaped-module__zuOJwG__cell" style={{"--stagger":"0"}}>
                <div className="detail-card-module__oRuUjG__root ruled">
                  <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                    Product Growth
                  </h3>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                    Find the opportunity, define the right product and build the roadmap to market and scale.
                  </p>
                </div>
              </li>
              <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up t-shaped-module__zuOJwG__cell" style={{"--stagger":"1"}}>
                <div className="detail-card-module__oRuUjG__root ruled">
                  <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                    E-commerce Growth
                  </h3>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                    Build stronger acquisition, conversion, retention and commercial performance across channels.
                  </p>
                </div>
              </li>
              <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up t-shaped-module__zuOJwG__cell" style={{"--stagger":"2"}}>
                <div className="detail-card-module__oRuUjG__root ruled">
                  <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                    Digital Experience
                  </h3>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                    Create websites, commerce platforms and digital products that move customers and businesses forward.
                  </p>
                </div>
              </li>
              <li className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up t-shaped-module__zuOJwG__cell" style={{"--stagger":"3"}}>
                <div className="detail-card-module__oRuUjG__root ruled">
                  <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                    Growth Mindset
                  </h3>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                    Every product, platform and experience is built around measurable growth.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner company-overview-module__5XgxSW__root">
            <div className="group-module__k4-mDG__group">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                    Our Markets
                  </span>
                </div>
              </div>
            </div>
            <div className="group-module__k4-mDG__group">
              <div className="section-intro-module__A3g2Mq__root section-intro-module__A3g2Mq__center">
                <div className="section-intro-module__A3g2Mq__text">
                  <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium section-intro-module__A3g2Mq__title">
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                      India
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                      +
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                      KSA
                    </span>
                  </h2>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 section-intro-module__A3g2Mq__body">
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"4"}}>
                      UX Hub is a Digital Business Growth Consultancy working with companies across India and KSA.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="group-module__k4-mDG__group">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"0"}}>
                <Link className="action-row-module__cLECvq__root action-row-module__cLECvq__bottom action-row-module__cLECvq__padded action-row-module__cLECvq__fill" href="/contact">
                  <span className="action-row-module__cLECvq__text">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large">
                      Start a Conversation
                    </span>
                  </span>
                  <span className="action-row-module__cLECvq__arrow">
                    <svg
                      width="10"
                      height="21"
                      viewBox="0 0 10.0051 20.6718"
                      fill="none"
                      aria-hidden="true"
                      style={{"transform":"rotate(45deg)","overflow":"visible"}}
                    >
                      <path
                        opacity="0.9"
                        d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                        fill="currentColor"
                      >

                      </path>
                    </svg>
                  </span>
                  <span className="action-row-module__cLECvq__sweep">

                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about-details"
          className="section-shell-module__wD-FXq__root"
          data-uxhub-content="about"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capability-section-module__eDmFjG__root">
            <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                UX HUB
              </p>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                Strategy. Execution. Growth.
              </h2>
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                Learn about UX Hub, a Digital Business Growth Consultancy working across India and KSA at the intersection of product, e-commerce, technology and enterprise software.
              </p>
            </div>
            <div className="capability-section-module__eDmFjG__listWrap">
              <ul className="group-module__k4-mDG__group disclosure-list-module__SPVnsG__root capability-section-module__eDmFjG__list">
                <li
                  className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item"
                  style={{"--stagger":"0"}}
                  data-open="false"
                >
                  <button
                    type="button"
                    className="disclosure-list-module__SPVnsG__trigger"
                    aria-expanded="false"
                    aria-controls="about-details-0"
                    id="about-details-0-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      We build businesses for the digital economy.
                    </span>
                    <span className="disclosure-list-module__SPVnsG__arrow">
                      <svg
                        width="11.428571428571427"
                        height="24"
                        viewBox="0 0 10.0051 20.6718"
                        fill="none"
                        aria-hidden="true"
                        style={{"transform":"rotate(45deg)","overflow":"visible"}}
                      >
                        <path
                          opacity="0.9"
                          d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                          fill="currentColor"
                        >

                        </path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="about-details-0"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="about-details-0-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack copy-eyebrow">
                                ABOUT UX HUB
                              </div>
                              {" "}
                              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                UX Hub is a Digital Business Growth Consultancy working with companies across India and KSA.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item"
                  style={{"--stagger":"0"}}
                  data-open="false"
                >
                  <button
                    type="button"
                    className="disclosure-list-module__SPVnsG__trigger"
                    aria-expanded="false"
                    aria-controls="about-details-1"
                    id="about-details-1-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      About UX Hub
                    </span>
                    <span className="disclosure-list-module__SPVnsG__arrow">
                      <svg
                        width="11.428571428571427"
                        height="24"
                        viewBox="0 0 10.0051 20.6718"
                        fill="none"
                        aria-hidden="true"
                        style={{"transform":"rotate(45deg)","overflow":"visible"}}
                      >
                        <path
                          opacity="0.9"
                          d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                          fill="currentColor"
                        >

                        </path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="about-details-1"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="about-details-1-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                We operate at the intersection of product, e-commerce, technology and growth—helping businesses identify opportunities, build digital experiences, launch new products and create scalable growth engines.
                              </p>
                              {" "}
                              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                Our approach combines strategy with execution. We don&apos;t just recommend what should happen. We help make it happen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item"
                  style={{"--stagger":"0"}}
                  data-open="false"
                >
                  <button
                    type="button"
                    className="disclosure-list-module__SPVnsG__trigger"
                    aria-expanded="false"
                    aria-controls="about-details-2"
                    id="about-details-2-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Two markets. One growth mindset.
                    </span>
                    <span className="disclosure-list-module__SPVnsG__arrow">
                      <svg
                        width="11.428571428571427"
                        height="24"
                        viewBox="0 0 10.0051 20.6718"
                        fill="none"
                        aria-hidden="true"
                        style={{"transform":"rotate(45deg)","overflow":"visible"}}
                      >
                        <path
                          opacity="0.9"
                          d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                          fill="currentColor"
                        >

                        </path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="about-details-2"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="about-details-2-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  INDIA + KSA
                                </div>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  INDIA
                                </span>
                                {" "}
                                <span className="copy-inline">
                                  KSA
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item"
                  style={{"--stagger":"0"}}
                  data-open="false"
                >
                  <button
                    type="button"
                    className="disclosure-list-module__SPVnsG__trigger"
                    aria-expanded="false"
                    aria-controls="about-details-3"
                    id="about-details-3-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      About UX Hub
                    </span>
                    <span className="disclosure-list-module__SPVnsG__arrow">
                      <svg
                        width="11.428571428571427"
                        height="24"
                        viewBox="0 0 10.0051 20.6718"
                        fill="none"
                        aria-hidden="true"
                        style={{"transform":"rotate(45deg)","overflow":"visible"}}
                      >
                        <path
                          opacity="0.9"
                          d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                          fill="currentColor"
                        >

                        </path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="about-details-3"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="about-details-3-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack copy-grid">
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  01
                                </span>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  Strategy + Execution
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We combine strategic thinking with hands-on execution.
                                </p>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  02
                                </span>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  Digital-First
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We build and grow digital businesses, not simply deliver digital services.
                                </p>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  03
                                </span>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  0→1 Expertise
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We turn new ideas and opportunities into real products and businesses.
                                </p>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  04
                                </span>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  Growth Mindset
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  Every product, platform and experience is built around measurable growth.
                                </p>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <span className="copy-inline">
                                  05
                                </span>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  India + KSA
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  Regional understanding, connected by digital growth expertise.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up disclosure-list-module__SPVnsG__item"
                  style={{"--stagger":"0"}}
                  data-open="false"
                >
                  <button
                    type="button"
                    className="disclosure-list-module__SPVnsG__trigger"
                    aria-expanded="false"
                    aria-controls="about-details-4"
                    id="about-details-4-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Ready to build what&apos;s next?
                    </span>
                    <span className="disclosure-list-module__SPVnsG__arrow">
                      <svg
                        width="11.428571428571427"
                        height="24"
                        viewBox="0 0 10.0051 20.6718"
                        fill="none"
                        aria-hidden="true"
                        style={{"transform":"rotate(45deg)","overflow":"visible"}}
                      >
                        <path
                          opacity="0.9"
                          d="M0.98995 15.3384L0 14.3485L8.26278 6.08569L8.38157 6.57407L2.30988 6.70606L2.33628 5.33333L10.0051 5.34653V13.0021L8.63236 13.0285L8.77755 6.97005L9.25273 7.07564L0.98995 15.3384Z"
                          fill="currentColor"
                        >

                        </path>
                      </svg>
                    </span>
                  </button>
                  <div
                    id="about-details-4"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="about-details-4-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack copy-eyebrow">
                                START A CONVERSATION
                              </div>
                              {" "}
                              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                Tell us what you&apos;re trying to build, launch or grow.
                              </p>
                              {" "}
                              <div className="copy-stack copy-actions">
                                <Link className="copy-link" href="/contact">
                                  Start a Conversation
                                </Link>
                                {" "}
                                <Link className="copy-link" href="/services">
                                  Explore Our Services
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <PageMotion />
    </>
  );
}
