import Image from "next/image";

// Private directory of every unlisted page on this site: not in the nav,
// no sitemap/robots infra on this site to exclude from anyway. Add a row
// here whenever a new unlisted page ships.

const pages = [
  {
    href: "/show-your-work",
    title: "Show Your Work",
    desc: "The pre-yes guest pitch page, sent in outreach before anything is confirmed.",
  },
  {
    href: "/steps",
    title: "Guest Process",
    desc: "Sent once a guest says yes. The four steps from there to a published episode.",
  },
  {
    href: "/topic",
    title: "Thinking Through the Topic",
    desc: "Step 1 of the guest process: how to pick and frame the workflow to show.",
  },
  {
    href: "/schedule",
    title: "Pick a Time to Record",
    desc: "Step 2: the booking page, embeds the scheduling widget.",
  },
  {
    href: "/brief",
    title: "Your Episode Brief",
    desc: "Sent the day before recording: the questions we'll ask.",
  },
  {
    href: "/record",
    title: "Before We Hit Record",
    desc: "Step 4: the pre-recording checklist (mic, camera, lighting, internet).",
  },
  {
    href: "/session-checklist",
    title: "Session Checklist",
    desc: "Host-side prep for recording day: framing, headroom, screen-share setup.",
  },
  {
    href: "/upload",
    title: "Upload",
    desc: "Internal tool: paste a transcript, generates the full content package (titles, posts, show notes).",
  },
];

export default function Unlisted() {
  return (
    <main className="max-w-2xl mx-auto px-5 pt-4 pb-8">

      {/* Header */}
      <div className="mb-2.5 flex items-baseline justify-between gap-3">
        <h1 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b]">
          Unlisted pages
        </h1>
        <p className="text-[11px] text-[#564339]/70">Not in the nav. Link only.</p>
      </div>

      <div className="border-t border-[#ddc1b3]" />

      <ul className="divide-y divide-[#ddc1b3]">
        {pages.map((p) => (
          <li key={p.href}>
            <a href={p.href} className="group flex items-center gap-2.5 py-1.5">
              <span className="text-sm font-bold text-[#994200] group-hover:underline whitespace-nowrap shrink-0">
                {p.title} →
              </span>
              <span className="truncate text-[11px] text-[#564339]/80">{p.desc}</span>
            </a>
          </li>
        ))}
      </ul>

    </main>
  );
}
