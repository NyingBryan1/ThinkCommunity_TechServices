import React from 'react';
import { 
  ArrowRight, 
  Target, 
  CheckCircle, 
  Sparkles, 
  Globe2, 
  GraduationCap, 
  Layers, 
  Code2, 
  Briefcase,
  Cpu
} from 'lucide-react';

export const Hero = ({ onOpenQuote, onOpenInternship, onOpenSkills }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Visionary Headline & Clear Description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-cyan-400/30 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                Think Community Technology Services • Cameroon & Beyond
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.1]">
              We Turn Bold Ideas Into <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Solutions.
              </span>
            </h1>

            {/* Subtitle - Plain, Human, Inspiring Language */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From business websites and custom web applications to mobile experiences and AI automation, <strong className="text-white font-semibold">Think Community</strong> helps startups, businesses, schools, and organizations solve operational challenges through reliable technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-display font-bold text-xs tracking-wide shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Start a Project & Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInternship}
                className="px-5 py-3.5 rounded-xl border border-cyan-400/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-xs hover:bg-cyan-400/10 transition-all flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Join Internship Program</span>
              </button>

              <a
                href="#solutions"
                className="px-5 py-3.5 rounded-xl bg-dark-900 border border-white/10 hover:border-white/25 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Solutions</span>
              </a>
            </div>

            {/* Quick Benefits */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Transparent Milestone Agreements</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Practical Developer Training</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Digital Node */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Central Squared Frame (Replacing circle) */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-3xl bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-dark-950/80 border border-cyan-400/30 shadow-[0_0_80px_rgba(6,182,212,0.22)] flex items-center justify-center p-8 backdrop-blur-sm">
              
              {/* Central Logo Node */}
              <div className="w-28 h-28 rounded-2xl bg-dark-950/95 border border-cyan-400/50 flex flex-col items-center justify-center p-3 shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo/TC_logo.png" 
                  alt="Think Community" 
                  className="w-12 h-12 object-contain mb-1"
                />
                <span className="text-[11px] font-bold text-white tracking-tight">Think Community</span>
                <span className="text-[9px] font-mono text-cyan-400">TECHNOLOGY</span>
              </div>

              {/* Inner Squared Frame */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-cyan-400/30 pointer-events-none" />
              
              {/* Squared Tech Corner Brackets */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {/* Floating Card 1: Problem-First */}
            <div className="absolute top-4 -left-2 sm:-left-6 bg-dark-900/90 border border-white/10 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-xl animate-float z-30">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-medium">Approach</div>
                <div className="text-xs font-bold text-white">Problem-First Thinking</div>
              </div>
            </div>

            {/* Floating Card 2: Purposeful Architecture */}
            <div className="absolute bottom-6 -right-2 sm:-right-4 bg-dark-900/90 border border-white/10 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl backdrop-blur-xl animate-float z-30" style={{ animationDelay: '1.5s' }}>
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-medium">Architecture</div>
                <div className="text-xs font-bold text-white">Purposeful Engineering</div>
              </div>
            </div>

            {/* Floating Card 3: Talent & Impact */}
            <div className="absolute -bottom-4 left-6 bg-dark-900/95 border border-white/10 p-3 rounded-xl flex items-center gap-2.5 shadow-xl backdrop-blur-xl hidden sm:flex z-30">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span className="text-[11px] font-semibold text-slate-200">5k+ Learners Impacted</span>
            </div>

          </div>

        </div>

        {/* Impact Metric Strip */}
        <div className="mt-16 pt-10 border-t border-white/[0.08]">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
              Technology Built Around Your Goals
            </span>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
              A Practical Partner From Idea to Delivery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-dark-900/40 p-6 rounded-2xl border border-white/5">
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-400 mb-1">5k+</div>
              <div className="text-xs font-medium text-slate-300">Learners Guided & Impacted</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-400 mb-1">350+</div>
              <div className="text-xs font-medium text-slate-300">Interactive Counseling Units</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-400 mb-1">2</div>
              <div className="text-xs font-medium text-slate-300">Live Production Platforms Shipped</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-cyan-400 mb-1">100%</div>
              <div className="text-xs font-medium text-slate-300">Client Code Ownership</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
