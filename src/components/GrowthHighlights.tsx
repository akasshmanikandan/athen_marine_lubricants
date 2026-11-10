import React from 'react';
import { Ship, Factory, Anchor, Layers, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const GrowthHighlights: React.FC = () => {
  return (
    <section id="expansion" className="py-24 bg-[#071620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            ATHEN CREATING WAVES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Growth & Expansion Highlights
          </h2>
          <p className="text-slate-300 mt-4 text-base leading-relaxed">
            From strategic blending facilities in Europe and Asia to dedicated barge operations in the ARA region, 
            Athen Marine brings local responsiveness with true global execution power.
          </p>
        </div>

        {/* 4 Pillars Grid (Slide 10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(COMPANY_INFO.expansionHighlights || []).map((item, index) => {
            const icons = [Anchor, Factory, Ship, Layers];
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index}
                className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-emerald-400 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fully Operational Network</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legero Group Synergy Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950/70 via-[#0a232f] to-[#0a232f] border border-emerald-700/40 rounded-3xl p-8 lg:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-800">
                Strategic Synergy
              </span>
              <span className="text-xs text-slate-400">Netherlands & Worldwide</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
              Powered by Legero International Group B.V.
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Legero's extensive marine freight forwarding, customs brokerage, and port warehousing infrastructure provides Athen Marine with seamless logistical execution in Rotterdam, Singapore, Houston, Dubai, and beyond.
            </p>
          </div>

          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-center">
              <img 
                src="/assets/logo-legero.png" 
                alt="Legero International Group" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              Contact Port Ops
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
