import React from 'react';
import { Calendar, Compass, Trophy } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const EvolutionTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#051118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Our Journey
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            From inception in 2020 to scaling as a high-impact global maritime force.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-emerald-950 via-emerald-500 to-teal-400 -translate-y-8 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {(COMPANY_INFO.evolution || []).map((step, idx) => (
              <div 
                key={idx}
                className={`bg-[#091d27] border ${
                  step.isHighlight 
                    ? 'border-emerald-400 shadow-xl shadow-emerald-500/10' 
                    : 'border-emerald-900/40 hover:border-emerald-500/40'
                } rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-base font-black px-3 py-1 rounded-lg ${
                      step.isHighlight 
                        ? 'bg-emerald-400 text-slate-950' 
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    }`}>
                      {step.period}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-emerald-400 mb-3">
                    {step.subtitle}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {step.points?.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
                  Phase {idx + 1} of 6
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-14 bg-gradient-to-r from-emerald-950 via-[#072417] to-emerald-950 border-2 border-emerald-400/50 rounded-2xl p-6 sm:p-8 text-center shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <span>2030 Strategic Milestone</span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            By 2030 – A Global Force: 10% of Global Fleet Powered by Athen
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto mt-2">
            Accelerating sustainable lubricant formulations, bio-lubricants, synthetic ester chemistries, and automated bunker deliveries to protect the next generation of merchant vessels.
          </p>
        </div>

      </div>
    </section>
  );
};
