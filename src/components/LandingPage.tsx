import { SignInButton } from "@clerk/clerk-react";
import { Database, Terminal, Code2, Brain, Lock, ArrowRight } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10 max-w-5xl w-full text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900/50 border border-slate-800 rounded-2xl shadow-xl mb-4 backdrop-blur-sm">
            <Database size={40} className="text-emerald-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              DataGym
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            The Interactive <span className="text-emerald-400 font-medium">SQL</span> & <span className="text-blue-400 font-medium">Python</span> Practice Platform for Data Engineers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left px-4">
          <div className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-100">Browser-Based Engine</h3>
            <p className="text-slate-400 leading-relaxed">Powered by DuckDB-WASM & Pyodide. Run heavy workloads directly in your browser with zero latency.</p>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-100">Polyglot Notebooks</h3>
            <p className="text-slate-400 leading-relaxed">Switch seamlessly between SQL and Python (Pandas) to solve complex data engineering problems.</p>
          </div>

          <div className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Brain className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-100">AI Tutor</h3>
            <p className="text-slate-400 leading-relaxed">Stuck? Get personalized, Socratic hints from your own AI models (BYOK) to unblock your learning.</p>
          </div>
        </div>

        <div className="pt-8 pb-12">
          <SignInButton mode="modal">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 focus:ring-offset-slate-900 shadow-lg shadow-emerald-900/20">
              <span className="mr-2 text-lg">Start Practicing</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </SignInButton>
          <p className="mt-6 text-sm text-slate-500 font-medium tracking-wide uppercase">Secure Login via Clerk • Free & Open Source</p>
        </div>
      </div>
    </div>
  );
}
