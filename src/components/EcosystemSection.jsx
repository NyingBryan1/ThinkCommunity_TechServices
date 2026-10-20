import React from 'react';
import { ecosystemData } from '../data/ecosystemData';
import { 
  School, 
  Code2, 
  Briefcase, 
  Building2, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';

export const EcosystemSection = ({ onOpenQuote, onOpenInternship, onOpenSkills }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'school':
        return <School className="w-6 h-6 text-blue-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'work':
        return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'apartment':
        return <Building2 className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleCardClick = (id) => {
    if (id === 'skills-academy') {
      onOpenSkills();
    } else if (id === 'intern-network') {
      onOpenInternship();
    } else if (id === 'enterprise-solutions') {
      onOpenQuote();
    } else {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-24 relative scroll-mt-20 bg-dark-950/70 border-b border-white/[0.08] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-white/10 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Solutions & Platforms</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            The Think Community <span className="text-cyan-400">Ecosystem</span>
          </h2>

          <p className="text-base text-slate-300">
            A fully integrated suite of digital platforms, educational programs, and software services designed to empower businesses and individuals.
          </p>
        </div>

        {/* 4 Connected Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {ecosystemData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 mb-1">{item.tagline}</div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>{item.linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
