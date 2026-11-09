import React from 'react';
import { ArrowUp, Anchor, Globe, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030b10] border-t border-emerald-950 text-slate-400 text-xs">
      
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Intellectual Engineering. Delivering Trust.
            </h3>
            <p className="text-slate-400 mt-1">
              Part of <strong className="text-white">AlMatr Energy Group</strong> • Official Domain: <a href="https://www.athenmarine.com" className="text-emerald-400 font-bold hover:underline">www.athenmarine.com</a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg"
            >
              Request Port RFQ
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

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <img src="/assets/logo-athen-dark-theme.png" alt="Athen Marine" className="h-10 w-auto" />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Athen Marine is a global marine lubricants company delivering OEM-approved engine and auxiliary formulations in strategic global partnership with Legero International Group B.V. and Eleven Energy.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>20+ Countries</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Anchor className="w-4 h-4 text-emerald-400" />
                <span>200+ Ports</span>
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-[10px] uppercase text-slate-400 font-bold">Strategic Partners:</span>
              <img src="/assets/logo-legero.png" alt="Legero" className="h-6 w-auto" />
              <img src="/assets/logo-eleven-dark-theme.png" alt="Eleven Energy" className="h-4 w-auto" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Athen Marine</Link></li>
              <li><Link to="/vision" className="hover:text-emerald-400 transition-colors">Vision & Mission</Link></li>
              <li><Link to="/expansion" className="hover:text-emerald-400 transition-colors">Strategic Expansion</Link></li>
              <li><Link to="/network" className="hover:text-emerald-400 transition-colors">Global Port Network</Link></li>
              <li><Link to="/journey" className="hover:text-emerald-400 transition-colors">Roadmap to 2030</Link></li>
              <li><Link to="/leadership" className="hover:text-emerald-400 transition-colors">Board & Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Lubricant Ranges</h4>
            <ul className="space-y-2.5">
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">CYL Oils (SAE 50)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">SYS Oils (SAE 30)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Trunk Piston Oils (MSDO)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Hydraulics (AW & HVI)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Gear & Transmission</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Bio-Lubricants (EAL)</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Marine Greases</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Global Hubs</h4>
            <div className="space-y-3 text-[11px]">
              <div>
                <strong className="text-white block">Corporate HQ (Dubai):</strong>
                <span>1802, IFZA Towers, Silicon Oasis</span>
              </div>
              <div>
                <strong className="text-white block">Europe (Rotterdam):</strong>
                <span>orders@athenmarine.eu</span>
              </div>
              <div>
                <strong className="text-white block">Singapore & Far East:</strong>
                <span>info@athenmarine.com</span>
              </div>
              <div>
                <strong className="text-white block">India & Subcontinent:</strong>
                <span>support.ind@athenmarine.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Athen Marine • Part of AlMatr Energy Group. In Strategic Global Partnership with Legero International Group B.V. and Eleven Energy.</p>
          <div className="flex items-center gap-4">
            <span>ISO 9001 / 14001</span>
            <span>US EPA VGP Compliant</span>
            <span>Made in EU</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
