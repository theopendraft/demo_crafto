import logoWhite from "../public/demo-gym-and-fitness-logo-white.svg";

const navLinks = ["Home", "About", "Classes", "Schedule", "Package", "Trainer", "Contact"];

const contactItems = [
  "+1 234 567 890",
  "info@craftofitness.com",
  "2644 Rosella Inlet Suite, Keithmouth, BL 25422",
  "Mon – Fri: 09 am – 08 pm",
  "Saturday: 09 am – 01 pm",
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">

      {/* ── Main body ── */}
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-wrap items-start justify-between gap-10">

          {/* Brand */}
          <div data-anim="up" className="flex flex-col gap-4">
            <img src={logoWhite} alt="Crafto Fitness"
              className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
              loading="lazy" />
            <p className="max-w-[220px] text-sm leading-[1.65] text-[#9CA3AF]"
              style={{ fontFamily: "var(--font-urbanist)" }}>
              Your partner for a healthier, stronger life.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            {contactItems.map((text, i) => (
              <div key={text}
                data-anim="up"
                data-delay={String(i * 60)}
                className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                <span className="mt-1.5 flex-shrink-0">
                  <span className="block h-2 w-2 rounded-full bg-[#A3E635]" />
                </span>
                <span style={{ fontFamily: "var(--font-urbanist)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
          <p className="text-sm text-[#9CA3AF]" style={{ fontFamily: "var(--font-urbanist)" }}>
            &#169; Copyright 2026{" "}
            <span className="font-semibold text-white">Crafto</span>. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button key={link}
                className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-urbanist)" }}>
                {link}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
