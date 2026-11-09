import React from 'react';
import { GrowthHighlights } from '../components/GrowthHighlights';
import { ArrowRight, Factory, Ship, Anchor, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExpansionPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            ATHEN CREATING WAVES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Strategic Growth & Global Expansion
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            By establishing dual blending hubs in Greece and India, deploying dedicated bunker barges in Rotterdam, and leveraging Legero's worldwide forwarding reach, Athen Marine brings unmatched speed and reliability to ship operators.
          </p>
        </div>
      </div>

      <GrowthHighlights />

      {/* Deep-dive into the 4 pillars */}
      <section className="py-20 bg-[#051118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="bg-[#091b24] border border-emerald-900/40 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">EU Blending Operations in Greece</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Operating under rigorous ISO and CE standards, our blending facility in Greece formulates high-viscosity cylinder lubricants, trunk piston engine oils, and environmentally acceptable bio-lubricants with European base stocks.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Immediate road-tanker and barge dispatch across Mediterranean ports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full batch traceability with factory-issued Certificates of Analysis (CoA)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#091b24] border border-emerald-900/40 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Dedicated Rotterdam Barge Fleet</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                The Amsterdam-Rotterdam-Antwerp (ARA) hub is Europe’s primary bunkering crossroad. Athen Marine operates dedicated bunkering barge capabilities delivering directly to vessels at berth or anchorage without intermediate delays.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero-delay pumping directly into ship storage tanks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Complete Legero customs clearance and terminal documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#091b24] border border-emerald-900/40 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Blending & Distribution in India</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Covering both West Coast (JNPT, Kandla, Mundra, Cochin) and East Coast (Chennai, Vizag, Kolkata) ports, our Indian manufacturing presence ensures rapid fulfillment for subcontinent and Indian Ocean transit vessels.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fast coastal vessel replenishment and inland depot stock</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct feeder supply into Sri Lanka (Colombo) and Arabian Gulf</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#091b24] border border-emerald-900/40 rounded-3xl p-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Legero International Group B.V.</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Legero's global presence as a premier marine freight logistics enterprise gives Athen Marine an unmatched physical backbone: bonded warehouses, air-freight emergency lubricant dispatch, and local port agents in over 150 countries.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Seamless end-to-end chain of custody</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>24/7 port coordination for emergency ship turnarounds</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/vision" className="text-xs font-bold text-slate-400 hover:text-emerald-400">
          &larr; Previous: Vision & Mission
        </Link>
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Product Portfolio</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
