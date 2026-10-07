"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { usePathname } from "next/navigation";
const primary = [
  ["UX Hub", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Product", "/product"],
  ["Contact", "/contact"],
];
const secondary = [
  ["Product Growth", "/product-growth"],
  ["E-commerce Growth", "/e-commerce-growth"],
  ["Digital Experience", "/digital-experience"],
  ["Insights", "/insights"],
  ["India ↔ KSA", "/markets"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector("button")?.focus();
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (e.key === "Tab") {
        const all = dialog.current?.querySelectorAll("a,button");
        const first = all[0],
          last = all[all.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  return (
    <>
      <header className="site-header">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Link href="/" className="site-brand" aria-label="UX Hub home" onClick={close}>
          <BrandLogo />
        </Link>
        <button
          ref={trigger}
          className="menu-trigger"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>
      {open && (
        <div
          className="menu-layer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={dialog}
            className="menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            id="site-menu"
          >
            <button className="menu-close" onClick={close}>
              Close
            </button>
            <nav>
              <ul className="menu-primary">
                {primary.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={close}
                      aria-current={pathname === href ? "page" : undefined}
                    >
                      {label}
                    </Link>
                    {href === "/product" && (
                      <Link
                        href="/product/price-intelligence"
                        className="menu-product-child"
                        onClick={close}
                        aria-current={pathname === "/product/price-intelligence" ? "page" : undefined}
                      >
                        Price Intelligence
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="menu-secondary">
                {secondary.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} onClick={close}>
                      <span className="menu-secondary-label">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-contacts">
              <Link href="/contact" onClick={close}>
                <span>
                  Start a Conversation
                  <small>Build, launch or grow with UX Hub</small>
                </span>
                <span>↗</span>
              </Link>
              <Link href="/registration" onClick={close}>
                <span>
                  Start Your Free 14-Day Trial
                  <small>Pricing Super Intelligence</small>
                </span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
