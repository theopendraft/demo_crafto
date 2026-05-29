import mainSlideImage from "../public/demo-gym-and-fitness-home-11.jpg.webp";
import sideCardImage from "../public/demo-gym-and-fitness-slider-table-03.jpg.webp";

const steps = [
  {
    number: "01",
    title: "Treat yourself",
    text: "Our subconscious mind hears the self-talk."
  },
  {
    number: "02",
    title: "Stay positive",
    text: "Learn to release negative thoughts about your body."
  },
  {
    number: "03",
    title: "Love yourself",
    text: "Focusing on body loving and caring for yourself."
  }
];

export default function SelfTalkSteps() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#111111]">
      <div className="pointer-events-none absolute left-30 bottom-64 hidden text-[160px] font-black uppercase text-[#111111]/5 lg:block">
        <span className="font-[var(--font-korolev-condensed)] tracking-[0.08em]">
          EXERCISE
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] justify-items-center">
          <div className="relative">
            <img
              src={mainSlideImage}
              alt="Workout session" 
              className="h-full w-full rounded-sm object-cover"
              loading="lazy"
            />

            <div className="absolute -left-4 bottom-8 w-44 overflow-hidden rounded-md border border-[#E5E7EB] bg-white shadow-lg">
              <div className="relative m-4 h-24 w-auto overflow-hidden rounded-md bg-[#E5E7EB]">
                <img
                  src={sideCardImage}
                  alt="Morning run preview"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <button
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111111] shadow"
                  aria-label="Play preview"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 1.5L8 5L2 8.5V1.5Z" fill="#111111" />
                  </svg>
                </button>
              </div>

              <div className="">
                <div className="flex items-center justify-between gap-3 px-4">
                  <div>
                    <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                      Everyday
                    </p>
                    <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">morning run</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-fitness-neon)]/25">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C15.5 17.2 18 14.5 18 11.5C18 8.46 15.54 6 12.5 6C9.46 6 7 8.46 7 11.5C7 14.5 9.5 17.2 13 21"
                        stroke="#111111"
                        strokeWidth="1.4"
                      />
                      <circle cx="12" cy="11.5" r="2" fill="#111111" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 bg-[#111111] px-3 py-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 21C15.5 17.2 18 14.5 18 11.5C18 8.46 15.54 6 12.5 6C9.46 6 7 8.46 7 11.5C7 14.5 9.5 17.2 13 21" stroke="#A3E635" strokeWidth="1.6" />
                    <circle cx="12" cy="11.5" r="2" fill="#A3E635" />
                  </svg>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Activity tracker
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-bold inline-block border-b-2 border-[var(--color-fitness-neon)] pb-1">
              
              Flexibility and patience
            </span>
            <h2 className="font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05] sm:text-5xl">
              Fitness you enjoy
              <br />
              with our workout
              <span className="text-[var(--color-fitness-neon)]">.</span>
            </h2>

            <div className="space-y-5 rounded-2xl border-0 bg-gradient-to-br from-[#FFFFEF] to-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                    How to raise over all fitness level?
                  </p>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    Our mission is to provide you with the ultimate great fitness experience.
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full border border-[#E5E7EB]" />
              </div>
              <div className="font-bold pt-4 text-sm text-[#6B7280]">
                How can we get natural way to health?
              </div>
              <div className="font-bold text-sm text-[#6B7280]">Can get a special trainer for yoga?</div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid items-start lg:grid-cols-[1.1fr_repeat(3,1fr)] gap-10">
          <div className="">
            <p className="font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05]">
              Learning how to love your body
              <span className="text-[var(--color-fitness-neon)]">.</span>
            </p>
            <h3 className="mt-2 font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05]">
              
              
            </h3>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#111111]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-fitness-neon)]/20">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 3.5H9.5C10.05 3.5 10.5 3.95 10.5 4.5V7.5C10.5 8.05 10.05 8.5 9.5 8.5H7.5C7.5 11.54 10.46 14.5 13.5 14.5V12.5C13.5 11.95 13.95 11.5 14.5 11.5H17.5C18.05 11.5 18.5 11.95 18.5 12.5V15.5C18.5 16.05 18.05 16.5 17.5 16.5H16.5C10.98 16.5 7.5 13.02 7.5 7.5V6.5C7.5 5.95 7.05 5.5 6.5 5.5H4.5C3.95 5.5 3.5 5.05 3.5 4.5V3.5C3.5 2.95 3.95 2.5 4.5 2.5H6.5"
                    stroke="#111111"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span>Call for joining</span>
            </div>
          </div>
          
          {steps.map((step) => (
            <div key={step.number} className="relative space-y-2 pt-6 gap-6">
              

              <p className="pb-4 text-[52px] font-black leading-none text-[var(--color-fitness-neon)]/0 [-webkit-text-stroke:1.5px_var(--color-fitness-neon)]">
                {step.number}
              </p>
              <p className="absolute left-0 bottom-12 font-[var(--font-urbanist)] text-base font-semibold text-[#111111] px-4">
                {step.title}
              </p>
              <p className="text-sm text-[#6B7280] ">{step.text}</p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
