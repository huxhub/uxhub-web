import Link from "next/link";
import ContactEnquiryForm from "@/components/ContactEnquiryForm";

export const metadata = {
  title: "Start a Conversation | UX Hub",
  description: "Tell UX Hub what you are trying to build, launch or grow across India and KSA.",
};

export default function ContactEnquiryPage() {
  return (
    <main className="page-shell-module__L3Btcq__root enquiry-page" id="main">
      <div className="container-module__fR7GYG__root container-module__fR7GYG__full">
        <div className="enquiry-page__top ruled">
          <span className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__color-foreground-50">
            India ↔ KSA
          </span>
        </div>

        <section className="enquiry-page__layout">
          <header className="enquiry-page__intro">
            <p className="text-module__DYGPWq__root text-module__DYGPWq__label-medium text-module__DYGPWq__color-foreground-50 enquiry-page__eyebrow">
              Initiate engagement
            </p>
            <h1 className="text-module__DYGPWq__root text-module__DYGPWq__display-fluid text-module__DYGPWq__weight-medium enquiry-page__title">
              Let&apos;s talk growth.
            </h1>
            <p className="text-module__DYGPWq__root text-module__DYGPWq__body-large text-module__DYGPWq__color-foreground-50 enquiry-page__lede">
              Tell us what you&apos;re trying to build, launch or grow. Share the essentials and our team will continue the conversation with you directly.
            </p>
          </header>

          <div className="enquiry-page__form-wrap">
            <ContactEnquiryForm />
          </div>
        </section>
      </div>
    </main>
  );
}
