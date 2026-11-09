import React from 'react';
import { BookOpen, Gem, Users, Clock, ShieldCheck, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#071620] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/80 border border-emerald-800/40">
            ABOUT ATHEN MARINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Global Marine Lubricants Brand
          </h2>
          <p className="text-emerald-400 font-semibold text-sm mt-1 uppercase tracking-wider">
            Part of AlMatr Energy Group
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed text-base">
            Through a strategic global partnership with <strong>Legero International Group B.V.</strong> and <strong>Eleven Energy</strong>, Athen Marine combines advanced lubricant technology with logistics, marine fuel expertise, and an agile global service network.
          </p>
        </div>

        {/* 3 Core Cards from Slide 2 & Corporate Brochure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Our Story */}
          <div className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Our Story</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              From a bold vision in <strong className="text-white">2020</strong>, to servicing <strong className="text-emerald-400">5,000+ vessels</strong> in <strong className="text-emerald-400">200+ ports</strong> worldwide across 20+ countries in just 5 years.
            </p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Rapid Worldwide Expansion</span>
              <span className="font-semibold text-emerald-400">2020 — 2025</span>
            </div>
          </div>

          {/* Our Value Proposition */}
          <div className="bg-gradient-to-b from-[#0b212d] to-[#071a24] border-2 border-emerald-500/40 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-6 group-hover:scale-110 transition-transform">
              <Gem className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Our Value Proposition</h3>
            <ul className="space-y-3.5 text-slate-200 text-xs">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">24/7 Trusted Team</strong>
                  <span className="text-slate-400">Direct technical dispatch and berth coordination</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">Technical Excellence</strong>
                  <span className="text-slate-400">OEM-compliant chemistry and Athen Assure laboratory testing</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">Reliable Supply</strong>
                  <span className="text-slate-400">Dedicated Rotterdam bunker barges and factory direct depots</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Our People */}
          <div className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Our People</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Talented professionals backed by industry veterans from BP, Castrol, Total, and Gulf Oil Marine, combining fresh thinking with decades of maritime commercial and operational expertise.
            </p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Executive Board</span>
              <Link to="/leadership" className="text-emerald-400 font-semibold flex items-center gap-1 hover:underline">
                Meet Leaders &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* Golden Europe Oil Drop Feature Banner */}
        <div className="bg-gradient-to-r from-[#061e16] via-[#09222c] to-[#061e16] border border-emerald-600/30 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/assets/oil-drop-europe.png" 
              alt="Golden Europe Marine Oil Drop - Dubai, Rotterdam, Singapore, Mumbai" 
              className="max-h-60 w-auto object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]" 
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
              DUBAI • ROTTERDAM • SINGAPORE • MUMBAI
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Global Maritime Supply Axis
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Backed by Legero's global logistics and forwarding capabilities and Eleven Energy's marine fuel and bunkering expertise, Athen Marine is positioned to support customers across key shipping hubs and trade routes with minimal lead times.
            </p>
            <div className="pt-2">
              <Link 
                to="/network" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider"
              >
                <span>View Port Locations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
