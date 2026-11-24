import Image from "next/image";
import { pageMeta } from "../../_og/meta";

export const metadata = pageMeta("Turn your old laptop into an AI employee");

const WALKTHROUGH = "https://growthtodo.com/blog/how-to-run-your-own-ai-assistant-on-whatsapp-for-free";

const H2 = "text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-6";
const P = "text-sm text-[#1c1b1b] leading-relaxed";
const CARD = "p-5 bg-[#f0ebe9] rounded-sm";
const A = "text-[#994200] underline underline-offset-2";

const does: [string, string][] = [
  ["It drafts", "Ask for a reply to a client, a proposal or a document. It writes it in the right Google Doc and sends you the link on your phone. Suggest edits in the chat and it sends back the new version."],
  ["It remembers", "Every client, every project, what's due this week. Ask, and it answers from the notes it keeps about your business."],
  ["It helps you decide", "Stuck on a call? It lays out the options for you, right in the chat."],
  ["It files things", "Forward a photo of a bill or a PDF. It asks what it is, then saves it where you tell it to."],
  ["It runs your day", "At 7 every morning it sends the few things you picked for today. At night it logs what got done."],
  ["It never sleeps", "The laptop stays on at home, so it keeps working while you're out."],
];

const costs: [string, string, string][] = [
  ["The laptop", "Free", "One you already own. It just has to stay plugged in and online."],
  ["Telegram bot", "Free", "Made in two minutes through Telegram's own @BotFather."],
  ["WhatsApp number", "Free to start", "Meta gives you a free test number. Replies the bot sends within 24 hours of your message are free."],
  ["Public web address", "Free", "Only needed for WhatsApp. Tailscale's free plan covers it."],
  ["The AI", "Your subscription", "We use a Claude subscription. Nothing extra on top of it."],
];

const examples: [string, string][] = [
  ["Draft a reply to Priya saying we can start on the 1st, and keep it short.", "Here's the draft in your Client Emails doc: [link]. Want any changes?"],
  ["What's due this week?", "Three things: the proposal for the clinic on Wednesday, the invoice follow-up on Thursday, and the team review on Friday."],
  ["[a photo of a bill]", "Got 1 file. What is it about?"],
  ["Electricity bill for the office, save it in Bills.", "Saved in Bills as Office electricity, November."],
  ["I'm torn between hiring a part-time editor or using a freelancer. Lay it out.", "Here are both options, side by side, with the cost, the risk and what each means for your week."],
];

const steps: [string, string, string | null][] = [
  ["Prepare the laptop", "Clear it out, keep it plugged in, and turn off sleep so it stays on day and night. A Mac, Windows or Linux laptop all work.", null],
  ["Install the AI and sign in", "Install Claude Code on the laptop and sign in with your Claude subscription. Type a test question in the terminal. If it answers, the hardest part is done.", "https://claude.com/claude-code"],
  ["Give it a memory of your business", "Create a folder of plain notes. This is what makes it know your business (see the next section for what to put in it).", null],
  ["Connect Google", "Let it create and edit Google Docs, so every draft comes back to you as a link you can open on your phone.", null],
  ["Create your Telegram bot", "Open @BotFather in Telegram, send /newbot, pick a name, and copy the token it gives you. That's your bot.", "https://t.me/BotFather"],
  ["Connect the chat to the laptop", "A short script on the laptop passes your messages to the AI and sends the replies back. It answers only your account and ignores everyone else.", WALKTHROUGH],
  ["Add WhatsApp (optional)", "Create a free Meta developer app, take its test WhatsApp number, and give the laptop a public web address with Tailscale so WhatsApp can reach it. The full steps, including the one most guides miss, are in the walkthrough.", "https://developers.facebook.com"],
  ["Add the daily routines", "Schedule the 7 AM list and the end-of-day log, and make the script start by itself whenever the laptop restarts.", null],
  ["Set the ground rules", "Drafts only, never send. Only your number gets an answer. It changes only the folder you give it. You decide everything else it may touch.", null],
];

const memory: [string, string][] = [
  ["About my business", "What you sell, who you sell to, your prices, and how you like to work."],
  ["Clients", "One note per client: who they are, what you're doing for them, and where it stands."],
  ["Projects", "What's in progress, what's next, and any deadlines."],
  ["To-dos", "Everything on your plate. Each morning you pick the few that matter."],
  ["How I write", "A few of your own emails, and the words you never use. This is why its drafts sound like you."],
];

