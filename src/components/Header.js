"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const primary = [
  ["Cypher", "/"],
  ["Philosophy", "/philosophy"],
  ["Capabilities", "/capabilities"],
  ["AI Infrastructure", "/ai-infrastructure"],
  ["Access Formats", "/access-formats"],
];
const secondary = [
  ["Digital Multi-Strategy Fund", "/digital-multi-strategy-fund"],
  ["Leadership", "/leadership"],
  ["Risk Management", "/risk-management"],
  ["Insights", "/insights"],
  ["Global presence", "/global-presence"],
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
        <Link href="/" className="site-brand" onClick={close}>
          <svg viewBox="138.743 140 296.581 177.528" aria-hidden="true">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M370.052 140C406.097 140 435.322 169.22 435.324 205.265C435.324 241.311 406.099 270.536 370.052 270.536H334.468C324.776 270.537 315.48 274.388 308.626 281.242L289.163 300.706C278.392 311.476 263.781 317.527 248.549 317.528H204.007C167.963 317.526 138.744 288.308 138.743 252.263C138.743 216.218 167.962 186.993 204.007 186.991H239.591C249.285 186.991 258.585 183.14 265.44 176.286L284.904 156.822C295.675 146.051 310.285 140 325.517 140H370.052ZM334.468 176.547C324.776 176.548 315.48 180.4 308.626 187.253L293.745 202.134C280.037 215.841 261.446 223.544 242.061 223.545H204.007C188.149 223.547 175.29 236.404 175.29 252.263C175.291 268.122 188.149 280.979 204.007 280.98H239.591C249.285 280.98 258.585 277.129 265.44 270.275L280.315 255.393C294.024 241.685 312.619 233.989 332.005 233.989H370.052C385.913 233.989 398.77 221.125 398.77 205.265C398.767 189.406 385.911 176.547 370.052 176.547H334.468Z"
            />
          </svg>
          <span>Cypher Capital</span>
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
                  </li>
                ))}
              </ul>
              <ul className="menu-secondary">
                {secondary.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} onClick={close}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-contacts">
              <a href="mailto:info@cyphercapital.com">
                <span>
                  info@cyphercapital.com<small>For general questions</small>
                </span>
                <span>↗</span>
              </a>
              <a href="mailto:ir@cyphercapital.com">
                <span>
                  ir@cyphercapital.com<small>For investor relations</small>
                </span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
