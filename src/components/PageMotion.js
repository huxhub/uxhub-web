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
    document
      .querySelectorAll('[class*="wipe-button"][class*="root"]')
      .forEach((el) => el.classList.add("local-wipe"));
    document.querySelectorAll("main").forEach((el) => {
      el.id = "main";
    });
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
      window.removeEventListener("scroll", updateTheme);
    };
  }, [pathname, home]);
  return null;
}
