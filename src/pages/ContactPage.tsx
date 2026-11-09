import React, { useEffect, useState } from 'react';
import { ContactSection } from '../components/ContactSection';
import { useSearchParams } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const nominatedPort = searchParams.get('port');
  const nominatedGrade = searchParams.get('grade');

  return (
    <div className="pt-24 pb-20">
      
      <div className="bg-[#051118] py-16 border-b border-emerald-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
            24/7 GLOBAL OPERATIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 tracking-tight">
            Request Port Bunkering & Lubricants RFQ
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-lg leading-relaxed">
            Directly connect with our central maritime dispatch desk. Guaranteed quotation within 2 hours for all major global ports and anchorages.
          </p>

          {(nominatedPort || nominatedGrade) && (
            <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 bg-emerald-950/90 border border-emerald-500/40 rounded-xl text-xs text-emerald-300">
              {nominatedPort && <span>Nominated Port: <strong className="text-white">{nominatedPort}</strong></span>}
              {nominatedGrade && <span>• Selected Grade: <strong className="text-white">{nominatedGrade}</strong></span>}
            </div>
          )}
        </div>
      </div>

      <ContactSection />

    </div>
  );
};
