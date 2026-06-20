import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Folder, ChevronRight, Code2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Backend', 'Database', 'Frontend'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(proj => proj.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0d0f14]">
      {/* Decorative gradients */}
      <div className="absolute top-[10%] left-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Folder className="w-3.5 h-3.5" />
            <span>STUDENT WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic & Coding Projects
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Practical computer science, database, and web development projects built to learn software programming languages and solve real troubles.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 pb-2 border-b border-[#1f293d]/50">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-t-lg text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'text-blue-400 border-b-2 border-blue-500 bg-blue-500/5 font-semibold'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/10'
              }`}
              id={`project-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0f121d]/90 rounded-2xl border border-[#1f293d]/50 overflow-hidden flex flex-col justify-between group hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                id={`project-card-${project.id}`}
              >
                
                {/* Upper body */}
                <div className="p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-blue-400 bg-blue-500/15 border border-blue-500/20 px-2.5 py-1 rounded-full uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Bullet-points */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights?.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-gray-400 flex items-start gap-1.5 leading-relaxed font-sans">
                        <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Tech Tags & Code Node Link */}
                <div className="px-6 pb-6 pt-4 border-t border-[#1f293d]/50 bg-[#0d0f14]/50 flex flex-wrap items-center justify-between gap-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-gray-400 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gray-900 hover:bg-gray-805 border border-gray-800 hover:border-blue-500/30 flex items-center gap-2 transition cursor-pointer"
                        title="View Github Codebase"
                      >
                        <Github className="w-4 h-4 text-blue-400" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
