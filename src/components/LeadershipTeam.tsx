import React from 'react';
import { UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const LeadershipTeam: React.FC = () => {
  const boardMembers = COMPANY_INFO.team.filter(m => m.category === 'board');
  const councilMembers = COMPANY_INFO.team.filter(m => m.category === 'council');

  return (
    <section id="leadership" className="py-24 bg-[#071620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            FORCE BEHIND ATHEN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            The Team
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Combining decades of international maritime expertise, supply chain dominance, and chemical formulation mastery.
          </p>
        </div>

        {/* Board Members (Slide 12 & 13) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              BOARD MEMBERS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Architects of Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {boardMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#0b212d] border border-emerald-800/40 hover:border-emerald-500/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="sm:w-48 sm:h-52 w-full h-56 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      {member.title}
                    </span>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-300 mb-3 bg-slate-900/60 inline-block px-2.5 py-1 rounded-md border border-slate-800">
                      {member.role}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-emerald-400 font-medium">Strategic Partner / Investor</span>
                    <span className="text-slate-500">Athen Marine Board</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Council (Slide 14) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              LEADERSHIP COUNCIL
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              The Driving Force
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-[#091d27] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 mb-4 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-slate-950 uppercase">
                      {member.role.split('(')[0].trim()}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-0.5">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-emerald-400 mb-3">
                    {member.title}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Executive Council</span>
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
