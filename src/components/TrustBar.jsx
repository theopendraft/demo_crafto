export default function TrustBar() {
  return (
    <section className="border-y border-gray-800 bg-black/30 py-8">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-6 text-sm md:grid-cols-3">
          <p className="font-display uppercase tracking-[0.22em] text-white">
            OUR GYM HAS BEEN PRESENT FOR OVER 20 YEARS
          </p>
          <p className="font-display uppercase tracking-[0.22em] text-white">
            JOIN THE 10000+ PERSON TRUSTING US
          </p>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 flex-shrink-0 border-2 border-dashed border-gray-700" />
            <p className="font-display uppercase tracking-[0.22em] text-white">
              TRUSTED FITNESS PARTNER
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-full bg-accent px-6 py-3 text-center font-display text-xs uppercase tracking-[0.3em] text-charcoal">
          SUBSCRIBE CRAFTO FITNESS AND GET A SPECIAL DISCOUNT. WE WORKING LAST 25 YEARS
        </div>
      </div>
    </section>
  );
}
