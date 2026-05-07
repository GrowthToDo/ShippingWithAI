import Image from "next/image";

export default function Brief() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Step 2
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Your episode brief
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Here&apos;s everything you need to know about how the episode works before we record.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-12">

        {/* How we record */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            How we record
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-3">
            We record on <a href="https://riverside.fm" target="_blank" rel="noopener noreferrer" className="text-[#994200] underline underline-offset-2">Riverside</a>. You&apos;ll get a link from us before the session. All you need to do is open it in your browser, no download required.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-3">
            The session runs under thirty minutes. The final episode is typically fifteen to twenty minutes once edited. We handle all of that.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            The core of the episode is a screen share walkthrough of your workflow. No slides or prep decks needed. If you can walk through it like you&apos;d explain it to a teammate, that&apos;s exactly what we&apos;re after.
          </p>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* How the episode flows */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-5">
            How the episode flows
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "01",
                label: "Who you are",
                desc: "A brief introduction. What you do, what you build, what world you operate in.",
              },
              {
                step: "02",
                label: "The why",
                desc: "What drove you to build this workflow. What problem were you sitting with, what broke, what frustrated you enough to find a better way.",
              },
              {
                step: "03",
                label: "The walkthrough",
                desc: "This is the core of the episode. Share your screen and walk us through exactly how it works, like you'd explain it to a teammate. The tools, the prompts, the decisions, all of it.",
              },
              {
                step: "04",
                label: "The payoff",
                desc: "What changed for you once this was working. Time saved, money made, something you'll never do manually again. And what someone watching could take from it and use tomorrow.",
              },
            ].map(({ step, label, desc }) => (
              <div key={step} className="flex gap-5 p-4 bg-[#f0ebe9] rounded-sm">
                <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1c1b1b]">{label}</p>
                  <p className="text-sm text-[#1c1b1b] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mt-4">
            Throughout all of this we&apos;ll ask follow-up questions as you go. The conversation stays live. Nothing is rigid.
          </p>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* Sign-off */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
            <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1c1b1b]">
              Any questions before we record, just reply and ask.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
