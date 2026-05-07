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
          Our whole show is built on one promise: the viewer walks away able to <em>implement</em> something, not just nod along. This short exercise makes sure your episode delivers exactly that.
        </p>
        <p className="text-lg text-[#1c1b1b] leading-relaxed mt-4">
          It takes about 15 to 20 minutes. Fill in what you can with whatever clarity you have right now. There&apos;s no perfect answer needed.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-10">

        {/* What's in the doc */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What&apos;s in the doc
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-4">
            It&apos;s a short template, seven questions, none of them hard. Together they help us figure out who this episode is for, what changes for them, and why you&apos;re the right person to show it.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            Things like: who&apos;s watching, what they can do after the episode that they couldn&apos;t before, what makes you the right person to show this, and the one bold claim the episode opens with. Examples are given for each so you can see what &ldquo;good&rdquo; looks like.
          </p>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-5">
            Here&apos;s what to do
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "01",
                label: "Click the link below",
                desc: "It'll take you straight to Google Docs and prompt you to make a copy. That copy is yours to fill in.",
              },
              {
                step: "02",
                label: "Fill in your answers",
                desc: "Work through the questions in your copy. Fill in what you can — incomplete is fine. The examples in the doc show what we're looking for.",
              },
              {
                step: "03",
                label: "Share it back with us",
                desc: "Once you're done, set sharing to \"Anyone with the link can edit\", copy the link, and send it back to us.",
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
        </section>

        {/* CTA */}
        <div>
          <a
            href="https://docs.google.com/document/d/1a4SPsOv2_1Vtoo_FQ8sQhIZ9CxjBT6-laB4os_bEx4Q/copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#994200] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#7a3500] transition-colors"
          >
            Open the doc
          </a>
        </div>

        <div className="border-t border-[#ddc1b3]" />

        {/* Sign-off */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
            <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1c1b1b]">
              Once we have your answers, we&apos;ll align on the direction and book the recording.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
