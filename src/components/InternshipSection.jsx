import React from 'react';
import { internshipTracks, internshipPerks } from '../data/internshipData';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Users, 
  Code2, 
  Award 
} from 'lucide-react';

export const InternshipSection = ({ onOpenInternship }) => {
  return (
    <section id="internships" className="py-24 relative scroll-mt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-purple-500/5 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-purple-400/30 text-xs font-mono text-purple-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Talent & Career Acceleration</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Engineering Internships: <br />
            <span className="text-purple-400">From Theory to Production</span>
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            We bridge the gap between university coursework and the tech industry. As a Think Community intern, you work directly on real client software and community platforms under the daily mentorship of senior engineers.
          </p>
        </div>

        {/* 4 Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {internshipPerks.map((perk, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-purple-400/30 transition-all space-y-2"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/20 text-purple-400 flex items-center justify-center font-bold text-sm font-mono mb-3">
                0{idx + 1}
              </div>
              <h4 className="font-display font-bold text-base text-white">
                {perk.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Open Internship Tracks */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-white">
              Current Open Internship Tracks
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Cameroon (On-site & Hybrid)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internshipTracks.map((track) => (
              <div
                key={track.id}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-400/10 text-purple-300 border border-purple-400/20">
                      {track.openings}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {track.type}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
                    {track.title}
                  </h4>

                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div>
                      <strong className="text-slate-400 font-mono">Focus: </strong>
                      {track.responsibilities}
                    </div>
                    <div>
                      <strong className="text-slate-400 font-mono">Requirements: </strong>
                      {track.requirements}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{track.location}</span>
                  </span>

                  <button
                    onClick={() => onOpenInternship(track.title)}
                    className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-purple-500/20"
                  >
                    <span>Apply for Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
