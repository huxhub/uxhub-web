"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function PageMotion({ home }) {
  const pathname = usePathname();
  useEffect(() => {
    const groups = document.querySelectorAll(
      '[class*="group-module"], [class*="infrastructure-module"][class*="root"]',
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in-view", "");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.06 },
    );
    groups.forEach((el) => observer.observe(el));
    document.querySelectorAll("main").forEach((el) => {
      el.id = "main";
    });
    const disclose = (event) => {
      const button = event.target.closest(
        'button[class*="disclosure-list"][aria-controls]',
      );
      if (!button) return;
      const expanded = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(expanded));
      button.parentElement.dataset.open = String(expanded);
      const panel = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      if (panel) panel.inert = !expanded;
    };
    document.addEventListener("click", disclose);
    const updateTheme = () => {
      const infrastructure = document.getElementById("infrastructure");
      const dark =
        home &&
        infrastructure &&
        infrastructure.getBoundingClientRect().top < innerHeight * 0.55;
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      document.documentElement.dataset.headerTone =
        document.querySelector("main")?.dataset.headerTone || "light";
    };
    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    return () => {
      observer.disconnect();
      document.removeEventListener("click", disclose);
      window.removeEventListener("scroll", updateTheme);
    };
  }, [pathname, home]);
  return null;
}
