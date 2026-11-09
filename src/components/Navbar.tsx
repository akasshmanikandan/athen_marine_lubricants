import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, PhoneCall, ChevronRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Vision & Mission', path: '/vision' },
    { name: 'Expansion', path: '/expansion' },
    { name: 'Products', path: '/products' },
    { name: 'Global Network', path: '/network' },
    { name: 'Our Journey', path: '/journey' },
    { name: 'Leadership', path: '/leadership' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#051118]/95 backdrop-blur-md border-b border-emerald-900/40 shadow-xl shadow-black/40 py-3' 
        : 'bg-gradient-to-b from-[#051118]/95 to-[#051118]/80 backdrop-blur-sm py-4 border-b border-slate-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Dual Brand Logos: Athen Marine + Legero */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-white/95 rounded-lg p-1.5 shadow-md flex items-center h-12 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/assets/logo-athen.png" 
                alt="Athen Marine" 
                className="h-9 w-auto object-contain" 
              />
            </div>
            
            <div className="hidden sm:block h-7 w-[1px] bg-slate-700/60" />
            
            <div className="hidden sm:flex items-center gap-2 bg-slate-900/60 border border-slate-700/50 rounded-lg px-2.5 py-1">
              <img 
                src="/assets/logo-legero.png" 
                alt="Legero International Group B.V." 
                className="h-7 w-auto object-contain" 
              />
              <div className="text-[10px] leading-tight text-slate-300">
                <span className="text-slate-400 block font-normal">Strategic Partner</span>
                <span className="font-semibold text-emerald-400">Legero Group</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Tablet Nav Links (condensed) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            <NavLink to="/about" className="px-2 py-1 text-xs text-slate-300 hover:text-white">About</NavLink>
            <NavLink to="/products" className="px-2 py-1 text-xs text-slate-300 hover:text-white">Products</NavLink>
            <NavLink to="/network" className="px-2 py-1 text-xs text-slate-300 hover:text-white">Network</NavLink>
            <NavLink to="/journey" className="px-2 py-1 text-xs text-slate-300 hover:text-white">Journey</NavLink>
            <NavLink to="/leadership" className="px-2 py-1 text-xs text-slate-300 hover:text-white">Leadership</NavLink>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>REQUEST PORT RFQ</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 rounded-md sm:hidden"
            >
              RFQ
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#091b24]/95 rounded-xl px-4 shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-emerald-950/40 rounded-lg flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </NavLink>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-emerald-950/40 rounded-lg flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </NavLink>
              ))}
              <div className="pt-2 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>24/7 Bunkering Inquiry</span>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
