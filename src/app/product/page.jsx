import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import PageMotion from "@/components/PageMotion";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("product");

export default function ProductPage() {
  return (
    <>
      <StructuredData data={pageSchemas("product")} />
      <main className="page-shell-module__L3Btcq__root">
        <div className="container-module__fR7GYG__root container-module__fR7GYG__full">
          <div className="page-title-module__wYBNpq__inner ruled">
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium page-title-module__wYBNpq__title">
              Products
            </h1>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 page-title-module__wYBNpq__body">
              Explore products built for digital business growth.
            </p>
          </div>
        </div>
        <section id="price-intelligence" className="section-shell-module__wD-FXq__root">
          <div className="container-module__fR7GYG__root container-module__fR7GYG__full section-shell-module__wD-FXq__inner section-shell-module__wD-FXq__full capability-section-module__eDmFjG__root">
            <div className="group-module__k4-mDG__group capability-section-module__eDmFjG__header">
              <p className="text-module__DYGPWq__root text-module__DYGPWq__headline-large text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__number">
                01 — OUR PRODUCTS
              </p>
              <h2 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium capability-section-module__eDmFjG__title">
                Price Intelligence
              </h2>
              <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 capability-section-module__eDmFjG__body">
                Monitor competitor prices across the GCC. Get alerted when prices change. Make faster, data-driven pricing decisions.
              </p>
              <Link className="wipe-button-module__-tlSna__root disclosure-list-module__SPVnsG__link" href="/product/price-intelligence">
                <span className="wipe-button-module__-tlSna__content">
                  <span className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__weight-medium">
                    Explore Price Intelligence
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
