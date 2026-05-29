const navLinks = ["Home", "About", "Classes", "Schedule", "Package", "Trainer", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-fitness-neon)]">
              <span className="text-sm font-black text-[#111111]">W</span>
            </div>
            <span className="font-[var(--font-korolev-condensed)] text-lg uppercase tracking-[0.2em] text-white">
              WORKOUT
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-fitness-neon)]" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-fitness-neon)]" />
              <span>info@domain.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-fitness-neon)]" />
              <span>2644 Rosella inlet suite Keithmouth, Bilzen 25422</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-fitness-neon)]" />
              <span>Mon-fri: 09 am - 08 pm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-fitness-neon)]" />
              <span>Saturday: 09 am - 01 pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm text-[#9CA3AF]">
          <p>
            &#169; Copyright 2026 <span className="text-white">Crafto</span>
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <button key={link} className="text-sm text-[#9CA3AF]">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
