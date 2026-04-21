import Image from "next/image";

export default function GuideToGuests() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Guest Guide
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Before your episode
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Glad you&apos;re here. Here&apos;s everything you need to know before we hit record.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-10" />

      <div className="space-y-12">

        {/* What to bring */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What to bring
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-4">
            Bring your best. The workflow, automation, or AI setup that has genuinely changed how you work. The one you&apos;d tell a friend about, the one that made you think <em>why didn&apos;t I do this sooner</em>.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-5">
            We&apos;re building a library of the most valuable things people are doing with AI right now. What you bring should be worth stealing.
          </p>
          <p className="text-sm text-[#1c1b1b] mb-4">Some examples of what that could look like:</p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Something that saved you a significant amount of time",
              "A process you fully automated",
              "Output quality that jumped noticeably",
              "A workflow that made or recovered real money",
              "Something manual you just don't do by hand anymore",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1c1b1b] font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#994200] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-4">
            One thing to keep in mind: the people watching are smart but not necessarily technical. The best episodes show something genuinely impressive in a way that makes the first step feel doable. You don&apos;t need to dumb it down. Just bring them in.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            If you&apos;re deciding between a few options, go with the one that changed something real for you and that someone could realistically start using the same week.
          </p>
        </section>

        {/* Before we hit record */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-5">
            Before we hit record
          </h2>
          <ul className="space-y-2.5">
            {[
              "Use headphones, not speakers. This is the single most important thing. Without headphones your mic picks up the other person's voice and ruins the recording.",
              "Turn your notifications off, phone and laptop.",
              "Check your mic and camera.",
              "Have your workflow open and ready on screen.",
              "Close any browser tabs you don't need. Keeps the screen share clean.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1c1b1b] font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#994200] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

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

        {/* A few practicalities */}
        <section className="bg-[#994200]/8 border border-[#994200]/20 rounded-sm p-6">
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-3">
            A few practicalities
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-2">
            We record on <a href="https://riverside.com/studio/understanding-vc" target="_blank" rel="noopener noreferrer" className="text-[#994200] underline underline-offset-2">Riverside</a>. Sessions run under thirty minutes and the final episode is typically fifteen to twenty minutes. We handle all the editing.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-2">
            All you need is your screen and your workflow. No slides or prep decks needed.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            If you can walk through it like you&apos;d explain it to a teammate over a screen share, that&apos;s exactly what we&apos;re after.
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
              Excited for this. See you soon.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
