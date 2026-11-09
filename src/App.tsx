import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VisionMissionPage } from './pages/VisionMissionPage';
import { ExpansionPage } from './pages/ExpansionPage';
import { ProductsPage } from './pages/ProductsPage';
import { NetworkPage } from './pages/NetworkPage';
import { JourneyPage } from './pages/JourneyPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#051118] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/vision" element={<VisionMissionPage />} />
            <Route path="/expansion" element={<ExpansionPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
