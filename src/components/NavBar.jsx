import logoMark from "../public/gym-and-fitness_logo.svg";

export default function NavBar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full pointer-events-none">
      <div className="flex items-start justify-between px-4 pt-4 sm:px-6 sm:pt-6">

        {/* Left: logo + menu button */}
        <div className="pointer-events-auto inline-flex items-stretch bg-white shadow-sm">
          {/* Logo */}
          <div className="flex items-center border-r border-[#E5E7EB] px-4 py-3">
            <img
              src={logoMark}
              alt="Crafto Fitness"
              className="h-9 w-auto object-contain"
              loading="eager"
            />
          </div>

          {/* Hamburger + MENU */}
          <button
            className="flex items-center gap-3 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#111111] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-urbanist)" }}
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="h-[1.5px] w-5 bg-[#111111]" />
              <span className="h-[1.5px] w-5 bg-[#111111]" />
              <span className="h-[1.5px] w-5 bg-[#111111]" />
            </span>
            MENU
          </button>
        </div>

        {/* Right: CTA */}
        <button className="pointer-events-auto whitespace-nowrap rounded-[6px] bg-[#A3E635] px-5 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#111111] shadow-sm transition-opacity hover:opacity-90">
          JOIN US NOW
        </button>
      </div>
    </nav>
  );
}
