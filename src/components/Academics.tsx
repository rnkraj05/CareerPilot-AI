import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, ChevronRight, Bookmark, Sparkles } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data';

export default function Academics() {
  return (
    <section id="academics" className="py-24 relative overflow-hidden bg-[#0a0c10]">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academics & Certifications
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            A comprehensive look at my formal computer science academic path and continuous professional training courses.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Column - Left (6 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 mb-2 px-1">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Formal Education
            </h3>

            {EDUCATION_DATA.map((ed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0f121d] border border-gray-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-display font-semibold text-white leading-snug">
                      {ed.degree}
                    </h4>
                    <p className="text-sm font-medium text-blue-400">
                      {ed.institution}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-gray-900 border border-gray-800 px-2.5 py-1 rounded shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5" />
                    {ed.period}
                  </span>
                </div>

                {ed.grade && (
                  <div className="inline-block text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    {ed.grade}
                  </div>
                )}

                {ed.highlights && (
                  <div className="space-y-2 pt-2 border-t border-gray-850">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block">
                      Key Highlights & Coursework
                    </span>
                    <ul className="space-y-2">
                      {ed.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-400 flex items-start gap-1.5 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Certifications Column - Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2 mb-2 px-1">
              <Award className="w-5 h-5 text-emerald-400" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-[#0f121d] border border-[#1f293d]/50 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  
                  <div className="space-y-1 min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-white leading-snug whitespace-normal" title={cert.name}>
                      {cert.name}
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                      <span className="font-semibold text-gray-300">{cert.issuer} • {cert.date}</span>
                    </div>

                    {cert.description && (
                      <p className="text-xs text-gray-400 pt-1.5 leading-relaxed font-normal">
                        {cert.description}
                      </p>
                    )}
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
