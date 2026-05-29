import Image from "next/image";
import Link from "next/link";

export default function Steps() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Guest Process
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Here&apos;s how it works
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Four steps from here to a published episode. Each one is straightforward and we&apos;ll be with you through all of it.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-4">

        <Link href="/topic" className="flex items-center gap-5 p-5 bg-[#f0ebe9] rounded-sm hover:bg-[#e8e0dc] transition-colors group block">
          <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">01</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1c1b1b]">Lock in on a topic</p>
            <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">
              Work through a short template to nail the angle for your episode before we book anything.
            </p>
          </div>
          <span className="text-[#994200] text-lg shrink-0 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <Link href="/schedule" className="flex items-center gap-5 p-5 bg-[#f0ebe9] rounded-sm hover:bg-[#e8e0dc] transition-colors group block">
          <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">02</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1c1b1b]">Pick a time to record</p>
            <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">
              Book a slot that works for you. Sessions run under thirty minutes.
            </p>
          </div>
          <span className="text-[#994200] text-lg shrink-0 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

        <div className="flex items-center gap-5 p-5 bg-[#f0ebe9] rounded-sm">
          <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">03</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1c1b1b]">Get your episode brief</p>
            <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">
              The day before the recording, we&apos;ll send you the questions we&apos;ll ask. Everything else you need to know is <Link href="/brief" className="text-[#994200] underline underline-offset-2">here</Link>.
            </p>
          </div>
        </div>

        <Link href="/record" className="flex items-center gap-5 p-5 bg-[#f0ebe9] rounded-sm hover:bg-[#e8e0dc] transition-colors group block">
          <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">04</span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#1c1b1b]">Run through the pre-recording checklist</p>
            <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">
              Go through the checklist ideally the day before. Mic, camera, lighting, internet. Everything so recording day runs smoothly.
            </p>
          </div>
          <span className="text-[#994200] text-lg shrink-0 group-hover:translate-x-1 transition-transform">→</span>
        </Link>

      </div>

      <div className="border-t border-[#ddc1b3] mt-12 mb-10" />

      {/* Sign-off */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1c1b1b]">
            Any questions at any point, just reply and ask.
          </p>
          <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
        </div>
      </div>

    </main>
  );
}
