import React from 'react';
import { partnerCategories } from '../data/partnersData';
import { 
  Handshake, 
  School, 
  Building2, 
  Globe2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export const PartnersSection = ({ onOpenContact }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'handshake':
        return <Handshake className="w-6 h-6 text-cyan-400" />;
      case 'school':
        return <School className="w-6 h-6 text-blue-400" />;
      case 'apartment':
        return <Building2 className="w-6 h-6 text-emerald-400" />;
      case 'public':
        return <Globe2 className="w-6 h-6 text-purple-400" />;
      default:
        return <Handshake className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="partners" className="py-24 relative bg-dark-900/40 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-950 border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration Network</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Partners Building the <span className="text-cyan-400">Future</span>
          </h2>

          <p className="text-base text-slate-300">
            Think Community grows through trusted alliances — from educational institutions and payment operators to enterprise clients and impact organizations across Africa.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400 text-xs font-semibold text-white transition-all hover:bg-white/[0.04]"
            >
              <span>Partner with Us</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* 4 Partner Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((p, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center">
                  {getIcon(p.icon)}
                </div>

                <h3 className="font-display font-bold text-lg text-white">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {p.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
