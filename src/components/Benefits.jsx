import { useEffect, useRef } from "react";
import mainSlideImage from "../public/demo-gym-and-fitness-home-01.jpg.webp";
import dumbbellImage from "../public/demo-gym-and-fitness-home-02.png.webp";
import kettlebellImage from "../public/demo-gym-and-fitness-home-03.png.webp";
import badgeImage from "../public/demo-gym-and-fitness-home-04.png.webp";

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 10H4V14H6V10ZM20 10H18V14H20V10ZM9 7H7V17H9V7ZM17 7H15V17H17V7ZM13 9H11V15H13V9Z" fill="#111111" />
      </svg>
    ),
    title: "Professional trainer",
    desc: "Expert coaches guide every session.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#111111" strokeWidth="1.4" />
        <path d="M8 6L14 10L8 14V6Z" fill="#111111" />
      </svg>
    ),
    title: "Practice videos",
    desc: "On-demand library for every level.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#111111" strokeWidth="1.4" />
        <path d="M12 7V12L15 15" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Flexible schedule",
    desc: "Train whenever it fits your day.",
  },
];

export default function Benefits() {
  const sectionRef    = useRef(null);
  const dumbbellRef   = useRef(null);
  const kettlebellRef = useRef(null);
  const watermarkRef  = useRef(null);

  /* ── Parallax: dumbbell & kettlebell drift upward on scroll ── */
  useEffect(() => {
    let raf;

    const tick = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Only compute while section is anywhere near the viewport
      if (rect.bottom > -100 && rect.top < window.innerHeight + 100) {
        // progress: 0 when section enters from bottom → 1 when it exits from top
        const progress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));

        // Different speeds create a sense of depth
        const yDb = -(clamped * 170);   // dumbbell  — up to 72 px up
        const yKb = -(clamped * 170);   // kettlebell — up to 52 px up
        // Watermark drifts right → left: starts at 0, moves ≈ 220 px left across the scroll window
        const xWm = -(clamped * 220);

        if (dumbbellRef.current) {
          dumbbellRef.current.style.transform = `rotate(25deg) translateY(${yDb}px)`;
        }
        if (kettlebellRef.current) {
          kettlebellRef.current.style.transform = `translateY(${yKb}px)`;
        }
        if (watermarkRef.current) {
          watermarkRef.current.style.transform = `translateX(${xWm}px)`;
        }
      }
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick(); // set initial position without waiting for first scroll
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 text-[#111111]">
      {/* Background watermark — drifts right → left on scroll */}
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute bottom-72 right-52 hidden text-[#111111] lg:block"
        style={{
          fontFamily: "var(--font-korolev-condensed)",
          fontSize: "clamp(100px, 11vw, 160px)",
          fontWeight: 900,
          letterSpacing: "0.08em",
          opacity: 0.04,
          userSelect: "none",
          willChange: "transform",
          transform: "translateX(0px)",
        }}
      >
        WORKOUT
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── TOP ROW ── */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* Image column */}
          <div data-anim="left" className="relative">

            {/* ── Dumbbell — parallax target (rotate applied via JS) ── */}
            <div
              ref={dumbbellRef}
              className="absolute -left-0 top-16 z-10 hidden lg:block"
              style={{ willChange: "transform", transform: "rotate(25deg) translateY(0px)" }}
            >
              <img
                src={dumbbellImage}
                alt=""
                aria-hidden="true"
                className="h-32 w-32 object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>

            {/* Main photo with zoom-on-hover */}
            <div className="group relative overflow-visible">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={mainSlideImage}
                  alt="Athlete training session"
                  className="w-full p-14 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Circular badge */}
              {/* <div className="badge-hover absolute -bottom-7 -right-7 z-10 h-28 w-28">
                <img
                  src={badgeImage}
                  alt="Workout program made for you"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div> */}
            </div>

            {/* ── Kettlebell — parallax target ── */}
            <div
              ref={kettlebellRef}
              className="absolute -bottom-14 -right-8 z-10 hidden lg:block"
              style={{ willChange: "transform", transform: "translateY(0px)" }}
            >
              <img
                src={kettlebellImage}
                alt=""
                aria-hidden="true"
                className="h-44 w-44 object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text column */}
          <div data-anim="right" className="space-y-6 lg:pl-6">
            <div className="inline-flex flex-col items-start">
              <p
                className="text-sm font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Grow your fitness strength
              </p>
              <span className="mt-0.5 h-0.5 w-full bg-[#A3E635]" />
            </div>

            <h2
              className="text-[40px] font-black leading-[1.02] sm:text-[50px] lg:text-[55px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}
            >
              Workout program
              <br />
              made for you
              <span style={{ color: "#A3E635" }}>.</span>
            </h2>

            <p
              className="max-w-md text-[15px] leading-[1.75] text-[#6B7280]"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor
              incididunt labore dolore magna ut enim ad minim veniam ut
              exercitation ullamco commodo consequat.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-lift rounded-md bg-[#111111] px-6 py-3 text-[11px] font-black uppercase tracking-[0.25em] text-white">
                ABOUT MORE
              </button>
              <button className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#111111]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111111] transition-colors group-hover:bg-[#111111]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 1.5L8 5L2 8.5V1.5Z"
                      fill="#111111"
                      className="transition-colors group-hover:fill-white"
                    />
                  </svg>
                </span>
                HOW IT WORKS
              </button>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW: "Why choose us" ── */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">

          <div data-anim="up" className="space-y-4">
            <div className="inline-flex flex-col items-start">
              <p
                className="text-sm font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Why choose us?
              </p>
              <span className="mt-0.5 h-0.5 w-full bg-[#A3E635]" />
            </div>
            <h3
              className="text-[38px] font-black leading-[1.02] sm:text-[48px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}
            >
              Many healthy
              <br />
              benefits for you
              <span style={{ color: "#A3E635" }}>.</span>
            </h3>
          </div>

          <div
            data-anim="up"
            data-delay="150"
            className="divide-y divide-[#E5E7EB] rounded-lg border border-[#E5E7EB]"
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group flex cursor-default items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-[#F9FAFB]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                    {b.icon}
                  </div>
                  <span className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
                  <div>
                    <p
                      className="text-sm font-semibold text-[#111111]"
                      style={{ fontFamily: "var(--font-urbanist)" }}
                    >
                      {b.title}
                    </p>
                    <p className="mt-0.5 text-sm text-[#6B7280]">{b.desc}</p>
                  </div>
                </div>
                <span className="arrow-nudge flex-shrink-0 text-lg text-[#111111]">
                  &#8594;
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
