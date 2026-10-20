import React, { useState } from 'react';
import { processSteps } from '../data/processData';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

export const ProcessSection = ({ onScrollToQuote }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-28 relative scroll-mt-20 bg-dark-950/80 border-b border-white/[0.08] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-brand-mint/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-brand-mint/30 text-xs font-mono text-brand-mint">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Agile Methodology</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            How We Work: From <br />
            <span className="text-gradient-mint">Concept to Production Launch</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We believe successful technology projects begin with a clear understanding of the problem and a shared vision of the desired outcome. No black boxes. No endless delays.
          </p>
        </div>

        {/* Step Numbers Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {processSteps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden group ${
                activeStepIndex === idx
                  ? 'bg-dark-900 border-brand-mint/60 shadow-xl shadow-brand-mint/10'
                  : 'bg-dark-950/60 border-white/5 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-sm font-bold ${
                  activeStepIndex === idx ? 'text-brand-mint' : 'text-slate-500'
                }`}>
                  Phase {s.step}
                </span>
                {activeStepIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
                )}
              </div>
              <div className="font-display font-semibold text-xs text-white line-clamp-1">
                {s.title}
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">
                {s.timeframe}
              </div>

              {/* Active Bottom Glow Indicator */}
              {activeStepIndex === idx && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-mint to-emerald-400" />
              )}
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-black text-brand-mint">
                  {currentStep.step}
                </span>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {currentStep.phase}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.fullDesc}
              </p>

              <div className="p-4 rounded-xl bg-dark-900/80 border border-white/5 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-brand-mint" />
                  <span>Phase Deliverables:</span>
                </div>
                <div className="space-y-1.5">
                  {currentStep.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {activeStepIndex < processSteps.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-white transition-all flex items-center gap-2"
                  >
                    <span>Next: Phase {processSteps[activeStepIndex + 1].step}</span>
                    <ChevronRight className="w-4 h-4 text-brand-mint" />
                  </button>
                ) : (
                  <button
                    onClick={onScrollToQuote}
                    className="px-6 py-2.5 rounded-xl bg-brand-mint text-black font-display font-bold text-xs shadow-lg shadow-brand-mint/20 hover:scale-105 transition-all"
                  >
                    Start Step 1: Tell Us About Your Project →
                  </button>
                )}
              </div>
            </div>

            {/* Right Mini Console / Visual Highlight */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-900 border border-white/10 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-sky" />
                  <span>Timeline Estimate</span>
                </span>
                <span className="text-white font-bold">{currentStep.timeframe}</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="text-slate-500 text-[11px] uppercase tracking-wider">Client Involvements:</div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-mint">▸</span>
                  <span>Direct feedback reviews via staging URL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-mint">▸</span>
                  <span>Bi-weekly recorded video summaries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-mint">▸</span>
                  <span>Shared Slack / WhatsApp project channel</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-dark-950 border border-white/5 space-y-1">
                <div className="text-[10px] text-slate-500 uppercase">Commercial Protection</div>
                <div className="text-xs text-brand-mint font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Signed Non-Disclosure Agreement (NDA) & SOW</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
