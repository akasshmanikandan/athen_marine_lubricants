import React, { useState } from 'react';
import { Check, Shield, FileText, ChevronRight, Sparkles, Filter, Info, QrCode } from 'lucide-react';
import { COMPANY_INFO, Product } from '../data/content';

export const ProductPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'main' | 'secondary' | 'eal' | 'greases'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'main', label: 'Main Grades (Cyl & System)' },
    { id: 'secondary', label: 'Secondary Grades (Hyd & Gear)' },
    { id: 'eal', label: 'EAL Bio-Lubricants' },
    { id: 'greases', label: 'Marine Greases' },
  ];

  const filteredProducts = activeTab === 'all' 
    ? COMPANY_INFO.products 
    : COMPANY_INFO.products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-[#051118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Powering Vessels Globally
            </h2>
            <p className="text-slate-300 mt-2 max-w-2xl text-base">
              Engineered and blended to meet the stringent demands of modern low-emission fuels, high-load machinery, and environmental regulations.
            </p>
          </div>

          {/* EU Badge & QR info */}
          <div className="flex items-center gap-4 bg-[#0b212d] border border-emerald-800/40 rounded-2xl p-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center font-extrabold text-blue-300 text-xs text-center leading-tight">
              MADE IN EU ★★★
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">100% OEM Approved Chemistry</div>
              <div className="text-slate-400">Conforms to MAN ES, WinGD, Wärtsilä</div>
            </div>
          </div>
        </div>

        {/* Featured Product Hero Card with Real Drum Image (Slide 9) */}
        <div className="bg-gradient-to-r from-[#071d27] via-[#0a2735] to-[#071d27] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 mb-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Drum Product Image */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl transform scale-90" />
                <img 
                  src="/assets/product-barrel.png" 
                  alt="Athen Marine Lubricant Drum - Made in EU" 
                  className="relative z-10 max-h-[380px] w-auto object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Description & High-level categories */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <span>Certified European Blending Standards</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Comprehensive Marine Propulsion & Auxiliary Protection
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether powering ultra-large container carriers through heavy seas, protecting delicate stern tube seals in environmentally sensitive waters, or ensuring winch reliability on open decks, Athen Marine delivers uncompromising thermal and shear stability.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-700/60 p-3 rounded-xl text-center">
                  <span className="block text-emerald-400 font-bold text-sm">Main Grades</span>
                  <span className="text-[11px] text-slate-400">Cylinder & System Oils</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/60 p-3 rounded-xl text-center">
                  <span className="block text-emerald-400 font-bold text-sm">Secondary</span>
                  <span className="text-[11px] text-slate-400">Hydraulics & Gears</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/60 p-3 rounded-xl text-center">
                  <span className="block text-emerald-400 font-bold text-sm">EAL Solutions</span>
                  <span className="text-[11px] text-slate-400">VGP Bio-lubricants</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-700/60 p-3 rounded-xl text-center">
                  <span className="block text-emerald-400 font-bold text-sm">Greases</span>
                  <span className="text-[11px] text-slate-400">Heavy-Duty Marine</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                >
                  <span>Request Technical Data Sheets (TDS)</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <img src="/assets/qr-code.png" alt="Scan for TDS" className="w-9 h-9 rounded bg-white p-0.5" />
                  <span>Scan QR for instant technical specifications</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#081b24] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                    {product.category.toUpperCase()}
                  </span>
                  {product.viscosityGrade && (
                    <span className="text-xs font-semibold text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {product.viscosityGrade}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {product.name}
                </h4>

                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  <strong className="text-slate-300">Target Application:</strong> {product.application}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">Key Performance:</div>
                  {product.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.specifications.map((spec, i) => (
                    <span key={i} className="text-[10px] bg-slate-900/90 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                      {spec}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border border-emerald-800/50 transition-colors"
                >
                  <span>Request Quote & Availability</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
