import React, { useState } from 'react';
import { Anchor, ShieldCheck, Clock, MapPin, ExternalLink, Filter, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PortLocation {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Middle East' | 'Asia-Pacific' | 'Indian Subcontinent' | 'Americas';
  lat: number;
  lng: number;
  bargeAvailable: boolean;
  truckAvailable: boolean;
  leadTime: string;
  stockedGrades: string[];
}

export const PORT_DATA: PortLocation[] = [
  // Europe & ARA
  { id: 'rotterdam', name: 'Rotterdam', country: 'Netherlands', region: 'Europe', lat: 51.92, lng: 4.47, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate (Barge / Truck)', stockedGrades: ['CYL 5040/5070', 'SYS 3006', 'TPEO', 'EAL BioStern', 'Grease EP2'] },
  { id: 'antwerp', name: 'Antwerp', country: 'Belgium', region: 'Europe', lat: 51.21, lng: 4.40, bargeAvailable: true, truckAvailable: true, leadTime: '12-24 Hours', stockedGrades: ['CYL 5040/5070', 'TPEO', 'Hydraulic EP'] },
  { id: 'hamburg', name: 'Hamburg', country: 'Germany', region: 'Europe', lat: 53.55, lng: 9.99, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Secondary', 'Greases'] },
  { id: 'piraeus', name: 'Piraeus', country: 'Greece', region: 'Europe', lat: 37.94, lng: 23.64, bargeAvailable: true, truckAvailable: true, leadTime: 'Direct EU Blending Hub', stockedGrades: ['Full Athen Portfolio', 'EU Blended'] },
  { id: 'gibraltar', name: 'Gibraltar / Algeciras', country: 'UK / Spain', region: 'Europe', lat: 36.14, lng: -5.35, bargeAvailable: true, truckAvailable: true, leadTime: 'Off-port Anchorage / Berth', stockedGrades: ['Main Grades', 'EAL Bio-Lubricants'] },
  { id: 'genoa', name: 'Genoa', country: 'Italy', region: 'Europe', lat: 44.40, lng: 8.93, bargeAvailable: false, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Secondary'] },
  { id: 'lehavre', name: 'Le Havre', country: 'France', region: 'Europe', lat: 49.49, lng: 0.10, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Greases'] },

  // Middle East & Gulf
  { id: 'fujairah', name: 'Fujairah', country: 'UAE', region: 'Middle East', lat: 25.12, lng: 56.32, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate Anchorage Barge', stockedGrades: ['CYL 5040/5070', 'SYS 3006', 'TPEO 4040', 'Greases'] },
  { id: 'dubai', name: 'Dubai / Jebel Ali', country: 'UAE', region: 'Middle East', lat: 25.01, lng: 55.06, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate Berth / Barge', stockedGrades: ['Main Grades', 'Hydraulic EP', 'EAL'] },
  { id: 'raslaffan', name: 'Ras Laffan', country: 'Qatar', region: 'Middle East', lat: 25.90, lng: 51.53, bargeAvailable: false, truckAvailable: true, leadTime: '24-48 Hours', stockedGrades: ['Gas Fleet Approved Grades', 'Hydraulics'] },
  { id: 'sohar', name: 'Sohar', country: 'Oman', region: 'Middle East', lat: 24.34, lng: 56.70, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Greases'] },
  { id: 'dammam', name: 'Dammam', country: 'Saudi Arabia', region: 'Middle East', lat: 26.43, lng: 50.10, bargeAvailable: false, truckAvailable: true, leadTime: '24-48 Hours', stockedGrades: ['Main Grades', 'Secondary'] },
  { id: 'jeddah', name: 'Jeddah', country: 'Saudi Arabia', region: 'Middle East', lat: 21.48, lng: 39.19, bargeAvailable: true, truckAvailable: true, leadTime: 'Red Sea Corridor 24h', stockedGrades: ['CYL 5040/5070', 'TPEO', 'Greases'] },

  // Asia-Pacific
  { id: 'singapore', name: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', lat: 1.35, lng: 103.81, bargeAvailable: true, truckAvailable: true, leadTime: '24/7 Strategic Mega-Hub', stockedGrades: ['Complete Athen Range', 'Bulk Barge & Drums'] },
  { id: 'hongkong', name: 'Hong Kong', country: 'Hong Kong', region: 'Asia-Pacific', lat: 22.31, lng: 114.16, bargeAvailable: true, truckAvailable: true, leadTime: '12-24 Hours', stockedGrades: ['Main Grades', 'Secondary', 'Greases'] },
  { id: 'shanghai', name: 'Shanghai', country: 'China', region: 'Asia-Pacific', lat: 31.23, lng: 121.47, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Hydraulic EP'] },
  { id: 'busan', name: 'Busan', country: 'South Korea', region: 'Asia-Pacific', lat: 35.17, lng: 129.07, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate Delivery', stockedGrades: ['Main Grades', 'EAL Bio-Lubricants'] },
  { id: 'portklang', name: 'Port Klang', country: 'Malaysia', region: 'Asia-Pacific', lat: 3.00, lng: 101.40, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Secondary'] },
  { id: 'tokyo', name: 'Tokyo / Yokohama', country: 'Japan', region: 'Asia-Pacific', lat: 35.67, lng: 139.65, bargeAvailable: false, truckAvailable: true, leadTime: '24-48 Hours', stockedGrades: ['Main Grades', 'Greases'] },
  { id: 'kaohsiung', name: 'Kaohsiung', country: 'Taiwan', region: 'Asia-Pacific', lat: 22.62, lng: 120.30, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Secondary'] },

  // Indian Subcontinent
  { id: 'mumbai', name: 'Mumbai / JNPT', country: 'India', region: 'Indian Subcontinent', lat: 18.92, lng: 72.83, bargeAvailable: true, truckAvailable: true, leadTime: 'Direct Blending Hub Supply', stockedGrades: ['Full India Blended Portfolio', 'Barge & Truck'] },
  { id: 'kandla', name: 'Kandla / Mundra', country: 'India', region: 'Indian Subcontinent', lat: 22.98, lng: 70.13, bargeAvailable: true, truckAvailable: true, leadTime: '12-24 Hours', stockedGrades: ['CYL 5040/5070', 'TPEO', 'Hydraulic EP'] },
  { id: 'chennai', name: 'Chennai / Ennore', country: 'India', region: 'Indian Subcontinent', lat: 13.08, lng: 80.27, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate Berth / Barge', stockedGrades: ['Main Grades', 'EAL', 'Greases'] },
  { id: 'cochin', name: 'Cochin', country: 'India', region: 'Indian Subcontinent', lat: 9.93, lng: 76.26, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Secondary'] },
  { id: 'vizag', name: 'Visakhapatnam', country: 'India', region: 'Indian Subcontinent', lat: 17.68, lng: 83.21, bargeAvailable: false, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'Greases'] },
  { id: 'colombo', name: 'Colombo', country: 'Sri Lanka', region: 'Indian Subcontinent', lat: 6.92, lng: 79.86, bargeAvailable: true, truckAvailable: true, leadTime: 'Indian Ocean Hub 24h', stockedGrades: ['Main Grades', 'TPEO', 'BioStern'] },

  // Americas
  { id: 'houston', name: 'Houston / Galveston', country: 'USA', region: 'Americas', lat: 29.76, lng: -95.36, bargeAvailable: true, truckAvailable: true, leadTime: 'Immediate US Gulf Barge', stockedGrades: ['US EPA VGP Compliant EAL', 'Main Grades'] },
  { id: 'neworleans', name: 'New Orleans / Mississippi', country: 'USA', region: 'Americas', lat: 29.95, lng: -90.07, bargeAvailable: true, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'EAL', 'Hydraulics'] },
  { id: 'panama', name: 'Panama Canal (Balboa/Cristobal)', country: 'Panama', region: 'Americas', lat: 8.98, lng: -79.52, bargeAvailable: true, truckAvailable: true, leadTime: 'Transit Delivery / Anchorage', stockedGrades: ['CYL 5040/5070', 'TPEO', 'Greases'] },
  { id: 'santos', name: 'Santos', country: 'Brazil', region: 'Americas', lat: -23.96, lng: -46.33, bargeAvailable: true, truckAvailable: true, leadTime: '24-48 Hours', stockedGrades: ['Main Grades', 'Secondary'] },
  { id: 'newyork', name: 'New York / New Jersey', country: 'USA', region: 'Americas', lat: 40.71, lng: -74.00, bargeAvailable: false, truckAvailable: true, leadTime: '24 Hours', stockedGrades: ['Main Grades', 'EAL Bio-Lubricants'] }
];

export const WorldPortMap: React.FC = () => {
  const [selectedPort, setSelectedPort] = useState<PortLocation | null>(PORT_DATA[0]);
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'Europe', 'Middle East', 'Asia-Pacific', 'Indian Subcontinent', 'Americas'];

  // Convert lat/long to SVG (1000 x 500)
  const project = (lat: number, lng: number) => {
    // Equirectangular projection
    const x = ((lng + 180) * (1000 / 360));
    // lat from +85 to -60 mapped to y 30 to 480
    const y = ((85 - lat) * (470 / 145)) + 15;
    return { x, y };
  };

  const filteredPorts = PORT_DATA.filter(port => {
    const matchesRegion = activeRegion === 'All' || port.region === activeRegion;
    const matchesSearch = port.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          port.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-[#071d27] border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      
      {/* Top Filter & Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Anchor className="w-3.5 h-3.5" />
            <span>INTERACTIVE GLOBAL PORT MAP</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Worldwide Port Coverage & Real-time Locations
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Click any pin on the map to view bunkering method, lead time, and stock availability.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search port or country..."
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
          />
        </div>
      </div>

      {/* Region Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeRegion === region
                ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* SVG Map Container */}
      <div className="relative w-full aspect-[2/1] min-h-[360px] max-h-[560px] bg-[#04121a] rounded-2xl border border-emerald-900/50 overflow-hidden shadow-inner flex items-center justify-center">
        
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ocean pattern grid */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(20, 156, 103, 0.08)" strokeWidth="0.8" />
            </pattern>
            {/* Glow filters */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid background */}
          <rect width="1000" height="500" fill="#04121a" />
          <rect width="1000" height="500" fill="url(#grid)" />

          {/* Stylized Continents Outlines */}
          <g fill="#0b2330" stroke="#134e38" strokeWidth="0.8" opacity="0.85">
            {/* North America */}
            <path d="M 120 70 Q 180 50 260 70 Q 310 90 280 160 Q 240 190 270 230 Q 240 250 200 240 Q 150 210 130 150 Z" />
            {/* Central America & Caribbean */}
            <path d="M 230 240 Q 260 260 280 280 Q 270 290 250 270 Z" />
            {/* South America */}
            <path d="M 270 280 Q 360 290 380 350 Q 360 440 310 460 Q 270 410 280 340 Z" />
            {/* Europe */}
            <path d="M 460 80 Q 540 60 560 110 Q 580 150 540 180 Q 480 190 460 150 Q 450 110 460 80 Z" />
            {/* United Kingdom / Ireland */}
            <path d="M 465 110 Q 485 105 480 130 Q 460 135 465 110 Z" />
            {/* Africa */}
            <path d="M 470 190 Q 550 180 580 230 Q 610 320 540 410 Q 480 380 460 270 Q 450 220 470 190 Z" />
            {/* Asia / Eurasia */}
            <path d="M 550 80 Q 720 50 860 90 Q 920 150 870 230 Q 800 250 740 280 Q 690 220 640 190 Q 560 170 550 80 Z" />
            {/* Indian Subcontinent Peninsula */}
            <path d="M 670 210 Q 740 210 735 290 Q 700 310 680 250 Z" />
            {/* Southeast Asia */}
            <path d="M 770 250 Q 820 250 830 320 Q 770 330 770 250 Z" />
            {/* Japan */}
            <path d="M 870 160 Q 895 160 890 210 Q 865 200 870 160 Z" />
            {/* Australia */}
            <path d="M 790 360 Q 880 350 900 410 Q 870 470 800 460 Q 770 410 790 360 Z" />
          </g>

          {/* Major Maritime Shipping Lanes (Dotted) */}
          <g stroke="rgba(72, 221, 160, 0.25)" strokeWidth="1" strokeDasharray="3 3" fill="none">
            {/* Atlantic Route: Rotterdam -> US Gulf */}
            <path d="M 512 150 Q 380 170 235 215" />
            {/* Med -> Suez -> Red Sea -> Fujairah */}
            <path d="M 512 150 Q 540 180 565 190 Q 600 220 652 229" />
            {/* Fujairah -> India -> Singapore */}
            <path d="M 652 229 Q 702 247 788 295" />
            {/* Singapore -> Shanghai -> Busan */}
            <path d="M 788 295 Q 837 210 858 198" />
            {/* Transpacific: Busan / Tokyo -> Houston/Panama */}
            <path d="M 888 197 Q 950 180 999 180" />
            <path d="M 0 180 Q 150 200 279 273" />
          </g>

          {/* Port Pins & Pulses */}
          {filteredPorts.map((port) => {
            const { x, y } = project(port.lat, port.lng);
            const isSelected = selectedPort?.id === port.id;

            return (
              <g 
                key={port.id} 
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setSelectedPort(port)}
              >
                {/* Pulsing ring for active or important hubs */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 10 : 6}
                  fill="none"
                  stroke={isSelected ? '#48dda0' : '#1fc182'}
                  strokeWidth="1.5"
                  opacity={isSelected ? 0.9 : 0.5}
                >
                  <animate
                    attributeName="r"
                    values={isSelected ? "6;16;6" : "3;9;3"}
                    dur={isSelected ? "1.8s" : "3s"}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.1;0.9"
                    dur={isSelected ? "1.8s" : "3s"}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Core pin circle */}
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 5 : 3.5}
                  fill={isSelected ? '#48dda0' : '#10b981'}
                  stroke="#04121a"
                  strokeWidth="1"
                  filter="url(#glow)"
                />

                {/* Port label */}
                {(isSelected || port.bargeAvailable) && (
                  <text
                    x={x + 7}
                    y={y + 3}
                    fill={isSelected ? '#48dda0' : '#cbd5e1'}
                    fontSize={isSelected ? '9' : '7.5'}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    fontFamily="sans-serif"
                    className="pointer-events-none drop-shadow"
                  >
                    {port.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Selected Port Info Card Overlay */}
        {selectedPort && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-[#071924]/95 border-2 border-emerald-500/60 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
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
              <span className="text-xs text-slate-400 font-mono">
                {selectedPort.lat.toFixed(2)}°N, {selectedPort.lng.toFixed(2)}°E
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-3 text-xs">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Supply Mechanism</span>
                <span className="font-semibold text-white">
                  {selectedPort.bargeAvailable ? 'Dedicated Barge & Truck' : 'Terminal Truck / Pipeline'}
                </span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
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
                  <span key={i} className="text-[10px] bg-emerald-950/70 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Legero Clearance Available
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
        )}

      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
            <span>Active Athen Bunkering Port ({filteredPorts.length} visible)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-emerald-400 animate-ping" />
            <span>Dedicated Barge / Strategic Hub</span>
          </span>
        </div>

        <Link to="/contact" className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
          <span>Need custom bunkering at an unlisted anchorage?</span>
          <span>&rarr;</span>
        </Link>
      </div>

    </div>
  );
};
