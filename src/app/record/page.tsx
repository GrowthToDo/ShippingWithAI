import Image from "next/image";

export default function BeforeWeRecord() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          Step 3
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
