import { useState, useEffect, useRef } from "react";
import photo14 from "../../assets-crafto-2026-06-01/JPG/TrainerShowcase/demo-gym-and-fitness-home-14.jpg";
import photo15 from "../../assets-crafto-2026-06-01/JPG/TrainerShowcase/demo-gym-and-fitness-home-15.jpg";
import photo16 from "../../assets-crafto-2026-06-01/JPG/TrainerShowcase/demo-gym-and-fitness-home-16.jpg";

const trainers = [
  { number: "01", name: "Matthew Taylor", role: "Strength Training", rating: "5.0", reviews: "2,070 Reviews", description: "Lorem ipsum dolor sit amet consectetur adipiscing placerat vestibulum vivamus eget ante leo.", socials: ["Fb", "Ig", "Tw"], photo: photo14 },
  { number: "02", name: "Jeremy Dupont", role: "Crossfit Coach", rating: "4.9", reviews: "1,640 Reviews", description: "High-energy training focused on performance, endurance, and total body resilience for all levels.", socials: ["Fb", "Ig", "Tw"], photo: photo15 },
  { number: "03", name: "Daniel James", role: "Personal Training", rating: "4.8", reviews: "1,895 Reviews", description: "Personalized coaching tailored to your goals with precise form guidance and motivation.", socials: ["Fb", "Ig", "Tw"], photo: photo16 },
];

export default function TrainerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = trainers.length;

  const handlePrev = () => setActiveIndex((p) => (p - 1 + total) % total);
  const handleNext = () => setActiveIndex((p) => (p + 1) % total);

  const sectionRef = useRef(null);
  const watermarkRef = useRef(null);

  /* ── Watermark: right → left on scroll ── */
  useEffect(() => {
    let raf;
    const tick = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;

      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Start centred (-50%), drift up to 260 px leftward as section scrolls through
      const xOffset = -(clamped * 260);

      if (watermarkRef.current) {
        watermarkRef.current.style.transform = `translateX(calc(-50% + ${xOffset}px))`;
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white pt-20 text-[#111111]">



      <div className="mx-auto w-full max-w-7xl px-6 ">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* ── LEFT: Slider — slides in from left ── */}
          <div data-anim="left" className="relative overflow-hidden rounded-sm shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {trainers.map((trainer) => (
                <div key={trainer.number} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Info */}
                    <div className="flex flex-col justify-between gap-6 p-8 sm:p-10">
                      <div>
                        <h3 className="text-2xl font-black capitalize"
                          style={{ fontFamily: "var(--font-korolev-condensed)" }}>
                          {trainer.name}
                        </h3>
                        <p className="mt-0.5 text-sm font-semibold text-[#84CC16]"
                          style={{ fontFamily: "var(--font-urbanist)" }}>
                          {trainer.role}
                        </p>
                      </div>
                      <div className="h-px w-full bg-[#E5E7EB]" />
                      <p className="text-sm leading-[1.65] text-[#6B7280]"
                        style={{ fontFamily: "var(--font-urbanist)" }}>
                        {trainer.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-4">
                        <p className="text-2xl font-black"
                          style={{ fontFamily: "var(--font-korolev-condensed)" }}>
                          {trainer.rating}
                        </p>
                        <span className="h-8 w-px bg-[#E5E7EB]" />
                        <div>
                          <div className="flex gap-0.5 text-[#84CC16]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className="text-[13px]">★</span>
                            ))}
                          </div>
                          <p className="text-xs text-[#6B7280]"
                            style={{ fontFamily: "var(--font-urbanist)" }}>
                            {trainer.reviews}
                          </p>
                        </div>
                      </div>

                      {/* Socials */}
                      <div className="flex gap-3">
                        {trainer.socials.map((s) => (
                          <button key={s}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-xs font-semibold text-[#111111] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white">
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Photo */}
                    <div className="group relative min-h-[280px] overflow-hidden border-l border-[#E5E7EB]">
                      <img src={trainer.photo} alt={trainer.name}
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy" />
                      <span
                        className="absolute bottom-4 left-5 text-[64px] font-black leading-none text-white/80"
                        style={{ fontFamily: "var(--font-korolev-condensed)" }}>
                        {trainer.number}.
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Info + nav + list — slides in from right ── */}
          <div data-anim="right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]"
              style={{ fontFamily: "var(--font-urbanist)" }}>
              World class trainer
            </p>
            <h2 className="mt-3 text-[40px] font-black leading-[1.02] sm:text-[50px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}>
              Most popular
              <br />expert trainers<span style={{ color: "#A3E635" }}>.</span>
            </h2>

            {/* Prev / Next */}
            <div className="mt-6 flex items-center gap-3">
              <button onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white"
                aria-label="Previous trainer">
                &#8592;
              </button>
              <button onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white"
                aria-label="Next trainer">
                &#8594;
              </button>
              <span className="ml-2 text-xs text-[#9CA3AF]"
                style={{ fontFamily: "var(--font-urbanist)" }}>
                {activeIndex + 1} / {total}
              </span>
            </div>

            {/* Trainer list */}
            <div className="mt-8 divide-y divide-[#E5E7EB]">
              {trainers.map((trainer, i) => (
                <button key={trainer.number} onClick={() => setActiveIndex(i)}
                  className="group flex w-full items-center gap-4 py-4 text-left transition-opacity hover:opacity-75">
                  <span className="text-xs font-semibold text-[#9CA3AF]"
                    style={{ fontFamily: "var(--font-urbanist)" }}>
                    {trainer.number}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-semibold transition-colors ${i === activeIndex ? "text-[#111111]" : "text-[#9CA3AF]"}`}
                      style={{ fontFamily: "var(--font-urbanist)" }}>
                      {trainer.name}
                    </p>
                  </div>
                  <p className="text-xs text-[#6B7280]"
                    style={{ fontFamily: "var(--font-urbanist)" }}>
                    {trainer.role}
                  </p>
                  <span className="arrow-nudge text-sm text-[#9CA3AF]">&#8594;</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
            {/* ── TICKER BAR ── */}
      <div className="col-span-full border-t border-[#E5E7EB] bg-white">
        <div className="ticker w-full py-4 mt-0 md:mt-6">
          <div className="ticker-track">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="ticker-content text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}
                aria-hidden={i === 1 ? "true" : undefined}
              >
                <span style={{
                  fontFamily: "var(--font-korolev-condensed)",
                  fontSize: "clamp(64px, 12vw, 124px)",
                  fontWeight: 900,
                  color: "transparent",
                  WebkitTextStroke: "0.001px #E5E7EB",
                  letterSpacing: "0.05em",
                  opacity: 0.8,
                  willChange: "transform",
                  transform: "translateX(-50%)",   /* initial centred; JS takes over on scroll */
                }}>
                  FITNESS YOU ENJOY WITH OUR WORKOUT
                </span>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
