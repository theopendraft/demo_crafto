import { useState } from "react";
import trainerPhoto from "../public/demo-gym-and-fitness-home-15.jpg";

const trainers = [
  {
    number: "01",
    name: "Matthew taylor",
    role: "Strength training",
    rating: "5.0",
    reviews: "2070 Reviews",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing placerat vestibulum vivamus eget ante."
  },
  {
    number: "02",
    name: "Jeremy dupont",
    role: "Crossfit coach",
    rating: "4.9",
    reviews: "1640 Reviews",
    description:
      "High-energy training focused on performance, endurance, and total body resilience."
  },
  {
    number: "03",
    name: "Daniel james",
    role: "Personal training",
    rating: "4.8",
    reviews: "1895 Reviews",
    description:
      "Personalized coaching tailored to your goals with precise form guidance."
  }
];

export default function TrainerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = trainers.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#111111]">
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[64px] font-black uppercase text-transparent opacity-60 [-webkit-text-stroke:1px_#E5E7EB] md:block md:text-[88px] lg:text-[110px]">
        FITNESS YOU ENJOY WITH OUR WORKOUT
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 ">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] ">
          <div className="relative overflow-hidden shadow-lg">
            <div
              className="flex  transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {trainers.map((trainer) => (
                <div key={trainer.number} className="w-full flex-shrink-0">
                  <div className="relative overflow-hidden  bg-white shadow-sm">
                    <div className="grid gap-0 sm:grid-cols-[1.05fr_0.95fr]">
                      <div className="space-y-5 p-10 min-h-[420px]">
                        <div>
                          <h3 className="font-[var(--font-korolev-condensed)] text-2xl font-black">
                            {trainer.name}
                          </h3>
                          <p className="font-[var(--font-urbanist)] text-sm text-[#84CC16]">
                            {trainer.role}
                          </p>
                        </div>
                        <div className="h-px w-full bg-[#E5E7EB]" />
                        <p className="text-sm text-[#6B7280]">{trainer.description}</p>
                        <div className="flex items-center gap-4">
                          <p className="text-2xl font-black">{trainer.rating}</p>
                          <span className="h-8 w-px bg-[#E5E7EB]" aria-hidden="true" />
                          <div>
                            <div className="flex items-center gap-1 text-[11px] text-[#84CC16]">
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                              <span>★</span>
                            </div>
                            <p className="text-xs text-[#6B7280]">{trainer.reviews}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          {"F I X".split(" ").map((icon) => (
                            <button
                              key={icon}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-xs text-[#111111]"
                            >
                              {icon}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="relative min-h-[260px] border-l border-[#E5E7EB]">
                        <img
                          src={trainerPhoto}
                          alt={`${trainer.name} training`}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute bottom-4 left-6 text-[64px] font-black text-white">
                          {trainer.number}.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <p className="font-[var(--font-urbanist)] text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
              World class trainer
            </p>
            <h2 className="mt-4 font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05] sm:text-5xl">
              Most popular
              <br />
              expert trainers.
            </h2>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB]"
                aria-label="Previous slide"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB]"
                aria-label="Next slide"
              >
                &#8594;
              </button>
            </div>

            <div className="mt-8 divide-y divide-[#E5E7EB]">
              {trainers.map((trainer) => (
                <div key={trainer.number} className="flex items-center gap-4 py-4">
                  <span className="text-xs font-semibold text-[#9CA3AF]">
                    {trainer.number}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-[var(--font-urbanist)] text-sm font-semibold ${
                        trainer.number === trainers[activeIndex].number
                          ? "text-[#111111]"
                          : "text-[#9CA3AF]"
                      }`}
                    >
                      {trainer.name}
                    </p>
                  </div>
                  <p className="text-xs text-[#6B7280]">{trainer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
