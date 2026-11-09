import React from 'react';
import { ShieldCheck, Award, Briefcase, ExternalLink, Anchor } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const LeadershipTeam: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-[#071620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/80 border border-emerald-800/40">
            BOARD MEMBERS & STRATEGIC PARTNERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Architects of Growth
          </h2>
          <p className="text-slate-300 mt-4 text-base leading-relaxed">
            Combining decades of senior executive leadership from oil majors (BP, Castrol, Gulf Oil Marine, World Fuel Services) with global logistics dominance (Legero International Group B.V.) and bunkering acumen (Eleven Energy).
          </p>
        </div>

        {/* Board Profiles Grid (From Pages 9, 10, 11 of Corporate Brochure) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {COMPANY_INFO.boardMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-[#0b212d] border border-emerald-900/50 hover:border-emerald-500/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Member Portrait */}
              <div className="sm:w-52 sm:h-56 w-full h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Bio & Credentials */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    {member.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300 mb-3 inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                    {member.role} • <span className="text-emerald-400">{member.company}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-emerald-400 font-medium">Board of Directors</span>
                  <span className="text-slate-500">Athen Marine Global</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Alliance Callout */}
        <div className="bg-gradient-to-r from-[#061e16] via-[#0a232f] to-[#061e16] border border-emerald-500/40 rounded-3xl p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-800">
              TRIPARTITE SYNERGY
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              Athen Marine • Legero International Group • Eleven Energy
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Together, our alliance connects chemical formulation precision with world-class maritime logistics, customs clearance, and global bunker trading networks.
            </p>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-700 px-5 py-3 rounded-2xl">
              <img src="/assets/logo-legero.png" alt="Legero" className="h-8 w-auto object-contain" />
              <div className="h-6 w-[1px] bg-slate-700" />
              <img src="/assets/logo-eleven-dark-theme.png" alt="Eleven Energy" className="h-5 w-auto object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
