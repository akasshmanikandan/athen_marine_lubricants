import React, { useState } from 'react';
import { Anchor, MapPin, ExternalLink, Search, CheckCircle2, Navigation, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';

export interface InteractivePort {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Middle East' | 'Asia-Pacific' | 'Indian Subcontinent' | 'Americas';
  x: number; // percentage from left
  y: number; // percentage from top
  leadTime: string;
  supplyMethod: string;
  stockedGrades: string[];
  note: string;
}

export const PORTS_MAP_DATA: InteractivePort[] = [
  // Europe
  { id: 'rotterdam', name: 'Rotterdam', country: 'Netherlands', region: 'Europe', x: 50.2, y: 22.0, leadTime: 'Immediate (Dedicated Barge)', supplyMethod: 'Dedicated Barge & Truck', stockedGrades: ['CYL 5040/5070', 'SYS 3006', 'MSDO', 'Stern EAL', 'Grease CS WR'], note: 'Rotterdam Hub with dedicated bunker barge fleet & ARA delivery' },
  { id: 'piraeus', name: 'Piraeus', country: 'Greece', region: 'Europe', x: 53.8, y: 29.5, leadTime: 'Direct EU Blending Plant', supplyMethod: 'Factory Tanker & Barge', stockedGrades: ['Full Athen Portfolio', 'EU Blended'], note: 'Direct European Blending Facility supplying Mediterranean hubs' },
  { id: 'antwerp', name: 'Antwerp', country: 'Belgium', region: 'Europe', x: 49.8, y: 22.8, leadTime: '12-24 Hours', supplyMethod: 'ARA Barge / Truck', stockedGrades: ['Main Grades', 'Hydraulic AW', 'MSDO'], note: 'Seamless ARA region delivery in partnership with Legero' },
  { id: 'gibraltar', name: 'Gibraltar / Algeciras', country: 'UK / Spain', region: 'Europe', x: 47.0, y: 31.0, leadTime: 'On-Demand (Strait Anchorage)', supplyMethod: 'Anchorage Barge & Road Tanker', stockedGrades: ['CYL 5040/5070', 'EAL Bio-Lubricants'], note: 'Strait of Gibraltar transit anchorage delivery' },

  // Middle East
  { id: 'dubai', name: 'Dubai / Jebel Ali', country: 'UAE', region: 'Middle East', x: 63.8, y: 38.0, leadTime: 'Immediate Delivery (Corporate HQ)', supplyMethod: 'Barge, Pipeline & Truck', stockedGrades: ['CYL 5040/5070/50100', 'SYS 3006', 'MSDO', 'Greases'], note: 'Athen Marine Global Corporate Office & Hub' },
  { id: 'fujairah', name: 'Fujairah', country: 'UAE', region: 'Middle East', x: 64.5, y: 37.5, leadTime: 'Fast Anchorage Dispatch', supplyMethod: 'Dedicated Bunker Barge', stockedGrades: ['Full Marine Range', 'Bulk & Drums'], note: 'Major Gulf anchorage hub with rapid offshore barge fueling' },
  { id: 'jeddah', name: 'Jeddah', country: 'Saudi Arabia', region: 'Middle East', x: 59.8, y: 39.5, leadTime: 'Red Sea Transit 24h', supplyMethod: 'Berth & Barge', stockedGrades: ['CYL 5040/5070', 'MSDO 4040', 'Greases'], note: 'Red Sea container and tanker sea-lane bunkering' },

  // Asia-Pacific
  { id: 'singapore', name: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', x: 77.8, y: 56.5, leadTime: '24/7 Asian Mega-Hub', supplyMethod: 'Dedicated Barge & Warehouse Depot', stockedGrades: ['Complete Athen Portfolio', 'Bulk & Drums'], note: 'Athen Marine Pte Ltd Asian Headquarters and distribution hub' },
  { id: 'hongkong', name: 'Hong Kong', country: 'Hong Kong', region: 'Asia-Pacific', x: 81.0, y: 41.5, leadTime: '12-24 Hours', supplyMethod: 'Harbour Barge & Truck', stockedGrades: ['CYL 5040/5070', 'SYS 3006', 'AW 46/68'], note: 'Greater China transit corridor support' },
  { id: 'shanghai', name: 'Shanghai', country: 'China', region: 'Asia-Pacific', x: 83.2, y: 36.5, leadTime: '24 Hours', supplyMethod: 'Berth & Barge', stockedGrades: ['Main Grades', 'Trunk Piston', 'EAL'], note: 'Major Yangtze delta commercial shipping coverage' },
  { id: 'busan', name: 'Busan', country: 'South Korea', region: 'Asia-Pacific', x: 85.5, y: 34.0, leadTime: 'Immediate Berth Delivery', supplyMethod: 'Barge & Road Tanker', stockedGrades: ['CYL 5040/5070', 'MSDO', 'BioStern EAL'], note: 'Transshipment berth and shipyard maintenance delivery' },

  // Indian Subcontinent
  { id: 'mumbai', name: 'Mumbai / JNPT', country: 'India', region: 'Indian Subcontinent', x: 69.2, y: 43.5, leadTime: 'Direct India Blending Plant', supplyMethod: 'Factory Tanker & Coastal Barge', stockedGrades: ['Full India Blended Portfolio'], note: 'Athen Marine India Manufacturing & Distribution Hub' },
  { id: 'kandla', name: 'Kandla / Mundra', country: 'India', region: 'Indian Subcontinent', x: 68.3, y: 40.5, leadTime: '12-24 Hours', supplyMethod: 'Port Tanker & Truck', stockedGrades: ['CYL 5040/5070', 'MSDO 4040', 'Greases'], note: 'North-West India container and bulk terminal gateway' },
  { id: 'chennai', name: 'Chennai', country: 'India', region: 'Indian Subcontinent', x: 71.5, y: 48.0, leadTime: 'Immediate Berth Delivery', supplyMethod: 'Road Tanker & Drums', stockedGrades: ['Main Grades', 'Hydraulic EP', 'Greases'], note: 'East Coast maritime corridor and container terminal hub' },
  { id: 'colombo', name: 'Colombo', country: 'Sri Lanka', region: 'Indian Subcontinent', x: 71.2, y: 52.0, leadTime: '24 Hours', supplyMethod: 'Anchorage Barge & Berth', stockedGrades: ['CYL 5040/5070', 'MSDO 4030/4040', 'BioStern'], note: 'Main Indian Ocean East-West shipping line hub' },

  // Americas
  { id: 'houston', name: 'Houston / Galveston', country: 'USA', region: 'Americas', x: 23.0, y: 35.5, leadTime: 'Immediate US Gulf Dispatch', supplyMethod: 'Barge & Road Tanker', stockedGrades: ['US EPA VGP Compliant EAL', 'Main Grades'], note: 'US Gulf oil terminal and VGP bio-lubricants depot' },
  { id: 'panama', name: 'Panama Canal', country: 'Panama', region: 'Americas', x: 27.5, y: 48.5, leadTime: 'Transit Delivery (Balboa & Cristobal)', supplyMethod: 'Dedicated Canal Barge', stockedGrades: ['CYL 5040/5070', 'MSDO 4040', 'Greases'], note: 'Atlantic and Pacific entry canal transit bunkering' },
  { id: 'santos', name: 'Santos', country: 'Brazil', region: 'Americas', x: 36.5, y: 73.0, leadTime: '24-48 Hours', supplyMethod: 'Terminal Truck & Barge', stockedGrades: ['Main Grades', 'Secondary Oils'], note: 'South American Atlantic coastal hub' }
];

export const WorldPortMap: React.FC = () => {
  const [selectedPort, setSelectedPort] = useState<InteractivePort>(PORTS_MAP_DATA[0]);
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'Europe', 'Middle East', 'Asia-Pacific', 'Indian Subcontinent', 'Americas'];

  const filteredPorts = PORTS_MAP_DATA.filter(port => {
    const matchesRegion = activeRegion === 'All' || port.region === activeRegion;
    const matchesSearch = port.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          port.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-[#0b1f28] border border-emerald-800/50 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
      
      {/* Top Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL FOOTPRINT & PORT NETWORK</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Worldwide Port Coverage & Real-Time Presence
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Over 200+ ports covered across 20+ countries. Select any red beacon pin on the map below to view port bunkering specifications.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search port (e.g. Rotterdam, Dubai)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeRegion === region
                ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Real World Map Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-emerald-900/60 bg-[#061c16] shadow-2xl">
        
        {/* Real High-Resolution World Map Image (Page 7 from Athen Corporate Brochure) */}
        <img 
          src="/assets/real-world-map.png" 
          alt="Athen Marine Global Port Coverage Map" 
          className="w-full h-auto object-cover select-none filter contrast-110 brightness-95"
        />

        {/* Interactive Beacon Markers placed on exact geographical coordinates */}
        {filteredPorts.map((port) => {
          const isSelected = selectedPort.id === port.id;
          return (
            <div
              key={port.id}
              onClick={() => setSelectedPort(port)}
              style={{ left: `${port.x}%`, top: `${port.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              title={`${port.name}, ${port.country}`}
            >
              {/* Outer pulsing ring */}
              <span className={`absolute -inset-2 rounded-full ${
                isSelected ? 'bg-emerald-400 opacity-75 animate-ping' : 'bg-red-500 opacity-60 group-hover:animate-ping'
              }`} />

              {/* Core beacon dot */}
              <span className={`relative flex items-center justify-center w-4 h-4 rounded-full border-2 ${
                isSelected 
                  ? 'bg-emerald-400 border-white shadow-[0_0_12px_#34d399] scale-125' 
                  : 'bg-red-500 border-white shadow-[0_0_8px_rgba(239,68,68,0.8)] group-hover:scale-125'
              } transition-transform duration-200`}>
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
              </span>

              {/* Port label badge */}
              <div className={`absolute left-5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-md pointer-events-none transition-all ${
                isSelected 
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500 opacity-100' 
                  : 'bg-black/85 text-slate-200 border border-slate-700 opacity-0 group-hover:opacity-100'
              }`}>
                {port.name}
              </div>
            </div>
          );
        })}

        {/* Selected Port Card Overlay */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-[#071924]/95 border-2 border-emerald-500/70 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 z-30">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800">
                {selectedPort.region} HUB
              </span>
              <h4 className="text-xl font-black text-white mt-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{selectedPort.name}, {selectedPort.country}</span>
              </h4>
            </div>
            <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-1 rounded border border-emerald-800/60">
              Active Port
            </span>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            {selectedPort.note}
          </p>

          <div className="grid grid-cols-2 gap-2 my-2 text-xs">
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Supply Mechanism</span>
              <span className="font-semibold text-white">{selectedPort.supplyMethod}</span>
            </div>
            <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Lead Time</span>
              <span className="font-semibold text-emerald-400">{selectedPort.leadTime}</span>
            </div>
          </div>

          <div className="mb-3">
            <span className="text-[10px] font-semibold text-slate-300 uppercase block mb-1">
              Readily Stocked Grades:
            </span>
            <div className="flex flex-wrap gap-1">
              {selectedPort.stockedGrades.map((g, i) => (
                <span key={i} className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400">
              Legero & Eleven Energy Backed
            </span>
            <Link
              to={`/contact?port=${encodeURIComponent(selectedPort.name)}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Nominate Port</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>

      {/* Map Footer Note */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-white" />
            <span>Active Port Bunkering Location</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-white" />
            <span>Currently Selected Hub</span>
          </span>
        </div>

        <Link to="/contact" className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
          <span>Need delivery at an off-hire or secondary anchorage? Submit Port Inquiry &rarr;</span>
        </Link>
      </div>

    </div>
  );
};
