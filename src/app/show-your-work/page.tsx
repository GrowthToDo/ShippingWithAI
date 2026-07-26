import Image from "next/image";
import Link from "next/link";

// Pre-yes guest page: sent to prospective guests during outreach, before
// anything is confirmed. Once a guest says yes, they get /steps.
// Job: sell the double payoff (people benefit from your learnings, your
// brand grows) and show the distribution machine. Showcase: Sharath's
// Airbnb episode, the best-prepared walkthrough so far.

export default function ShowYourWork() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          For future guests
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Show your work
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          You built something with AI that actually works. Right now, someone is doing that same job the slow way
          because nobody has shown them better.
        </p>
        <p className="text-lg text-[#1c1b1b] leading-relaxed mt-4">
          This show closes that gap. You spend thirty minutes showing what you already know. They walk away with a
          workflow they can use the same week. Your name goes on the best explanation of it on the internet.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-12">

        {/* Who's watching */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            Who&apos;s watching
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-4">
            Founders and operators of small businesses and agencies. Smart, but not necessarily technical. They&apos;re
            not here for AI commentary; they&apos;re here to put AI to work this week.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            The audience is deliberately small and exactly right: the kind of people who turn into customers, clients,
            and collaborators, not drive-by viewers.
          </p>
        </section>

        {/* The machine */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What your thirty minutes becomes
          </h2>
          <ul className="space-y-2.5 mb-5">
            {[
              "The full episode on YouTube, Substack, Spotify, and Apple Podcasts",
              "Clips cut from your episode, posted across Shorts, Reels, and TikTok through the week",
              "A share kit in your inbox, ready to post to your own audience",
              "Posts from both hosts tagging you on X and LinkedIn",
              "A permanent, searchable home for the best explanation of your workflow",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1c1b1b] font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#994200] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            You talk. We do everything else.
          </p>
        </section>

        {/* What it takes */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What it takes from you
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            One short conversation to lock the topic, then under thirty minutes on a recording call. Screen share, walk
            us through it, done. No prep decks, no scripts. If you can demo it to a colleague, you can do this.
          </p>
        </section>

        {/* Showcase */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            What a great episode looks like
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-5">
            Sharath runs an Airbnb in Goa. He put its bookkeeping in the hands of an AI agent, then came on and walked
            through exactly how. Real workflow, prepared walkthrough, every step on screen. That&apos;s the whole
            formula.
          </p>
          <div className="aspect-video w-full rounded-sm overflow-hidden mb-3">
            <iframe
              src="https://www.youtube.com/embed/2BlVAtzeusE"
              title="How an AI Agent Became My Airbnb Accountant"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-xs text-[#564339]/80">
            How an AI Agent Became My Airbnb Accountant · also on{" "}
            <a
              href="https://shippingwithai.substack.com/p/how-an-ai-agent-became-my-airbnb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#994200] underline underline-offset-2"
            >
              Substack
            </a>
          </p>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* CTA */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-4">
            Sound like you?
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-6">
            If someone sent you this link, they think your workflow is worth showing. Reply to them and say yes. Curious
            what happens after that? The whole process is four steps.
          </p>
          <Link
            href="/steps"
            className="inline-block rounded-md bg-[#994200] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_0_#5c2700] hover:bg-[#a84a00] active:translate-y-[3px] active:shadow-[0_1px_0_0_#5c2700] transition-all"
          >
            See how it works →
          </Link>
        </section>

        {/* Sign-off */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
            <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1c1b1b]">
              Questions before you decide? Just ask.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
