import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Hero Band */}
      <div className="bg-[#994200] text-white">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">

          {/* Cover Art — capped at 220px on mobile, 320px on md+ */}
          <div className="w-[220px] md:w-[320px] mb-8">
            <Image
              src="/cover.png"
              alt="Shipping with AI podcast cover art"
              width={320}
              height={320}
              className="w-full aspect-square object-cover rounded-full"
              priority
            />
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[2.25rem] md:text-[4rem] leading-[1.05] tracking-[-0.03em] max-w-3xl mb-6">
            The show where AI goes from hype{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[0.8em] md:text-[0.75em]">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>{" "}
            implementation.
          </h1>

          <p className="text-base md:text-[1.125rem] leading-[1.7] text-white/70 max-w-[540px] mb-12">
            Every episode is a real workflow, on screen, walked through by someone who already built it.
          </p>

          <a
            href="https://shippingwithai.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#994200] hover:bg-[#fcf9f8] font-bold text-base px-8 py-4 transition-colors"
          >
            Watch the Show →
          </a>

        </div>
      </div>

      {/* Content below hero */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        <hr className="border-t border-[#d4ccba]/40 mb-12" />

        {/* Narrative */}
        <section className="max-w-[640px] mx-auto mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[1.75rem] md:text-[2.25rem] font-bold text-[#1b1c1b] mb-5 tracking-tight leading-tight">
            It&apos;s simpler than you think.
          </h2>
          <p className="text-base md:text-[1.125rem] leading-[1.8] text-[#564339]">
            Most people assume it&apos;s complicated. It&apos;s not. You just need to see it done once. Every guest walks through a real workflow on screen, the tools, the prompts, the decisions. Every episode is a workflow you can steal.
          </p>
        </section>

        <hr className="border-t border-[#d4ccba]/40 mb-12" />

        {/* Watch & Subscribe */}
        <section className="max-w-[640px] mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-[#994200] font-semibold mb-5">Watch &amp; Subscribe</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://shippingwithai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-[#d4ccba]/50 px-4 py-3 text-sm font-medium text-[#1b1c1b] hover:border-[#994200] hover:text-[#994200] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
              Substack
            </a>
            <a
              href="https://www.youtube.com/@ShippingwAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-[#d4ccba]/50 px-4 py-3 text-sm font-medium text-[#1b1c1b] hover:border-[#994200] hover:text-[#994200] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </section>

        <hr className="border-t border-[#d4ccba]/40 mb-12" />

        {/* Hosts */}
        <section className="max-w-[640px] mx-auto mb-12">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[1.5rem] md:text-[1.75rem] font-bold mb-5 tracking-tight">
            Hosted by Gautham &amp; Rahul
          </h2>
          <div className="space-y-6 text-base md:text-[1.125rem] leading-[1.8] text-[#564339]">
            <div className="space-y-3">
              <p>
                Gautham got Rahul started. One tool, one workflow, one real demonstration and that was enough to change how he worked entirely.
              </p>
              <p>
                That&apos;s the show. If you could do that for one person, you could do it for thousands. Every episode is us trying to give someone else that same moment and learning something new in the process ourselves.
              </p>
            </div>
            {/* Always side-by-side, even on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Gautham",
                  photo: "/gautham.png",
                  twitter: "https://x.com/MindCharting",
                  linkedin: "https://www.linkedin.com/in/mindcharting/",
                },
                {
                  name: "Rahul",
                  photo: "/rahul.jpg",
                  twitter: "https://x.com/rahul0720",
                  linkedin: "https://www.linkedin.com/in/rahulthayyalamkandy/",
                },
              ].map((host) => (
                <div
                  key={host.name}
                  className="border border-[#d4ccba]/30 bg-[#E5DCC9]/30 overflow-hidden"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={host.photo}
                      alt={host.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                  <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#1b1c1b] text-base mb-3">
                    {host.name}
                  </p>
                  <div className="flex gap-3">
                    <a href={host.twitter} target="_blank" rel="noopener noreferrer" className="text-[#994200] hover:opacity-70 transition-opacity" title="X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href={host.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#994200] hover:opacity-70 transition-opacity" title="LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.1 0-1.8.6-2.1 1.1v-1h-2.5v7.9h2.5v-4.1c0-.4.3-.7.7-.7.4 0 .7.3.7.7v4.1h2.5M8.1 7.1c-.8 0-1.5.7-1.5 1.5S7.3 10 8.1 10s1.5-.7 1.5-1.5-.7-1.4-1.5-1.4M9.3 18.5v-7.9H6.8v7.9h2.5z" />
                      </svg>
                    </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* Final CTA */}
        <section className="text-center py-12 border-t border-b border-[#d4ccba]/40 mb-12">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-[2rem] md:text-[2.5rem] font-bold mb-6 tracking-tight">
            Stop reading. Start shipping.
          </h3>
          <a
            href="https://shippingwithai.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#994200] text-white px-8 py-4 font-bold text-base hover:opacity-90 transition-opacity"
          >
            Start Watching
          </a>
        </section>

      </div>


    </div>
  );
}
