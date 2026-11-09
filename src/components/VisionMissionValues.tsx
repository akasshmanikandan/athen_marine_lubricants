import React from 'react';
import { Compass, Target, HeartHandshake, Zap, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const VisionMissionValues: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-[#051118] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Vision Card (Slide 3) */}
          <div className="bg-gradient-to-br from-[#0c222e] to-[#081720] border border-emerald-700/30 rounded-3xl p-8 sm:p-10 relative shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-xl text-emerald-400">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">OUR VISION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Where We're Headed
              </h3>

              <blockquote className="text-lg sm:text-xl font-medium text-emerald-300 italic mb-8 border-l-4 border-emerald-500 pl-4 py-1">
                "{COMPANY_INFO.vision.statement}"
              </blockquote>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Recognized Globally For:
                </p>
                <div className="space-y-3">
                  {COMPANY_INFO.vision.pillars.map((pillar, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-slate-200 text-sm font-medium">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Goal: 10% of Global Fleet by 2030</span>
              <span className="text-emerald-400 font-medium">Global Standard</span>
            </div>
          </div>

          {/* Mission Card (Slide 4) */}
          <div className="bg-gradient-to-br from-[#0c222e] to-[#081720] border border-emerald-700/30 rounded-3xl p-8 sm:p-10 relative shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-xl text-emerald-400">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">OUR MISSION</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Why We Exist
              </h3>

              <blockquote className="text-lg sm:text-xl font-medium text-emerald-300 italic mb-8 border-l-4 border-emerald-500 pl-4 py-1">
                "{COMPANY_INFO.mission.statement}"
              </blockquote>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Being a Trusted Partner That Delivers:
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {COMPANY_INFO.mission.deliverables.map((item, i) => (
                    <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
                      <strong className="text-emerald-400 text-sm block mb-0.5">{item.title}</strong>
                      <span className="text-slate-300 text-xs">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Reliable Lubrication Solutions</span>
              <span className="text-emerald-400 font-medium">Unbroken Voyages</span>
            </div>
          </div>

        </div>

        {/* Bottom Section: Our Values (Slide 5) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
              OUR VALUES
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              What Guides Every Decision
            </h3>
            <p className="text-slate-400 mt-2 text-sm">
              Our culture is forged on integrity, urgency, and enduring maritime partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.values.map((val, idx) => {
              const icons = [Zap, TrendingUp, ShieldCheck, HeartHandshake];
              const IconComp = icons[idx % icons.length];
              return (
                <div 
                  key={val.name}
                  className="bg-[#091b24] border border-emerald-900/30 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-md group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{val.name}</h4>
                  <p className="text-xs font-semibold text-emerald-400 italic mb-3">"{val.quote}"</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
