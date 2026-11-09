import React from 'react';
import { ArrowUp, Anchor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030b10] border-t border-emerald-950 text-slate-400 text-xs">
      <div className="border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Intellectual Engineering. Delivering Trust.
            </h3>
            <p className="text-slate-400 mt-1">
              Official Website: <a href="https://www.athenmarine.com" className="text-emerald-400 font-bold hover:underline">www.athenmarine.com</a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Get In Touch
            </Link>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-lg p-1.5 shadow-sm inline-flex">
                <img src="/assets/logo-athen.png" alt="Athen Marine" className="h-9 w-auto" />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-1.5 flex items-center gap-2">
                <img src="/assets/logo-legero.png" alt="Legero International" className="h-7 w-auto" />
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Athen Marine is a global marine lubricant company delivering OEM-approved engine and auxiliary formulations in strategic partnership with Legero International Group B.V.
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>20+ Countries</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Anchor className="w-4 h-4 text-emerald-400" />
                <span>200+ Ports</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Company Pages</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Athen</Link></li>
              <li><Link to="/vision" className="hover:text-emerald-400 transition-colors">Vision & Mission</Link></li>
              <li><Link to="/expansion" className="hover:text-emerald-400 transition-colors">Expansion Waves</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Product Portfolio</Link></li>
              <li><Link to="/network" className="hover:text-emerald-400 transition-colors">Global Port Network</Link></li>
              <li><Link to="/journey" className="hover:text-emerald-400 transition-colors">Evolution Roadmap</Link></li>
              <li><Link to="/leadership" className="hover:text-emerald-400 transition-colors">Leadership & Board</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Lubricant Ranges</h4>
            <ul className="space-y-2.5">
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Main Cylinder Grades</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">System Oils</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Trunk Piston Oils (TPEO)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Secondary & Hydraulics</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">EAL Bio-Lubricants</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Marine Greases</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Global Operations</h4>
            <p className="text-slate-400 mb-2">24/7 Bunkering & Lubricant Desk:</p>
            <p className="font-semibold text-emerald-400 mb-1">operations@athenmarine.com</p>
            <p className="text-slate-400 mb-4">+31 (0)10 429 8544</p>
            <div className="text-[11px] text-slate-500">
              Rotterdam ARA Hub • Greece • India • Singapore
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Athen Marine. All Rights Reserved. Strategic Partnership with Legero International Group B.V.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001 / ISO 14001 Standards</span>
            <span>VGP 2013 Compliant</span>
            <span>Made in EU</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
