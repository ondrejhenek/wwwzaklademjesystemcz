function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
          <p className="text-cyan-400 text-sm tracking-widest font-mono">
            Kdyby uměl Tomáš mluvit od narození, už by 60 let říkal, že...
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
        </div>

        <div className="mb-16 relative">
          <div className="absolute inset-0 blur-3xl bg-cyan-500/10"></div>
          <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight mb-6 relative">
            <span className="bg-gradient-to-r from-gray-100 via-cyan-100 to-gray-100 bg-clip-text text-transparent">
              WWW ZÁKLADEM JE SYSTÉM CZ
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <p className="text-cyan-400 text-sm tracking-widest font-mono">A co to znamená?</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
          </div>
        </div>

        <div className="border border-gray-800 bg-black/30 backdrop-blur-sm p-8 hover:border-cyan-500/30 transition-all duration-300">
          <div className="space-y-5 text-lg leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="text-cyan-500 font-mono text-sm mt-1">[01]</span>
              <p className="text-gray-300 text-left">Mít plány na rok dopředu.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-500 font-mono text-sm mt-1">[02]</span>
              <p className="text-gray-300 text-left">Nazývat věci "tradicí", i když se ještě vlastně nestaly.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-500 font-mono text-sm mt-1">[03]</span>
              <p className="text-gray-300 text-left">Jakoukoliv aktivitu s více než 1 krokem nazvývat systémem s jasně danými pravidly.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-500 font-mono text-sm mt-1">[04]</span>
              <p className="text-gray-300 text-left">Mít úplně popsaný diář úkoly, kde jen na pár místech prosvítají nepopsané kousky stránky.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-2xl font-mono font-bold tracking-wider">
            <span className="text-cyan-400">A hlavně opakovat dokola:</span>
            <br />
            <span className="text-gray-100 mt-2 inline-block">WWW ZÁKLADEM JE SYSTÉM CZ!</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </div>
  );
}

export default App;
