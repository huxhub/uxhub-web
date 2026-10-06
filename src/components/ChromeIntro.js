"use client";
import { useEffect, useRef, useState } from "react";
export default function ChromeIntro() {
  const root = useRef(null),
    canvas = useRef(null);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.current.style.display = "none";
      return;
    }
    let disposed = false,
      ended = false,
      renderer;
    const timers = [];
    const release = () => {
      document.documentElement.removeAttribute("data-entry");
      document.documentElement.removeAttribute("data-intro-playing");
      window.dispatchEvent(new Event("cypher:intro-finished"));
    };
    document.documentElement.setAttribute("data-entry", "");
    document.documentElement.setAttribute("data-intro-playing", "");
    const end = () => {
      if (disposed || ended) return;
      ended = true;
      release();
      root.current?.classList.add("docking");
      canvas.current?.classList.add("docking");
      timers.push(
        setTimeout(() => {
          if (!disposed) setFinished(true);
          renderer?.dispose();
          renderer = null;
        }, 850),
      );
    };
    // Finish even on devices that cannot create a WebGL context.
    timers.push(setTimeout(end, 3100));
    import("@/lib/reference-effects").then(({ createChrome }) => {
      if (disposed) return;
      try {
        renderer = createChrome(canvas.current, {
          width: 420,
          height: 280,
          onLive: (live) => {
            if (live) {
              timers.push(setTimeout(end, 1600));
            }
          },
        });
        if (!renderer) end();
      } catch {
        end();
      }
    });
    return () => {
      disposed = true;
      timers.forEach(clearTimeout);
      renderer?.dispose();
      release();
    };
  }, []);
  if (finished) return null;
  return (
    <div ref={root} className="chrome-intro" aria-hidden="true">
      <span>Cypher</span>
      <canvas ref={canvas} />
      <span>Capital</span>
    </div>
  );
}
