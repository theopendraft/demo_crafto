import dumbbellImage from "../public/demo-gym-and-fitness-home-02.png.webp";
import mainSlideImage from "../public/demo-gym-and-fitness-home-01.jpg.webp";
import badgeImage from "../public/demo-gym-and-fitness-home-03.png.webp";

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#111111]">
      <div className="pointer-events-none absolute bottom-48 right-6 hidden text-[140px] font-black uppercase text-[#111111]/5 lg:block">
        <span className="font-[var(--font-korolev-condensed)] tracking-[0.1em]">WORKOUT</span>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        
          <div className="relative">
            <div className="absolute -left-8 bottom-4 hidden items-center gap-3 lg:flex">
              <div className="relative flex h-48 items-center">
                <div className="absolute left-1/2 top-20 -translate-x-1/2">
                  <img
                    src={dumbbellImage}
                    alt="Dumbbell"
                    className="h-44 w-44 object-contain"
                    loading="lazy"
                  />
                  
                </div>
                
                </div>
            

              

              <div className="relative flex flex-col items-center">
                <img
                  src={dumbbellImage}
                  alt="Dumbbell"
                  className="absolute left-0 bottom-52 z-10 h-24 w-24 max-w-none object-contain"
                  loading="lazy"
                />    

              </div>
            </div>
            

            <div className="relative">
              <img
                src={mainSlideImage}
                alt="Workout session"
                className="aspect-[4/3] w-full min-h-[320px] rounded-sm object-cover"
                loading="lazy"
              />
              <div className="">
                <img
                  src={badgeImage}
                  alt="Fitness badge"
                  className="object-contain absolute -bottom-6 right-6 flex h-28 w-28 items-center justify-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            

            <div className="space-y-6 pr-0 lg:pr-16">
              <div className="inline-flex flex-col items-start">
                <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                  Grow your fitness strength
                </p>
                <span className="h-0.5 w-full bg-[var(--color-fitness-neon)]" />
              </div>

              <h2 className="font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05] sm:text-5xl">
                Workout program made for you
                <span className="text-[var(--color-fitness-neon)]">.</span>
              </h2>

              <p className="max-w-xl font-[var(--font-urbanist)] text-[15px] leading-[1.75] text-[#6B7280]">
                Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor incididunt
                abore dolore magna ut enim ad minim veniam ut exercitation ullamco commodo
                consequat incididunt.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-md bg-[#111111] px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-white">
                  ABOUT MORE
                </button>
                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#111111]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111111]">
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
                  HOW IT WORKS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="space-y-4">
              <div className="inline-flex flex-col items-start">
                <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                  Why choose us?
                </p>
                <span className="h-0.5 w-full bg-[var(--color-fitness-neon)]" />
              </div>
            <h3 className="font-[var(--font-korolev-condensed)] text-4xl font-black leading-[1.05] sm:text-5xl">
              Many healthy
              <br />
              benefits for you
              <span className="text-[var(--color-fitness-neon)]">.</span>
            </h3>
          </div>

          <div className="rounded-lg bg-white">
            <div className="flex items-center justify-between gap-6 border-b border-[#E5E7EB] px-6 py-0">
              <div className="flex items-center gap-4">
                <div className="flex ">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10H4V14H6V10ZM20 10H18V14H20V10ZM9 7H7V17H9V7ZM17 7H15V17H17V7ZM13 9H11V15H13V9Z"
                      fill="#111111"
                    />
                  </svg>
                </div>
                <span className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
                <div className="py-6">
                  <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                    Professional trainer
                  </p>
                  <p className="text-sm text-[#6B7280]">Lorem ipsum dolor consectetur.</p>
                </div>
              </div>
              <span className="text-lg text-[#111111]">&#8594;</span>
            </div>

            <div className="flex items-center justify-between gap-6 border-b border-[#E5E7EB] px-6 py-0">
              <div className="flex items-center gap-4">
                <div className="flex ">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="8" stroke="#111111" strokeWidth="1.4" />
                    <path d="M8 6L14 10L8 14V6Z" fill="#111111" />
                  </svg>
                </div>
                <span className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
                <div className="py-6">
                  <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111] ">
                    Practice videos
                  </p>
                  <p className="text-sm text-[#6B7280]">Lorem ipsum dolor consectetur.</p>
                </div>
              </div>
              <span className="text-lg text-[#111111]">&#8594;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
