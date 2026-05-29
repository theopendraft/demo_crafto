import logoMark from "../public/gym-and-fitness_logo.svg";

export default function NavBar() {
  return (
    <nav className="absolute left-0 top-0 w-full z-50 pointer-events-none">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="flex items-start px-6 pt-6 lg:col-span-7">
          <div className="pointer-events-auto inline-flex items-center bg-white">
            <div className="flex items-center gap-3 border-r border-[#E5E7EB] px-4 py-3">
              <div className="flex h-6 w-auto items-center justify-center ">
                <img
                  src={logoMark}
                  alt=""
                  className=" h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>

            </div>
            <button className="flex items-center gap-3 px-4 py-3 font-[var(--font-urbanist)] text-[11px] font-semibold uppercase tracking-[0.35em]">
              <span className="flex flex-col gap-1">
                <span className="h-0.5 w-6 bg-[#111111]" />
                <span className="h-0.5 w-6 bg-[#111111]" />
                <span className="h-0.5 w-6 bg-[#111111]" />
              </span>
              MENU
            </button>
          </div>
        </div>
        <div className="flex items-start justify-start px-6 pt-6 lg:col-span-5 lg:justify-end">
          <button className="pointer-events-auto rounded-[6px] bg-[#A3E635] px-6 py-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#111111]">
            JOIN US NOW
          </button>
        </div>
      </div>
    </nav>
  );
}
