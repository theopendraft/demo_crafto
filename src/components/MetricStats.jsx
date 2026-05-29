import profileImage from "../public/demo-elearning-03.png";

const stats = [
  { value: "4566", label: "HOURS EXERCISE" },
  { value: "5635", label: "TOTAL EQUIPMENT" },
  { value: "6546", label: "TRAINING PEOPLE" },
  { value: "6365", label: "EXPERT TRAINERS" }
];

export default function MetricStats() {
  return (
    <section className="bg-white py-12 text-[#111111]">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="Student profile"
              className="h-20 w-20 object-cover"
              loading="lazy"
            />
            <p className="font-[var(--font-urbanist)] text-sm text-[#6B7280]">
              Fitness courses from <span className="font-semibold underline">experts</span>.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full ">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 19H20" stroke="#111111" strokeWidth="1.5" />
                <path d="M6 16V10" stroke="#111111" strokeWidth="1.5" />
                <path d="M12 16V6" stroke="#111111" strokeWidth="1.5" />
                <path d="M18 16V12" stroke="#111111" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
            <div>
              <p className="font-[var(--font-urbanist)] text-sm font-semibold text-[#111111]">
                Progress report
              </p>
              <p className="font-[var(--font-urbanist)] text-xs text-[#9CA3AF]">
                Lorem ipsum dolor consectetur.
              </p>
            </div>
            <span className="text-lg text-[#111111]">&#8594;</span>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2 text-center">
              <div className="-space-y-2 ">
              <p className="font-[var(--font-korolev-condensed)] text-3xl font-black">
                {stat.value}
              </p>
              <span className="mx-auto block h-1 w-1/3 rounded-full bg-[var(--color-fitness-neon)]" />
              </div>
              <p className="font-[var(--font-urbanist)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
