/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'academics', 'achievements', 'skills', 'projects', 'contact'];
    
    // Intersection observer config to detect active visible section
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // triggers when section occupies central screen area
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((secId) => {
        const el = document.getElementById(secId);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d0f14] text-gray-200 selection:bg-blue-500/30 selection:text-white" id="root-container">
      {/* Dynamic Cursor Gradient Tracker decoration (desktop-only hover glow) */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-30" id="ambient-tracker" />

      {/* Structured Components */}
      <Navbar activeSection={activeSection} />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Academics />
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
