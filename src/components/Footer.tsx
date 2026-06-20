import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#07090d] border-t border-[#1f293d]/50 py-12 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800/60 text-left">
          
          {/* Logo element */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-blue-600/10 border border-blue-500/20 text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-display font-medium text-white leading-tight">Raunak Raj</span>
              <span className="text-[9px] text-gray-500 font-mono tracking-wider uppercase">B.Tech CSE Student</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-400 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-gray-900 hover:bg-gray-850 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white transition cursor-pointer"
            title="Scroll back to top"
            id="footer-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Lower row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Raunak Raj. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5 selection:bg-transparent">
            Crafted with
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            using React, Tailwind CSS & Motion.
          </p>
        </div>

      </div>
    </footer>
  );
}
