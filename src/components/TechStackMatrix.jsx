import React, { useState } from 'react';
import { techStackCategories } from '../data/techStackData';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const TechStackMatrix = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const currentCategory = techStackCategories[activeCategoryIndex];

  return (
    <section id="stack" className="py-24 relative bg-dark-950/70 border-b border-white/[0.08] scroll-mt-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-indigo/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-white/10 text-xs font-mono text-brand-mint">
            <Terminal className="w-3.5 h-3.5" />
            <span>Modern Engineering Foundation</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            Battle-Tested Architecture & <br />
            <span className="text-gradient-mint">Modern Technology Stack</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We build exclusively with high-performance, maintainable technologies that avoid technical debt and give your company long-term software sovereignty.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techStackCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
                activeCategoryIndex === idx
                  ? 'bg-brand-mint text-black shadow-lg shadow-brand-mint/20 font-bold scale-105'
                  : 'bg-dark-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="mb-8">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              {currentCategory.category}
            </h3>
            <p className="text-sm text-slate-400">
              {currentCategory.description}
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-dark-900/90 border border-white/5 hover:border-brand-mint/40 transition-all flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="font-display font-bold text-sm text-white group-hover:text-brand-mint transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400 font-sans">
                    {item.role}
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-slate-300">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Code Quality & Security Commitment */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-mint" />
              <span>CI/CD Automated Linting & Unit Testing on every commit</span>
            </div>
            <div className="flex items-center gap-4">
              <span>TypeScript Strict Mode</span>
              <span>•</span>
              <span>OWASP Top 10 Hardening</span>
              <span>•</span>
              <span>Git Monorepo / Multi-repo Clean Docs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
