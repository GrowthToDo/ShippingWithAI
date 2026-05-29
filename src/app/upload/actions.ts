"use server";

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";

type UploadState =
  | { status: "idle" }
  | { status: "success"; filename: string; content: string }
  | { status: "error"; message: string };

function loadSystemPrompt(): string {
  // Read from swai-os repo sitting next to this repo
  const promptPath = join(
    process.cwd(),
    "..",
    "..",
    "..",
    "swai-os",
    ".github",
    "prompts",
    "content-system-prompt.md"
  );
  try {
    return readFileSync(promptPath, "utf-8");
  } catch {
    // Fallback: inline minimal prompt if swai-os not found locally
    return "You are the content engine for Shipping with AI podcast. Generate a full content package from the transcript provided.";
  }
}

async function pushToGitHub(filename: string, content: string): Promise<void> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return;

  const base64Content = Buffer.from(content).toString("base64");

  await fetch(
    `https://api.github.com/repos/GrowthToDo/swai-os/contents/transcripts/${filename}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "shippingwithai-web",
      },
      body: JSON.stringify({
        message: `Add transcript: ${filename}`,
        content: base64Content,
      }),
    }
  );
}

export async function uploadTranscript(
  _prevState: UploadState,
  formData: FormData
): Promise<UploadState> {
  const guestName = (formData.get("guestName") as string)?.trim();
  const transcript = (formData.get("transcript") as string)?.trim();

  if (!guestName) return { status: "error", message: "Guest name is required." };
  if (!transcript) return { status: "error", message: "Transcript is required." };

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return { status: "error", message: "Anthropic API key not configured." };

  const slug = guestName.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const date = new Date().toISOString().split("T")[0];
  const filename = `ep-${date}-${slug}.md`;

  // Generate content package via Claude
  const client = new Anthropic({ apiKey });
  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 16000,
    system: loadSystemPrompt(),
    messages: [
      {
        role: "user",
        content: `Generate the full content package for this episode.\n\nEpisode: ${filename}\nGuest: ${guestName}\n\nTranscript:\n${transcript}`,
      },
    ],
  });

  const generatedContent = (message.content[0] as { text: string }).text;

  // Push transcript to GitHub in the background (fire and forget)
  pushToGitHub(filename, transcript).catch(() => {});

  return { status: "success", filename, content: generatedContent };
}
