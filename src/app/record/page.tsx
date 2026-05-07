import Image from "next/image";

export default function BeforeWeRecord() {
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
          Before we hit record
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          A few things to sort before we start. None of them take long, but they make a real difference to how the episode turns out.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-12">

        {/* Checklist */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-6">
            The checklist
          </h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🎧</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Use headphones, not speakers</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  This is the single most important thing on this list. When you use speakers, your microphone picks up the other person&apos;s voice and it bleeds into your audio track. It ruins the recording and can&apos;t be fixed in editing. Any headphones work, earbuds are fine.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🎙️</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Use a good microphone if you have one</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  A dedicated USB or XLR mic makes a noticeable difference to how you sound on the episode. If you have one, use it. If not, the built-in mic on a modern laptop is fine as long as you&apos;re using headphones. On a Mac, go to System Settings &rarr; Sound &rarr; Input and make sure the input volume is turned up. Speak at your normal level and watch the meter. It should be moving clearly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">📷</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Use a good camera if you have one</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  If you have an external webcam or can use your phone as a camera, it&apos;s worth setting up. Built-in laptop cameras are fine, but a better camera at eye level makes a real difference. Whatever you&apos;re using, make sure it&apos;s in frame and at roughly eye level. Propping your laptop up on a few books already helps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">💡</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Sort your lighting</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Your face should be clearly visible and evenly lit. Sit facing a window or a light source, not with it behind you. A bright window behind you means you&apos;ll come out as a silhouette. Move so the light is in front of you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">✅</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Test everything before we start</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Join Riverside a few minutes early and check that your mic, camera, and screen share are all working. We want to start recording on time, not spend the first ten minutes troubleshooting. If something looks off, it&apos;s much easier to fix before we&apos;re live.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🔕</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Turn on Do Not Disturb</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  On your laptop, turn on Do Not Disturb before we start. On your phone, put it on silent and face down. Notification sounds and banners mid-recording are distracting and hard to edit around.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">💻</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Have your workflow open and ready</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Before we start, open everything you&apos;ll need for the walkthrough and close any tabs or apps you won&apos;t be using. A clean screen share is easier to follow.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🌐</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Stable internet</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Close anything that might be eating your bandwidth: large downloads, streaming, other video calls running in the background. A wired connection is better than Wi-Fi if you have the option.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🪟</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Clean background</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  You don&apos;t need a studio setup. A plain wall or a tidy space behind you is all it takes. The background shouldn&apos;t pull attention away from you.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">💧</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Keep water nearby</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Thirty minutes of talking is more than you think. Have a glass of water within reach before we start.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🚪</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Close the door</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Let the people around you know you&apos;re recording for the next thirty minutes. Background noise like a conversation, a door opening, or someone walking in is the kind of thing that&apos;s obvious on a recording even when it barely registers in the room.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* How the episode flows */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-5">
            How the episode flows
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "01",
                label: "Who you are",
                desc: "A brief introduction. What you do, what you build, what world you operate in.",
              },
              {
                step: "02",
                label: "The why",
                desc: "What drove you to build this workflow. What problem were you sitting with, what broke, what frustrated you enough to find a better way.",
              },
              {
                step: "03",
                label: "The walkthrough",
                desc: "This is the core of the episode. Share your screen and walk us through exactly how it works, like you'd explain it to a teammate. The tools, the prompts, the decisions, all of it.",
              },
              {
                step: "04",
                label: "The payoff",
                desc: "What changed for you once this was working. Time saved, money made, something you'll never do manually again. And what someone watching could take from it and use tomorrow.",
              },
            ].map(({ step, label, desc }) => (
              <div key={step} className="flex gap-5 p-4 bg-[#f0ebe9] rounded-sm">
                <span className="text-2xl font-bold text-[#994200] tabular-nums leading-none shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1c1b1b]">{label}</p>
                  <p className="text-sm text-[#1c1b1b] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mt-4">
            Throughout all of this we&apos;ll ask follow-up questions as you go. The conversation stays live. Nothing is rigid.
          </p>
        </section>

        {/* Practicalities */}
        <section className="bg-[#994200]/8 border border-[#994200]/20 rounded-sm p-6">
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-3">
            A few practicalities
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-2">
            We record on <a href="https://riverside.fm" target="_blank" rel="noopener noreferrer" className="text-[#994200] underline underline-offset-2">Riverside</a>. Sessions run under thirty minutes and the final episode is typically fifteen to twenty minutes. We handle all the editing.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-2">
            All you need is your screen and your workflow. No slides or prep decks needed.
          </p>
          <p className="text-sm text-[#1c1b1b] leading-relaxed">
            If you can walk through it like you&apos;d explain it to a teammate over a screen share, that&apos;s exactly what we&apos;re after.
          </p>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* Sign-off */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
            <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1c1b1b]">
              See you on the other side.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
