import heroImage from "../public/demo-gym-and-fitness-slider-table-01.jpg.webp";
import NavBar from "./NavBar";

export default function Hero() {
  const previewImage =
    "https://images.unsplash.com/photo-1546484959-f21f98ebec3a?auto=format&fit=crop&w=600&q=80";

  return (
    <section className="relative w-full bg-white text-[#111111]">
      <div className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
        <NavBar />

        <div className="relative col-span-1 min-h-screen bg-white lg:col-span-7">
          <div className="relative h-full px-6 pb-12 pt-28 lg:pt-32 lg:pr-12">
            <div className="pointer-events-none absolute -left-48 top-16 -z-10 hidden lg:block">
              <span className="type-large-title block -rotate-90 text-[#111111]/10">
                WORKOUT
              </span>
            </div>
            <div className="flex h-full items-center px-28">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-4 rounded-[6px] bg-black/5 px-4 py-2">
                <span className="rounded-[4px] bg-[#111111] px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  WOW
                </span>
                <span className="font-[var(--font-urbanist)] text-[11px] uppercase tracking-[0.25em] text-[#111111]">
                  GET MORE BENEFIT BY JOINING
                </span>
              </div>

              <h1 className="mt-8 font-[var(--font-korolev-condensed)] text-[52px] font-black leading-[0.98] sm:text-[60px] lg:text-[68px]">
                Dream body with fitness
                <span className="text-[var(--color-fitness-neon)]">.</span>
              </h1>

              <p className="mt-4 max-w-xl font-[var(--font-urbanist)] text-[15px] leading-[1.7] text-[#6B7280]">
                Want your body to be healthy, join our program with directions according to
                your body's goals.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-[6px] bg-[var(--color-fitness-neon)] px-7 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#111111]">
                  START NOW
                </button>
                <button className="flex items-center gap-3 rounded-[6px] border border-[#E5E7EB] bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#111111]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#111111]">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 1.5L8 5L2 8.5V1.5Z" fill="#111111" />
                    </svg>
                  </span>
                  TRAINING DEMO
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="relative col-span-1 min-h-[420px] overflow-hidden bg-[#111111] lg:col-span-5 lg:min-h-screen">
          <img
            src={heroImage}
            alt="Athlete taking a break outdoors"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute bottom-0 right-0 flex">
            <button
              className="flex h-24 w-24 items-center justify-center bg-[var(--color-fitness-neon)] text-[11px] font-black uppercase tracking-[0.3em] text-[#111111]"
              aria-label="Previous slide"
            >
              PREV
            </button>
            <button
              className="relative flex h-24 w-[112px] items-center justify-center overflow-hidden bg-[#111111] text-[11px] font-black uppercase tracking-[0.3em] text-white"
              aria-label="Next slide"
            >
              <img
                src={previewImage}
                alt="Preview"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-2 border border-dashed border-white/60" />
              <span className="relative z-10">NEXT</span>
            </button>
          </div>
        </div>

        <div className="col-span-full border-t border-[#E5E7EB] bg-white">
          <div className="ticker mx-auto w-full max-w-6xl px-6 py-4">
            <div className="ticker-track">
              <div className="ticker-content font-[var(--font-urbanist)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111111]">
                <span className="font-[var(--font-korolev-condensed)] text-[12px]">L PLANS</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>OUR GYM HAS BEEN PRESENT FOR OVER 20 YEARS</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>JOIN THE 10000+ PERSON TRUSTING US</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>SUBSCRIBE CRAFTO FITNESS AND GET A SPECIAL DISCOUNT</span>
              </div>
              <div
                className="ticker-content font-[var(--font-urbanist)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[#111111]"
                aria-hidden="true"
              >
                <span className="font-[var(--font-korolev-condensed)] text-[12px]">L PLANS</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>OUR GYM HAS BEEN PRESENT FOR OVER 20 YEARS</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>JOIN THE 10000+ PERSON TRUSTING US</span>
                <span className="h-1.5 w-1.5 rounded-full border border-[var(--color-fitness-neon)] bg-transparent" />
                <span>SUBSCRIBE CRAFTO FITNESS AND GET A SPECIAL DISCOUNT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
