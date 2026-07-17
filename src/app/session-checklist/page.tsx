import Image from "next/image";

export default function SessionChecklist() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">

      {/* Visual anchor */}
      <div className="mb-10 flex items-center gap-3">
        <Image src="/cover.png" alt="Shipping with AI" width={40} height={40} className="rounded-full object-cover" />
        <p className="text-sm font-semibold uppercase tracking-widest text-[#994200]">
          While We&apos;re Recording
        </p>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold font-[family-name:var(--font-space-grotesk)] tracking-tight text-[#1c1b1b] mb-5">
          Session checklist
        </h1>
        <p className="text-lg text-[#1c1b1b] leading-relaxed">
          A few things to keep an eye on once we&apos;re live, since we&apos;re all in the same Riverside room together.
        </p>
      </div>

      <div className="border-t border-[#ddc1b3] mb-12" />

      <div className="space-y-12">

        {/* Double-check section */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-2">
            Quick double-check before we roll
          </h2>
          <p className="text-sm text-[#1c1b1b] leading-relaxed mb-6">
            The guest already went through <a href="/record" className="text-[#994200] underline underline-offset-2">the pre-recording checklist</a>, but a few of those items aren&apos;t visible on camera, so it&apos;s worth a quick spoken confirmation the moment we&apos;re live.
          </p>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">📵</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Phone on silent</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Ask: is your phone on silent and face down? A buzz or a notification banner mid-recording is obvious on playback even when it barely registers live.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🚪</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Door closed, people around them know</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Ask: is the door closed, and do the people around them know they&apos;re recording for the next thirty minutes? Someone walking in or a conversation in the background is hard to edit around.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🎧</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Headphones, not speakers</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Confirm they&apos;re on headphones. If they&apos;re on speakers, the audio bleeds across mics and it can&apos;t be fixed in editing, so catch it before we&apos;re rolling for real.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🔒</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Proprietary data swapped out</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Ask: is there anything on screen they need to swap for dummy data before we start, client details, customer data, anything under an NDA? Easier to catch now than after it&apos;s in the recording.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🔕</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Notification apps closed</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Ask: is WhatsApp, Slack, or anything else that pings closed or muted on the laptop? Even on headphones, a message sound lands mid-sentence and pulls you out of the flow. Quitting those apps for thirty minutes keeps the recording, and your head, clean.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🧹</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Close the windows you don&apos;t need</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Ask: are there extra windows and tabs open beyond what the demo needs? A screen share with twenty windows behind it looks messy on playback, and there&apos;s always a risk something personal ends up on camera. Close everything except what we&apos;re going to show.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">💧</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Water within reach</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Thirty minutes of talking is more than people expect. A quick check that they have water nearby saves an awkward pause later.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* How we'll start */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-6">
            How we&apos;ll start
          </h2>
          <div className="flex gap-4">
            <span className="text-2xl shrink-0">🎬</span>
            <div>
              <p className="text-sm font-semibold text-[#1c1b1b] mb-1">3, 2, 1, and straight into the first question</p>
              <p className="text-sm text-[#1c1b1b] leading-relaxed">
                There&apos;s no intro and no hi-and-welcome on the recording. We&apos;ll say the recording is starting, count 3, 2, 1, and ask the first question directly. The episode intro gets made afterwards: we take the transcript, write an intro script from it, and one of us records it separately. So don&apos;t wait for a warm-up, the first thing you say is already the episode.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* Checklist */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-6">
            While we&apos;re recording
          </h2>
          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🖼️</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Keep your framing tight</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  Since it&apos;s three of us on screen at once, try not to leave too much space above your head. Frame yourself the way you would for a normal video call, eyes roughly in the upper third of the frame, not centered with a lot of headroom.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">🪟</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Close Riverside&apos;s floating window when you screen share</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  When you start sharing your screen, Riverside pops up a small floating window with everyone&apos;s cameras on top of whatever you&apos;re sharing. Close or minimize it once you&apos;re sharing, so the recording captures your screen cleanly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl shrink-0">👀</span>
              <div>
                <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Show it, don&apos;t just describe it</p>
                <p className="text-sm text-[#1c1b1b] leading-relaxed">
                  If you&apos;re talking about a step in your workflow, put it on screen. The show-and-tell is what makes an episode useful, so whatever you&apos;re describing, make sure it&apos;s actually visible.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="border-t border-[#ddc1b3]" />

        {/* When we're done */}
        <section>
          <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-[#1c1b1b] mb-6">
            When we&apos;re done
          </h2>
          <div className="flex gap-4">
            <span className="text-2xl shrink-0">⏳</span>
            <div>
              <p className="text-sm font-semibold text-[#1c1b1b] mb-1">Don&apos;t exit Riverside right away</p>
              <p className="text-sm text-[#1c1b1b] leading-relaxed">
                Riverside records locally on your machine and uploads the files in the background. When we wrap, keep the tab open until it says the upload is complete. Closing it early can lose the high-quality local recording, and that&apos;s the one we edit from.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-[#ddc1b3] border-dashed" />

        <p className="text-sm text-[#1c1b1b]/60 italic">
          This list is still growing. More items to come.
        </p>

        <div className="border-t border-[#ddc1b3]" />

        {/* Sign-off */}
        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            <Image src="/gautham.png" alt="Gautham" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
            <Image src="/rahul.jpg" alt="Rahul" width={40} height={40} className="rounded-full object-cover object-top border-2 border-[#EBE2CF]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#1c1b1b]">
              None of this is strict. Just things that make the edit easier.
            </p>
            <p className="text-sm text-[#994200] mt-0.5">Gautham & Rahul</p>
          </div>
        </div>

      </div>
    </main>
  );
}
