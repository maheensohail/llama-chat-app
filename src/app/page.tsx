export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="text-center">
        <div className="mb-6 flex h-20 w-20 mx-auto items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          <span className="text-5xl">🦙</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-white">
          Llama Chat App
        </h1>
        <p className="max-w-md text-lg text-slate-400">
          A modern AI chat application powered by Llama 3.3
        </p>
        <p className="mt-8 text-sm text-slate-500">
          Deployed on Vercel
        </p>
      </div>
    </div>
  );
}
