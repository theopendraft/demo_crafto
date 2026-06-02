import heroImage from "../public/demo-gym-and-fitness-slider-table-01.jpg.webp";
import previewImage from "../public/demo-gym-and-fitness-slider-table-02.jpg.webp";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section className="relative w-full bg-white text-[#111111]">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: "100svh" }}>
        <NavBar />

        {/* ── LEFT PANEL — wipes in from left on load ── */}
        <div
          className="hero-panel-reveal relative col-span-1 overflow-hidden bg-gradient-to-r from-gray-300 to-white lg:col-span-7"
          style={{ minHeight: "90vh" }}
        >
          {/* WORKOUT vertical watermark */}
          <div
            className="pointer-events-none absolute inset-y-0 left-2 hidden lg:flex items-center justify-center z-0"
            style={{ width: "3.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-korolev-condensed)",
                fontSize: "clamp(190px, 11vw, 350px)",
                fontWeight: 900,
                lineHeight: 1,
                color: "rgb(233, 233, 233)",
                letterSpacing: "0.1em",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              WORKOUT
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full items-center px-6 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pl-24 lg:pr-10 lg:pt-40">
            <div className="w-full max-w-lg">

              {/* WOW badge */}
              <div className="hero-in hero-d1 inline-flex items-center gap-3 rounded-[6px] bg-black/5 px-4 py-2">
                <span className="rounded-[4px] bg-[#111111] px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                  WOW
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.25em] text-[#111111]"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  GET MORE BENEFIT BY JOINING
                </span>
              </div>

              {/* Headline */}
              <h1
                className="hero-in hero-d2 mt-8 text-[40px] font-black leading-[0.94] sm:text-[60px] lg:text-[80px]"
                style={{ fontFamily: "var(--font-korolev-condensed)" }}
              >
                Dream body
                <br />
                with fitness
                <span style={{ color: "#A3E635" }}>.</span>
              </h1>

              {/* Description */}
              <p
                className="hero-in hero-d3 mt-6 max-w-md text-[15px] leading-[1.7] text-[#6B7280]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                Want your body to be healthy, join our program with directions
                according to your body's goals.
              </p>

              {/* CTA buttons */}
              <div className="hero-in hero-d4 mt-8 flex flex-wrap gap-4">
                <button className="btn-glow rounded-[6px] bg-[#A3E635] px-7 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#111111]">
                  START NOW
                </button>
                <button className="group flex items-center gap-3 rounded-[6px] border border-[#E5E7EB] bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.3em] text-[#111111] transition-colors hover:bg-[#F9F9F9]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#111111] transition-colors group-hover:bg-[#111111]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 1.5L8 5L2 8.5V1.5Z" className="transition-colors group-hover:fill-white" fill="#111111" />
                    </svg>
                  </span>
                  TRAINING DEMO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — image ── */}
        <div
          className="hero-in-fade hero-d1 relative col-span-1 overflow-hidden bg-[#111111] lg:col-span-5"
          style={{ minHeight: "50vh" }}
        >
          <img
            src={heroImage}
            alt="Athlete training outdoors"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            loading="eager"
          />

          {/* PREV / NEXT */}
          <div className="absolute bottom-0 right-0 flex">
            <button
              className="flex h-20 w-20 items-center justify-center bg-[#A3E635] text-[10px] font-black uppercase tracking-[0.3em] text-[#111111] transition-all hover:brightness-110 hover:-translate-y-0.5"
              aria-label="Previous slide"
            >
              PREV
            </button>
            <button
              className="relative flex h-20 w-24 items-center justify-center overflow-hidden bg-[#111111] text-[10px] font-black uppercase tracking-[0.3em] text-white transition-all hover:brightness-125"
              aria-label="Next slide"
            >
              <img
                src={previewImage}
                alt="Preview of next slide"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity hover:opacity-80"
              />
              <div className="absolute inset-2 border border-dashed border-white/50" />
              <span className="relative z-10">NEXT</span>
            </button>
          </div>
        </div>

        {/* ── TICKER BAR ── */}
        <div className="col-span-full border-t border-[#E5E7EB] bg-white h-16">
          <div className="ticker w-full py-4">
            <div className="ticker-track">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="ticker-content text-[16px] font-semibold uppercase tracking-[0.28em] text-[#111111]"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                  aria-hidden={i === 1 ? "true" : undefined}
                >
                  <span style={{ fontFamily: "var(--font-korolev-condensed)", fontSize: "16px" }}>
                    ALL PLANS
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full border border-[#A3E635]" />
                  <span>OUR GYM HAS BEEN PRESENT FOR OVER 20 YEARS</span>
                  <span className="h-1.5 w-1.5 rounded-full border border-[#A3E635]" />
                  <span>JOIN THE 10000+ PERSON TRUSTING US</span>
                  <span className="h-1.5 w-1.5 rounded-full border border-[#A3E635]" />
                  <span>SUBSCRIBE CRAFTO FITNESS AND GET A SPECIAL DISCOUNT</span>
                  <span className="h-1.5 w-1.5 rounded-full border border-[#A3E635]" />
                  <span>WE WORKING LAST 25 YEARS</span>
                  <span className="h-1.5 w-1.5 rounded-full border border-[#A3E635]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
