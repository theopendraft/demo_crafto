import logoWhite from "../public/demo-gym-and-fitness-logo-white.svg";
import img1 from "../../assets-crafto-2026-06-01/JPG/insta_footer/490820985_17845682379462278_5333435763817233935_n.jpg";
import img2 from "../../assets-crafto-2026-06-01/JPG/insta_footer/491440660_17845682763462278_4303737957242453660_n.jpg";
import img3 from "../../assets-crafto-2026-06-01/JPG/insta_footer/491442176_17845682676462278_3180353499909016508_n.jpg";
import img4 from "../../assets-crafto-2026-06-01/JPG/insta_footer/491443944_17845682712462278_8208837733756360928_n.jpg";
import img5 from "../../assets-crafto-2026-06-01/JPG/insta_footer/491448827_17845682745462278_3088907232173964395_n.jpg";
import img6 from "../../assets-crafto-2026-06-01/JPG/insta_footer/491510323_17845682526462278_1562141314280483159_n.jpg";

const navLinks = ["Home", "About", "Classes", "Schedule", "Package", "Trainer", "Contact"];

const galleryImages = [
  { src: img1, alt: "Instagram photo 1" },
  { src: img2, alt: "Instagram photo 2" },
  { src: img3, alt: "Instagram photo 3" },
  { src: img4, alt: "Instagram photo 4" },
  { src: img5, alt: "Instagram photo 5" },
  { src: img6, alt: "Instagram photo 6" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">

      {/* ── Photo strip ── */}
      <div className=" relative -top-16 grid grid-cols-3 sm:grid-cols-6 px-14">
        {galleryImages.map(({ src, alt }, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110 p-4"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ── Main body ── */}
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div data-anim="up" className="flex flex-col gap-4">
            <img
              src={logoWhite}
              alt="Crafto Fitness"
              className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
              loading="lazy"
            />
            <p
              className="max-w-[200px] text-sm leading-[1.65] text-[#9CA3AF]"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Your partner for a healthier, stronger life.
            </p>
          </div>

          {/* Start a conversation */}
          <div data-anim="up" data-delay="100" className="flex flex-col gap-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Start a conversation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2.5 text-sm text-[#9CA3AF] transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#A3E635]" />
                +1 234 567 890
              </a>
              <a
                href="mailto:info@craftofitness.com"
                className="flex items-center gap-2.5 text-sm text-[#9CA3AF] transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#A3E635]" />
                info@craftofitness.com
              </a>
            </div>
          </div>

          {/* Current location */}
          <div data-anim="up" data-delay="200" className="flex flex-col gap-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Current location
            </h4>
            <p
              className="flex items-start gap-2.5 text-sm leading-[1.7] text-[#9CA3AF]"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#A3E635]" />
              2644 Rosella Inlet Suite,<br />Keithmouth, BL 25422
            </p>
          </div>

          {/* Center timings */}
          <div data-anim="up" data-delay="300" className="flex flex-col gap-3">
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-urbanist)" }}
            >
              Center timings
            </h4>
            <div className="flex flex-col gap-2.5">
              <p
                className="flex items-center gap-2.5 text-sm text-[#9CA3AF]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#A3E635]" />
                Mon – Fri: 09 am – 08 pm
              </p>
              <p
                className="flex items-center gap-2.5 text-sm text-[#9CA3AF]"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#A3E635]" />
                Saturday: 09 am – 01 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-5">
          <p
            className="text-sm text-[#9CA3AF]"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            &#169; Copyright 2026{" "}
            <span className="font-semibold text-white">Crafto</span>. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link}
                className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                {link}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
