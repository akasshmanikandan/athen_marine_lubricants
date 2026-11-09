import React, { useState } from 'react';
import { Globe2, Anchor, Building2, Users2, Search, CheckCircle2, Award, HeartHandshake, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const GlobalReach: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Countries Served', value: '20+', icon: Globe2, desc: 'Global maritime coverage across key trade lanes' },
    { label: 'Ports Covered', value: '200+', icon: Anchor, desc: 'Scaling rapidly to 500+ and 800+ port locations' },
    { label: 'Global Offices', value: '04', icon: Building2, desc: 'Strategic hubs in Europe, Middle East & Asia' },
    { label: 'Maritime Specialists', value: '100+', icon: Users2, desc: 'Direct technical advisors & in-direct logistics team' },
  ];

  const whyChooseUs = [
    {
      title: 'Technical Expertise',
      desc: 'Engineering-driven solutions that support optimal vessel performance and reduced lifecycle wear.',
      icon: Shield
    },
    {
      title: 'Reliable Supply',
      desc: 'Consistent product availability across global bunkering hubs with fast barge and shore turnaround.',
      icon: Anchor
    },
    {
      title: 'Personalized Support',
      desc: 'Responsive, human connect to customer needs with round-the-clock technical superintendent access.',
      icon: HeartHandshake
    },
    {
      title: 'Trusted Partnership',
      desc: 'We work alongside our customers to create long-term value, predictive drain intervals, and reduced TCO.',
      icon: Award
    }
  ];

  const filteredPortGroups = COMPANY_INFO.ports.map(group => ({
    region: group.region,
    ports: group.ports.filter(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(group => group.ports.length > 0);

  return (
    <section id="network" className="py-24 bg-[#071620] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            OUR REACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Continuously Expanding Global Footprint
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Delivering lubricants where your fleet trades. From major transshipment hubs to regional feeder ports, Athen Marine delivers with speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div 
                key={i}
                className="bg-[#0b212d] border border-emerald-900/40 hover:border-emerald-500/50 rounded-2xl p-6 text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1 text-emerald-400">
                  {st.value}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-2 uppercase tracking-wide">
                  {st.label}
                </div>
                <p className="text-xs text-slate-400">
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              WHY CUSTOMERS CHOOSE ATHEN
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
              Built to Earn Your Trust
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#091b24] border border-emerald-900/30 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-300 mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Anchor className="w-5 h-5 text-emerald-400" />
                <span>Global Port Coverage & Availability Check</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Serving over 200+ ports across Europe, Middle East, Asia-Pacific, Americas, and the Indian Subcontinent.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search port (e.g. Rotterdam)..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortGroups.map((group, idx) => (
              <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>{group.region}</span>
                  <span className="text-[10px] text-slate-500 font-normal">Active Berths</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.ports.map((port, pIdx) => (
                    <span 
                      key={pIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-[#071620] border border-emerald-950 text-slate-200 hover:border-emerald-500/50 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>{port}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
            <span>Need delivery at an off-hire or secondary anchorage? Our Legero logistics network arranges remote deliveries worldwide.</span>
            <a href="#contact" className="text-emerald-400 font-bold hover:underline flex-shrink-0">
              Submit Port Inquiry &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
