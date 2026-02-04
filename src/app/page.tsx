"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <span className="text-xl">🦙</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Llama Chat</h1>
              <p className="text-sm text-slate-400">
                Powered by Llama 3.3 70B
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 overflow-hidden">
        <div className="mx-auto h-full max-w-4xl">
          {/* Messages */}
          <div className="h-[calc(100vh-180px)] overflow-y-auto px-4 py-6">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <span className="text-5xl">🦙</span>
                </div>
                <h2 className="mb-2 text-2xl font-semibold text-white">
                  Welcome to Llama Chat
                </h2>
                <p className="max-w-md text-slate-400">
                  Start a conversation with Llama 3.3, one of the most capable
                  open-source AI models. Ask anything!
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Explain quantum computing simply",
                    "Write a Python function",
                    "Help me brainstorm ideas",
                    "What are the latest AI trends?",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        const fakeEvent = {
                          target: { value: suggestion },
                        } as React.ChangeEvent<HTMLInputElement>;
                        handleInputChange(fakeEvent);
                      }}
                      className="rounded-xl border border-slate-600 bg-slate-800/50 px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:border-purple-500/50 hover:bg-slate-700/50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-slate-700/50 text-slate-100"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-sm">🦙</span>
                          <span className="text-xs font-medium text-purple-400">
                            Llama 3.3
                          </span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-slate-700/50 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">🦙</span>
                        <div className="flex gap-1">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {error && (
              <div className="mt-4 rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-400">
                <p className="font-medium">Error</p>
                <p>{error.message}</p>
                <p className="mt-2 text-xs text-red-400/70">
                  Make sure you have set your GROQ_API_KEY in the environment
                  variables.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Input Area */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Message Llama..."
              className="flex-1 rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-400 outline-none transition-colors focus:border-purple-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              Send
            </button>
          </form>
          <p className="mt-2 text-center text-xs text-slate-500">
            Powered by Groq &amp; Llama 3.3 70B. Deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
