"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// Fixed 16:9 canvas, scaled to fit the viewport. Arrow keys / space / click
// to move, F for full screen. Covers the site header so the deck is all
// that's on screen while recording.
const W = 1600;
const H = 900;

// Guest wall: Gautham's pick of seven episodes (26 Oct 2026). Listed here
// rather than looked up because Binh and Max are not in data/episodes.ts yet.
const wall = [
  { guest: "Natasha Lee", company: "AI Consultant", youtubeId: "AhQVNA_9MRE" },
  { guest: "Itamar Novick", company: "Recursive Ventures", youtubeId: "C5TrZsZVqH8" },
  { guest: "Bhanu Teja", company: "SiteGPT.ai", youtubeId: "NnatCI_rREA" },
  { guest: "Melody Koh", company: "NextView Ventures", youtubeId: "-GxELVga1wE" },
  { guest: "Binh Tran", company: "Ascend Vietnam Ventures", youtubeId: "aHIzuZObWHM" },
  { guest: "Tiago Costa Alves", company: "Librarian", youtubeId: "7s78wPJnKB0" },
  { guest: "Max Del Vita", company: "Symplehost.ai", youtubeId: "I992ep0ozmc" },
];

const display = "font-[family-name:var(--font-space-grotesk)]";

// Screen recorders put the camera bubble bottom-right, so every slide keeps
// the right-hand strip clear. Press C to see the guide circle while rehearsing.
const CAM = 400;
// Literal class so Tailwind generates it (CAM + 60).
const pad = "pl-32 pr-[460px]";

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-[22px] font-semibold uppercase tracking-[0.25em] text-[#994200] mb-10">{children}</p>;
}

