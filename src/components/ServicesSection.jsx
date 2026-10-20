import React from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Bot
} from 'lucide-react';

export const ServicesSection = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-7 h-7 text-cyan-400" />;
      case 'smartphone':
        return <Smartphone className="w-7 h-7 text-emerald-400" />;
      case 'smart_toy':
        return <Bot className="w-7 h-7 text-purple-400" />;
      case 'cloud':
        return <Cloud className="w-7 h-7 text-amber-400" />;
      default:
        return <Code2 className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Our Services
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Enterprise Solutions
            </h2>
            <p className="text-base text-slate-300">
              Comprehensive technology solutions tailored to your business needs, modernizing your daily operations and helping you scale.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForQuote(null)}
            className="px-5 py-2.5 rounded-xl border border-white/15 hover:border-cyan-400 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Enterprise Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors shadow-lg">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables with clear checkmarks */}
                <div className="space-y-2.5 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {service.idealFor}
                </span>

                <button
                  onClick={() => onSelectServiceForQuote(service.id)}
                  className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-cyan-400 hover:text-black border border-white/15 hover:border-cyan-400 text-xs font-semibold transition-all flex items-center gap-1.5 flex-shrink-0 ml-4"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
