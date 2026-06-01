import { useState, useEffect } from "react";

const TRACK_H = 80;

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const dotY = progress * TRACK_H;

  return (
    <>
      {/* ── Scroll progress indicator ── */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2 pointer-events-none select-none">
        <p
          className="text-[10px] font-semibold tracking-[0.35em] text-[#111111]"
          style={{
            fontFamily: "var(--font-urbanist)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          SCROLL
        </p>

        {/* Track */}
        <div className="relative w-px bg-[#D1D5DB]" style={{ height: TRACK_H }}>
          {/* Filled portion */}
          <div
            className="absolute top-0 left-0 w-full bg-[#111111]"
            style={{ height: dotY }}
          />
          {/* Black dot */}
          <div
            className="absolute left-1/2 h-2.5 w-2.5 rounded-full bg-[#111111] shadow-sm"
            style={{
              top: dotY,
              transform: "translate(-50%, -50%)",
              transition: "top 80ms linear",
            }}
          />
        </div>
      </div>

      {/* ── 56+ PRE-BUILT SITES badge ── */}
      <div className="fixed right-4 bottom-6 z-50 hidden lg:flex flex-col items-center gap-1.5 pointer-events-none select-none">
        <div
          className="rounded-sm bg-[#111111] px-2.5 py-1.5"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span
            className="text-[8px] font-black uppercase tracking-[0.22em] text-white"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            56+ PRE-BUILT SITES
          </span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#A3E635]">
          {/* Webflow W mark */}
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
            <path
              d="M11.25 0 8.75 7.5 7.5 3.75 6.25 7.5 3.75 0H0l3.75 11 2.5-4.75L7.5 11l1.25-4.75L11.25 11 15 0z"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
