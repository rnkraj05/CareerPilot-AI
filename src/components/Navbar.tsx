import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/80 backdrop-blur-md border-b border-[#1f293d]/50 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group text-white font-display font-bold text-xl tracking-tight"
            id="nav-logo"
          >
            <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 group-hover:border-blue-500/50 group-hover:bg-blue-600/20 transition-all">
              <Code2 className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight">Raunak Raj</span>
              <span className="text-[10px] text-gray-400 font-mono font-normal tracking-wide">
                B.TECH CSE STUDENT
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 font-sans">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`desktop-nav-${item.name.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/5'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/20'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-blue-500/30 hover:border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
              id="cta-connect"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-850 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0c10] border-b border-[#1f293d]/50 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-3 pt-2 pb-6 space-y-1 sm:px-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    id={`mobile-nav-${item.name.toLowerCase()}`}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-500'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full block text-center py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-blue-500/20"
                >
                  Contact Raunak
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
