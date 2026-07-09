import Image from "next/image";
import Script from "next/script";

export default function Schedule() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Step 2
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Pick a time to record
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          Choose a slot below that works for you, Gautham, and Rahul.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      {/* NeetoCal inline embed */}
      <div style={{ width: "100%" }} id="inline-embed-container" />

      <Script id="neetocal-stub" strategy="afterInteractive">
        {`window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };`}
      </Script>
      <Script
        id="neetocal-embed-lib"
        src="https://cdn.neetocal.com/javascript/embed.js"
        strategy="afterInteractive"
      />
      <Script id="neetocal-init" strategy="afterInteractive">
        {`
          neetoCal.embed({
            type: "inline",
            id: "8190a5de-4ad0-480b-8b65-c66c9e36388e",
            organization: "growthtodo",
            elementSelector: "#inline-embed-container",
            styles: "height: 100%; width: 100%;",
            queryParams: { "dynamicHeight": true },
            slug: "shipping-with-ai",
            isSidebarAndCoverImgHidden: "false",
            shouldForwardQueryParams: "false"
          });
        `}
      </Script>

    </main>
  );
}
