import profileImage from "../public/demo-elearning-03.png";
import { CountUp } from "./CountUp.jsx";

const stats = [
  { value: "4566", label: "Hours Exercise" },
  { value: "5635", label: "Total Equipment" },
  { value: "6546", label: "Training People" },
  { value: "6365", label: "Expert Trainers" },
];

export default function MetricStats() {
  return (
    <section className="bg-white py-12 text-[#111111]">
      <div className="mx-auto w-full max-w-7xl px-6">

        {/* ── Top bar ── */}
        <div data-anim="up"
          className="flex flex-wrap items-center justify-between gap-6 border-b border-[#E5E7EB] pb-8">
          <div className="flex items-center gap-4">
            <img src={profileImage} alt="Expert instructors"
              className="" />
            <p className="text-sm text-[#6B7280]" style={{ fontFamily: "var(--font-urbanist)" }}>
              Fitness courses from{" "}
              <span className="font-semibold text-[#111111] underline underline-offset-2">experts</span>.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 19H20" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 16V10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 16V6" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 16V12" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="h-10 w-px bg-[#E5E7EB]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#111111]"
                style={{ fontFamily: "var(--font-urbanist)" }}>Progress report</p>
              <p className="text-xs text-[#9CA3AF]"
                style={{ fontFamily: "var(--font-urbanist)" }}>Track your fitness journey.</p>
            </div>
            <span className="arrow-nudge text-lg text-[#111111]">&#8594;</span>
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div className="mt-2 grid grid-cols-2 divide-x divide-y divide-[#E5E7EB] lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-anim="up"
              data-delay={String(i * 100)}
              className="group flex flex-col items-center gap-2 px-4 py-10 transition-colors hover:bg-[#F9FAFB]"
            >
              <p
                className="text-[72px] font-black leading-none tracking-tight sm:text-[80px] lg:text-[90px]"
                style={{ fontFamily: "var(--font-korolev-condensed)" }}
              >
                <CountUp value={stat.value} />
              </p>
              <span className="h-0.5 w-16 bg-[#A3E635] transition-all group-hover:w-24" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]"
                style={{ fontFamily: "var(--font-urbanist)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