const slides: React.ReactNode[] = [
  // 1. Title
  <div key="title" className={`w-full h-full bg-[#994200] text-white flex flex-col items-start justify-center text-left ${pad}`}>
    <Image src="/cover.png" alt="" width={200} height={200} className="rounded-full mb-12" priority />
    <h1 className={`${display} font-bold text-[84px] leading-[1.05] tracking-[-0.03em] max-w-[1300px] [text-wrap:balance]`}>
      Real AI workflows, shown on screen by the people who built them.
    </h1>
    <p className="text-[30px] text-white/70 mt-10">Shipping with AI · Every episode is a workflow you can <span className="italic">steal.</span></p>
  </div>,

  // 2. What the show is
  <div key="show" className={`w-full h-full flex flex-col justify-center ${pad}`}>
    <Kicker>The show</Kicker>
    <h2 className={`${display} font-bold text-[72px] leading-[1.08] tracking-[-0.02em] text-[#1b1c1b] max-w-[1300px]`}>
      Start to finish, every step visible. No theory, no commentary.
    </h2>
    <p className="text-[32px] text-[#564339] mt-10 max-w-[1100px] leading-[1.5]">
      A builder shares their screen and walks through the workflow the way they run it every day. The viewer leaves with something to use that week.
    </p>
  </div>,

  // 3. Guest wall
  <div key="guests" className={`w-full h-full flex flex-col justify-center ${pad}`}>
    <Kicker>Who has come on</Kicker>
    <div className="grid grid-cols-4 gap-5">
      {wall.map((ep) => (
        <div key={ep.youtubeId} className="bg-[#f0ebe9] rounded-sm overflow-hidden">
          <div className="relative aspect-video">
            <Image src={`https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`} alt="" fill unoptimized className="object-cover" />
          </div>
          <div className="px-4 py-3">
            <p className={`${display} font-bold text-[19px] text-[#1b1c1b] leading-snug`}>{ep.guest}</p>
            <p className="text-[15px] text-[#564339] mt-0.5">{ep.company}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center px-4">
        <p className={`${display} font-bold text-[22px] text-[#994200] leading-snug`}>and more at shippingwith.ai</p>
      </div>
    </div>
  </div>,

  // 4. Who watches
  <div key="audience" className={`w-full h-full flex flex-col justify-center ${pad}`}>
    <Kicker>Who is watching</Kicker>
    <h2 className={`${display} font-bold text-[72px] leading-[1.08] tracking-[-0.02em] text-[#1b1c1b] max-w-[1300px]`}>
      People who want to put AI to work, not read about it.
    </h2>
    <p className="text-[32px] text-[#564339] mt-10 max-w-[1000px] leading-[1.5]">
      Founders, operators, salespeople, consultants, investors. Technical or not. They watch to copy something
      and use it the same week.
    </p>
  </div>,

  // 5. What your thirty minutes becomes
  <div key="machine" className={`w-full h-full flex flex-col justify-center ${pad}`}>
    <Kicker>What your thirty minutes becomes</Kicker>
    <h2 className={`${display} font-bold text-[60px] leading-[1.08] tracking-[-0.02em] text-[#1b1c1b] max-w-[1000px] mb-10`}>
      The best explanation of how you work, with your name on it.
    </h2>
    <ul className="space-y-4">
      {[
        "Full episode on YouTube, Substack, Spotify and Apple",
        "Six to eight clips, cut and posted through the week",
        "A share kit in your inbox, plus posts from both hosts tagging you",
        "Yours to use anywhere: your site, your audience, the next person who asks how you do that",
      ].map((item) => (
        <li key={item} className="flex items-start gap-5 text-[27px] text-[#1b1c1b] leading-snug">
          <span className="mt-[13px] w-3 h-3 rounded-full bg-[#994200] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    <p className={`${display} font-bold text-[36px] text-[#994200] mt-10`}>You talk. We do everything else.</p>
  </div>,

  // 6. What it takes
  <div key="takes" className={`w-full h-full flex flex-col justify-center ${pad}`}>
    <Kicker>What it takes from you</Kicker>
    <div className="grid grid-cols-3 gap-6">
      {[
        ["01", "One short call", "Fifteen minutes to lock the topic and check it is a fit, both ways."],
        ["02", "Under thirty minutes recording", "Screen share and walk us through it, the way you would for a colleague."],
        ["03", "That is it", "No prep deck, no script. We edit, publish, cut the clips and send you the kit."],
      ].map(([n, h, p]) => (
        <div key={n} className="bg-[#f0ebe9] rounded-sm p-8">
          <p className="text-[40px] font-bold text-[#994200] tabular-nums leading-none mb-5">{n}</p>
          <p className={`${display} font-bold text-[28px] text-[#1b1c1b] leading-tight mb-3`}>{h}</p>
          <p className="text-[21px] text-[#564339] leading-[1.5]">{p}</p>
        </div>
      ))}
    </div>
  </div>,

  // 7. The ask
  <div key="ask" className={`w-full h-full bg-[#994200] text-white flex flex-col items-start justify-center text-left ${pad}`}>
    <h2 className={`${display} font-bold text-[84px] leading-[1.08] tracking-[-0.03em] max-w-[1200px] [text-wrap:balance]`}>
      Fifteen minutes to see if it is a fit?
    </h2>
    <p className="text-[32px] text-white/80 mt-12 max-w-[1000px] leading-[1.5]">
      Reply with a day that works. Everything about the show is at{" "}
      <span className={`${display} font-bold text-[#FFD08A] text-[44px] block mt-3`}>shippingwith.ai/show-your-work</span>
    </p>
    <div className="flex items-center gap-5 mt-16">
      <div className="flex -space-x-3">
        <Image src="/gautham.png" alt="Gautham" width={72} height={72} className="rounded-full object-cover object-top border-[3px] border-[#994200]" />
        <Image src="/rahul.jpg" alt="Rahul" width={72} height={72} className="rounded-full object-cover object-top border-[3px] border-[#994200]" />
      </div>
      <p className="text-[28px] text-white/80">Gautham &amp; Rahul</p>
    </div>
  </div>,
];

export default function Deck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(1);
  const [guide, setGuide] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const n = slides.length;

  const go = useCallback((d: number) => setI((c) => Math.min(n - 1, Math.max(0, c + d))), [n]);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener("resize", fit);
    // #3 opens slide 3, so a slide can be linked to directly.
    const fromHash = parseInt(window.location.hash.slice(1), 10);
    if (fromHash >= 1 && fromHash <= n) setI(fromHash - 1);
    // ?guide shows the camera circle from the first paint, for screenshots.
    if (window.location.search.includes("guide")) setGuide(true);
    return () => window.removeEventListener("resize", fit);
  }, [n]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${i + 1}`);
  }, [i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) { e.preventDefault(); go(1); }
      else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); go(-1); }
      else if (e.key === "Home") setI(0);
      else if (e.key === "End") setI(n - 1);
      else if (e.key.toLowerCase() === "c") setGuide((g) => !g);
      else if (e.key.toLowerCase() === "f") {
        if (document.fullscreenElement) document.exitFullscreen();
        else root.current?.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, n]);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    go(e.clientX < window.innerWidth / 2 ? -1 : 1);
  };

  return (
    <div ref={root} onClick={onClick} className="fixed inset-0 z-[60] bg-[#1b1c1b] select-none cursor-pointer overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 bg-[#EBE2CF] overflow-hidden"
        style={{ width: W, height: H, transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        {slides[i]}
        {guide && (
          <div
            className="absolute rounded-full border-4 border-dashed border-black/50 bg-black/15 flex items-center justify-center text-black/60 text-[22px] font-semibold"
            style={{ width: CAM, height: CAM, right: 40, bottom: 40 }}
          >
            camera
          </div>
        )}
      </div>
    </div>
  );
}
