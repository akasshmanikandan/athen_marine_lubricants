export interface ProductFamily {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  keyGrades: string;
  application: string;
  highlights: string[];
  specs: string[];
}

export interface ServicePillar {
  number: string;
  title: string;
  desc: string;
  deliverables: string[];
}

export interface BoardMember {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  tag: string;
}

export interface TimelineMilestone {
  period: string;
  title: string;
  subtitle: string;
  points?: string[];
  isHighlight?: boolean;
}

export const COMPANY_INFO = {
  name: 'Athen Marine',
  tagline: 'Intellectual Engineering. Delivering Trust.',
  parentGroup: 'AlMatr Energy Group',
  partners: [
    { name: 'Legero International Group B.V.', role: 'Global Logistics & Forwarding', logo: '/assets/logo-legero.png' },
    { name: 'Eleven Energy', role: 'Marine Fuel & Bunkering Expertise', logo: '/assets/logo-eleven.png' },
  ],
  domain: 'www.athenmarine.com',
  heroStats: [
    { label: 'Countries Served', value: '20+' },
    { label: 'Ports Covered', value: '200+' },
    { label: 'Strategic Global Hubs', value: '04' },
    { label: 'Vessels Powered', value: '5,000+' },
    { label: 'Direct & In-Direct Team', value: '100+' },
    { label: 'On-Demand Dispatch', value: '24/7' },
  ],
  vision: {
    title: "Where we're headed",
    statement: "To become the most trusted international marine lubricant brand.",
    pillars: [
      "Technical Excellence in marine lubrication and condition monitoring",
      "Dependable Supply across global trading lanes and bunkering hubs",
      "Customer Relationships that go far beyond transactional products"
    ]
  },
  mission: {
    title: "Why we exist",
    statement: "To Empower the Global Maritime through reliable lubrication solutions.",
    deliverables: [
      { title: "Assurance", desc: "Rigorous ISO testing, lab Certificate of Analysis (CoA), and OEM compliance." },
      { title: "Expertise", desc: "Decades of combined technical, chemical, and marine engineering pedigree." },
      { title: "Dependable Support", desc: "Seamless port logistics and bunker barge delivery across every port and voyage." }
    ]
  },
  values: [
    {
      name: "Agility",
      quote: "We adapt and execute with speed",
      desc: "Fast responses for critical vessel orders, emergency port deliveries, and rapid custom technical solutions."
    },
    {
      name: "Growth",
      quote: "Ambitious, driven and continuously raising the bar",
      desc: "Constantly expanding our port footprint, testing new eco-friendly formulations, and investing in our maritime partners."
    },
    {
      name: "Trust",
      quote: "We do what we say with integrity",
      desc: "Uncompromising honesty, transparent communication, and 100% adherence to international OEM standards."
    },
    {
      name: "Partnership",
      quote: "We build lasting relationships through trust, responsiveness and shared growth",
      desc: "We work alongside fleet operators as long-term allies in vessel longevity and carbon efficiency."
    }
  ],
  expansionHighlights: [
    {
      title: "Strategic Partnership with LEGERO & Eleven Energy",
      subtitle: "Together for sustainable growth and innovation",
      desc: "Backed by Legero International Group B.V. for worldwide spare parts and freight logistics, alongside Eleven Energy's marine fuel trading and bunkering prowess.",
      badge: "Logistics Backbone"
    },
    {
      title: "Blending in GREECE",
      subtitle: "EU blended products across EU ports",
      desc: "State-of-the-art European blending facility producing certified marine lubricants conforming to strict EU environmental and chemical standards for Mediterranean and North European vessels.",
      badge: "Made in EU"
    },
    {
      title: "ROTTERDAM Barge",
      subtitle: "Seamless ARA region and EU deliveries in partnership with Legero",
      desc: "Dedicated marine barge delivery capability directly servicing the Amsterdam-Rotterdam-Antwerp (ARA) mega-port hub, providing on-time bunkering and bulk transfers.",
      badge: "ARA Hub Dedicated"
    },
    {
      title: "Blending in INDIA",
      subtitle: "Athen products available across all ports in India and neighboring countries",
      desc: "High-capacity blending and distribution infrastructure covering the Indian subcontinent, Sri Lanka, and Indian Ocean trade routes with ultra-fast turnaround.",
      badge: "Indian Ocean Gateway"
    }
  ],
  evolution: [
    {
      period: "2020",
      title: "The Beginning",
      subtitle: "Athen Marine is born",
      points: ["Founded with a vision to bring intellectual engineering and customer centricity to marine lubrication."]
    },
    {
      period: "2021-22",
      title: "Building Credibility",
      subtitle: "Secured first OE approvals",
      points: ["Rigorous testing and benchmark field trials with major original equipment engine manufacturers."]
    },
    {
      period: "2023-24",
      title: "Complete Portfolio Launch",
      subtitle: "Introduced full range of marine lubricant solutions",
      points: ["Launched Main Grades, Secondary Grades, EAL Bio-lubricants, and Heavy-duty Marine Greases."]
    },
    {
      period: "2025-26",
      title: "Scaling Globally",
      subtitle: "5,000+ vessels serviced across 500+ ports",
      points: [
        "Strategic Partnerships sealed with Legero International Group and Eleven Energy.",
        "Expansion of Rotterdam barge delivery and dual blending hubs in Greece and India."
      ],
      isHighlight: true
    },
    {
      period: "2027-28",
      title: "Industry Recognition",
      subtitle: "100% OEM approved product portfolio",
      points: ["Port coverage scaling to 800+ international maritime ports across 6 continents."]
    },
    {
      period: "By 2030",
      title: "A Global Force",
      subtitle: "10% of Global Merchant Fleet powered by Athen",
      points: ["Leading the industry in green shipping formulations, bio-lubricants, and digitized port bunkering."],
      isHighlight: true
    }
  ],
  whyChooseUs: [
    {
      title: 'Technical Expertise',
      desc: 'Engineering driven solutions that support optimal vessel performance and reduced lifecycle wear.',
      icon: 'Shield'
    },
    {
      title: 'Reliable Supply',
      desc: 'Consistent product availability across global bunkering hubs with fast barge and shore turnaround.',
      icon: 'Anchor'
    },
    {
      title: 'Personalized Support',
      desc: 'Responsive, human connect to customer needs with round-the-clock technical superintendent access.',
      icon: 'HeartHandshake'
    },
    {
      title: 'Trusted Partnership',
      desc: 'We work alongside our customers to create long-term value, predictive drain intervals, and reduced TCO.',
      icon: 'Award'
    }
  ],
  assureServices: [
    {
      number: '01',
      title: 'Technical Consultation & Advisory',
      desc: 'Expert guidance to help customers identify the right marine lubrication solution for their operational requirements.',
      deliverables: ['Lubricant Selection', 'Technical Recommendations', 'Performance Optimization', 'OEM Guidance']
    },
    {
      number: '02',
      title: 'Lube Oil Analysis & Condition Monitoring',
      desc: 'Laboratory backed analysis designed to evaluate lubricant condition and flag potential issues before they affect equipment performance.',
      deliverables: ['Oil Health Analysis', 'Contamination Detection', 'Performance Evaluation', 'Preventive Maintenance Support']
    },
    {
      number: '03',
      title: 'Lube Oil Compatibility & Equivalent Solutions',
      desc: 'Compatibility assessments and equivalent lubricant recommendations to help customers identify suitable alternatives without compromising engine warranty.',
      deliverables: ['Equivalent Product Charts', 'Compatibility Assessment', 'OEM Compliance', 'Product Recommendations']
    },
    {
      number: '04',
      title: 'Onboard Inspections & Ship Visits',
      desc: 'Practical onboard support to assess lubrication systems and equipment and identify areas requiring attention.',
      deliverables: ['Onboard Inspection', 'Lubrication System Assessment', 'Equipment Evaluation', 'Maintenance Recommendations']
    }
  ],
  productFamilies: [
    {
      id: 'cylinder',
      name: 'Cylinder Oils',
      category: 'cylinder',
      subtitle: 'SAE 50 Cylinder Oils for Low-Speed Two-Stroke Crosshead Diesel Engines',
      keyGrades: 'CYL Oil 5025 (BN 25) | 5040 (BN 40) | 5070 (BN 70) | 50100 (BN 100)',
      application: 'Formulated for slow-speed crosshead engines burning low-sulfur fuels (0.1% to 0.5% S) and heavy residual fuel oils (up to 3.5% S).',
      highlights: [
        'Advanced acid neutralization & ring pack protection',
        'Prevents scuffing and liner lacquer formation under high peak pressures',
        'Approved for modern ultra-long stroke two-stroke engines'
      ],
      specs: ['MAN Energy Solutions Category II', 'WinGD', 'Made in EU']
    },
    {
      id: 'system',
      name: 'System Oils',
      category: 'system',
      subtitle: 'SAE 30 Crankcase & Piston Cooling Oils for Two-Stroke Marine Diesels',
      keyGrades: 'SYS Oil 3005 (BN 05) | SYS Oil 3006 (BN 06)',
      application: 'Crankcase lubrication and piston undercrown cooling for slow-speed two-stroke crosshead engines on low-sulfur residual or distillate fuels.',
      highlights: [
        'Superior demulsibility and rapid water shedding in purifiers',
        'Outstanding thermal and oxidation resistance',
        'Protects crankshaft bearings and crosshead pins against fatigue wear'
      ],
      specs: ['MAN ES', 'WinGD', 'Mitsubishi UEC']
    },
    {
      id: 'trunk',
      name: 'Trunk Piston Engine Oils (MSDO)',
      category: 'trunk',
      subtitle: 'SAE 30 & SAE 40 Medium-Speed Four-Stroke Marine Diesels',
      keyGrades: 'MSDO 3030 / 3040 / 3055 | MSDO 4030 / 4040 / 4055',
      application: 'Medium-speed four-stroke diesel engines operating on residual and distillate fuels with sulfur content up to 4.5%.',
      highlights: [
        'Exceptional asphaltene dispersancy preventing black sludge formation',
        'Maintains piston ring cleanliness and prevents blow-by',
        'Extended oil drain intervals and lower top-up oil consumption'
      ],
      specs: ['Wärtsilä', 'MAN 28/32 & 32/44', 'Yanmar', 'Daihatsu', 'Caterpillar MaK']
    },
    {
      id: 'hydraulic',
      name: 'Hydraulic Oils (Anti-Wear & HVI)',
      category: 'hydraulic',
      subtitle: 'ISO 15 to 150 Mobile & Stationary High-Pressure Marine Hydraulics',
      keyGrades: 'AW 32 / 46 / 68 | HVI 46 / 68 (High Viscosity Index)',
      application: 'High-pressure marine hydraulic cranes, hatch covers, mooring winches, steering gears, and deck machinery.',
      highlights: [
        'Superior zinc-based anti-wear protection under extreme pump shear',
        'High viscosity index (HVI) for temperature swings from Arctic to tropics',
        'Hydrolytic stability resisting water contamination and emulsification'
      ],
      specs: ['DIN 51524 Part 2/3 (HLP/HVLP)', 'ISO 11158 HM/HV', 'Denison HF-0']
    },
    {
      id: 'gear',
      name: 'Gear & Transmission Oils',
      category: 'gear',
      subtitle: 'ISO 68 to 680 Heavy-Duty Enclosed Marine Industrial Gears',
      keyGrades: 'Gear 68 / 100 / 150 / 220 / 320 / 460',
      application: 'Enclosed marine propulsion gear drives, thruster reduction gears, and anchor windlass geartrains.',
      highlights: [
        'Outstanding micro-pitting resistance and extreme load-carrying properties',
        'Protects bronze, brass, and steel components from corrosion',
        'Demulsifies water rapidly for easy drainage'
      ],
      specs: ['DIN 51517 Part 3 (CLP)', 'AGMA 9005-E02', 'Flender']
    },
    {
      id: 'eal',
      name: 'Environmentally Acceptable Lubricants (EAL)',
      category: 'eal',
      subtitle: 'US EPA 2013 VGP Compliant Biodegradable Marine Fluids',
      keyGrades: 'Stern EAL 68 / 100 / 220 | HYD EAL 32 / 46 / 68 | Gear EAL',
      application: 'Stern tubes, controllable pitch propellers (CPP), bow thrusters, and sea-to-air deck machinery.',
      highlights: [
        'Readily biodegradable synthetic ester formulations with minimal aquatic toxicity',
        'Full compliance with US EPA Vessel General Permit (VGP 2013)',
        'Extensively tested with major marine seal and white metal manufacturers'
      ],
      specs: ['US EPA VGP Compliant', 'EU Ecolabel Standards', 'Seal Manufacturer Validated']
    },
    {
      id: 'greases',
      name: 'Marine Greases (CS WR & Li EP)',
      category: 'greases',
      subtitle: 'NLGI 0, 2 & 3 Heavy-Duty Water-Resistant Marine Greases',
      keyGrades: 'Grease CS WR (NLGI 0) | Grease CS WR EP 2 (NLGI 2) | Grease Li EP2',
      application: 'Anchor windlasses, crane slew bearings, open mooring gears, wire ropes, and universal joints.',
      highlights: [
        'Calcium sulfonate complex chemistry providing unmatched water washout resistance',
        'Superior corrosion protection in harsh saltwater spray environments',
        'High dropping point for high-load and elevated operating temperatures'
      ],
      specs: ['DIN 51825: KP2R-20', 'ISO 6743-9']
    },
    {
      id: 'synthetics',
      name: 'Synthetics (PAO, PAG & Refrigeration)',
      category: 'synthetics',
      subtitle: 'Polyalphaolefin (PAO) & Polyalkylene Glycol (PAG) Synthetics',
      keyGrades: 'Syn PAO 68 / 150 / 220 | REF Syn POE 32 / 68 | REF Syn DAB 55 / 100',
      application: 'LPG / chemical gas compressors, marine air refrigeration (R-134a, R-404A, Ammonia R-717), and severe-duty gearboxes.',
      highlights: [
        'Extended service life in extreme high and sub-zero temperature environments',
        'Low deposit and carbon buildup on compressor valves',
        'Ozone-friendly refrigeration compatibility'
      ],
      specs: ['DIN 51506 VDL', 'ISO 6743-3 DAA/DAB']
    }
  ],
  boardMembers: [
    {
      name: 'Robert Plune & Gerrie Plune',
      role: 'Founding Brothers & Directors',
      company: 'Legero International Group B.V.',
      tag: 'Strategic Partners, Investors & Worldwide Logistics Backbone',
      bio: 'Headed by founding brothers Gerrie and Robert Plune, who together with a highly experienced and capable team have built Legero from a one-truck courier start in 1988 into a comprehensive integrated group of companies with a truly global footprint across 13 cities on several continents, forming long-lasting partnerships with shipping customers worldwide.',
      image: '/assets/plune-brothers.jpg'
    },
    {
      name: 'Chris Todd',
      role: 'CEO, Eleven Energy',
      company: 'Eleven Energy',
      tag: 'Board Member & Marine Fuel Specialist',
      bio: 'Chris Todd is a seasoned leader and respected figure in the global marine fuels and bunkering industry, having worked within leading companies in the sector for over two decades. He began his career in the early 2000s at World Fuel Services and Chemoil. In the mid-2010s he led bunkering at GP Global (formerly Gulf Petrochem) from Rotterdam as Head of Bunkering, West of Suez, expanding its European presence and barge fleet. A dealmaker with a broad global network, he is focused on growth and operational excellence.',
      image: '/assets/chris-todd.jpg'
    },
    {
      name: 'Jack Craig',
      role: 'Director / Board Member',
      company: 'Athen Marine',
      tag: 'Mind Behind Our Formulation & Innovation',
      bio: 'A distinguished leader in the global marine and energy lubricants industry, Jack Craig brings more than five decades of international business development and senior executive experience. At BP he served as ROU Manager for Marine and Energy Lubricants and Regional Director of Castrol Offshore for the Americas and Europe. He then joined Gulf Oil Marine, where he held the role of Chief Operating Officer from 2010 to 2020. Recognized for strong team leadership, business establishment, and performance turnaround.',
      image: '/assets/jack-craig-clean.jpg'
    },
    {
      name: 'Santosh Menon',
      role: 'Chief Executive Officer',
      company: 'Athen Marine',
      tag: 'Visionary Leadership & Marine Pedigree',
      bio: 'A veteran of the marine lubricants industry with nearly three decades of experience, Santosh Menon leads Athen Marine as Chief Executive Officer. His career spans technical, sales, and general management roles at Castrol India, Reliance Industries, and Total Lubricants, followed by his tenure at Gulf Oil Marine, where he rose to Operations Head for the Middle East and South Asia. Under his direction, Athen Marine, formed in Dubai, is building a respected global lubricants brand grounded in technical expertise and dependable supply.',
      image: '/assets/santosh-menon-clean.jpg'
    }
  ],
  globalHubs: [
    { city: 'Dubai', country: 'U.A.E. (Corporate HQ)', address: '1802, IFZA Towers, Dubai Silicon Oasis', phone: '+971 50 210 6852', email: 'support.uae@athenmarine.com' },
    { city: 'Rotterdam', country: 'Europe', entity: 'Athen Marine EU BV', phone: '+31 10 2660890', email: 'orders@athenmarine.eu' },
    { city: 'Singapore', country: 'Asia-Pacific', entity: 'Athen Marine Pte Ltd', phone: '+65 98332876', email: 'info@athenmarine.com' },
    { city: 'Mumbai', country: 'India', entity: 'Athen Marine India Pvt Ltd', phone: '+91 9512349669', email: 'support.ind@athenmarine.com' },
  ],
  ports: [
    { name: 'Rotterdam', country: 'Netherlands', region: 'Europe & ARA', lat: 51.92, lng: 4.47, note: 'Dedicated Athen Marine Bunker Barge & EU Warehouse Hub' },
    { name: 'Piraeus', country: 'Greece', region: 'Europe & Med', lat: 37.94, lng: 23.64, note: 'Direct Athen EU Blending Plant Facility' },
    { name: 'Antwerp', country: 'Belgium', region: 'Europe & ARA', lat: 51.21, lng: 4.40, note: 'Seamless ARA Barge Delivery' },
    { name: 'Hamburg', country: 'Germany', region: 'Europe', lat: 53.55, lng: 9.99, note: 'North Sea & Baltic Hub Delivery' },
    { name: 'Gibraltar / Algeciras', country: 'UK / Spain', region: 'Europe & Med', lat: 36.14, lng: -5.35, note: 'Strait of Gibraltar Anchorage & Berth Supply' },
    { name: 'Dubai / Jebel Ali', country: 'UAE', region: 'Middle East', lat: 25.01, lng: 55.06, note: 'Global Corporate Office & Arabian Gulf Hub' },
    { name: 'Fujairah', country: 'UAE', region: 'Middle East', lat: 25.12, lng: 56.32, note: 'Major Anchorage Bunkering & Fast Barge Transfer' },
    { name: 'Jeddah', country: 'Saudi Arabia', region: 'Middle East', lat: 21.48, lng: 39.19, note: 'Red Sea Transit Corridor Delivery' },
    { name: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', lat: 1.35, lng: 103.81, note: 'Athen Marine Pte Ltd Asian Mega-Hub' },
    { name: 'Hong Kong', country: 'Hong Kong', region: 'Asia-Pacific', lat: 22.31, lng: 114.16, note: 'Greater China Bunkering Support' },
    { name: 'Shanghai', country: 'China', region: 'Asia-Pacific', lat: 31.23, lng: 121.47, note: 'East Asia Major Terminal Support' },
    { name: 'Busan', country: 'South Korea', region: 'Asia-Pacific', lat: 35.17, lng: 129.07, note: 'Far East Transshipment Berth Delivery' },
    { name: 'Mumbai / JNPT', country: 'India', region: 'Indian Subcontinent', lat: 18.92, lng: 72.83, note: 'Direct Athen India Blending Plant & Coastal Hub' },
    { name: 'Kandla / Mundra', country: 'India', region: 'Indian Subcontinent', lat: 22.98, lng: 70.13, note: 'North-West Maritime Gateway' },
    { name: 'Chennai', country: 'India', region: 'Indian Subcontinent', lat: 13.08, lng: 80.27, note: 'East Coast Terminal Supply' },
    { name: 'Cochin', country: 'India', region: 'Indian Subcontinent', lat: 9.93, lng: 76.26, note: 'Direct Indian Ocean Sea Lane Anchorage' },
    { name: 'Colombo', country: 'Sri Lanka', region: 'Indian Subcontinent', lat: 6.92, lng: 79.86, note: 'East-West Main Trade Lane Hub' },
    { name: 'Houston', country: 'USA', region: 'Americas', lat: 29.76, lng: -95.36, note: 'US Gulf Coast & VGP Bio-lubricants Depot' },
    { name: 'Panama Canal', country: 'Panama', region: 'Americas', lat: 8.98, lng: -79.52, note: 'Transit Anchorage Delivery (Balboa & Cristobal)' },
    { name: 'Santos', country: 'Brazil', region: 'Americas', lat: -23.96, lng: -46.33, note: 'South American East Coast Hub' }
  ]
};
