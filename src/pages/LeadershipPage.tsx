import React from 'react';
import { LeadershipTeam } from '../components/LeadershipTeam';
import { ArrowRight, UserCheck, Shield, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LeadershipPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            EXECUTIVE PEDIGREE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Board Members & Leadership Council
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            Industry veterans, innovators, and entrepreneurs shaping the future of global marine lubrication, in strategic partnership with Legero International Group B.V.
          </p>
        </div>
      </div>

      <LeadershipTeam />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/journey" className="text-xs font-bold text-slate-400 hover:text-emerald-400">
          &larr; Previous: Our Journey
        </Link>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Request Port RFQ</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
