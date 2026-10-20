import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  X,
  ShieldCheck,
  Code2,
  Layers
} from 'lucide-react';

export const PortfolioSection = ({ onOpenQuote }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Our Work & Production Systems
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              What We Have Built & Shipped
            </h2>
            <p className="text-base text-slate-300">
              We believe in complete transparency. Below are our real, in-house engineered platforms currently live in production and actively serving thousands of users.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold transition-all flex items-center gap-2 self-start md:self-auto shadow-md shadow-cyan-400/20"
          >
            <span>Start a Project With Our Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real Projects Grid (The 2 authentic shipped platforms) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Verified Real Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-dark-900 border border-white/5">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-lg sm:text-xl font-display font-bold text-cyan-400">{m.value}</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>View Technical Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-slate-200 transition-colors"
                >
                  Hire This Team
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Honest Credibility Banner */}
        <div className="rounded-3xl border border-white/10 bg-dark-900/80 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Genuine Engineering Track Record</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              The Same Engineering Team Is Ready to Build Your Software
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We built and shipped these live platforms from scratch. When you partner with Think Community, you work directly with developers who understand how to design, code, and deploy reliable software that actually works.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-display font-bold text-xs tracking-wide shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Tell Us About Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="bg-dark-950 border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                {selectedProject.category}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="font-display font-extrabold text-2xl text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.summary}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-1">
                <div className="text-xs font-bold text-rose-400 font-mono uppercase">The Challenge:</div>
                <p className="text-xs sm:text-sm text-slate-300">{selectedProject.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/5 space-y-1">
                <div className="text-xs font-bold text-emerald-400 font-mono uppercase">What We Built & Shipped:</div>
                <p className="text-xs sm:text-sm text-slate-300">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Implemented Features:
              </h4>
              <div className="space-y-2">
                {selectedProject.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-xs shadow-md shadow-cyan-400/20"
              >
                Start a Similar Project →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
