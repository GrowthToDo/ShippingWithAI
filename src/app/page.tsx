import Image from "next/image";
import { episodes } from "@/data/episodes";

export default function Home() {
  return (
    <div>

      {/* Hero Band */}
      <div className="relative bg-[#994200] text-white overflow-hidden">

        {/* Guest collage background */}
        <div className="absolute inset-0 grid grid-cols-4 opacity-60">
          {episodes.map((ep) => (
            <div key={ep.youtubeId} className="relative aspect-square">
              <Image
                src={`https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`}
                alt=""
                fill
                unoptimized
                className="object-cover grayscale blur-[2px]"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[#994200]/78" />

        <div className="relative max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center">

          {/* Cover Art — capped at 88px on mobile, 120px on md+ */}
          <div className="w-[88px] md:w-[120px] mb-6">
            <Image
              src="/cover.png"
              alt="Shipping with AI podcast cover art"
              width={120}
              height={120}
              className="w-full aspect-square object-cover rounded-full"
              priority
            />
          </div>

          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[1.875rem] md:text-[3rem] leading-[1.1] tracking-[-0.03em] max-w-3xl mb-5">
            The show where AI goes from hype{" "}
            <span className="inline-flex items-center align-middle mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[0.8em] md:text-[0.75em]">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>{" "}
            implementation.
          </h1>

          <p className="text-base md:text-[1.125rem] leading-[1.7] text-white/70 max-w-[540px] mb-10">
            Every episode is a real workflow, on screen, walked through by someone who already built it. Made for
            founders and operators who&apos;d rather ship with AI than talk about it.
          </p>

          <div className="w-full max-w-[480px] rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://shippingwithai.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
              title="Subscribe to Shipping with AI on Substack"
            />
          </div>

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

          {/* Tier 1 — where to actually subscribe/watch the full show */}
          <p className="text-xs uppercase tracking-widest text-[#994200] font-semibold mb-5">Watch &amp; Subscribe</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://shippingwithai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md bg-[#994200] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_0_#5c2700] hover:bg-[#a84a00] active:translate-y-[3px] active:shadow-[0_1px_0_0_#5c2700] transition-all"
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
              className="flex items-center gap-2.5 rounded-md bg-[#994200] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_0_#5c2700] hover:bg-[#a84a00] active:translate-y-[3px] active:shadow-[0_1px_0_0_#5c2700] transition-all"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>

          {/* Tier 2 — audio only */}
          <p className="text-[0.7rem] uppercase tracking-widest text-[#564339]/60 font-semibold mb-3">Audio Only</p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="https://podcasts.apple.com/in/podcast/shipping-with-ai/id1896728829"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-[#d4ccba]/50 px-4 py-2.5 text-sm font-medium text-[#1b1c1b] hover:border-[#994200] hover:text-[#994200] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z"/>
              </svg>
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/033eT5uCcMCsbVtv2iczAA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-[#d4ccba]/50 px-4 py-2.5 text-sm font-medium text-[#1b1c1b] hover:border-[#994200] hover:text-[#994200] transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
          </div>

          {/* Tier 3 — shorts/clips, not subscribe destinations */}
          <p className="text-[0.7rem] uppercase tracking-widest text-[#564339]/60 font-semibold mb-3">Clips &amp; Shorts</p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://www.youtube.com/@ShippingwAI/shorts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Shorts"
              className="flex items-center gap-2 rounded-full border border-[#d4ccba] px-3.5 py-2 text-xs font-medium text-[#564339]/80 hover:border-[#994200] hover:bg-[#994200] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Shorts
            </a>
            <a
              href="https://www.instagram.com/shippingwithai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 rounded-full border border-[#d4ccba] px-3.5 py-2 text-xs font-medium text-[#564339]/80 hover:border-[#994200] hover:bg-[#994200] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://x.com/shippingwithai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex items-center justify-center rounded-full border border-[#d4ccba] w-9 h-9 text-[#564339]/80 hover:border-[#994200] hover:bg-[#994200] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@shippingwithai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex items-center gap-2 rounded-full border border-[#d4ccba] px-3.5 py-2 text-xs font-medium text-[#564339]/80 hover:border-[#994200] hover:bg-[#994200] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              TikTok
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
