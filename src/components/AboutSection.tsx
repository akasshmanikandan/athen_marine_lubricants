import React from 'react';
import { BookOpen, Gem, Users, Clock, ShieldCheck, Truck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#071620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            ABOUT US
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Athen Marine
          </h2>
          <p className="text-emerald-400 font-semibold text-lg mt-1">
            Global Marine Lubricant Brand
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            Bridging superior chemical engineering with round-the-clock portside responsiveness. 
            We ensure vessels maintain peak hydrodynamic efficiency and zero downtime across key global trading routes.
          </p>
        </div>

        {/* 3 Core Cards from Slide 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Our Story */}
          <div className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-14 h-14 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              From a bold vision in <strong className="text-white">2020</strong>, to servicing <strong className="text-emerald-400">5,000+ vessels</strong> in <strong className="text-emerald-400">200+ ports</strong> worldwide in just 5 years.
            </p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Rapid Worldwide Expansion</span>
              <span className="font-semibold text-emerald-400">2020 — Present</span>
            </div>
          </div>

          {/* Our Value Proposition */}
          <div className="bg-gradient-to-b from-[#0b212d] to-[#071a24] border-2 border-emerald-500/40 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
            
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
              <Gem className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Our Value Proposition</h3>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">24/7 Trusted Team</strong>
                  <span className="text-xs text-slate-400">Always accessible technical support and port coordination</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Technical Excellence</strong>
                  <span className="text-xs text-slate-400">Precision OEM-compliant chemistry for severe engine loads</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Reliable Supply</strong>
                  <span className="text-xs text-slate-400">Barge, pipeline, and drum delivery directly to berth</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Our People */}
          <div className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-14 h-14 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Our People</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Talented professionals backed by industry veterans, combining fresh thinking with decades of maritime expertise across international shipping, chemical formulation, and port logistics.
            </p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Maritime Veterans & Engineers</span>
              <a href="#leadership" className="text-emerald-400 font-semibold flex items-center gap-1 hover:underline">
                Meet Leaders <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
