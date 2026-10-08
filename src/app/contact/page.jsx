import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("contact");

export default function ContactPage() {
  return (
    <>
      <StructuredData data={pageSchemas("contact")} />
      <main className="page-shell-module__L3Btcq__root">
        <div className="container-module__fR7GYG__root container-module__fR7GYG__full">
          <div className="page-title-module__wYBNpq__inner ruled">
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium page-title-module__wYBNpq__title">
              <span className="sheen-text-module__IBglNG__root">
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    Let’s
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    Let’s
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
                {" "}
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    talk
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    talk
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
                {" "}
                <span className="sheen-text-module__IBglNG__word">
                  <span className="sheen-text-module__IBglNG__text">
                    growth.
                  </span>
                  <span className="sheen-text-module__IBglNG__probe">

                  </span>
                  <span className="sheen-text-module__IBglNG__still" aria-hidden="true">
                    growth.
                  </span>
                  <canvas className="sheen-text-module__IBglNG__canvas" aria-hidden="true">

                  </canvas>
                </span>
              </span>
            </h1>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 page-title-module__wYBNpq__body">
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"2"}}>
                Tell us what you’re trying to build, launch or grow across India and KSA.
              </span>
            </p>
          </div>
        </div>
        <section id="places" className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner places-module__5EbJ9W__root">
            <div className="group-module__k4-mDG__group">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                    Our Markets
                  </span>
                </div>
              </div>
            </div>
            <div className="group-module__k4-mDG__group places-module__5EbJ9W__intro">
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium places-module__5EbJ9W__title">
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                  Two
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                  markets.
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                  One
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"3"}}>
                  growth
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"4"}}>
                  mindset.
                </span>
              </h2>
            </div>
            <div className="group-module__k4-mDG__group places-module__5EbJ9W__grid">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade places-module__5EbJ9W__media" style={{"--stagger":"0"}}>
                <div className="markets-brand" role="img" aria-label="UX Hub">
                  <BrandLogo className="markets-brand-logo" />
                </div>
              </div>
              <ul className="places-module__5EbJ9W__list">
                <li>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up places-module__5EbJ9W__row" style={{"--stagger":"0"}}>
                    <div className="wipe-rule-module__xCEeMq__rule places-module__5EbJ9W__rule">
                      <div className="wipe-rule-module__xCEeMq__base">

                      </div>
                    </div>
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                      <button
                        type="button"
                        className="places-module__5EbJ9W__trigger"
                        aria-pressed="true"
                      >
                        India
                      </button>
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 places-module__5EbJ9W__rowBody">
                      UX Hub works with companies across India at the intersection of product, e-commerce, technology and growth.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up places-module__5EbJ9W__row" style={{"--stagger":"1"}}>
                    <div className="wipe-rule-module__xCEeMq__rule places-module__5EbJ9W__rule">
                      <div className="wipe-rule-module__xCEeMq__base">

                      </div>
                    </div>
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                      <button
                        type="button"
                        className="places-module__5EbJ9W__trigger"
                        aria-pressed="false"
                      >
                        KSA
                      </button>
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 places-module__5EbJ9W__rowBody">
                      Regional understanding, connected by digital growth expertise. We help businesses build, launch and grow across India and KSA.
                    </p>
                    <div className="wipe-rule-module__xCEeMq__rule places-module__5EbJ9W__rule places-module__5EbJ9W__ruleEnd">
                      <div className="wipe-rule-module__xCEeMq__base">

                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contacts" className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner contacts-module__Yeh81W__root">
            <div className="group-module__k4-mDG__group">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                    Get in Touch
                  </span>
                </div>
              </div>
            </div>
            <div className="group-module__k4-mDG__group">
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium contacts-module__Yeh81W__statement">
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                  Start
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                  a
                </span>
                {" "}
                <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                  Conversation
                </span>
              </h2>
            </div>
            <div className="group-module__k4-mDG__group contacts-module__Yeh81W__grid">
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"0"}}>
                <a
                  className="action-row-module__cLECvq__root ruled action-row-module__cLECvq__fill action-row-module__cLECvq__lg"
                  href="https://uxhubglobal.com/contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="action-row-module__cLECvq__text">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large">
                      Start a Conversation
                    </span>
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__color-foreground-50">
                      Tell us what you’re trying to build, launch or grow.
                    </span>
                  </span>
                  <span className="action-row-module__cLECvq__arrow">
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
                  <span className="action-row-module__cLECvq__sweep">

                  </span>
                </a>
              </div>
              <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"1"}}>
                <Link
                  className="action-row-module__cLECvq__root ruled action-row-module__cLECvq__fill action-row-module__cLECvq__lg"
                  href="/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="action-row-module__cLECvq__text">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large">
                      Start Your Free 14-Day Trial
                    </span>
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__color-foreground-50">
                      UXHUB Pricing Super Intelligence
                    </span>
                  </span>
                  <span className="action-row-module__cLECvq__arrow">
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
                  <span className="action-row-module__cLECvq__sweep">

                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact-details"
          className="section-shell-module__wD-FXq__root"
          data-uxhub-content="contact"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capability-section-module__eDmFjG__root">
            <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                UX HUB
              </p>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                Start a Conversation
              </h2>
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                Tell us what you&apos;re trying to build, launch or grow across India and KSA.
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
                    aria-controls="contact-details-0"
                    id="contact-details-0-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Let&apos;s talk growth.
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
                    id="contact-details-0"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="contact-details-0-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  INITIATE ENGAGEMENT
                                </div>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  Tell us what you&apos;re trying to build, launch or grow across India and KSA.
                                </p>
                                {" "}
                                <div className="copy-stack ">
                                  {"India "}
                                  <span className="copy-inline">
                                    ↔
                                  </span>
                                  {" KSA"}
                                </div>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <div className="copy-stack ">
                                  <div className="copy-stack copy-grid">
                                    <span className="copy-inline">
                                      {"Name "}
                                      <span className="copy-hint">
                                        Your full name
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="copy-inline">
                                      {"Company "}
                                      <span className="copy-hint">
                                        Company or organization
                                      </span>
                                    </span>
                                  </div>
                                  {" "}
                                  <div className="copy-stack copy-grid">
                                    <span className="copy-inline">
                                      {"Work Email "}
                                      <span className="copy-hint">
                                        name@company.com
                                      </span>
                                    </span>
                                    {" "}
                                    <span className="copy-inline">
                                      {"Phone "}
                                      <span className="copy-hint">
                                        +91 / +966 number
                                      </span>
                                    </span>
                                  </div>
                                  {" "}
                                  <span className="copy-inline">
                                    {"Country / Location "}
                                    <span className="copy-hint">
                                      India, Saudi Arabia, UAE, Global...
                                    </span>
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    {"Requirement Scope "}
                                    <span className="copy-hint">
                                      Select practice / requirement / Product Growth (0→1 Strategy) / E-commerce Growth (Scaling &amp; CRO) / Digital Experience (Web &amp; Platform) / Venture Launch &amp; GTM / Digital Transformation / Other Advisory
                                    </span>
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    {"Project Brief "}
                                    <span className="copy-hint">
                                      Share the opportunity, challenge, timeline or growth targets.
                                    </span>
                                  </span>
                                  {" "}
                                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                    Data transmission secured. No client data is shared with external parties.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link" href="https://uxhubglobal.com/contact.html">
                            <span className="wipe-button-module__-tlSna__content">
                              <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                                Transmit Enquiry — Continue to UX Hub
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
                          </a>
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
