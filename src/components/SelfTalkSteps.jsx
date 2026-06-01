import mainImage from "../public/demo-gym-and-fitness-home-11.jpg.webp";
import sideCardImage from "../public/demo-gym-and-fitness-slider-table-03.jpg.webp";

const faqItems = [
  {
    question: "How to raise overall fitness level?",
    answer: "Our mission is to provide you with the ultimate fitness experience — structured programs, expert coaches, and progress tracking that keeps you moving forward.",
  },
  {
    question: "Can we get a natural way to health?",
    answer: "Yes. Consistent training combined with proper nutrition and active recovery is the most effective and sustainable path to lasting natural health.",
  },
  {
    question: "Can I get a special trainer for yoga?",
    answer: "Absolutely. We offer dedicated yoga and mindfulness coaches who tailor sessions to your flexibility level and personal wellness goals.",
  },
];

const steps = [
  { number: "01", title: "Treat yourself",  text: "Our subconscious mind hears the self-talk and responds accordingly." },
  { number: "02", title: "Stay positive",   text: "Learn to release negative thoughts about your body and embrace progress." },
  { number: "03", title: "Love yourself",   text: "Focusing on body love and caring for yourself builds lasting strength." },
];

export default function SelfTalkSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#111111]">
      {/* Background watermark */}
      <div
        className="pointer-events-none absolute bottom-64 left-1/4 hidden text-[#111111] lg:block"
        style={{
          fontFamily: "var(--font-korolev-condensed)",
          fontSize: "clamp(80px, 11vw, 150px)",
          fontWeight: 900,
          letterSpacing: "0.08em",
          opacity: 0.04,
          userSelect: "none",
        }}
      >
        EXERCISE
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── TOP: image + FAQ ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* LEFT: photo — slides in from left */}
          <div data-anim="left" className="relative">
            <div className="group overflow-hidden rounded-sm">
              <img
                src={mainImage}
                alt="Athlete in the gym"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ aspectRatio: "3/4", maxHeight: "560px", objectPosition: "top" }}
                loading="lazy"
              />
            </div>

            {/* Floating activity card */}
            <div className="card-lift absolute -left-4 bottom-8 w-48 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-xl sm:-left-6">
              <div className="relative mx-4 mt-4 h-24 overflow-hidden rounded-lg bg-[#E5E7EB]">
                <img src={sideCardImage} alt="Morning run preview"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy" />
                <button
                  className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-110"
                  aria-label="Play preview"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 1.5L8 5L2 8.5V1.5Z" fill="#111111" />
                  </svg>
                </button>
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-semibold leading-tight text-[#111111]"
                      style={{ fontFamily: "var(--font-urbanist)" }}>Everyday</p>
                    <p className="text-[13px] font-semibold leading-tight text-[#111111]"
                      style={{ fontFamily: "var(--font-urbanist)" }}>morning run</p>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3E635]/20 transition-colors hover:bg-[#A3E635]/40">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21C15.5 17.2 18 14.5 18 11.5C18 8.46 15.54 6 12.5 6C9.46 6 7 8.46 7 11.5C7 14.5 9.5 17.2 13 21" stroke="#111111" strokeWidth="1.4" />
                      <circle cx="12" cy="11.5" r="2" fill="#111111" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#111111] px-3 py-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C15.5 17.2 18 14.5 18 11.5C18 8.46 15.54 6 12.5 6C9.46 6 7 8.46 7 11.5C7 14.5 9.5 17.2 13 21" stroke="#A3E635" strokeWidth="1.6" />
                  <circle cx="12" cy="11.5" r="2" fill="#A3E635" />
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
                  style={{ fontFamily: "var(--font-urbanist)" }}>Activity tracker</span>
              </div>
            </div>
          </div>

          {/* RIGHT: eyebrow + FAQ — slides in from right */}
          <div data-anim="right" className="space-y-6 lg:pt-4">
            <div className="inline-flex flex-col items-start">
              <p className="text-sm font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}>Flexibility and patience</p>
              <span className="mt-0.5 h-0.5 w-full bg-[#A3E635]" />
            </div>

            <h2 className="text-[38px] font-black leading-[1.02] sm:text-[48px] lg:text-[52px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}>
              Fitness you enjoy
              <br />with our workout<span style={{ color: "#A3E635" }}>.</span>
            </h2>

            {/* FAQ accordion — expands on hover */}
            <div className="divide-y divide-[#E5E7EB] rounded-xl border border-[#E5E7EB]">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="group cursor-default px-5 pt-5 pb-4 transition-colors duration-200 hover:bg-[#F9FAFB]"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Question + sliding answer */}
                    <div className="flex-1">
                      <p
                        className="text-sm font-semibold text-[#111111]"
                        style={{ fontFamily: "var(--font-urbanist)" }}
                      >
                        {item.question}
                      </p>

                      {/* Answer expands on hover via max-height transition */}
                      <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-32">
                        <p
                          className="mt-2 text-sm leading-[1.7] text-[#6B7280]"
                          style={{ fontFamily: "var(--font-urbanist)" }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>

                    {/* + icon rotates 45° → × on hover */}
                    <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#A3E635] group-hover:bg-[#A3E635]/10">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2.5V9.5M2.5 6H9.5" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM: intro + Steps ── */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.1fr_repeat(3,1fr)] lg:items-start">

          {/* Intro */}
          <div data-anim="up">
            <p className="text-[34px] font-black leading-[1.05] sm:text-[40px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}>
              Learning how to
              <br />love your body<span style={{ color: "#A3E635" }}>.</span>
            </p>
            <button className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#111111] transition-opacity hover:opacity-70">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3E635]/20 transition-colors group-hover:bg-[#A3E635]/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>Call for joining</span>
            </button>
          </div>

          {/* Steps — staggered */}
          {steps.map((step, i) => (
            <div
              key={step.number}
              data-anim="up"
              data-delay={String((i + 1) * 120)}
              className="group border-t-2 border-[#E5E7EB] pt-6 transition-colors hover:border-[#A3E635]"
            >
              <p
                className="text-[52px] font-black leading-none transition-all duration-300"
                style={{
                  fontFamily: "var(--font-korolev-condensed)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px #A3E635",
                }}
              >
                {step.number}
              </p>
              <p className="mt-4 text-base font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}>{step.title}</p>
              <p className="mt-2 text-sm leading-[1.65] text-[#6B7280]"
                style={{ fontFamily: "var(--font-urbanist)" }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
