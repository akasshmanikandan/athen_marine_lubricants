import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { ShieldCheck, Anchor, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            ABOUT ATHEN MARINE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Engineering Trust Across Oceans
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            Founded in 2020, Athen Marine was created to challenge traditional marine lubricant distribution by combining rapid European blending, world-class logistics through Legero International Group, and uncompromised OEM-certified performance.
          </p>
        </div>
      </div>

      <AboutSection />

      {/* In-depth Narrative */}
      <section className="py-20 bg-[#051118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                OUR OPERATIONAL PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Decades of Maritime Expertise Meets Modern Formulation
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Modern marine engines operate under unprecedented pressures and tighter environmental regulations. Low-sulphur fuels (VLSFO, ULSFO), biofuel blends, and LNG dual-fuel propulsion demand lubricants engineered for severe thermal stability and rapid acid neutralization.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Athen Marine formulates using premium European base oils and high-performance additive systems. Every batch is rigorously lab-certified and field-monitored, giving ship managers complete confidence from port departure to discharge.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-slate-200">100% Factory Sealed Drums & Dedicated Bunker Barges</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-slate-200">Complete OEM conformance (MAN ES, WinGD, Wärtsilä)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-slate-200">Used Oil Analysis (UOA) laboratory diagnosis support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-emerald-900/60 shadow-2xl relative">
                <img 
                  src="/assets/port-terminal.png" 
                  alt="Athen Marine Terminal Operations" 
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051118] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold text-emerald-400">Rotterdam ARA Hub Operations</span>
                  <h4 className="text-xl font-bold text-white">Dedicated Bunkering Logistics Across Major Gateways</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Next page CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-end">
        <Link 
          to="/vision" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Vision & Mission</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
