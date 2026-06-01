import { useRef } from "react";

const reviews = [
  { name: "Jacob Kalling",  role: "Digital Marketer", rating: "5.0", initials: "JK", text: "We help our clients succeed by creating brand identities and digital experiences that communicate clearly and drive results." },
  { name: "Hannah Owens",   role: "Product Designer", rating: "4.8", initials: "HO", text: "The coaching plan is structured and the trainers help me stay focused and motivated every single week." },
  { name: "Ethan Brooks",   role: "Developer",        rating: "4.9", initials: "EB", text: "Workouts are effective and the environment keeps me motivated to train consistently and push past my limits." },
  { name: "Alicia Moore",   role: "Photographer",     rating: "4.7", initials: "AM", text: "The facilities are clean and the guidance is personal without ever feeling overwhelming or intimidating." },
  { name: "Noah Ellis",     role: "Fitness Coach",    rating: "5.0", initials: "NE", text: "Great community and detailed programs that fit perfectly around my schedule and long-term training goals." },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-white pt-10 pb-20 text-[#111111]">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* ── LEFT: heading + controls ── */}
          <div data-anim="up">
            <div className="inline-flex flex-col items-start">
              <p className="text-sm font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}>Member reviews</p>
              <span className="mt-0.5 h-0.5 w-full bg-[#A3E635]" />
            </div>

            <h2 className="mt-4 text-[44px] font-black leading-[1.02] sm:text-[54px] lg:text-[58px]"
              style={{ fontFamily: "var(--font-korolev-condensed)" }}>
              Members say
              <br />about facilities<span style={{ color: "#A3E635" }}>.</span>
            </h2>

            <div className="mt-3 flex items-center gap-2 text-sm text-[#6B7280]"
              style={{ fontFamily: "var(--font-urbanist)" }}>
              <span>See our 437 reviews on</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#111111]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#A3E635]">
                  <span className="text-[9px] leading-none">★</span>
                </span>
                REVIEWS.io
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button onClick={() => scroll(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white"
                aria-label="Scroll reviews left">&#8592;
              </button>
              <button onClick={() => scroll(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] transition-all hover:border-[#111111] hover:bg-[#111111] hover:text-white"
                aria-label="Scroll reviews right">&#8594;
              </button>
            </div>
          </div>

          {/* ── RIGHT: scrollable review cards ── */}
          <div data-anim="right" className="overflow-hidden">
            <div
              ref={trackRef}
              className="hide-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
            >
              {reviews.map((review) => (
                <div key={review.name} className="snap-start flex-shrink-0 w-[78%] sm:w-[55%]">
                  <div className="card-lift flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg shadow-black/[0.08] ring-1 ring-[#E5E7EB]">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-sm font-bold text-[#6B7280] transition-colors hover:bg-[#A3E635]/20">
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#111111]"
                            style={{ fontFamily: "var(--font-urbanist)" }}>{review.name}</p>
                          <p className="text-xs text-[#9CA3AF]"
                            style={{ fontFamily: "var(--font-urbanist)" }}>{review.role}</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-[#FDE047] px-3 py-1 text-xs font-semibold text-[#111111]">
                        <span>★</span>{review.rating}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-[1.7] text-[#6B7280]"
                      style={{ fontFamily: "var(--font-urbanist)" }}>
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Rating bar ── */}
        <div data-anim="up" data-delay="200"
          className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-[#111111]"
          style={{ fontFamily: "var(--font-urbanist)" }}>
          <div className="flex items-center gap-1 rounded-full bg-[#A3E635] px-4 py-2 text-xs font-bold uppercase text-[#111111] transition-transform hover:scale-105">
            <span>★★★★★</span>
          </div>
          <p>
            Rated <span className="font-semibold">4.8</span> of 5.0 based on{" "}
            <span className="font-semibold">1,058</span> member reviews!
          </p>
        </div>
      </div>
    </section>
  );
}
