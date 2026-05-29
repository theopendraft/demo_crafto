import { useState } from "react";
import circularLabelImage from "../public/demo-gym-and-fitness-home-04.png.webp";
import strengthImage from "../public/demo-gym-and-fitness-home-06.jpg.webp";
import crossfitImage from "../public/demo-gym-and-fitness-home-15.jpg";
import balanceImage from "../public/demo-gym-and-fitness-home-11.jpg.webp";
import cardioImage from "../public/demo-gym-and-fitness-slider-table-03.jpg.webp";
import meditationImage from "../public/demo-gym-and-fitness-slider-table-01.jpg.webp";

const slides = [
  {
    label: "Strength",
    kicker: "Upstanding strength",
    title: "Strength training benefits for you",
    description:
      "Our primary goal is to create awareness and easy access to keep your body.",
    watermark: "Strength",
    image: strengthImage
  },
  {
    label: "Crossfit",
    kicker: "Upstanding strength",
    title: "Crossfit training benefits for you",
    description:
      "Challenge your limits with high-intensity functional training built for balance and endurance.",
    watermark: "Crossfit",
    image: crossfitImage
  },
  {
    label: "Balance",
    kicker: "Upstanding strength",
    title: "Balance training benefits for you",
    description:
      "Create stability and control with focused balance work to support daily performance.",
    watermark: "Balance",
    image: balanceImage
  },
  {
    label: "Cardio",
    kicker: "Upstanding strength",
    title: "Cardio training benefits for you",
    description:
      "Build endurance with structured cardio sessions that boost stamina and recovery.",
    watermark: "Cardio",
    image: cardioImage
  },
  {
    label: "Meditation",
    kicker: "Upstanding strength",
    title: "Meditation benefits for you",
    description:
      "Restore focus with guided meditation and breath control sessions.",
    watermark: "Meditation",
    image: meditationImage
  }
];

export default function Disciplines() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <section className="bg-white py-16 text-[#111111]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative">
          <div className="absolute left-0 top-0 z-20 -translate-x-1/3 -translate-y-1/3">
            <div className="flex h-54 w-54 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
              <img
                src={circularLabelImage}
                alt="Workout program label"
                className="h-52 w-52 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border-b border-[#E5E7EB] bg-[#F3F4F6]">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            <div className="bg-[#F6F7F5] p-10 sm:p-12">
              <div className="px-14 py-4">

              <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                <span className="inline-block border-b-2 border-[var(--color-fitness-neon)] pb-1">
                  {activeSlide.kicker}
                </span>
              </p>
              <h2 className="mt-4 font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05] sm:text-5xl">
                {activeSlide.title}
                <span className="text-[var(--color-fitness-neon)]">.</span>
              </h2>
              <p className="mt-4 max-w-md font-[var(--font-urbanist)] text-[15px] leading-[1.75] text-[#6B7280]">
                {activeSlide.description}
              </p>

              <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-none p-5">
                <div className="flex items-center justify-between">
                  <p className="font-[var(--font-urbanist)] text-sm text-[#111111]">
                    Yearly <span className="text-base font-semibold">$499.00</span>
                  </p>
                  <span className="rounded-full bg-[var(--color-fitness-neon)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">
                    SAVE 20%
                  </span>
                </div>

              </div>
                <p className="mt-4 text-xs text-[#9CA3AF]">
                  Get your <span className="font-semibold underline underline-offset-4">first payment today</span> and start today.
                </p>

              <button className="mt-6 rounded-md bg-[#111111] px-6 py-3 text-xs font-black uppercase tracking-[0.3em] text-white">
                JOIN TODAY!
              </button>
              </div>
            </div>


            <div className="relative min-h-[320px] bg-[#E8EEE9]">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
              <div className="absolute bottom-8 right-10 text-[72px] font-black uppercase text-white/70 sm:text-[96px]">
                <span className="font-[var(--font-korolev-condensed)]">
                  {activeSlide.watermark}
                </span>
              </div>
            </div>
          </div>

            <div className="flex flex-wrap items-stretch border-t border-[#E5E7EB] bg-white">
              {slides.map((slide, index) => (
                <div key={slide.label} className="flex flex-1 items-stretch">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex-1 px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] ${
                      index === activeIndex
                        ? "text-[#111111]"
                        : "text-[#9CA3AF]"
                    }`}
                  >
                    {index === activeIndex && (
                      <span className="absolute left-0 right-0 top-0 h-0.5 bg-[#111111]" />
                    )}
                    <span className="block text-center">{slide.label}</span>
                  </button>
                  {index < slides.length - 1 && (
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