const faq: [string, string][] = [
  ["Do I need to know how to code?", "No for using it. For the setup, you copy a short script and paste a few commands. If that sounds like too much, that's exactly where we help."],
  ["Is it really free?", "Everything except the AI subscription you already pay for. One honest note: if you run it on a Claude subscription, check Anthropic's current terms for automated use. If you'd rather pay per use, Claude Code also works with an API key, and the cost is small for one person."],
  ["Telegram or WhatsApp?", "Start with Telegram. It takes minutes, needs no public web address, and it can message you first, which is how the 7 AM list arrives. WhatsApp only lets the bot reply within 24 hours of your last message, so add it later if it's where you live."],
  ["Is my data safe?", "Your notes live on your own laptop at home, not in a new app's cloud. The bot answers only your number, checks every message really came from WhatsApp or Telegram, and can never send an email on its own."],
  ["What if the laptop restarts or the power goes?", "Set the script to start by itself when the laptop boots. A cheap UPS keeps it running through short power cuts."],
  ["How long does it take?", "An afternoon for Telegram and your first notes. Add an hour or two for WhatsApp. The memory gets better every week you use it."],
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
          This is the guide we promised in the video. An AI that knows your business, that you text on WhatsApp or Telegram from anywhere, running on a laptop you already own, for nothing more than an AI subscription. Below: what it does, what it costs, what you need, and every step. If you&apos;d rather not do it alone, we&apos;ll set it up with you.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href="#steps" className="inline-block border border-[#994200] text-[#994200] px-5 py-3 font-bold text-sm hover:bg-[#994200] hover:text-white transition-colors">
            Jump to the steps
          </a>
          <a href="#help" className="inline-block bg-[#994200] text-white px-5 py-3 font-bold text-sm hover:opacity-90 transition-opacity">
            Get help setting it up
          </a>
        </div>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      {/* What it does */}
      <section className="mb-14">
        <h2 className={H2}>What it does for you</h2>
        <div className="space-y-4">
          {does.map(([title, body]) => (
            <div key={title} className={CARD}>
              <p className="text-sm font-semibold text-[#1c1b1b]">{title}</p>
              <p className={`${P} mt-1`}>{body}</p>
            </div>
          ))}
        </div>
        <p className={`${P} mt-5`}>
          One thing it never does: send an email on its own. It drafts, you read it, you send it.
        </p>
      </section>

      {/* Examples */}
      <section className="mb-14">
        <h2 className={H2}>What it looks like in the chat</h2>
        <div className="space-y-5">
          {examples.map(([you, it]) => (
            <div key={you} className="space-y-2">
              <div className="flex justify-end">
                <p className="max-w-[85%] text-sm leading-relaxed bg-[#994200] text-white px-4 py-2.5 rounded-lg rounded-br-sm">{you}</p>
              </div>
              <div className="flex justify-start">
                <p className="max-w-[85%] text-sm leading-relaxed bg-[#f0ebe9] text-[#1c1b1b] px-4 py-2.5 rounded-lg rounded-bl-sm">{it}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={`${P} mt-5 text-[#1c1b1b]/70`}>
          Examples written to show the kind of reply you get. Names and details are made up.
        </p>
      </section>

      {/* Cost */}
      <section className="mb-14">
        <h2 className={H2}>What it costs</h2>
        <div className="divide-y divide-[#ddc1b3] border-y border-[#ddc1b3]">
          {costs.map(([item, price, note]) => (
            <div key={item} className="py-4 grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
              <p className="text-sm font-semibold text-[#1c1b1b]">{item}</p>
              <p className="text-sm font-bold text-[#994200] text-right">{price}</p>
              <p className={`${P} col-span-2`}>{note}</p>
            </div>
          ))}
        </div>
        <p className={`${P} mt-5`}>
          No server, no cloud bill, no new app to learn.
        </p>
      </section>

      {/* Telegram vs WhatsApp */}
      <section className="mb-14">
        <h2 className={H2}>Telegram or WhatsApp?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={CARD}>
            <p className="text-sm font-semibold text-[#1c1b1b] mb-2">Telegram: start here</p>
            <ul className={`${P} space-y-1.5 list-disc pl-4`}>
              <li>Set up in about two minutes with @BotFather</li>
              <li>No public web address needed</li>
              <li>It can message you first, so your 7 AM list arrives by itself</li>
              <li>Free</li>
            </ul>
          </div>
          <div className={CARD}>
            <p className="text-sm font-semibold text-[#1c1b1b] mb-2">WhatsApp: add it later</p>
            <ul className={`${P} space-y-1.5 list-disc pl-4`}>
              <li>The app you already live in</li>
              <li>Needs a free Meta developer app and Tailscale</li>
              <li>It can only reply within 24 hours of your last message</li>
              <li>Free test number to start</li>
            </ul>
          </div>
        </div>
        <p className={`${P} mt-5`}>
          You can run both at once. They talk to the same AI and the same notes.
        </p>
      </section>

      {/* What you need */}
      <section className="mb-14">
        <h2 className={H2}>What you need</h2>
        <ul className="space-y-4">
          {[
            ["An old laptop", "Mac, Windows or Linux, plugged in and online."],
            ["An AI subscription", "We use Claude. Claude Code is the part that does the thinking."],
            ["A Telegram account", "And, if you want it, a WhatsApp number of your own."],
            ["Your Google account", "So drafts land in Google Docs you can open from your phone."],
            ["One afternoon", "More if you add WhatsApp on the same day."],
          ].map(([title, body]) => (
            <li key={title} className="flex gap-4">
              <span className="text-[#994200] font-bold shrink-0">✓</span>
              <p className={P}><span className="font-semibold">{title}.</span> {body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section id="steps" className="mb-14 scroll-mt-8">
        <h2 className={H2}>How to set it up</h2>
        <div className="space-y-4">
          {steps.map(([title, body, link], i) => (
            <div key={title} className={`flex items-start gap-5 ${CARD}`}>
              <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1c1b1b]">{title}</p>
                <p className={`${P} mt-1`}>{body}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className={`${A} text-sm inline-block mt-2`}>
                    {link === WALKTHROUGH ? "Full step-by-step walkthrough →" : `${link.replace("https://", "")} →`}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 border border-[#ddc1b3] rounded-sm">
          <p className="text-sm font-semibold text-[#1c1b1b]">Want every command and the script?</p>
          <p className={`${P} mt-1`}>
            The complete technical walkthrough, with the script you can copy, the exact Meta settings and the fixes for what usually goes wrong, is here:{" "}
            <a href={WALKTHROUGH} target="_blank" rel="noopener noreferrer" className={A}>How to run your own AI assistant on WhatsApp for free</a>.
          </p>
        </div>
        <p className={`${P} mt-5`}>
          Steps 1 to 5 are easy for most people. Steps 6 and 7 are the technical part, and that&apos;s where most people ask us for help.
        </p>
      </section>

      {/* Memory */}
      <section className="mb-14">
        <h2 className={H2}>What to put in its memory</h2>
        <p className={`${P} mb-5`}>
          This is what turns a chatbot into an employee who knows your business. Start with five plain notes. Short is fine; it gets better as you add to them.
        </p>
        <div className="space-y-3">
          {memory.map(([title, body]) => (
            <div key={title} className="flex gap-4 items-baseline">
              <span className="text-xs font-mono bg-[#f0ebe9] text-[#1c1b1b] px-2 py-1 rounded-sm shrink-0">{title}</span>
              <p className={P}>{body}</p>
            </div>
          ))}
        </div>
        <p className={`${P} mt-5`}>
          Every time it gets something wrong, add one line to the right note. That is how it learns your business.
        </p>
      </section>

      {/* Safety */}
      <section className="mb-14">
        <h2 className={H2}>Ground rules that keep it safe</h2>
        <ul className={`${P} space-y-2 list-disc pl-5`}>
          <li>It answers only your number. A stranger who finds the bot gets silence.</li>
          <li>It checks every message really came from Telegram or WhatsApp.</li>
          <li>It drafts emails and never sends them. Anything for another person comes to you first.</li>
          <li>It can change only the folder you give it.</li>
          <li>Your tokens and keys sit in private files on the laptop, never in a chat or a shared document.</li>
          <li>Each night it clears the conversation, so every morning starts fresh. Send /new to do it any time.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className={H2}>Questions people ask</h2>
        <div className="space-y-3">
          {faq.map(([q, a]) => (
            <details key={q} className={`${CARD} group`}>
              <summary className="text-sm font-semibold text-[#1c1b1b] cursor-pointer list-none flex justify-between gap-4">
                {q}
                <span className="text-[#994200] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className={`${P} mt-3`}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Help */}
      <section id="help" className="scroll-mt-8 p-6 border border-[#ddc1b3] rounded-sm mb-12">
        <h2 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-3">
          Want us to set it up with you?
        </h2>
        <p className={`${P} mb-4`}>
          On a call, we&apos;ll:
        </p>
        <ul className={`${P} space-y-1.5 list-disc pl-5 mb-6`}>
          <li>get the AI running on your laptop</li>
          <li>connect your Telegram, and WhatsApp if you want it</li>
          <li>write the first version of its memory with you, from how your business actually works</li>
          <li>set the daily routines and the ground rules</li>
        </ul>
        <p className={`${P} mb-6`}>
          Message either of us and tell us a little about your business.
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
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className={A}>LinkedIn</a>
                  <a href={p.x} target="_blank" rel="noopener noreferrer" className={A}>X</a>
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
