import Effects from "@/components/Effects";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import BrandIntro from "@/components/BrandIntro";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("home");

export default function HomePage() {
  return (
    <>
      <StructuredData data={pageSchemas("home")} />
      {/* <BrandIntro /> */}
      <main className="page-shell-module__L3Btcq__root page-shell-module__L3Btcq__bleed">
        <section className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full hero-module__kIxoYa__root">
            <svg
              className="hero-module__kIxoYa__lines hero-module__kIxoYa__linesHidden"
              viewBox="0 0 1440 810"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M-222.724 504.473C-222.724 504.473 304.862 504.473 749.059 504.473C1193.25 504.473 1176.74 692.755 1668 692.755"
                stroke="#202020"
                strokeWidth="151.074"
              >

              </path>
              <path
                d="M-222.724 504.473C-222.724 504.473 60.4716 504.473 504.668 504.473C948.864 504.473 1176.74 -52.4742 1668 -52.4742"
                stroke="#868383"
                strokeWidth="151.074"
              >

              </path>
              <path
                d="M-222.724 504.473C-222.724 504.473 304.862 504.473 749.059 504.473C1193.25 504.473 1176.74 259.574 1668 259.574"
                stroke="#383838"
                strokeWidth="151.074"
              >

              </path>
              <path
                d="M-223.057 504.476C-223.057 504.476 -299.029 504.476 145.246 504.476C912.887 504.476 657.455 924.491 1668 924.491"
                stroke="#000000"
                strokeWidth="151.074"
              >

              </path>
            </svg>
            <Effects kind="hero" className="hero-module__kIxoYa__liquid" />
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium hero-module__kIxoYa__title">
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                Build,
              </span>
              {" "}
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                launch
              </span>
              {" "}
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                and
              </span>
              {" "}
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"3"}}>
                grow
              </span>
              {" "}
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"4"}}>
                your
              </span>
              {" "}
              <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"5"}}>
                business.
              </span>
            </h1>
            <Link className="wipe-button-module__-tlSna__root hero-module__kIxoYa__cta" href="/services">
              <span className="wipe-button-module__-tlSna__content">
                <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium ">
                  Explore our services
                </span>
              </span>
              <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

              </span>
            </Link>
            <div className="home-hero-note" data-home-hero-note="">
              <span>
                Digital Business Growth Consultancy
              </span>
              <p>
                India ↔ KSA · Strategy, technology and growth connected.
              </p>
            </div>
          </div>
        </section>
        <div className="styles-module__8sPksG__swirlBand" data-swirl-band="true">
          <div className="styles-module__8sPksG__swirlLayer" aria-hidden="true">
            <Effects kind="swirl" className="metallic-swirl-module__rq4KqG__canvas" />
          </div>
          <section id="capabilities" className="section-shell-module__wD-FXq__root">
            <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capabilities-module__3LfQ_G__root">
              <div className="group-module__k4-mDG__group">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                  <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider section-label-left">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                      Services
                    </span>
                  </div>
                </div>
              </div>
              <div className="group-module__k4-mDG__group capabilities-module__3LfQ_G__intro">
                <div className="section-intro-module__A3g2Mq__root">
                  <div className="section-intro-module__A3g2Mq__text">
                    <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium section-intro-module__A3g2Mq__title">
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                        Digital
                      </span>
                      {" "}
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                        Business
                      </span>
                      {" "}
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                        Growth
                      </span>
                    </h2>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 section-intro-module__A3g2Mq__body">
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"3"}}>
                        We help businesses across India and KSA build custom software and digital products, launch e-commerce businesses, create high-performing digital experiences and develop the growth engines needed to scale.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="capabilities-module__3LfQ_G__grid">
                <div className="group-module__k4-mDG__group capabilities-module__3LfQ_G__list">
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"0"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                        Product Growth
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        From 0→1 to scalable growth. Identify opportunities, validate ideas and take digital products from concept to market and beyond.
                      </p>
                    </div>
                  </div>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"1"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title detail-card-module__oRuUjG__hasNote">
                        E-commerce Growth
                        <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__note">
                          D2C
                        </span>
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        Build, optimize and scale e-commerce businesses across D2C and marketplace channels.
                      </p>
                    </div>
                  </div>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"2"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                        Digital Experience
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        Custom software and premium digital experiences that combine brand, technology, usability and conversion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="proprietary-investments" className="section-shell-module__wD-FXq__root">
            <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full proprietary-investments-module__ku_iAW__root">
              <div className="group-module__k4-mDG__group proprietary-investments-module__ku_iAW__intro">
                <div className="section-intro-module__A3g2Mq__root">
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                    <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider section-label-left">
                      <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                        About UX Hub
                      </span>
                    </div>
                  </div>
                  <div className="section-intro-module__A3g2Mq__text">
                    <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium section-intro-module__A3g2Mq__title">
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                        Strategy
                      </span>
                      {" "}
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                        +
                      </span>
                      {" "}
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                        Execution
                      </span>
                    </h2>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 section-intro-module__A3g2Mq__body">
                      <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"3"}}>
                        We build businesses for the digital economy. Our approach combines strategy with execution. We don’t just recommend what should happen. We help make it happen.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="group-module__k4-mDG__group proprietary-investments-module__ku_iAW__grid">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"0"}}>
                  <div className="detail-card-module__oRuUjG__root ruled">
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                      From Concept to Market
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                      Identify opportunities, define products, validate ideas and build growth strategies.
                    </p>
                  </div>
                </div>
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"1"}}>
                  <div className="detail-card-module__oRuUjG__root ruled">
                    <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                      From Growth to Scale
                    </h3>
                    <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                      Connect strategy, technology, customer experience and growth to build scalable businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="infrastructure" className="section-shell-module__wD-FXq__root">
            <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full infrastructure-module__q_XuuG__root">
              <div className="section-intro-module__A3g2Mq__root section-intro-module__A3g2Mq__center infrastructure-module__q_XuuG__intro">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                  <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-medium section-label-module__mAQ0IG__text">
                      Our Product
                    </span>
                  </div>
                </div>
                <div className="section-intro-module__A3g2Mq__text">
                  <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium section-intro-module__A3g2Mq__title">
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                      Pricing
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                      intelligence
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                      for
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"3"}}>
                      GCC
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"4"}}>
                      e-commerce
                    </span>
                  </h2>
                  <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 section-intro-module__A3g2Mq__body">
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"5"}}>
                      Monitor competitor prices across the GCC. Get alerted when prices change. Make faster, data-driven pricing decisions. UXHUB Pricing Super Intelligence helps your team map products, monitor the market and react faster.
                    </span>
                  </p>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"6"}}>
                    <div className="infrastructure-module__q_XuuG__actions">
                      <Link className="wipe-button-module__-tlSna__root infrastructure-module__q_XuuG__cta" href="/product/price-intelligence">
                        <span className="wipe-button-module__-tlSna__content">
                          <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                            Explore AI Our Product
                          </span>
                        </span>
                        <span className="wipe-button-module__-tlSna__sweep" aria-hidden="true">

                        </span>
                      </Link>
                      <Link
                        target="_blank"
                        className="wipe-button-module__-tlSna__root infrastructure-module__q_XuuG__cta"
                        rel="noopener noreferrer"
                        href="/contact"
                      >
                        <span className="wipe-button-module__-tlSna__content">
                          <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                            Talk to a Pricing Expert
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
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="values" className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full values-module__Eh0jOW__root">
            <div className="group-module__k4-mDG__group">
              <div className="section-intro-module__A3g2Mq__root">
                <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade" style={{"--stagger":"0"}}>
                  <div className="section-label-module__mAQ0IG__root section-label-module__mAQ0IG__divider">
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__weight-bold section-label-module__mAQ0IG__text">
                      Our Approach
                    </span>
                  </div>
                </div>
                <div className="section-intro-module__A3g2Mq__text">
                  <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium section-intro-module__A3g2Mq__title">
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"0"}}>
                      Built
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"1"}}>
                      for
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"2"}}>
                      businesses
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"3"}}>
                      that
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"4"}}>
                      want
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"5"}}>
                      to
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"6"}}>
                      scale
                    </span>
                    {" "}
                    <span className="reveal-module__nuDBzW__root reveal-module__nuDBzW__rise reveal-module__nuDBzW__fine" style={{"--stagger":"7"}}>
                      digitally.
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <ul className="values-module__Eh0jOW__grid">
              <li className="values-module__Eh0jOW__cell">
                <div className="group-module__k4-mDG__group values-module__Eh0jOW__cellContent">
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up values-module__Eh0jOW__iconFrame" style={{"--stagger":"0"}}>
                    <svg
                      className="values-module__Eh0jOW__icon"
                      width="71"
                      height="100"
                      viewBox="0 0 71 100"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M35.5 0C37.89 0 40.18 0.44 42.3 1.23C42.31 1.24 42.31 1.24 42.32 1.24C42.59 1.34 42.87 1.46 43.14 1.57C43.16 1.58 43.17 1.59 43.19 1.59C43.24 1.61 43.28 1.63 43.33 1.65C43.34 1.66 43.35 1.66 43.35 1.67C43.51 1.73 43.66 1.8 43.81 1.88C43.82 1.88 43.84 1.89 43.86 1.9C43.9 1.92 43.94 1.94 43.98 1.96C44 1.97 44.03 1.98 44.05 2C44.09 2.01 44.12 2.03 44.16 2.05C44.19 2.06 44.22 2.08 44.25 2.1C44.29 2.12 44.33 2.14 44.37 2.15C44.42 2.18 44.47 2.21 44.52 2.23C44.55 2.25 44.57 2.26 44.6 2.28C44.63 2.29 44.66 2.31 44.7 2.33C44.73 2.35 44.77 2.37 44.8 2.39C44.83 2.4 44.85 2.41 44.87 2.42C44.9 2.44 44.94 2.46 44.97 2.48C45.02 2.51 45.07 2.54 45.11 2.56C45.15 2.59 45.19 2.61 45.23 2.63C45.26 2.65 45.29 2.67 45.32 2.69C45.35 2.7 45.38 2.72 45.41 2.74C45.45 2.76 45.48 2.78 45.52 2.8C45.54 2.82 45.56 2.83 45.59 2.84C45.63 2.87 45.68 2.9 45.72 2.93C45.74 2.94 45.75 2.95 45.77 2.96C45.83 2.99 45.88 3.03 45.94 3.07C45.96 3.08 45.99 3.1 46.01 3.11C46.05 3.14 46.08 3.16 46.12 3.18C46.14 3.2 46.17 3.21 46.19 3.23C46.23 3.26 46.27 3.28 46.31 3.31C46.33 3.32 46.35 3.33 46.36 3.35C46.48 3.43 46.6 3.51 46.71 3.59C46.73 3.6 46.75 3.62 46.77 3.63C46.81 3.66 46.85 3.69 46.88 3.71C46.91 3.73 46.93 3.75 46.95 3.76C46.99 3.79 47.02 3.82 47.06 3.84C47.08 3.86 47.1 3.88 47.12 3.89C47.18 3.93 47.23 3.97 47.28 4.01C47.3 4.03 47.31 4.04 47.33 4.05C47.37 4.08 47.41 4.11 47.46 4.15C47.47 4.16 47.49 4.18 47.51 4.19C47.55 4.22 47.59 4.26 47.63 4.29C47.65 4.3 47.66 4.31 47.67 4.32C47.79 4.41 47.9 4.51 48.01 4.6C48.02 4.61 48.03 4.62 48.05 4.63C48.09 4.67 48.13 4.7 48.17 4.74C48.19 4.75 48.2 4.77 48.22 4.78C48.26 4.82 48.29 4.85 48.33 4.88C48.35 4.9 48.37 4.92 48.39 4.93C48.44 4.98 48.49 5.02 48.53 5.06C48.55 5.08 48.57 5.09 48.58 5.11C48.62 5.14 48.65 5.17 48.69 5.21C48.71 5.23 48.73 5.25 48.76 5.27C48.79 5.3 48.83 5.34 48.86 5.37C48.87 5.38 48.89 5.39 48.9 5.41C48.94 5.45 48.99 5.49 49.03 5.53C49.04 5.54 49.05 5.55 49.06 5.56C49.11 5.61 49.16 5.66 49.2 5.7C49.23 5.73 49.25 5.75 49.27 5.77C49.3 5.8 49.32 5.83 49.35 5.85C49.37 5.87 49.39 5.9 49.41 5.92C49.44 5.95 49.47 5.98 49.51 6.02C49.53 6.04 49.55 6.06 49.56 6.08C49.61 6.12 49.65 6.16 49.69 6.21C49.71 6.23 49.73 6.25 49.75 6.28C49.78 6.31 49.81 6.34 49.84 6.37C49.86 6.4 49.89 6.43 49.91 6.45C49.93 6.48 49.95 6.5 49.97 6.52C50 6.55 50.02 6.58 50.05 6.61C50.08 6.64 50.11 6.68 50.14 6.71C50.15 6.73 50.17 6.74 50.18 6.76C50.22 6.81 50.27 6.87 50.32 6.92C50.33 6.93 50.34 6.95 50.35 6.96C50.38 7 50.41 7.04 50.45 7.08C50.47 7.1 50.49 7.13 50.51 7.15C50.53 7.18 50.55 7.21 50.57 7.23C50.6 7.26 50.62 7.29 50.64 7.32C50.73 7.43 50.81 7.53 50.89 7.64C50.91 7.66 50.92 7.68 50.94 7.7C50.97 7.74 51 7.78 51.02 7.81C51.04 7.83 51.06 7.86 51.07 7.88C51.1 7.91 51.12 7.94 51.14 7.98C51.21 8.07 51.28 8.16 51.35 8.26C51.38 8.3 51.41 8.35 51.44 8.39C51.45 8.41 51.47 8.44 51.49 8.46C51.51 8.5 51.53 8.53 51.55 8.56C51.57 8.59 51.59 8.62 51.61 8.65C51.63 8.67 51.64 8.69 51.65 8.7C51.73 8.83 51.81 8.95 51.89 9.08C51.91 9.11 51.93 9.14 51.95 9.16C51.96 9.19 51.98 9.22 52 9.25C52.02 9.28 52.04 9.31 52.05 9.34C52.07 9.37 52.09 9.4 52.11 9.43C52.12 9.45 52.13 9.47 52.15 9.49C52.23 9.63 52.31 9.77 52.39 9.9C52.39 9.91 52.4 9.92 52.4 9.93C52.43 9.98 52.45 10.02 52.48 10.07C52.48 10.08 52.49 10.09 52.5 10.11C52.57 10.24 52.65 10.38 52.72 10.52C52.73 10.54 52.74 10.56 52.75 10.59C52.77 10.63 52.8 10.67 52.82 10.71C52.82 10.73 52.83 10.74 52.84 10.76C54.16 13.4 54.9 16.38 54.9 19.53C54.9 26.91 50.84 33.34 44.84 36.66H53.63C53.63 36.66 53.63 36.66 53.63 36.66H54.95C56.01 36.66 56.98 37.09 57.68 37.8C58.37 38.5 58.81 39.47 58.81 40.55C58.81 41.75 58.26 42.83 57.4 43.54C56.73 44.1 55.88 44.43 54.95 44.43H52.68C52.68 62.42 61.14 68.73 61.15 68.74H61.15C62.45 68.74 63.6 69.38 64.31 70.36C64.78 71.01 65.05 71.81 65.05 72.67V75.32C66.93 75.32 68.61 76.2 69.7 77.57C70.51 78.6 71 79.89 71 81.31V97.41C71 98.53 70.3 99.48 69.32 99.84C69.31 99.84 69.31 99.85 69.3 99.85C69.27 99.86 69.23 99.87 69.2 99.88C69.19 99.88 69.19 99.89 69.18 99.89C69.15 99.9 69.12 99.9 69.1 99.91C69.08 99.92 69.06 99.92 69.04 99.93C69.02 99.93 69.01 99.93 68.99 99.94C68.81 99.98 68.62 100 68.43 100H2.57C1.45 100 0.5 99.28 0.15 98.28C0.05 98.01 1.03e-06 97.72 0 97.41V81.31C1.45e-05 78 2.66 75.32 5.95 75.32V73.46H5.95V72.66C5.95 70.5 7.7 68.74 9.85 68.74H9.85C9.85 68.74 10.41 68.32 11.24 67.39C11.34 67.29 11.44 67.17 11.54 67.05C11.55 67.04 11.56 67.03 11.57 67.01C11.8 66.75 12.04 66.45 12.29 66.12C14.79 62.8 18.32 56.05 18.32 44.43L16.05 44.43C13.92 44.43 12.19 42.69 12.19 40.55C12.19 38.4 13.92 36.66 16.05 36.66H26.16C20.16 33.34 16.1 26.91 16.1 19.53C16.1 8.75 24.78 4.33e-05 35.5 0Z" fill="currentColor">

                      </path>
                    </svg>
                  </div>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"1"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                        Strategy + Execution
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        We combine strategic thinking with hands-on execution.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="values-module__Eh0jOW__cell">
                <div className="group-module__k4-mDG__group values-module__Eh0jOW__cellContent">
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up values-module__Eh0jOW__iconFrame" style={{"--stagger":"1"}}>
                    <svg
                      className="values-module__Eh0jOW__icon"
                      width="89.9766"
                      height="100"
                      viewBox="0 0 89.9766 100"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M44.99 0C46.03 0.36 47.11 0.73 48.23 1.08C49.36 1.43 50.52 1.78 51.73 2.11C58.98 4.12 67.7 5.68 77.59 5.77C82.04 5.81 86.18 5.54 89.98 5.1V36.78C89.98 53.29 82.61 68.93 69.88 79.44L44.99 100L20.1 79.44C7.37 68.93 8.78e-05 53.29 0 36.78V5.1C3.79 5.54 7.94 5.81 12.39 5.77C25.57 5.66 36.69 2.91 44.99 0Z" fill="currentColor">

                      </path>
                    </svg>
                  </div>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"2"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                        Growth Mindset
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        Every product, platform and experience is built around measurable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="values-module__Eh0jOW__cell">
                <div className="group-module__k4-mDG__group values-module__Eh0jOW__cellContent">
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up values-module__Eh0jOW__iconFrame" style={{"--stagger":"2"}}>
                    <svg
                      className="values-module__Eh0jOW__icon"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M0 52.41H27.3C27.44 60.66 28.31 68.58 29.82 75.7C23.39 77.33 17.4 79.73 12.24 82.79C5.08 74.57 0.55 64 0 52.41ZM12.24 17.21C17.4 20.27 23.39 22.67 29.82 24.3C28.31 31.42 27.44 39.34 27.3 47.59H0C0.55 36 5.08 25.43 12.24 17.21ZM100 47.59H72.7C72.56 39.33 71.69 31.4 70.17 24.29C76.64 22.64 82.68 20.24 87.77 17.22C94.93 25.44 99.45 36 100 47.59ZM32.13 47.59C32.27 39.68 33.1 32.12 34.54 25.35C39.55 26.31 44.76 26.81 50 26.81C55.19 26.81 60.41 26.3 65.46 25.33C66.9 32.1 67.73 39.67 67.87 47.59H32.13ZM67.87 52.41C67.73 60.33 66.9 67.9 65.46 74.67C60.41 73.7 55.19 73.19 50 73.19C44.76 73.19 39.55 73.69 34.54 74.65C33.1 67.88 32.27 60.32 32.13 52.41H67.87ZM69.04 19.56C68.32 16.91 67.52 14.4 66.61 12.07C64.86 7.55 62.83 3.88 60.58 1.13C69.64 3.08 77.8 7.5 84.32 13.63C79.88 16.12 74.64 18.13 69.04 19.56ZM62.11 13.81C62.93 15.93 63.66 18.21 64.32 20.61C59.61 21.51 54.76 21.99 50 21.99C45.14 21.99 40.31 21.53 35.67 20.66C36.33 18.24 37.07 15.94 37.89 13.81C41.29 5.03 45.71 0 50 0C54.29 0 58.71 5.03 62.11 13.81ZM33.39 12.07C32.48 14.42 31.67 16.95 30.95 19.62C25.4 18.2 20.22 16.18 15.69 13.63C22.2 7.49 30.36 3.08 39.42 1.13C37.17 3.88 35.14 7.55 33.39 12.07ZM30.95 80.38C31.67 83.05 32.48 85.58 33.39 87.93C35.14 92.45 37.17 96.12 39.42 98.87C30.36 96.92 22.2 92.51 15.69 86.37C20.22 83.82 25.4 81.8 30.95 80.38ZM37.89 86.19C37.07 84.06 36.33 81.76 35.67 79.34C40.31 78.47 45.14 78.01 50 78.01C54.76 78.01 59.61 78.49 64.32 79.39C63.66 81.79 62.93 84.07 62.11 86.19C58.71 94.97 54.29 100 50 100C45.71 100 41.29 94.97 37.89 86.19ZM66.61 87.93C67.52 85.6 68.32 83.09 69.04 80.44C74.64 81.87 79.88 83.88 84.32 86.37C77.8 92.5 69.64 96.92 60.58 98.87C62.83 96.12 64.86 92.45 66.61 87.93ZM70.17 75.71C71.69 68.6 72.56 60.67 72.7 52.41H100C99.45 64 94.93 74.57 87.77 82.78C82.68 79.76 76.64 77.36 70.17 75.71Z" fill="currentColor">

                      </path>
                    </svg>
                  </div>
                  <div className="reveal-module__nuDBzW__root reveal-module__nuDBzW__fade-up" style={{"--stagger":"3"}}>
                    <div className="detail-card-module__oRuUjG__root ruled">
                      <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium detail-card-module__oRuUjG__title">
                        India + KSA
                      </h3>
                      <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 detail-card-module__oRuUjG__body">
                        Two fast-growing economic corridors. One unified digital growth mindset.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="home-details"
          className="section-shell-module__wD-FXq__root"
          data-uxhub-content="home"
        >
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capability-section-module__eDmFjG__root" data-scroll-split="">
            <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header" data-scroll-sticky="">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                UX HUB
              </p>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                Build. Launch. Grow.
              </h2>
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                UX Hub is a leading Digital Business Growth Consultancy &amp; Software Solutions firm across India, Saudi Arabia &amp; GCC. Build, launch &amp; scale digital products, competitor price intelligence, and commerce growth.
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
                    aria-controls="home-details-0"
                    id="home-details-0-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Build. Launch. Grow.
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
                    id="home-details-0"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-0-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  DIGITAL BUSINESS GROWTH CONSULTANCY
                                </div>
                                {" "}
                                <h3 className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium">
                                  Turning digital opportunities into scalable businesses.
                                </h3>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We help businesses across India and KSA build digital products, launch e-commerce businesses, create high-performing digital experiences and develop the growth engines needed to scale.
                                </p>
                                {" "}
                                <div className="copy-stack copy-actions">
                                  <Link className="copy-link" href="/contact">
                                    Start a Conversation
                                  </Link>
                                  {" "}
                                  <Link className="copy-link" href="/services">
                                    Explore What We Do
                                  </Link>
                                </div>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <div className="copy-stack ">
                                  0
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  1
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  GROWTH
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  SCALE
                                </div>
                              </div>
                            </div>
                            {" "}
                            <div className="copy-stack ">
                              <span className="copy-inline">
                                00 — 01 ZERO TO ONE
                              </span>
                              {" "}
                              <span className="copy-inline">
                                INDIA ↔ KSA
                              </span>
                              {" "}
                              <span className="copy-inline">
                                GROWTH TO SCALE
                              </span>
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
                    aria-controls="home-details-1"
                    id="home-details-1-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Businesses and industries
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
                    id="home-details-1"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-1-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                Built for businesses that want to scale digitally
                              </p>
                              {" "}
                              <div className="copy-stack copy-tags">
                                <div className="copy-stack ">
                                  ENTERPRISE
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  D2C BRANDS
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  SAAS PLATFORMS
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  COMMERCE HUBS
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  VENTURES
                                </div>
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
                    aria-controls="home-details-2"
                    id="home-details-2-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      We build growth engines, not just digital assets.
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
                    id="home-details-2"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-2-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack copy-eyebrow">
                                WHAT WE DO
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  Digital growth doesn&apos;t come from a website, campaign or product in isolation. It comes from connecting strategy, technology, customer experience and growth.
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
                    aria-controls="home-details-3"
                    id="home-details-3-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      From 0→1 to scalable growth.
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
                    id="home-details-3"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-3-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  PRACTICE 01 — PRODUCT GROWTH
                                </div>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We help businesses identify opportunities, define products, validate ideas, build growth strategies and take digital products from concept to market and beyond.
                                </p>
                                {" "}
                                <Link className="copy-link" href="/services">
                                  <span className="copy-inline">
                                    Explore Product Growth
                                  </span>
                                </Link>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <ol className="copy-capabilities">
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        01
                                      </b>
                                      {" 0→1 Product Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        02
                                      </b>
                                      {" Product Discovery"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        03
                                      </b>
                                      {" Product-Market Fit"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        04
                                      </b>
                                      {" Product Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        05
                                      </b>
                                      {" Growth Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        06
                                      </b>
                                      {" Go-to-Market Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        07
                                      </b>
                                      {" Product Analytics"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        08
                                      </b>
                                      {" Customer Journey"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        09
                                      </b>
                                      {" Conversion Optimization"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        10
                                      </b>
                                      {" Growth Roadmaps"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        11
                                      </b>
                                      {" Product Scaling"}
                                    </span>
                                  </li>
                                </ol>
                                {" "}
                                <div className="copy-stack copy-tags">
                                  <span className="copy-inline">
                                    CONCEPT
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    MARKET
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    SCALE
                                  </span>
                                </div>
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
                    aria-controls="home-details-4"
                    id="home-details-4-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Turn e-commerce into a growth engine.
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
                    id="home-details-4"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-4-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  PRACTICE 02 — E-COMMERCE GROWTH
                                </div>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We help brands build, optimize and scale e-commerce businesses across D2C and marketplace channels.
                                </p>
                                {" "}
                                <Link className="copy-link" href="/services">
                                  <span className="copy-inline">
                                    Explore E-commerce Growth
                                  </span>
                                </Link>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <ol className="copy-capabilities">
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        01
                                      </b>
                                      {" E-commerce Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        02
                                      </b>
                                      {" Marketplace Growth"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        03
                                      </b>
                                      {" Performance Marketing"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        04
                                      </b>
                                      {" Conversion Rate Optimization"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        05
                                      </b>
                                      {" Competitor Analysis"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        06
                                      </b>
                                      {" Attribution"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        07
                                      </b>
                                      {" Data Analytics"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        08
                                      </b>
                                      {" CRM & Retention"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        09
                                      </b>
                                      {" Customer Acquisition"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        10
                                      </b>
                                      {" Marketplace Strategy"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        11
                                      </b>
                                      {" E-commerce Analytics"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        12
                                      </b>
                                      {" E-commerce P&L"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        13
                                      </b>
                                      {" Growth Planning"}
                                    </span>
                                  </li>
                                </ol>
                                {" "}
                                <div className="copy-stack copy-tags">
                                  <span className="copy-inline">
                                    TRAFFIC
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    CONVERSION
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    RETENTION
                                  </span>
                                </div>
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
                    aria-controls="home-details-5"
                    id="home-details-5-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Digital experiences built for growth.
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
                    id="home-details-5"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-5-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  PRACTICE 03 — DIGITAL EXPERIENCE
                                </div>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  We design and develop premium digital experiences that combine brand, technology, usability and conversion.
                                </p>
                                {" "}
                                <Link className="copy-link" href="/services">
                                  <span className="copy-inline">
                                    Explore Digital Experience
                                  </span>
                                </Link>
                              </div>
                              {" "}
                              <div className="copy-stack ">
                                <ol className="copy-capabilities">
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        01
                                      </b>
                                      {" Premium Website Development"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        02
                                      </b>
                                      {" E-commerce Development"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        03
                                      </b>
                                      {" Shopify Development"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        04
                                      </b>
                                      {" Custom E-commerce"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        05
                                      </b>
                                      {" UX/UI Design"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        06
                                      </b>
                                      {" Conversion-focused Design"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        07
                                      </b>
                                      {" Digital Product Development"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        08
                                      </b>
                                      {" Platform Development"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        09
                                      </b>
                                      {" CRM Integrations"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        10
                                      </b>
                                      {" ERP Integrations"}
                                    </span>
                                  </li>
                                  <li>
                                    <span className="copy-inline">
                                      <b>
                                        11
                                      </b>
                                      {" Analytics & Tracking"}
                                    </span>
                                  </li>
                                </ol>
                                {" "}
                                <div className="copy-stack copy-tags">
                                  <span className="copy-inline">
                                    BRAND
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    EXPERIENCE
                                  </span>
                                  {" "}
                                  <span className="copy-inline">
                                    GROWTH
                                  </span>
                                </div>
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
                    aria-controls="home-details-6"
                    id="home-details-6-trigger"
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
                    id="home-details-6"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-6-trigger"
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
                              <div className="copy-stack ">
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  UX Hub works at the intersection of product, e-commerce, technology and growth. Our approach combines strategy with execution. We don&apos;t just recommend what should happen. We help make it happen.
                                </p>
                                {" "}
                                <div className="copy-stack ">
                                  <Link className="copy-link" href="/about">
                                    <span className="copy-inline">
                                      More About UX Hub
                                    </span>
                                  </Link>
                                </div>
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
                    aria-controls="home-details-7"
                    id="home-details-7-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      India ↔ KSA
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
                    id="home-details-7"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-7-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  OUR MARKETS
                                </div>
                                {" "}
                                <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium text-module__DYGPWq__color-foreground-50 ">
                                  Two fast-growing economic corridors. One unified digital growth mindset.
                                </p>
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
                    aria-controls="home-details-8"
                    id="home-details-8-trigger"
                  >
                    <span className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium disclosure-list-module__SPVnsG__title">
                      Built across industries.
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
                    id="home-details-8"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-8-trigger"
                  >
                    <div className="disclosure-list-module__SPVnsG__panelInner">
                      <div className="disclosure-list-module__SPVnsG__panelContent">
                        <div className="uxhub-copy">
                          <div className="copy-stack ">
                            <div className="copy-stack ">
                              <div className="copy-stack ">
                                <div className="copy-stack copy-eyebrow">
                                  INDUSTRIES
                                </div>
                              </div>
                              {" "}
                              <div className="copy-stack copy-grid">
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    01
                                  </span>
                                  {" Retail & E-commerce"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    02
                                  </span>
                                  {" Consumer Brands"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    03
                                  </span>
                                  {" Real Estate"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    04
                                  </span>
                                  {" Beauty & Lifestyle"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    05
                                  </span>
                                  {" Travel & Hospitality"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    06
                                  </span>
                                  {" Technology & SaaS"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    07
                                  </span>
                                  {" B2B Enterprise"}
                                </div>
                                {" "}
                                <div className="copy-stack ">
                                  <span className="copy-inline">
                                    08
                                  </span>
                                  {" Venture Startups"}
                                </div>
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
                    aria-controls="home-details-9"
                    id="home-details-9-trigger"
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
                    id="home-details-9"
                    className="disclosure-list-module__SPVnsG__panel"
                    inert
                    aria-labelledby="home-details-9-trigger"
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
        <section className="section-shell-module__wD-FXq__root" data-home-summary-section="">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__half ai-band-module__6qH_6W__root">
            <div data-home-summary="" className="styles-module__nU-CWq__root styles-module__nU-CWq__lg styles-module__nU-CWq__reveal ai-band-module__6qH_6W__band">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large styles-module__nU-CWq__label">
                Summarize this page with AI
              </p>
              <ul className="styles-module__nU-CWq__list">
                <li style={{"--i":"0"}}>
                  <a
                    className="styles-module__nU-CWq__link"
                    href="https://chatgpt.com/?q=Summarize%20this%20page%3A%20https%3A%2F%2Fuxhubglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in ChatGPT"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g>
                        <path d="M40.9231 20.4625C41.2568 19.4731 41.427 18.4372 41.4272 17.3944C41.4271 15.669 40.9613 13.9747 40.0777 12.4858C38.3022 9.43635 35.0085 7.55368 31.444 7.55368C30.7418 7.55369 30.0415 7.62687 29.3548 7.772C28.4312 6.74527 27.2976 5.92338 26.0285 5.36052C24.7595 4.79766 23.384 4.50662 21.9926 4.50659H21.9302L21.9067 4.50673C17.5894 4.50673 13.7607 7.25547 12.4335 11.3077C11.0597 11.5854 9.76188 12.1494 8.62687 12.962C7.49186 13.7746 6.54588 14.817 5.85226 16.0196C4.97135 17.5175 4.50713 19.2185 4.50659 20.9503C4.50693 23.3842 5.42258 25.7314 7.07625 27.5373C6.74245 28.5267 6.5722 29.5626 6.57206 30.6054C6.57221 32.3308 7.03802 34.0251 7.92159 35.514C8.97231 37.3191 10.5769 38.7483 12.504 39.5954C14.4311 40.4426 16.581 40.664 18.6439 40.2277C19.5676 41.2544 20.7014 42.0763 21.9705 42.6392C23.2396 43.202 24.6152 43.4931 26.0066 43.4932H26.0691L26.0945 43.4931C30.4141 43.4931 34.2416 40.7442 35.5687 36.6883C36.9426 36.4105 38.2404 35.8465 39.3754 35.0339C40.5104 34.2212 41.4565 33.1788 42.1502 31.9763C43.0301 30.4797 43.4934 28.7801 43.4932 27.0499C43.4929 24.6161 42.5772 22.2689 40.9235 20.463L40.9231 20.4625ZM26.0716 40.9444H26.0614C24.3329 40.9438 22.6593 40.3455 21.3316 39.2535C21.4104 39.2116 21.4884 39.1681 21.5653 39.1229L29.4326 34.639C29.629 34.5287 29.7922 34.3691 29.9058 34.1764C30.0194 33.9838 30.0792 33.7648 30.0793 33.5419V22.5907L33.4047 24.4852C33.4221 24.4938 33.4371 24.5065 33.4484 24.5222C33.4597 24.5379 33.4669 24.5561 33.4693 24.5752V33.6382C33.4648 37.6676 30.1556 40.9362 26.0716 40.9444ZM10.1624 34.24C9.51253 33.1314 9.17016 31.8733 9.16972 30.5926C9.16972 30.1749 9.20669 29.756 9.2787 29.3445C9.33719 29.379 9.43927 29.4405 9.51252 29.4821L17.3799 33.9659C17.576 34.0789 17.7991 34.1384 18.0262 34.1384C18.2533 34.1383 18.4763 34.0787 18.6724 33.9657L28.2776 28.4934V32.2825L28.2777 32.2891C28.2777 32.3073 28.2735 32.3253 28.2652 32.3416C28.2569 32.3579 28.2449 32.3721 28.2302 32.3831L20.277 36.9139C19.1517 37.553 17.8761 37.8895 16.5777 37.8898C15.2779 37.8897 14.001 37.5523 12.8751 36.9117C11.7491 36.271 10.8136 35.3495 10.1624 34.2396V34.24ZM8.09264 17.2936C8.95672 15.8127 10.3211 14.6788 11.947 14.0904C11.947 14.1572 11.9431 14.2756 11.9431 14.3578V23.3257L11.943 23.333C11.943 23.5557 12.0028 23.7744 12.1162 23.9669C12.2296 24.1594 12.3926 24.3189 12.5887 24.4291L22.1939 29.9006L18.8687 31.7951C18.8523 31.8058 18.8335 31.8123 18.8139 31.814C18.7944 31.8158 18.7747 31.8128 18.7566 31.8052L10.8026 27.2705C9.67818 26.6278 8.74471 25.7048 8.09574 24.594C7.44677 23.4832 7.10509 22.2236 7.10494 20.9414C7.10544 19.6613 7.44614 18.4036 8.09305 17.294L8.09264 17.2936ZM35.4136 23.5667L25.8084 18.0946L29.1337 16.2007C29.1501 16.1901 29.1689 16.1835 29.1885 16.1818C29.2081 16.18 29.2278 16.1831 29.2459 16.1907L37.1997 20.7215C38.325 21.3632 39.2595 22.2857 39.9092 23.3964C40.559 24.5071 40.9012 25.7669 40.9015 27.0494C40.9015 30.1103 38.9657 32.8493 36.055 33.9064V24.6704C36.0554 24.667 36.0554 24.6635 36.0554 24.6601C36.0554 24.4383 35.996 24.2203 35.8833 24.0284C35.7706 23.8364 35.6086 23.6772 35.4136 23.5667ZM38.7233 18.6517C38.646 18.6049 38.5681 18.5591 38.4896 18.5142L30.6223 14.0302C30.4261 13.9174 30.2032 13.858 29.9761 13.8579C29.7491 13.858 29.5262 13.9174 29.33 14.0302L19.7247 19.5025V15.7133L19.7245 15.7068C19.7245 15.6698 19.7423 15.6349 19.7723 15.6127L27.7254 11.0857C28.8504 10.4458 30.1261 10.1089 31.4246 10.1089C35.5138 10.1089 38.8301 13.381 38.8301 17.4158C38.8299 17.8298 38.7942 18.2431 38.7233 18.6513V18.6517ZM17.9167 25.4052L14.5907 23.5107C14.5733 23.5021 14.5582 23.4894 14.547 23.4737C14.5357 23.458 14.5285 23.4398 14.526 23.4207V14.3575C14.5278 10.3249 17.8441 7.05552 21.9315 7.05552C23.6627 7.05587 25.3391 7.65426 26.6698 8.74682C26.61 8.77908 26.5056 8.83597 26.4362 8.87749L18.5688 13.3614C18.3725 13.4715 18.2093 13.6311 18.0957 13.8237C17.9822 14.0163 17.9223 14.2351 17.9223 14.458V14.4652L17.9167 25.4052ZM19.7232 21.5624L24.0011 19.1244L28.2791 21.5607V26.4351L24.0011 28.8716L19.7232 26.4351V21.5624Z" fill="currentColor">

                        </path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li style={{"--i":"1"}}>
                  <a
                    className="styles-module__nU-CWq__link"
                    href="https://claude.ai/new?q=Summarize%20this%20page%3A%20https%3A%2F%2Fuxhubglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Claude"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g>
                        <path d="M12.1607 30.4277L19.8266 26.1261L19.9548 25.7512L19.8266 25.544H19.4517L18.1691 25.4651L13.7886 25.3467L9.99024 25.1888L6.31025 24.9915L5.38285 24.7942L4.51465 23.6498L4.60344 23.0775L5.38285 22.5546L6.4977 22.6533L8.96418 22.821L12.6639 23.0775L15.3474 23.2354L19.3234 23.6498H19.9548L20.0436 23.3932L19.8266 23.2354L19.6588 23.0775L15.8309 20.4828L11.6872 17.7401L9.51667 16.1615L8.34263 15.3624L7.75067 14.6126L7.49416 12.9748L8.55968 11.8008L9.99024 11.8994L10.3553 11.9981L11.8056 13.113L14.9035 15.5104L18.9485 18.4899L19.5405 18.9832L19.7772 18.8155L19.8068 18.6971L19.5405 18.2531L17.3404 14.2771L14.9923 10.2321L13.9465 8.5549L13.6702 7.54857C13.5716 7.1342 13.5025 6.78889 13.5025 6.36466L14.716 4.71705L15.3869 4.5L17.0049 4.71705L17.6857 5.30901L18.692 7.60777L20.3199 11.2286L22.8455 16.1517L23.5855 17.6118L23.9801 18.9634L24.1281 19.3778H24.3846V19.141L24.5918 16.3687L24.9766 12.965L25.3515 8.58449L25.4797 7.35125L26.0914 5.87136L27.3049 5.07222L28.2521 5.52606L29.0315 6.64091L28.9229 7.36112L28.4592 10.3702L27.5516 15.0861L26.9596 18.2432H27.3049L27.6996 17.8486L29.2979 15.7274L31.9814 12.373L33.1653 11.0411L34.5465 9.57109L35.4345 8.8706H37.1117L38.3449 10.7057L37.7924 12.5999L36.0659 14.7902L34.6353 16.645L32.5832 19.4074L31.3006 21.6174L31.419 21.795L31.7249 21.7654L36.3619 20.7788L38.8678 20.3249L41.8572 19.8119L43.2088 20.4433L43.3568 21.0846L42.824 22.3968L39.6275 23.1861L35.8784 23.9359L30.2943 25.2579L30.2252 25.3072L30.3042 25.4059L32.82 25.6427L33.8954 25.7019H36.5296L41.4329 26.0669L42.7155 26.9154L43.4851 27.9513L43.3568 28.7406L41.3836 29.7469L38.7198 29.1155L32.5043 27.6356L30.3732 27.1028H30.0773V27.2804L31.8531 29.0168L35.1089 31.9569L39.1835 35.7454L39.3907 36.6826L38.8678 37.4226L38.3153 37.3437L34.734 34.6503L33.3527 33.4368L30.2252 30.8026H30.0181V31.0788L30.7383 32.1345L34.5465 37.8567L34.7438 39.6128L34.4676 40.185L33.481 40.5304L32.3958 40.333L30.1661 37.2055L27.8673 33.6834L26.0125 30.5263L25.7856 30.6546L24.6905 42.4443L24.1774 43.0462L22.9935 43.5L22.0069 42.7502L21.484 41.5367L22.0069 39.1393L22.6384 36.0118L23.1514 33.5256L23.6151 30.4375L23.8913 29.4115L23.8716 29.3424L23.6447 29.372L21.3163 32.5686L17.7745 37.3535L14.9725 40.3528L14.3016 40.6191L13.1375 40.0173L13.246 38.9419L13.8971 37.9849L17.7745 33.052L20.1127 29.9935L21.6222 28.2276L21.6123 27.971H21.5235L11.2235 34.6601L9.38842 34.8969L8.59914 34.157L8.6978 32.9435L9.07271 32.5488L12.1706 30.4178L12.1607 30.4277Z" fill="currentColor">

                        </path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li style={{"--i":"2"}}>
                  <a
                    className="styles-module__nU-CWq__link"
                    href="https://www.perplexity.ai/search?q=Summarize%20this%20page%3A%20https%3A%2F%2Fuxhubglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Perplexity"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.6666 4.19348L23.0814 14.8407V4.50017H24.849V14.8404L36.2636 4.19351V15.9899L41.0197 15.9899V32.977H36.2636V43.5776L24.849 33.3996V43.5002H23.0814V33.3996L11.6666 43.5776V32.9771H6.98016V15.9899L11.6666 15.9899V4.19348ZM21.6981 17.7574L8.7478 17.7575V31.2094H11.6645L11.6668 26.9816L21.6981 17.7574ZM13.4342 27.7577V39.6332L23.0814 31.0313L23.0812 18.8869L13.4342 27.7577ZM24.849 31.0313V18.8871L34.496 27.7577V39.6332L24.849 31.0313ZM36.2636 31.2094H39.2521V17.7575L26.232 17.7574L36.2636 26.9818V31.2094ZM26.2083 15.9898L34.496 8.25948V15.9898L26.2083 15.9898ZM21.7217 15.9897L13.4342 8.25949V15.9897H21.7217Z"
                          fill="currentColor"
                        >

                        </path>
                      </g>
                    </svg>
                  </a>
                </li>
                <li style={{"--i":"3"}}>
                  <a
                    className="styles-module__nU-CWq__link"
                    href="https://grok.com/?q=Summarize%20this%20page%3A%20https%3A%2F%2Fuxhubglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open in Grok"
                  >
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g>
                        <path d="M12.1079 11.7864C17.314 6.58848 24.9818 5.2771 31.3862 7.91042C32.8031 8.43628 34.038 9.18537 35.0015 9.88112L29.6538 12.3479C24.6745 10.2607 18.9703 11.6808 15.4888 15.1594C10.8541 19.7864 9.8596 27.7569 15.0933 33.0286L15.3423 33.2815L0.278801 46.7278C1.23415 45.4132 2.41999 44.1707 3.60204 42.929C6.93775 39.426 10.2497 35.9555 8.22997 31.0491C5.52574 24.484 7.10036 16.7902 12.1079 11.7864ZM47.3686 1.76198C42.4095 8.58599 39.9889 11.9237 41.9321 20.2727L41.9204 20.26C43.2604 25.9432 41.8269 32.2458 37.1997 36.8694C31.3661 42.7023 22.031 44.0005 14.3433 38.7503L19.7026 36.2708C24.6091 38.1962 29.9775 37.351 33.8354 33.4964C37.6936 29.6414 38.5597 24.0258 36.6206 19.3538C36.2519 18.4682 35.1467 18.2465 34.3735 18.8167L18.5972 30.4544L41.1948 7.77272V7.79323L47.7212 1.27272C47.6038 1.43857 47.4859 1.60018 47.3686 1.76198Z" fill="currentColor">

                        </path>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <PageMotion home />
    </>
  );
}
