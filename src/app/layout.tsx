import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shipping with AI",
  description: "The show where AI goes from hype to implementation.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#EBE2CF] text-[#1b1c1b]">

        {/* Nav */}
        <header className="bg-[#EBE2CF] border-b border-[#d4ccba]/70 sticky top-0 z-50">
          <nav className="flex justify-between items-center w-full px-6 py-6 max-w-5xl mx-auto">
            <a
              href="/"
              className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest text-[#1b1c1b] hover:text-[#994200] transition-colors"
            >
              Shipping with AI
            </a>
            <a
              href="https://shippingwithai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#994200] hover:opacity-70 transition-opacity"
            >
              Watch
            </a>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#EBE2CF] border-t border-[#d4ccba]/40 py-20">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="text-sm font-bold font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest mb-4">
                Shipping with AI
              </div>
              <p className="text-sm text-[#564339]/60 max-w-[200px]">
                A new workflow every week. Watch it. Use it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://shippingwithai.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-[#994200] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                Substack
              </a>

              <a
                href="https://www.youtube.com/@ShippingwAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-widest hover:text-[#994200] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a
                href="/guide-to-guests"
                className="text-xs font-bold uppercase tracking-widest hover:text-[#994200] transition-colors"
              >
                Guest Guide
              </a>
            </div>
            <div className="text-[0.7rem] uppercase tracking-widest text-[#564339]/40">
              © MMXXVI Shipping with AI
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
