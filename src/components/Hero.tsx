import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Award, ArrowDown, Laptop, Download, Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import { HERO_DATA } from '../data';

export default function Hero() {
  const profileImage = '/raunak.jpg';

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden grid-bg"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wide"
            >
              <GraduationCap className="w-4 h-4" />
              <span>CSE UNDERGRADUATE</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
              >
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">{HERO_DATA.name}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-gray-300"
              >
                {HERO_DATA.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed font-sans"
              >
                {HERO_DATA.bio}
              </motion.p>
            </div>

            {/* Quick Credentials Badge Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
            >
              <div className="p-4 rounded-xl bg-[#0f121d] border border-[#1f293d]/50 flex items-start gap-3">
                <Laptop className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5 flex-1 min-w-0 select-none">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono block text-left">Focus</span>
                  <div className="space-y-1.5 text-xs font-semibold text-gray-200 font-sans">
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 shrink-0 select-none">•</span>
                      <span className="leading-tight text-left">Java Development</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 shrink-0 select-none">•</span>
                      <span className="leading-tight text-left">Database Systems</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-blue-400 shrink-0 select-none">•</span>
                      <span className="leading-tight text-left">Cloud Fundamentals</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0f121d] border border-[#1f293d]/50 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1.5 flex-1 min-w-0 select-none">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono block">Intern Experience</span>
                  <div className="space-y-1.5 text-xs font-semibold text-gray-200 font-sans">
                    <div className="flex items-start gap-1.5">
                      <span className="text-emerald-400 shrink-0 select-none">•</span>
                      <span className="leading-tight">IBM PBEL Virtual Internship</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-emerald-400 shrink-0 select-none">•</span>
                      <span className="leading-tight">AWS Media & Entertainment Cloud Engineering Virtual Internship</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={(e) => handleCtaClick(e, '#projects')}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.30)] transition-all flex items-center gap-2 cursor-pointer"
                id="hero-view-projects"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/resume.pdf"
                download="Raunak_Raj_Resume.pdf"
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 hover:border-emerald-500/35 transition flex items-center gap-2 cursor-pointer"
                id="hero-download-resume"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <button
                onClick={(e) => handleCtaClick(e, '#contact')}
                className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-gray-300 hover:text-white bg-[#0f121d] hover:bg-[#1a1f33] border border-[#1f293d] hover:border-gray-700 transition cursor-pointer"
                id="hero-contact-button"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Hero Right Visual: Professional Profile Photo Card with Visible Social Links */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative py-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-sm sm:max-w-[490px] bg-[#0f121d]/90 rounded-2xl border border-gray-800 p-6 shadow-2xl backdrop-blur-sm overflow-hidden text-center flex flex-col items-center gap-6 group"
              id="hero-profile-card"
            >
              {/* Card Title Header */}
              <div className="w-full flex justify-between items-center pb-3 border-b border-gray-800 text-left">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase font-semibold">
                  Personal Profile
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available For Inquiries
                </span>
              </div>

              {/* Photo Frame Container */}
              <div className="relative w-[345px] h-[432px] sm:w-[432px] sm:h-[540px] rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500/45 via-indigo-500/45 to-purple-500/45 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden select-none">
                <div className="w-full h-full rounded-2xl bg-[#0d0f14] p-1 overflow-hidden flex items-center justify-center relative group/photo">
                  <img
                    src={profileImage}
                    alt="Raunak Raj"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-2xl filter brightness-[1.04] contrast-[1.04] saturate-[1.02] duration-300 group-hover/photo:scale-102"
                    style={{ imageRendering: 'high-quality' }}
                    id="profile-hero-image"
                  />
                </div>
              </div>

              {/* Identity Footer */}
              <div className="space-y-1">
                <h3 className="text-xl font-display font-extrabold text-white">
                  Raunak Raj
                </h3>
                <p className="text-xs font-mono text-blue-400 font-medium tracking-wide">
                  rnkraj05@gmail.com
                </p>
              </div>

              {/* Visible Social Connections Grid */}
              <div className="w-full grid grid-cols-3 gap-2.5 pt-4 border-t border-gray-800">
                <a
                  href="https://github.com/rnkraj05"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-blue-500/30 hover:bg-[#121625] transition"
                  title="Raunak's GitHub Profile"
                >
                  <Github className="w-4.5 h-4.5 text-blue-400" />
                  <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/raunak-raj-451062352/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-blue-500/30 hover:bg-[#121625] transition"
                  title="Raunak's LinkedIn Profile"
                >
                  <Linkedin className="w-4.5 h-4.5 text-blue-400" />
                  <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">LinkedIn</span>
                </a>

                <a
                  href="mailto:rnkraj05@gmail.com"
                  className="flex flex-col items-center gap-1.5 p-2 rounded-xl bg-gray-900/60 border border-gray-800/80 hover:border-blue-500/30 hover:bg-[#121625] transition"
                  title="Direct Email Raunak"
                >
                  <Mail className="w-4.5 h-4.5 text-blue-400" />
                  <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">Email</span>
                </a>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex flex-col items-center gap-2 group text-gray-500 hover:text-gray-300 text-xs font-mono tracking-widest uppercase transition-colors"
            id="scroll-to-about"
          >
            Scroll Down
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-gray-400 group-hover:scale-110 transition-transform" />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
}
