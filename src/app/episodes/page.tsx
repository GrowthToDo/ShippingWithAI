import Image from "next/image";
import { episodes } from "@/data/episodes";

export default function Episodes() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          {episodes.length} episodes and counting
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Real builders, real workflows
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Every episode is a real workflow, on screen, walked through by someone who already built it.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-8">
        {episodes.map((ep) => (
          <a
            key={ep.youtubeId}
            href={ep.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-video overflow-hidden rounded-sm ring-1 ring-[#d4ccba]/50 mb-3">
              <Image
                src={`https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`}
                alt={ep.title}
                fill
                unoptimized
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#1c1b1b] text-base md:text-lg leading-snug group-hover:text-[#994200] transition-colors">
              {ep.title}
            </p>
            <p className="text-[#994200] text-sm mt-1">
              {ep.guest} · {ep.company}
            </p>
          </a>
        ))}
      </div>

    </main>
  );
}
