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
        ? 'bg-[#04121a]/95 backdrop-blur-md border-b border-emerald-900/40 shadow-xl shadow-black/40 py-2.5' 
        : 'bg-[#051118]/90 backdrop-blur-sm py-3.5 border-b border-slate-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Strategic Partners */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Athen Marine Logo */}
            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img 
                src="/assets/logo-athen-dark-theme.png" 
                alt="Athen Marine" 
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Strategic Partners Divider & Badges */}
            <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-700/60">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">In Strategic Partnership:</span>
              
              <div className="flex items-center gap-3">
                {/* Legero */}
                <div className="flex items-center gap-1.5" title="Legero International Group B.V.">
                  <img 
                    src="/assets/logo-legero.png" 
                    alt="Legero International Group" 
                    className="h-6 w-auto object-contain filter brightness-110" 
                  />
                  <span className="text-[11px] font-semibold text-slate-300 hidden lg:inline">Legero Group</span>
                </div>

                <span className="text-slate-600">•</span>

                {/* Eleven Energy */}
                <div className="flex items-center gap-1.5" title="Eleven Energy">
                  <img 
                    src="/assets/logo-eleven-dark-theme.png" 
                    alt="Eleven Energy" 
                    className="h-4 w-auto object-contain" 
                  />
                </div>
              </div>
            </div>

          </div>

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
          <div className="flex items-center gap-2 xl:hidden">
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
          <div className="xl:hidden mt-3 pt-3 pb-4 border-t border-slate-800 bg-[#091b24]/95 rounded-xl px-4 shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2">
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

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between px-2 text-xs text-slate-400">
                <span>Strategic Partners:</span>
                <span className="text-emerald-400 font-semibold">Legero • Eleven Energy</span>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>24/7 Port Bunkering RFQ</span>
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
