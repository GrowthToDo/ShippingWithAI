"use client";

import { useActionState, useRef } from "react";
import { uploadTranscript } from "./actions";
import { OutputView } from "./output";

const idle = { status: "idle" } as const;

export default function UploadPage() {
  const [state, action, pending] = useActionState(uploadTranscript, idle);
  const nameRef = useRef<HTMLInputElement>(null);
  const transcriptRef = useRef<HTMLTextAreaElement>(null);

  if (state.status === "success") {
    return <OutputView filename={state.filename} content={state.content} />;
  }

  return (
    <div className="min-h-screen bg-[#faf7f4] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#1b1c1b] mb-2 tracking-tight">
          Upload transcript
        </h1>
        <p className="text-sm text-[#564339] mb-8">
          Enter the guest name, paste the transcript, and submit. Content package generates instantly.
        </p>

        <form action={action} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#994200] font-semibold mb-2">
              Guest name
            </label>
            <input
              ref={nameRef}
              type="text"
              name="guestName"
              placeholder="e.g. Sharath Kuruganty"
              className="w-full border border-[#d4ccba]/60 bg-white px-4 py-3 text-sm text-[#1b1c1b] placeholder:text-[#b0a898] focus:outline-none focus:border-[#994200]"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#994200] font-semibold mb-2">
              Transcript
            </label>
            <textarea
              ref={transcriptRef}
              name="transcript"
              placeholder="Paste transcript here..."
              rows={12}
              className="w-full border border-[#d4ccba]/60 bg-white px-4 py-3 text-sm text-[#1b1c1b] placeholder:text-[#b0a898] focus:outline-none focus:border-[#994200] resize-y font-mono"
              required
            />
          </div>

          {state.status === "error" && (
            <p className="text-sm text-red-600">{state.message}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-[#994200] text-white py-3 text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {pending ? "Generating… this takes 30-60 seconds" : "Generate content package"}
          </button>
        </form>
      </div>
    </div>
  );
}
