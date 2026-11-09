import React from 'react';
import { ProductPortfolio } from '../components/ProductPortfolio';
import { ArrowRight, ShieldCheck, FileCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProductsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            FULL PRODUCT RANGE
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            High-Performance Marine Lubricants
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            Formulated in Europe with premium virgin base oils and cutting-edge additive packages. Conforming to MAN Energy Solutions, WinGD, and Wärtsilä specifications.
          </p>
        </div>
      </div>

      <ProductPortfolio />

      {/* OEM Approval & Technical Assistance Banner */}
      <section className="py-16 bg-[#071620]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Technical Support & Lubrication Surveys</span>
              <h3 className="text-2xl font-bold text-white">Need Machinery-Specific Lubricant Recommendations?</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Our marine lubrication engineers provide complimentary vessel lubrication surveys, conversion charts from other oil majors, and used oil analysis (UOA) test kits.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex-shrink-0"
            >
              Contact Technical Team
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/expansion" className="text-xs font-bold text-slate-400 hover:text-emerald-400">
          &larr; Previous: Expansion Highlights
        </Link>
        <Link 
          to="/network" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
        >
          <span>Next: Global Port Network</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
