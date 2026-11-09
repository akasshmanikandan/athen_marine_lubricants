import React from 'react';
import { Globe2, Anchor, Building2, Users2, Shield, HeartHandshake, Award } from 'lucide-react';
import { WorldPortMap } from './WorldPortMap';

export const GlobalReach: React.FC = () => {
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

  return (
    <section id="network" className="py-20 bg-[#071620] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Slide 8) */}
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

        {/* 4 Stats Cards (Slide 8) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mb-1">
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

        {/* Interactive World Map (Requirement 2) */}
        <div className="mb-20">
          <WorldPortMap />
        </div>

        {/* Slide 7: Why Customers Choose Athen */}
        <div>
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

      </div>
    </section>
  );
};
