export interface Product {
  id: string;
  name: string;
  category: 'main' | 'secondary' | 'eal' | 'greases';
  viscosityGrade?: string;
  application: string;
  keyFeatures: string[];
  specifications: string[];
  oemApproved: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  category: 'board' | 'council';
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
  tagline: 'Intellectual Engineering Delivering Trust',
  partner: 'Legero International Group B.V.',
  domain: 'www.athenmarine.com',
  email: 'operations@athenmarine.com',
  phone: '+31 (0)10 429 8544',
  heroStats: [
    { label: 'Vessels Serviced', value: '5,000+' },
    { label: 'Global Ports Covered', value: '200+' },
    { label: 'Countries Served', value: '20+' },
    { label: 'Global Hub Offices', value: '04' },
    { label: 'Maritime Team Specialists', value: '100+' },
    { label: '24/7 Operations Desk', value: '365 Days' },
  ],
  valueProps: [
    {
      title: '24/7 Trusted Team',
      desc: 'Round-the-clock dedicated technical and bunkering coordinators ensuring smooth vessel turnarounds.',
      icon: 'Clock'
    },
    {
      title: 'Technical Excellence',
      desc: 'Engineering-driven formulations designed to withstand extreme engine temperatures, high pressures, and modern fuel chemistries.',
      icon: 'Cpu'
    },
    {
      title: 'Reliable Supply',
      desc: 'Guaranteed consistent product availability with dedicated barge and truck delivery across major international port corridors.',
      icon: 'Ship'
    },
    {
      title: 'Personalized Support',
      desc: 'Responsive, human connect to vessel superintendents, chief engineers, and fleet managers.',
      icon: 'Users'
    }
  ],
  vision: {
    title: "Where we're headed",
    statement: "To become the most trusted international marine lubricant brand.",
    pillars: [
      "Technical Excellence in formulation and used oil diagnostics",
      "Dependable Supply across global trading lanes and hubs",
      "Customer Relationships that go far beyond transactional products"
    ]
  },
  mission: {
    title: "Why we exist",
    statement: "To Empower the Global Maritime through reliable lubrication solutions.",
    deliverables: [
      { title: "Assurance", desc: "Rigorous quality compliance and OEM certifications." },
      { title: "Expertise", desc: "Decades of combined technical and marine engineering pedigree." },
      { title: "Dependable Support", desc: "Seamless port logistics across every port and voyage." }
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
      title: "Strategic Partnership with LEGERO",
      subtitle: "Together for sustainable growth and innovation",
      desc: "Backed by Legero International Group B.V., the powerhouse in marine logistics, Athen Marine leverages unparalleled global port clearance, warehousing, and customs agility.",
      badge: "Global Logistics Backbone"
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
        "Strategic Partnership sealed with Legero International Group B.V.",
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
  products: [
    {
      id: "cyl-5040",
      name: "Athen CylTech 5040",
      category: "main",
      viscosityGrade: "SAE 50 | BN 40",
      application: "Two-Stroke Crosshead Engines burning low-sulphur fuel (VLSFO, ULSFO, LNG dual-fuel)",
      keyFeatures: [
        "Exceptional acid neutralization and thermal stability",
        "Prevents scuffing and liner lacquer buildup",
        "Formulated for modern ultra-long stroke engines"
      ],
      specifications: ["MAN ES", "WinGD (Wärtsilä)", "Made in EU Certified"],
      oemApproved: true
    },
    {
      id: "cyl-5070",
      name: "Athen CylTech 5070",
      category: "main",
      viscosityGrade: "SAE 50 | BN 70",
      application: "Slow-speed 2-stroke engines operating with heavy fuel oil (HFO) and scrubber-equipped vessels",
      keyFeatures: [
        "High base number formulation for maximum corrosive wear protection",
        "Advanced detergency keeping ring grooves and piston crowns pristine",
        "High film strength under severe peak pressures"
      ],
      specifications: ["MAN Energy Solutions Category II", "WinGD"],
      oemApproved: true
    },
    {
      id: "sys-3006",
      name: "Athen SysLube 3006",
      category: "main",
      viscosityGrade: "SAE 30 | BN 6",
      application: "Crankcase system oil for two-stroke marine diesel engines",
      keyFeatures: [
        "Superior water separation and demulsibility",
        "Excellent oxidation resistance and bearing fatigue protection",
        "Effective piston undercrown cooling capacity"
      ],
      specifications: ["MAN ES", "WinGD", "Mitsubishi Heavy Industries"],
      oemApproved: true
    },
    {
      id: "tpeo-4030",
      name: "Athen TrunkTech 4030 & 4040",
      category: "main",
      viscosityGrade: "SAE 40 | BN 30 / 40",
      application: "Medium-speed four-stroke trunk piston engines on container ships, bulkers, tugs, and offshore vessels",
      keyFeatures: [
        "Outstanding asphaltene dispersancy preventing black sludge",
        "Extended drain intervals and lower top-up consumption",
        "Anti-wear protection for camshafts and geartrains"
      ],
      specifications: ["Wärtsilä", "MAN 28/32 & 32/44", "Yanmar", "Daihatsu", "Caterpillar MaK"],
      oemApproved: true
    },
    {
      id: "hyd-ep",
      name: "Athen Marine Hydralic EP 32 / 46 / 68",
      category: "secondary",
      viscosityGrade: "ISO VG 32, 46, 68",
      application: "High-pressure marine hydraulic cranes, hatch covers, winches, steering gears, and deck machinery",
      keyFeatures: [
        "Zinc-based anti-wear chemistry for severe pump conditions",
        "Exceptional hydrolytic stability against moisture ingress",
        "Rapid air release and anti-foaming behavior"
      ],
      specifications: ["DIN 51524 Part 2 (HLP)", "ISO 11158 HM", "Denison HF-0"],
      oemApproved: true
    },
    {
      id: "gear-ep",
      name: "Athen Marine GearTech EP 150 / 220 / 320",
      category: "secondary",
      viscosityGrade: "ISO VG 150, 220, 320",
      application: "Enclosed marine propulsion gearboxes, thruster reduction gears, and deck winches",
      keyFeatures: [
        "Extreme pressure micro-pitting resistance",
        "Excellent seal compatibility preventing oil leaks into bilges",
        "Heavy load protection under shock-load conditions"
      ],
      specifications: ["DIN 51517 Part 3 (CLP)", "AGMA 9005-E02", "Flender Gear Approved"],
      oemApproved: true
    },
    {
      id: "comp-fluid",
      name: "Athen Marine CompLube 68 / 100",
      category: "secondary",
      viscosityGrade: "ISO VG 68, 100",
      application: "Marine starting air compressors, emergency compressors, and screw units",
      keyFeatures: [
        "Very low carbon deposit formation on discharge valves",
        "Resists thermal degradation under elevated air discharge temperatures",
        "Extended valve service life"
      ],
      specifications: ["DIN 51506 VDL", "ISO 6743-3 DAA/DAB/DAG"],
      oemApproved: true
    },
    {
      id: "eal-stern",
      name: "Athen BioStern EAL 68 / 100",
      category: "eal",
      viscosityGrade: "ISO VG 68, 100",
      application: "Stern tubes, controllable pitch propellers (CPP), stabilizer fins, and rudder bearings",
      keyFeatures: [
        "Fully meets US EPA 2013 Vessel General Permit (VGP) requirements",
        "Biodegradable, minimally toxic, and non-bioaccumulative",
        "Superior boundary lubrication protecting white metal and bronze bearings"
      ],
      specifications: ["US EPA VGP Compliant", "EU Ecolabel Certified", "OEM Seal Manufacturer Tested"],
      oemApproved: true
    },
    {
      id: "eal-hyd",
      name: "Athen BioHyd EAL 46",
      category: "eal",
      viscosityGrade: "ISO VG 46",
      application: "Environmentally sensitive deck cranes, mooring equipment, and sea-interface machinery",
      keyFeatures: [
        "Synthetic ester-based biodegradable fluid with high viscosity index",
        "Protects aquatic ecosystems in case of accidental discharge",
        "Wide operating temperature window from polar routes to tropics"
      ],
      specifications: ["ISO 15380 HEES", "US EPA VGP Compliant", "Blue Angel Criteria"],
      oemApproved: true
    },
    {
      id: "grease-ep2",
      name: "Athen Marine Grease EP 2 (Lithium Complex)",
      category: "greases",
      viscosityGrade: "NLGI 2",
      application: "Heavy-duty electric motor bearings, deck machinery, rudder stocks, and universal joints",
      keyFeatures: [
        "Water washout resistance in salt spray marine environments",
        "High dropping point above 260°C",
        "Fortified with EP and anti-corrosion additives"
      ],
      specifications: ["DIN 51825: KP2P-30", "ISO 6743-9: L-XCEEB 2"],
      oemApproved: true
    },
    {
      id: "grease-opengear",
      name: "Athen Marine OpenGear & WireRope WR",
      category: "greases",
      viscosityGrade: "NLGI 0 / 1 Heavy Bituminous / Synthetic",
      application: "Anchor windlasses, crane slew rings, open mooring gears, wire ropes",
      keyFeatures: [
        "Extreme adhesion preventing sling-off at high gear rotation",
        "Deep core penetration for steel wire ropes preventing internal corrosion",
        "Resists freshwater and saltwater flushes"
      ],
      specifications: ["DIN 51825: OGP0N-20", "IMO SOLAS Deck Equipment Standards"],
      oemApproved: true
    }
  ],
  team: [
    {
      name: "Gerrie Plune & Robert Plune",
      role: "Board Members & Strategic Partners",
      title: "Architects of Growth",
      bio: "Esteemed brothers and business leaders behind a leading global marine logistics enterprise (Legero International Group B.V.), playing a pivotal role as Athen Marine's strategic partners, investors, and worldwide logistics backbone.",
      image: "/assets/gerrie-robert-plune.png",
      category: "board"
    },
    {
      name: "Jack Craig",
      role: "Board Member & Technical Advisor",
      title: "Mind Behind Our Innovation",
      bio: "Visionary leader in marine lubrication technology. Respected industry authority with extensive C-suite experience across global multinational oil majors and deep technical expertise in proprietary marine lubricant formulations.",
      image: "/assets/jack-craig.png",
      category: "board"
    },
    {
      name: "Santosh Menon",
      role: "Chief Executive Officer (CEO)",
      title: "Visionary Leadership",
      bio: "A visionary leader with deep industry expertise and a trusted global network, influence, and enduring relationships across the international marine community.",
      image: "/assets/santosh-menon.png",
      category: "council"
    },
    {
      name: "Girlie Ventura",
      role: "Head of Finance",
      title: "Sustainable Capital & Financial Strategy",
      bio: "Seasoned finance professional with high energy and a passion for driving sustainable growth, international treasury operations, and strategic fiscal discipline.",
      image: "/assets/girlie-ventura.png",
      category: "council"
    },
    {
      name: "Sathya Prasad",
      role: "Head of Sales & Marketing",
      title: "Commercial Growth & Market Expansion",
      bio: "A proven growth leader with extensive global experience, recognized for driving innovation, rapid market penetration, key account acquisition, and business transformation.",
      image: "/assets/sathya-prasad.png",
      category: "council"
    },
    {
      name: "Liji Suresh",
      role: "Head of Operations",
      title: "Global Supply Chain & Port Logistics",
      bio: "A seasoned marine lubricant operations leader bringing deep operational expertise, flawless bunkering coordination, and customer-centric leadership gained from leading global marine lubricant organizations.",
      image: "/assets/liji-suresh.png",
      category: "council"
    }
  ],
  ports: [
    { region: "Europe & ARA Hub", ports: ["Rotterdam", "Antwerp", "Hamburg", "Piraeus", "Algeciras", "Gibraltar", "Le Havre", "Genoa"] },
    { region: "Middle East & Arab Gulf", ports: ["Fujairah", "Dubai / Jebel Ali", "Ras Laffan", "Sohar", "Dammam", "Jeddah"] },
    { region: "Asia-Pacific", ports: ["Singapore", "Hong Kong", "Shanghai", "Busan", "Port Klang", "Tokyo", "Kaohsiung"] },
    { region: "Indian Subcontinent", ports: ["Mumbai / JNPT", "Kandla / Mundra", "Chennai", "Cochin", "Visakhapatnam", "Colombo"] },
    { region: "Americas", ports: ["Houston", "New Orleans", "Panama Canal (Balboa / Cristobal)", "Santos", "New York"] }
  ]
};
