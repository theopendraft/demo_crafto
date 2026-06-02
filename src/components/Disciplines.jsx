import { useState, useEffect, useRef } from "react";
import circularLabelImage from "../public/demo-gym-and-fitness-home-04.png.webp";
import centerLabelImage from "../public/demo-gym-and-fitness-home-03.png.webp";
import strengthImage from "../../assets-crafto-2026-06-01/JPG/disciplines/demo-gym-and-fitness-home-06.jpg";
import crossfitImage from "../../assets-crafto-2026-06-01/JPG/disciplines/demo-gym-and-fitness-home-07.jpg";
import balanceImage from "../../assets-crafto-2026-06-01/JPG/disciplines/demo-gym-and-fitness-home-08.jpg";
import cardioImage from "../../assets-crafto-2026-06-01/JPG/disciplines/demo-gym-and-fitness-home-09.jpg";
import meditationImage from "../../assets-crafto-2026-06-01/JPG/disciplines/demo-gym-and-fitness-home-10.jpg";

const slides = [
  { label: "Strength",  kicker: "Upstanding strength",    title: "Strength training benefits for you",  description: "Our primary goal is to create awareness and easy access to keep your body strong and resilient.", watermark: "Strength",  image: strengthImage  },
  { label: "Crossfit",  kicker: "High intensity training", title: "Crossfit training benefits for you",  description: "Challenge your limits with high-intensity functional training built for balance and endurance.",   watermark: "Crossfit",  image: crossfitImage  },
  { label: "Balance",   kicker: "Core stability",          title: "Balance training benefits for you",   description: "Create stability and control with focused balance work to support daily performance.",            watermark: "Balance",   image: balanceImage   },
  { label: "Cardio",    kicker: "Endurance boost",         title: "Cardio training benefits for you",    description: "Build endurance with structured cardio sessions that boost stamina and recovery.",              watermark: "Cardio",    image: cardioImage    },
  { label: "Meditation",kicker: "Mind & body",             title: "Meditation benefits for you",         description: "Restore focus with guided meditation and breath control sessions for total well-being.",        watermark: "Meditation",image: meditationImage},
];

export default function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = slides[activeIndex];

  const sectionRef = useRef(null);
  const badgeRef   = useRef(null);

  /* ── Badge: scroll-driven rotation ── */
  useEffect(() => {
    let raf;
    const tick = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;

      // progress: 0 entering from bottom → 1 exiting from top
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped  = Math.max(0, Math.min(1, progress));
      // Full 360° rotation across the scroll window
      const deg = clamped * 360;

      if (badgeRef.current) {
        badgeRef.current.style.transform = `rotate(${deg}deg)`;
      }
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-28 lg:py-40 text-[#111111]">
      <div className="mx-auto w-full max-w-full">
        <div data-anim="up" className="relative pt-14 pl-10 lg:pt-16 lg:pl-14">

          {/* Circular badge — rotates on scroll */}
          <div className="absolute -left-8 -top-8 z-20 h-24 w-24 lg:h-44 lg:w-44">
            <img
              ref={badgeRef}
              src={circularLabelImage}
              alt="Workout program made for you"
              className="h-full w-full rounded-full object-contain"
              style={{ willChange: "transform", transform: "rotate(0deg)" }}
              loading="lazy"
            />
            {/* Center image inside the circular badge */}
            <img
              src={centerLabelImage}
              alt="Center label"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full object-contain lg:h-20 lg:w-20"
              loading="lazy"
            />
          </div>

          {/* Main card */}
          <div className="overflow-hidden rounded-sm border border-[#E5E7EB] h-full">

            {/* Content panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

              {/* LEFT: text + pricing */}
              <div className="bg-[#F6F7F5] p-8 sm:p-10 lg:p-12 flex flex-col justify-center h-full">
                <div className="inline-flex flex-col items-start">
                  <p className="text-sm font-semibold text-[#111111]"
                    style={{ fontFamily: "var(--font-urbanist)" }}>
                    {active.kicker}
                  </p>
                  <span className="mt-0.5 h-0.5 w-32 bg-[#A3E635] transition-all duration-300" />
                </div>

                <h2
                  className="mt-4 text-[36px] font-black leading-[1.04] sm:text-[44px] lg:text-[48px] transition-all duration-300"
                  style={{ fontFamily: "var(--font-korolev-condensed)" }}
                >
                  {active.title}<span style={{ color: "#A3E635" }}>.</span>
                </h2>

                <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-[#6B7280] transition-all duration-300"
                  style={{ fontFamily: "var(--font-urbanist)" }}>
                  {active.description}
                </p>

                {/* Pricing */}
                <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-white p-5 transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-[#111111]" style={{ fontFamily: "var(--font-urbanist)" }}>
                      Yearly <span className="text-base font-semibold">$699.00</span>
                    </p>
                    <span className="rounded-full bg-[#A3E635] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">
                      SAVE 20%
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-[#9CA3AF]" style={{ fontFamily: "var(--font-urbanist)" }}>
                  Get your{" "}
                  <span className="font-semibold underline underline-offset-4">first payment today</span> and start now.
                </p>

                <button className="btn-glow w-44 mt-6 rounded-md bg-[#111111] px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-white">
                  JOIN TODAY!
                </button>
              </div>

              {/* RIGHT: image */}
              <div className="group relative min-h-[380px] overflow-hidden bg-[#E8EEE9] lg:min-h-[620px]">
                <img
                  key={active.label}
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.04]"
                  style={{ animation: "heroFade 0.4s ease both" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-8 select-none">
                  <span
                    className="text-[64px] font-black text-white/60 sm:text-[88px]"
                    style={{ fontFamily: "var(--font-korolev-condensed)" }}
                  >
                    {active.watermark}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Tabs ── */}
            <div className="flex overflow-x-auto hide-scrollbar items-stretch border-t border-[#E5E7EB] bg-white">
              {slides.map((slide, i) => (
                <div key={slide.label} className="flex flex-1 items-stretch min-w-[70px]">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex-1 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors duration-200 ${
                      i === activeIndex
                        ? "text-[#111111]"
                        : "text-[#9CA3AF] hover:text-[#6B7280]"
                    }`}
                  >
                    {i === activeIndex && (
                      <span className="absolute left-0 right-0 top-0 h-[2px] bg-[#111111] transition-all duration-300" />
                    )}
                    <span className="block text-center">{slide.label}</span>
                  </button>
                  {i < slides.length - 1 && (
                    <span className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
