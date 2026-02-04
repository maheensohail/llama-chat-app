import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from "ai";

// Create Groq provider for Llama models
const groq = createOpenAICompatible({
  name: "groq",
  baseURL: "https://api.groq.com/openai/v1",
  headers: {
    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  },
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system:
      "You are a helpful AI assistant powered by Llama 3.3. Be concise, friendly, and helpful.",
    messages,
  });

  return result.toDataStreamResponse();
}
