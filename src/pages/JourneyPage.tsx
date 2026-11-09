import React from 'react';
import { EvolutionTimeline } from '../components/EvolutionTimeline';
import { ArrowRight, Trophy, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JourneyPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            OUR EVOLUTION
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Our Journey & Roadmap to 2030
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            From our founding in 2020 to serving over 5,000 vessels across 500+ ports today. Heading toward our milestone to power 10% of the world's merchant fleet by 2030.
          </p>
        </div>
      </div>

      <EvolutionTimeline />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/network" className="text-xs font-bold text-slate-400 hover:text-emerald-400">
          &larr; Previous: Global Network
        </Link>
        <Link 
          to="/leadership" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Leadership Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
