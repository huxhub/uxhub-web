"use client";
import { useEffect, useRef } from "react";
import { philosophy, fund, infrastructure } from "@/lib/backdrop-presets";
export default function Effects({ kind, className }) {
  const ref = useRef(null);
  useEffect(() => {
    let disposed = false,
      renderer,
      frame;
    const cleanups = [];
    const canvas = ref.current;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    import("@/lib/reference-effects").then(
      ({ createHero, createSwirl, swirlAt }) => {
        if (disposed) return;
        try {
          const ready = () => {
            canvas.dataset.active = "true";
            canvas.dataset.ready = "true";
            canvas.parentElement
              ?.querySelector("svg")
              ?.classList.add("effect-fallback-hidden");
          };
          if (kind === "hero") {
            renderer = createHero(canvas, {
              intro: !reduced,
              onActive: ready,
              onError: () => {
                canvas.hidden = true;
              },
            });
            if (reduced) {
              const stop = setTimeout(
                () =>
                  renderer?.setParams({
                    repetition: 1.79,
                    softness: 1,
                    shiftRed: 0.61,
                    shiftBlue: 0.33,
                    shadowBlue: 0.075,
                    distortion: 0.07,
                    contour: 0.97,
                    angle: 0,
                    flow: 1,
                    speed: 0,
                  }),
                500,
              );
              cleanups.push(() => clearTimeout(stop));
            }
          } else {
            const preset = className.includes("t-shaped")
              ? philosophy
              : className.includes("i4vcuW")
                ? infrastructure
                : className.includes("PvMqaq")
                  ? fund
                  : swirlAt(0);
            renderer = createSwirl(canvas, preset, {
              animated: !reduced,
              onReady: ready,
            });
            const band = canvas.closest("[data-swirl-band]");
            let target = 0,
              current = 0,
              last = 0;
            const animate = (time) => {
              const delta = Math.min((time - last) / 1000, 0.1);
              last = time;
              current += (target - current) * (1 - Math.exp(-delta * 3));
              if (Math.abs(target - current) < 0.0001) current = target;
              renderer.setParams(swirlAt(current));
              frame = current !== target ? requestAnimationFrame(animate) : 0;
            };
            const update = () => {
              if (!band) return;
              const y = scrollY,
                top = band.getBoundingClientRect().top + y;
              const stops = [
                top,
                ...[
                  "capabilities",
                  "proprietary-investments",
                  "infrastructure",
                ].map((id) => {
                  const el = document.getElementById(id);
                  return el
                    ? el.getBoundingClientRect().top + y + el.offsetHeight / 2
                    : top;
                }),
                top + band.offsetHeight,
              ];
              const center = y + innerHeight / 2;
              let i = 0;
              while (i < stops.length - 2 && center >= stops[i + 1]) i++;
              target = Math.max(
                0,
                Math.min(
                  4,
                  i + (center - stops[i]) / (stops[i + 1] - stops[i]),
                ),
              );
              if (!frame) {
                last = performance.now();
                frame = requestAnimationFrame(animate);
              }
            };
            update();
            window.addEventListener("scroll", update, { passive: true });
            window.addEventListener("resize", update);
            cleanups.push(() => {
              window.removeEventListener("scroll", update);
              window.removeEventListener("resize", update);
            });
          }
        } catch (error) {
          console.warn("Visual effect unavailable:", error);
          canvas.hidden = true;
        }
      },
    );
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cleanups.forEach((fn) => fn());
      renderer?.dispose();
    };
  }, [kind, className]);
  return (
    <canvas
      ref={ref}
      className={className}
      data-active="false"
      data-ready="false"
      aria-hidden="true"
    />
  );
}
