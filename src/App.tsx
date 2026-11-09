import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VisionMissionValues } from './components/VisionMissionValues';
import { GrowthHighlights } from './components/GrowthHighlights';
import { ProductPortfolio } from './components/ProductPortfolio';
import { GlobalReach } from './components/GlobalReach';
import { EvolutionTimeline } from './components/EvolutionTimeline';
import { LeadershipTeam } from './components/LeadershipTeam';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#051118] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <VisionMissionValues />
        <GrowthHighlights />
        <ProductPortfolio />
        <GlobalReach />
        <EvolutionTimeline />
        <LeadershipTeam />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
