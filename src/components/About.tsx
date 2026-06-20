import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Briefcase, Calendar, ChevronRight, Laptop, Award } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data';

export default function About() {
  const profileImage = '/raunak.jpg';
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0d0f14]">
      {/* Visual background gradient */}
      <div className="absolute top-[40%] right-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[25rem] h-[25rem] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Me & Experience
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Focused on writing clean code, designing functional databases, and studying system engineering workflows.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative - Left */}
          <div className="lg:col-span-5 space-y-6">
            {/* About Profile Photo Card */}
            <div className="p-6 rounded-2xl bg-[#0f121d]/95 border border-gray-800/80 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#1f293d] hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300">
              <div className="relative w-44 h-56 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500/40 via-indigo-500/40 to-purple-500/40 shrink-0 shadow-lg group-hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden select-none">
                <div className="w-full h-full rounded-2xl bg-[#0d0f14] p-1 overflow-hidden flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Raunak Raj"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-2xl filter brightness-[1.04] contrast-[1.04] saturate-[1.02] duration-300 group-hover:scale-102"
                    style={{ imageRendering: 'high-quality' }}
                  />
                </div>
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="text-base font-display font-extrabold text-white">Raunak Raj</h4>
                <p className="text-xs font-mono text-blue-400 font-semibold tracking-wide">Computer Science Engineering Undergraduate</p>
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-normal">
                  Fusing core Java, SQL tables, and AWS basics to build robust desktop and web systems.
                </p>
              </div>
            </div>

            <div className="bg-[#0f121d]/90 rounded-2xl border border-gray-800 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-display font-semibold text-gray-100 flex items-center gap-2">
                <Laptop className="w-5 h-5 text-blue-400" />
                About Me
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                As a Computer Science and Engineering student, I believe that building reliable software stems from understanding fundamental computer science principles. I dedicate my studies to strengthening my understanding of Object-Oriented Programming (OOP), Java, MySQL, and cloud fundamentals.
              </p>

              <blockquote className="border-l-2 border-blue-500 pl-4 py-1 italic text-xs sm:text-sm text-gray-300 bg-blue-500/5 rounded-r">
                "Code readability and clear logical structures are critical. Well-designed student projects help us learn sustainable software experiences."
              </blockquote>

              <p className="text-gray-400 text-sm leading-relaxed">
                From maintaining clean source branches in <strong className="text-gray-200">Git and GitHub</strong> to designing responsive HTML pages with CSS, I enjoy connecting all steps of the coding workflow.
              </p>
            </div>
          </div>

          {/* Experience Timeline - Right */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-display font-semibold text-gray-100 flex items-center gap-2 px-1 mb-2">
              <Briefcase className="w-5 h-5 text-blue-400" />
              Practical Internships
            </h3>

            {/* Vertical timeline line */}
            <div className="relative border-l-2 border-[#1f293d]/60 ml-4 space-y-8 py-2">
              {WORK_EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Bullet */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0d0f14] group-hover:bg-blue-400 transition-colors" />

                  <div className="bg-[#0f121d]/80 rounded-xl border border-[#1f293d]/50 p-6 transition-all duration-300 hover:border-blue-500/30 shadow-md text-left">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-xs text-gray-400 font-mono font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono bg-[#0d0f14] border border-gray-800 px-2.5 py-1 rounded">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description bullet list */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech chips used */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono font-medium text-gray-400 px-2 py-0.5 rounded bg-[#0d0f14] border border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
