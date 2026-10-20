import React from 'react';
import { 
  Target, 
  Cpu, 
  MessageSquareCode, 
  RefreshCw, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Code2 
} from 'lucide-react';

export const ValueProposition = ({ onScrollToQuote }) => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-brand-mint" />,
      number: "01",
      title: "Problem-First Thinking",
      desc: "We begin by understanding the real business problem, not just picking trendy tools. Technology is an investment; it must produce tangible efficiency, user acquisition, or direct revenue.",
      highlight: "No wasted dev hours on vanity features"
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-sky" />,
      number: "02",
      title: "Purposeful Architecture",
      desc: "We build around your actual users and operational demands. We select battle-tested, modular technologies that can scale smoothly from 100 users to 1,000,000 without requiring complete rewrites.",
      highlight: "Clean, documented, maintainable code"
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-purple-400" />,
      number: "03",
      title: "Radical Transparency",
      desc: "You never have to wonder what we're working on. You receive working staging links, bi-weekly video sprint demonstrations, and direct access to senior engineers via Slack, WhatsApp, and Google Meet.",
      highlight: "Regular demos & zero jargon confusion"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
      number: "04",
      title: "Continuous Refinement",
      desc: "Software isn't static. We rigorously test, benchmark under low-bandwidth networks, gather user feedback, and refine your platform before, during, and after deployment with warranty support.",
      highlight: "30-day post-launch warranty included"
    }
  ];

  return (
    <section className="py-24 relative bg-dark-900/40 border-b border-white/[0.06] overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-mint/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950 border border-white/10 text-xs font-mono text-brand-mint">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Think Community Advantage</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            Technology Built Around <br />
            <span className="text-gradient-mint">Your Real Business Goals</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every digital product starts with a problem worth solving. We work hand-in-hand with founders, executives, and organizations to engineer software that works reliably, looks stunning, and delivers measurable ROI.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-brand-mint/40 relative group"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-5 text-4xl font-mono font-black text-white/[0.04] group-hover:text-brand-mint/10 transition-colors pointer-events-none">
                {pillar.number}
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center shadow-inner group-hover:border-brand-mint/30 transition-colors">
                  {pillar.icon}
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-mint transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-brand-mint">
                <Check className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Engineering Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-mint/10 border border-brand-mint/30 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-6 h-6 text-brand-mint" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg text-white">
                Have a technical specification or RFP ready for review?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Send us your architecture, wireframes, or idea document for an immediate engineering feasibility assessment.
              </p>
            </div>
          </div>

          <button
            onClick={onScrollToQuote}
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-brand-mint hover:text-black border border-white/15 text-white text-xs font-mono font-bold transition-all flex items-center justify-center gap-2 flex-shrink-0"
          >
            <span>Request Technical Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
