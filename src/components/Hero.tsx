import React from 'react';
import { ShieldCheck, Globe, Award, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Graphic with Marine Ship & Deep Ocean Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-ship.png" 
          alt="Athen Marine Vessel Bunkering" 
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-[0.45] contrast-125"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051118] via-[#051118]/70 to-[#051118]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051118]/90 via-[#051118]/60 to-transparent" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Partner Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GLOBAL MARINE LUBRICANT BRAND</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-300 text-xs font-medium">
            <span className="text-emerald-400">★</span>
            <span>Strategic Partnership with <strong>Legero International Group B.V.</strong></span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Intellectual Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-200">
              Delivering Trust
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
            Powering more than <strong>5,000+ vessels</strong> across <strong>200+ ports</strong> worldwide. 
            OEM-approved lubricants engineered for peak propulsion efficiency, extended engine life, and global maritime compliance.
          </p>

          {/* Three Core Pillars from Slide 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mb-10">
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-emerald-100 tracking-wide uppercase">Marine Lubricants</span>
            </div>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 backdrop-blur-sm">
              <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-emerald-100 tracking-wide uppercase">OEM-Approved</span>
            </div>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 backdrop-blur-sm">
              <Globe className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-emerald-100 tracking-wide uppercase">Global Port Network</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Product Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300"
            >
              <span>Request Port Delivery Quote</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {COMPANY_INFO.heroStats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                <span className="text-emerald-400">{stat.value}</span>
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Down indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 hover:text-emerald-400 transition-colors">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
