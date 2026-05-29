import { useRef } from "react";

const reviews = [
  {
    name: "Jacob Kalling",
    role: "Digital marketer",
    rating: "5.0",
    text:
      "We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate."
  },
  {
    name: "Hannah Owens",
    role: "Product designer",
    rating: "4.8",
    text:
      "The coaching plan is structured and the trainers help me stay focused every week."
  },
  {
    name: "Ethan Brooks",
    role: "Developer",
    rating: "4.9",
    text:
      "Workouts are effective and the environment keeps me motivated to train consistently."
  },
  {
    name: "Alicia Moore",
    role: "Photographer",
    rating: "4.7",
    text:
      "The facilities are clean and the guidance is personal without feeling overwhelming."
  },
  {
    name: "Noah Ellis",
    role: "Fitness coach",
    rating: "5.0",
    text:
      "Great community and detailed programs that fit around my schedule and goals."
  }
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const handlePrev = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: -trackRef.current.clientWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: trackRef.current.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 text-[#111111]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
              <span className="inline-block border-b-2 border-[var(--color-fitness-neon)] pb-1">
                Member reviews
              </span>
            </p>
            <h2 className="mt-4 font-[var(--font-korolev-condensed)] text-5xl font-black leading-[1.02] sm:text-6xl">
              Members say
              <br />
              about facilities.
            </h2>
            <div className="mt-3 flex items-center gap-2 text-sm text-[#6B7280]">
              <span>See our 437 reviews on</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#111111]">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-fitness-neon)]">
                  <span className="text-[10px] leading-none">★</span>
                </span>
                REVIEWS.io
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111111]"
                aria-label="Scroll reviews left"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111111]"
                aria-label="Scroll reviews right"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
            >
              {reviews.map((review) => (
                <div key={review.name} className="snap-start flex-shrink-0 basis-[75%]">
                  <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/10 w-full min-h-[260px]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-full border border-[#E5E7EB] bg-[#F3F4F6]" />
                        <div>
                          <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                            {review.name}
                          </p>
                          <p className="text-sm text-[#9CA3AF]">{review.role}</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-[#FDE047] px-3 py-1 text-xs font-semibold text-[#111111]">
                        <span>★</span>
                        {review.rating}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#6B7280]">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-[#111111]">
          <div className="flex items-center gap-1 rounded-full bg-[var(--color-fitness-neon)] px-4 py-2 text-xs font-semibold uppercase text-[#111111]">
            <span>★★★★★</span>
          </div>
          <p>
            Rated by 4.8 of 5.0 based on members <span className="font-semibold">1058</span>
            reviews!
          </p>
        </div>
      </div>
    </section>
  );
}
