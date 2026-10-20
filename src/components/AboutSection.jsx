import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Target, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  HeartHandshake 
} from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      title: "Purpose-Driven",
      desc: "We focus on solving real operational and commercial bottlenecks, ensuring every line of code serves a clear goal.",
      icon: <Target className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Practical Learning",
      desc: "Through our Academy and mentorship initiatives, we continuously train our engineers in modern technology stacks.",
      icon: <BookOpen className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Accessibility",
      desc: "We engineer software that runs smoothly on low-bandwidth connections and mobile hardware across all networks.",
      icon: <HeartHandshake className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Integrity & Ownership",
      desc: "Complete transparency in proposals, clear milestones, and 100% intellectual property ownership for our clients.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-20 overflow-hidden bg-dark-950/70 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Our Story & Philosophy
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Technology With Purpose: <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Learn • Build • Grow.
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Think Community was founded on the conviction that practical learning and purpose-driven technology can open doors, solve difficult problems, and create lasting economic opportunities.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Our work unites two essential pillars: <strong className="text-white font-medium">Digital Education & Skills Training</strong> to empower young developers, and <strong className="text-white font-medium">Commercial Software Engineering</strong> to help businesses, schools, and organizations turn ambitious ideas into reliable digital products.
            </p>

            <div className="p-4 rounded-2xl bg-dark-900 border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-300">
                <strong className="text-white block font-medium">Cameroon Engineering Operations</strong>
                Delivering high-performance software and training programs for clients and students worldwide.
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-2 flex items-center justify-center">
                  <img src="/logo/TC_logo.png" alt="Think Community" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">Think Community</h4>
                  <span className="text-xs text-cyan-400 font-mono">Technology Services</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400">Our Mission:</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To make practical skills, digital sovereignty, and technology-enabled opportunities accessible, while engineering software solutions that empower organizations to lead their fields.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-slate-400">Our Vision:</div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A world where access to knowledge and technology is not limited by circumstances, and where more people can use their skills and ideas to create meaningful impact.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Values */}
        <div className="pt-8">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl text-white">Our Core Operating Values</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">The principles guiding every project, partnership, and training cohort</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-cyan-400/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h4 className="font-display font-bold text-base text-white">{v.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
