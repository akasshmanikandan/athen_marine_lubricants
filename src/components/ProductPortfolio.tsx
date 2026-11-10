import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles, Shield, Wrench, Microscope, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, ProductFamily } from '../data/content';

export const ProductPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Marine Ranges' },
    { id: 'cylinder', label: 'Cylinder Oils (SAE 50)' },
    { id: 'system', label: 'System Oils (SAE 30)' },
    { id: 'trunk', label: 'Trunk Piston (MSDO)' },
    { id: 'hydraulic', label: 'Hydraulics (AW & HVI)' },
    { id: 'gear', label: 'Gear Oils' },
    { id: 'eal', label: 'Bio-Lubricants (EAL)' },
    { id: 'greases', label: 'Marine Greases' },
  ];

  const filtered = activeTab === 'all' 
    ? COMPANY_INFO.productFamilies 
    : COMPANY_INFO.productFamilies.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-20 bg-[#051118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL PRODUCT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Powering Vessels Globally
            </h2>
            <p className="text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
              A comprehensive portfolio of OEM-approved marine lubrication solutions designed to protect critical equipment, optimize performance, and support reliable vessel operations across every voyage.
            </p>
          </div>

          {/* EU Badge & Quality Certifications */}
          <div className="flex items-center gap-4 bg-[#0a202c] border border-emerald-800/40 rounded-2xl p-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-400/40 flex items-center justify-center font-black text-blue-300 text-xs text-center leading-tight">
              MADE IN EU ★★★
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">100% OEM Approved Chemistry</div>
              <div className="text-slate-400">MAN ES • WinGD • Wärtsilä Compliant</div>
            </div>
          </div>
        </div>

        {/* Featured Showcase: Real Rotterdam Harbour Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#091e28] border border-emerald-800/40 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          
          <div className="lg:col-span-5 relative h-full min-h-[340px] overflow-hidden">
            <img 
              src="/assets/drum-rotterdam-bridge.jpg" 
              alt="Athen Marine Drum in Rotterdam Harbour at Sunset" 
              className="w-full h-full object-cover filter contrast-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#091e28] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span>Rotterdam Barge & European Blending</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              The Lubricant That Keeps It Moving.
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Formulated with virgin European base oils and high-reserve alkalinity additive packages. Athen Marine fuels and protects two-stroke low-speed crosshead engines, four-stroke medium-speed diesels, stern tubes, and complex hydraulic deck machinery under extreme marine environments.
            </p>

            {/* Quick stats on the formulation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Cylinder Range</span>
                <strong className="text-emerald-400 text-sm">BN 25 to BN 140</strong>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Environmental</span>
                <strong className="text-emerald-400 text-sm">US EPA VGP Compliant</strong>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Supply Mode</span>
                <strong className="text-emerald-400 text-sm">Bulk Barge & Drums</strong>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Request Quotation & Delivery</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-400">
                Laboratory CoA provided with every batch
              </span>
            </div>
          </div>

        </div>

        {/* Product Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-800 pb-4">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Smart Product Cards Grid (Clean, human-written, not cluttered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#091b24] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h4 className="text-xl font-bold text-white">
                    {item.name}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 flex-shrink-0">
                    {item.category}
                  </span>
                </div>

                <p className="text-xs font-medium text-emerald-300 mb-3">
                  {item.subtitle}
                </p>

                {/* Key Grades Badge */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 mb-4 text-xs">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">Key Grades:</span>
                  <span className="font-semibold text-slate-200">{item.keyGrades}</span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  <strong className="text-slate-200">Application:</strong> {item.application}
                </p>

                <div className="space-y-2 mb-5">
                  {item.highlights.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.specs.map((spec, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/contact?grade=${encodeURIComponent(item.name)}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-emerald-950/80 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border border-emerald-800/50 transition-colors flex-shrink-0"
                >
                  <span>Inquire Grade</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Athen Assure Section (Page 2 of Catalogue & Page 6 of Brochure) */}
        <div className="bg-gradient-to-br from-[#0c2633] via-[#091e28] to-[#071620] border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img src="/assets/logo-assure.png" alt="Athen Assure" className="h-10 w-auto" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                  TECHNICAL EXCELLENCE PROGRAM
                </span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Athen Assure: Complete Marine Lubrication Care
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl mt-1">
                Beyond delivering top-tier lubricants, Athen Assure partners with your technical superintendents to ensure equipment integrity, warranty compliance, and optimal drain intervals.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex-shrink-0"
            >
              Request Lube Oil Analysis
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(COMPANY_INFO.assureServices || []).map((svc) => (
              <div key={svc.number} className="bg-slate-900/80 border border-emerald-900/50 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-emerald-400 mb-3 font-mono">
                    {svc.number}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1">
                    {svc.deliverables.map((d, i) => (
                      <span key={i} className="text-[10px] bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded">
                        • {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
