import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProductPortfolio } from '../components/ProductPortfolio';
import { WorldPortMap } from '../components/WorldPortMap';
import { GrowthHighlights } from '../components/GrowthHighlights';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, ShieldCheck, Anchor } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Short Overview Section */}
      <section className="py-16 bg-[#071620] border-t border-b border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0b212d] border border-emerald-900/40 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Our Foundation</div>
              <h3 className="text-xl font-bold text-white mb-2">From Vision in 2020 to 5,000+ Vessels</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Rapidly scaling across 200+ global ports in 5 years with OEM-approved engineering and dedicated 24/7 technical dispatch.
              </p>
              <Link to="/about" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                Read Our Story &rarr;
              </Link>
            </div>

            <div className="bg-[#0b212d] border border-emerald-900/40 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Global Logistics</div>
              <h3 className="text-xl font-bold text-white mb-2">Strategic Legero Group Synergy</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Backed by Legero International Group B.V. for seamless port clearance, warehousing, and dedicated Rotterdam barge bunkering.
              </p>
              <Link to="/expansion" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                Explore Expansion &rarr;
              </Link>
            </div>

            <div className="bg-[#0b212d] border border-emerald-900/40 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">Target 2030</div>
              <h3 className="text-xl font-bold text-white mb-2">10% of Global Fleet Powered by Athen</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Expanding port network to 800+ terminals and driving sustainable bio-lubricant innovations across 6 continents.
              </p>
              <Link to="/journey" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                View Roadmap &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <ProductPortfolio />

      {/* Interactive Map Preview */}
      <section className="py-20 bg-[#071620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">GLOBAL COVERAGE</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">200+ Ports Worldwide</h2>
            </div>
            <Link 
              to="/network" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              <span>Explore Full Port Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <WorldPortMap />
        </div>
      </section>

      {/* Expansion Banner */}
      <GrowthHighlights />

      {/* Pre-footer Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-950 via-[#072417] to-emerald-950 border-t border-emerald-900/60 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            24/7 Bunkering Coordination
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            Ready to Power Your Next Voyage?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base mb-8">
            Connect directly with our central desk for spot bunkering rates, European barge deliveries, and OEM-certified technical lubrication advice.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all"
            >
              Request Port Bunkering RFQ
            </Link>
            <Link
              to="/leadership"
              className="px-6 py-4 rounded-xl font-bold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              Meet Our Leadership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
