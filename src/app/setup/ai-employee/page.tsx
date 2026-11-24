import Image from "next/image";
import { pageMeta } from "../../_og/meta";

export const metadata = pageMeta("Turn your old laptop into an AI employee");

const does = [
  ["It drafts", "Ask for a reply to a client, a proposal or a document. It writes it in the right Google Doc and sends you the link on your phone."],
  ["It remembers", "Every client, every project, what's due this week. Ask, and it answers from what it knows about your business."],
  ["It helps you decide", "Stuck on a call? It lays out the options for you, right in the chat."],
  ["It runs your day", "At 7 every morning it sends the few things you picked for today. At night it logs what got done."],
  ["It never sleeps", "The laptop stays on at home, so it keeps working while you're out."],
];

const needs = [
  ["An old laptop", "Mac, Windows or Linux. It only needs to stay plugged in and connected to the internet."],
  ["An AI subscription", "We use a Claude subscription. There is nothing extra to pay on top of it."],
  ["WhatsApp or Telegram", "Telegram is the quickest to connect. WhatsApp takes a little more setup."],
  ["Your Google account", "So drafts land in Google Docs you can open and edit from your phone."],
  ["One afternoon", "That's roughly how long the first setup takes, more if you set up WhatsApp too."],
];

const steps = [
  ["Prepare the laptop", "Clear it out, keep it plugged in, and turn off sleep so it stays on all day and night."],
  ["Install the AI and sign in", "Install Claude Code on the laptop and sign in with your Claude subscription."],
  ["Give it a memory of your business", "Create a folder of plain notes: your clients, your projects, your to-dos, and how you like your emails written. This is what makes it know your business."],
  ["Connect Google", "Let it create and edit Google Docs, so every draft comes back to you as a link."],
  ["Create your chat bot", "Make a Telegram bot (about two minutes) or a WhatsApp Business number. This is the number you'll text."],
  ["Connect the chat to the laptop", "A small script on the laptop passes your messages to the AI and sends its replies back. It answers only you."],
  ["Add the daily routines", "Schedule the 7 AM list and the end-of-day log, so your day starts and closes without you doing anything."],
  ["Set the ground rules", "Drafts only, never send. Only your account can talk to it. You decide what it can touch."],
];

export default function Setup() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          The SETUP guide
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Turn your old laptop into an AI employee
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          This is the guide we promised in the video. An AI that knows your business, that you text on WhatsApp or Telegram from anywhere, running on a laptop you already own. Here&apos;s what it does, what you need, and how to set it up. If you&apos;d rather not do it alone, we&apos;ll set it up with you.
        </p>
        <a
          href="#help"
          className="inline-block mt-6 bg-[#994200] text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
        >
          Get help setting it up
        </a>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      {/* What it does */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-6">
          What it does for you
        </h2>
        <div className="space-y-4">
          {does.map(([title, body]) => (
            <div key={title} className="p-5 bg-[#f0ebe9] rounded-sm">
              <p className="text-sm font-semibold text-[#1c1b1b]">{title}</p>
              <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#1c1b1b] mt-5 leading-relaxed">
          One thing it never does: send an email on its own. It drafts, you read it, you send it.
        </p>
      </section>

      {/* What you need */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-6">
          What you need
        </h2>
        <ul className="space-y-4">
          {needs.map(([title, body]) => (
            <li key={title} className="flex gap-4">
              <span className="text-[#994200] font-bold shrink-0">✓</span>
              <p className="text-sm text-[#1c1b1b] leading-relaxed">
                <span className="font-semibold">{title}.</span> {body}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-sm text-[#1c1b1b] mt-6 leading-relaxed">
          No server, no cloud bill, no new app to learn.
        </p>
      </section>

      {/* How to set it up */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-6">
          How to set it up
        </h2>
        <div className="space-y-4">
          {steps.map(([title, body], i) => (
            <div key={title} className="flex items-start gap-5 p-5 bg-[#f0ebe9] rounded-sm">
              <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1c1b1b]">{title}</p>
                <p className="text-sm text-[#1c1b1b] mt-1 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-[#1c1b1b] mt-6 leading-relaxed">
          Steps 1 to 4 are easy for most people. Steps 5 and 6 are the technical part, and that&apos;s where most people ask us for help. The memory in step 3 is what makes it useful, so it&apos;s worth doing well.
        </p>
      </section>

      {/* Help */}
      <section id="help" className="scroll-mt-8 p-6 border border-[#ddc1b3] rounded-sm mb-12">
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-3">
          Want us to set it up with you?
        </h2>
        <p className="text-sm text-[#1c1b1b] leading-relaxed mb-6">
          We&apos;ll walk you through it, connect your chat, and help you write the memory that makes it know your business. Message either of us and tell us a little about your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: "Gautham", photo: "/gautham.png", linkedin: "https://www.linkedin.com/in/mindcharting/", x: "https://x.com/MindCharting" },
            { name: "Rahul", photo: "/rahul.jpg", linkedin: "https://www.linkedin.com/in/rahulthayyalamkandy/", x: "https://x.com/rahul0720" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-4 p-4 bg-[#f0ebe9] rounded-sm">
              <Image src={p.photo} alt={p.name} width={48} height={48} className="rounded-full object-cover object-top" />
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b]">{p.name}</p>
                <div className="flex gap-3 mt-1 text-sm">
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#994200] underline underline-offset-2">LinkedIn</a>
                  <a href={p.x} target="_blank" rel="noopener noreferrer" className="text-[#994200] underline underline-offset-2">X</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign-off */}
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1c1b1b]">
            Questions at any point, just message us.
          </p>
          <p className="text-sm text-[#994200] mt-0.5">Gautham &amp; Rahul</p>
        </div>
      </div>

    </main>
  );
}
