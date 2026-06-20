import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, Database, Cloud, CheckCircle2 } from 'lucide-react';

interface SkillItem {
  name: string;
  desc: string;
}

interface SkillSection {
  category: string;
  description: string;
  badgeColor: string;
  skills: SkillItem[];
}

const SKILL_SECTIONS: SkillSection[] = [
  {
    category: "ADVANCED",
    description: "Core technologies where I have deep foundational understanding and project implementation experience.",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "Java", desc: "Core Java, OOP principles, collections, and exception handling." },
      { name: "Object-Oriented Programming (OOP)", desc: "Inheritance, encapsulation, polymorphism, and modular class design principles." },
      { name: "Collections Framework", desc: "Standard storage mappings, list manipulations, and dynamic collections." },
      { name: "Exception Handling", desc: "Crash prevention, try-catch blocks, and resource-safe execution." },
      { name: "JDBC", desc: "Database connections, result set processing, and query execution." }
    ]
  },
  {
    category: "INTERMEDIATE",
    description: "Web development languages, relational database query models, and team-based version control frameworks.",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    skills: [
      { name: "MySQL", desc: "Database design, queries, joins, and normalization." },
      { name: "Git & GitHub", desc: "Version control, branching, merging, and collaboration." },
      { name: "HTML5", desc: "Semantic structures, clean interfaces, and standards-compliant elements." },
      { name: "CSS3", desc: "Responsive layouts, styling, transitions, and modern Flexbox/Grid implementations." },
      { name: "JavaScript", desc: "Interactive scripts, state management, and web API integration." }
    ]
  },
  {
    category: "WORKING KNOWLEDGE",
    description: "Cloud computing basics, elastic object storage, and caching/content delivery setups.",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    skills: [
      { name: "AWS Cloud Fundamentals", desc: "Basic cloud services, storage, and content delivery concepts." },
      { name: "Amazon S3", desc: "Simple object storage, access buckets, and folder partitioning." },
      { name: "CloudFront", desc: "Content delivery networks, caching policies, and latency optimization." },
      { name: "Responsive Web Design", desc: "Desktop-first and mobile responsive layouts for various viewports." }
    ]
  }
];

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ADVANCED':
        return Code2;
      case 'INTERMEDIATE':
        return Database;
      default:
        return Cloud;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0c10] border-t border-[#1f293d]/30">
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[5%] w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my programming languages, databases, web technologies, and cloud platform tools.
          </p>
        </div>

        {/* Content Layout - Clean stacked categories */}
        <div className="space-y-16">
          {SKILL_SECTIONS.map((section, sIdx) => {
            const CategoryIcon = getCategoryIcon(section.category);
            return (
              <div key={section.category} className="space-y-6">
                <div className="flex items-center gap-2.5 pb-2 border-b border-gray-800/60 max-w-xs">
                  <div className="p-1.5 rounded-lg bg-gray-900 border border-gray-850 text-gray-450 shrink-0">
                    <CategoryIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mt-0.5">
                    {section.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.skills.map((skill, skIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skIdx * 0.05 + sIdx * 0.1 }}
                      className="p-5 rounded-xl border bg-[#0f121d] border-[#1f293d]/50 hover:border-blue-500/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.03)] text-left flex gap-4"
                    >
                      <div className="p-1.5 rounded-lg bg-gray-905 border border-gray-800/80 text-blue-500 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold font-display text-gray-100">{skill.name}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans">
                          {skill.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
