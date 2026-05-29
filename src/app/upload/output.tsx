"use client";

import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="shrink-0 text-xs px-3 py-1 border border-[#d4ccba]/60 text-[#994200] hover:bg-[#994200] hover:text-white hover:border-[#994200] transition-colors"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function Block({ label, content }: { label?: string; content: string }) {
  return (
    <div className="mb-4">
      {label && (
        <p className="text-xs uppercase tracking-widest text-[#994200] font-semibold mb-2">{label}</p>
      )}
      <div className="flex gap-2 items-start">
        <pre className="flex-1 text-sm text-[#1b1c1b] leading-relaxed whitespace-pre-wrap bg-[#faf7f4] border border-[#d4ccba]/40 p-4 font-mono">
          {content.trim()}
        </pre>
        <CopyButton text={content.trim()} />
      </div>
    </div>
  );
}

function parseSubSections(content: string): { label: string; content: string }[] {
  const parts = content.split(/\n###+ /);
  if (parts.length <= 1) return [{ label: "", content: content.trim() }];
  const result: { label: string; content: string }[] = [];
  if (parts[0].trim()) result.push({ label: "", content: parts[0].trim() });
  for (let i = 1; i < parts.length; i++) {
    const newline = parts[i].indexOf("\n");
    const label = newline > -1 ? parts[i].slice(0, newline).trim() : parts[i].trim();
    const body = newline > -1 ? parts[i].slice(newline + 1).trim() : "";
    if (body) result.push({ label, content: body });
  }
  return result;
}

function parseSections(raw: string): { title: string; short: string; content: string }[] {
  const parts = raw.split(/\n?## SECTION \d+: /);
  const sections: { title: string; short: string; content: string }[] = [];
  const shorts = ["Edit 1", "Edit 2", "Intro", "YouTube", "Substack", "Show X", "Gautham X", "Rahul X", "LinkedIn", "Clips"];
  const start = parts[0].trim() ? 0 : 1;
  for (let i = start; i < parts.length; i++) {
    const part = parts[i];
    const newline = part.indexOf("\n");
    const title = newline > -1 ? part.slice(0, newline).trim() : part.trim();
    const content = newline > -1 ? part.slice(newline + 1).trim() : "";
    if (title) sections.push({ title, short: shorts[sections.length] ?? title, content });
  }
  return sections;
}

export function OutputView({ filename, content }: { filename: string; content: string }) {
  const sections = parseSections(content);
  const [active, setActive] = useState(0);

  const current = sections[active];
  const subSections = current ? parseSubSections(current.content) : [];

  return (
    <div className="min-h-screen bg-[#faf7f4]">
      {/* Header */}
      <div className="border-b border-[#d4ccba]/40 bg-white px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#994200] font-semibold">Content package ready</p>
          <p className="text-xs font-mono text-[#94867a] mt-0.5">{filename}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="text-xs text-[#994200] border border-[#994200]/30 px-4 py-2 hover:bg-[#994200]/5 transition-colors"
        >
          New episode
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#d4ccba]/40 bg-white px-6 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-3 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                active === i
                  ? "border-[#994200] text-[#994200]"
                  : "border-transparent text-[#94867a] hover:text-[#564339]"
              }`}
            >
              {s.short}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {sections.length === 0 ? (
          <Block content={content} />
        ) : current && (
          <>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[#1b1c1b] mb-6 tracking-tight">
              {current.title}
            </h2>
            {subSections.map((sub, i) => (
              <Block key={i} label={sub.label || undefined} content={sub.content} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
