import Image from "next/image";

export default function ThinkingThroughTopic() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Step 1
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Let&apos;s think through the topic
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Before we book a time and hit record, we do one thing first: lock in the topic together.
        </p>
        <p className="text-lg text-[#1c1b1b] leading-relaxed mt-4">
          Our whole show is built on one promise: the viewer walks away able to <em>implement</em> something, not just nod along. Getting the topic right up front is what makes that happen.
        </p>
        <p className="text-lg text-[#1c1b1b] leading-relaxed mt-4">
          Read through this, have a think, and we&apos;ll take it from there over email.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-10">

        {/* What to bring */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            How to choose a topic
          </h2>
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
            One thing to keep in mind: the people watching are founders and operators of small businesses and agencies,
            smart but not necessarily technical. The best episodes show something genuinely impressive in a way that
            makes the first step feel doable. You don&apos;t need to dumb it down. Just bring them in.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            If you&apos;re deciding between a few options, go with the one that changed something real for you and that someone could realistically start using the same week.
          </p>
        </section>

        {/* What we're looking for */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What we&apos;re looking for
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-4">
            Before we lock the direction, we need clarity on a few things: who this episode is for, what changes for them after watching, and why you&apos;re the right person to show it.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            Things like: who&apos;s watching, what they can do after the episode that they couldn&apos;t before, what makes you the right person to show this, and the one bold claim the episode opens with. Have a think about these before we talk.
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
              We&apos;ll follow up by email to align on the direction and book the recording.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
