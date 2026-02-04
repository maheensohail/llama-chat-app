# Llama Chat App

A modern chat application powered by **Llama 3.3 70B** via Groq, built with Next.js and deployable to Vercel.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- 🦙 **Llama 3.3 70B** - One of the most capable open-source AI models
- ⚡ **Groq API** - Lightning-fast inference
- 🎨 **Modern UI** - Beautiful dark theme with gradient accents
- 📱 **Responsive** - Works on desktop and mobile
- 🚀 **Vercel Ready** - One-click deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- A free Groq API key from [console.groq.com](https://console.groq.com/keys)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/llama-chat-app.git
   cd llama-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Groq API key:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/llama-chat-app&env=GROQ_API_KEY&envDescription=Get%20your%20free%20API%20key%20from%20Groq&envLink=https://console.groq.com/keys)

Or deploy manually:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add the `GROQ_API_KEY` environment variable in Vercel's settings
4. Deploy!

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **LLM Provider**: [Groq](https://groq.com/) (Llama 3.3 70B)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key | Yes |

## License

MIT
