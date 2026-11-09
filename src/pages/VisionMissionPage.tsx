import React from 'react';
import { VisionMissionValues } from '../components/VisionMissionValues';
import { ArrowRight, Compass, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisionMissionPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            STRATEGIC DIRECTION
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Our Vision, Mission & Guiding Values
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            Every formulation, delivery promise, and customer relationship is anchored in our core commitment to technical excellence and dependable maritime support.
          </p>
        </div>
      </div>

      <VisionMissionValues />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/about" className="text-xs font-bold text-slate-400 hover:text-emerald-400">
          &larr; Previous: About Athen
        </Link>
        <Link 
          to="/expansion" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Expansion Highlights</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
