import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Briefcase, Award, Sparkles, Code, Globe, HelpCircle } from 'lucide-react';

interface InternshipProps {
  title: string;
  org: string;
  desc: string;
}

// Simple Achievement Card with absolutely no artificial status labels or tags
function VerifiableAchievementCard({ title, org, desc, icon }: { key?: string; title: string; org: string; desc: string; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="p-5 sm:p-6 rounded-xl bg-[#0f121d] border border-gray-800/80 hover:border-blue-500/30 transition-all duration-300 flex gap-5 items-start text-left relative overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.04)]"
    >
      <div className="absolute top-0 left-0 w-[3px] h-full bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

      <div className="w-12 h-12 rounded-xl shrink-0 bg-blue-500/5 border border-gray-800/60 flex items-center justify-center relative select-none">
        {icon}
      </div>

      <div className="space-y-1 min-w-0 flex-1">
        <h4 className="text-base font-display font-extrabold text-white group-hover:text-blue-400 transition-colors leading-snug">
          {title}
        </h4>
        <p className="text-xs font-mono text-gray-300 font-medium tracking-wide">
          {org}
        </p>
        <p className="text-xs text-gray-400 leading-relaxed font-sans font-normal pt-1.5">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

// Custom Vector SVG Badges to represent authentic badge credentials
function GoogleCourseraBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4285F4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4285F4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#gc-glow)" />
      <circle cx="50" cy="50" r="38" fill="#131622" stroke="#1f293d" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="32" stroke="#4285F4" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M50 24 A26 26 0 0 1 76 50" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" />
      <path d="M76 50 A26 26 0 0 1 50 76" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 76 A26 26 0 0 1 24 50" stroke="#34A853" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 50 A26 26 0 0 1 50 24" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="50" r="14" fill="#0056D2" />
      <path d="M47 45.5 C49 43.5 52 43.5 54 45.5 C55 47 55 50 53 52 C51 54 48 53 47 50" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function GoogleCloudBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gcp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0F9D58" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0F9D58" stopOpacity="0" />
        </radialGradient>
      </defs>
      <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="url(#gcp-glow)" />
      <polygon points="50,11 84,31 84,69 50,89 16,69 16,31" fill="#131622" stroke="#1f293d" strokeWidth="2" />
      <polygon points="50,16 80,33 80,67 50,84 20,67 20,33" stroke="#4285F4" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M50 30 L70 42 L70 58 L50 70 L30 58 L30 42 Z" stroke="#34A853" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M38 52 C38 46 43 42 49 42 C54 42 58 45 60 49 C63 49 65 52 65 55 C65 59 61 62 57 62 L41 62 C38 62 38 58 38 52 Z" fill="#4285F4" />
    </svg>
  );
}

function AWSBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="aws-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9900" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="8" y="8" width="84" height="84" rx="20" fill="url(#aws-glow)" />
      <rect x="14" y="14" width="72" height="72" rx="16" fill="#131622" stroke="#1f293d" strokeWidth="2" />
      <rect x="20" y="20" width="60" height="60" rx="12" stroke="#FF9900" strokeWidth="1" strokeDasharray="3 3" />
      <text x="50" y="50" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">AWS</text>
      <path d="M35 58 C40 63 50 64 65 58" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M62 55 L65 59 L61 61" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function GoogleDevBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gdev-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34A853" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#34A853" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#gdev-glow)" />
      <circle cx="50" cy="50" r="38" fill="#131622" stroke="#1f293d" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="32" stroke="#1a73e8" strokeWidth="2.5" />
      <path d="M42 42 L34 50 L42 58" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M58 42 L66 50 L58 58" stroke="#FBBC05" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M46 62 L54 38" stroke="#34A853" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function GoogleDevPremiumBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gdevp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBBC05" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FBBC05" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#FBBC05" />
          <stop offset="100%" stopColor="#F57C00" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#gdevp-glow)" />
      <circle cx="50" cy="50" r="38" fill="#131622" stroke="#1f293d" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="32" stroke="url(#gold-grad)" strokeWidth="3" />
      <path d="M42 43 L35 50 L42 57" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M58 43 L65 50 L58 57" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M47 61 L53 39" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
      <polygon points="50,18 52,22 56,22 53,25 54,29 50,27 46,29 47,25 44,22 48,22" fill="url(#gold-grad)" />
    </svg>
  );
}

function IBMBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ibm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0062FF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0062FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#ibm-glow)" />
      <path d="M50 16 L80 26 L80 56 C80 72 50 86 50 86 C50 86 20 72 20 56 L20 26 Z" fill="#131622" stroke="#1f293d" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M50 21 L74 29 L74 54 C74 67 50 78 50 78 C50 78 26 67 26 54 L26 29 Z" stroke="#0062FF" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="2 2" />
      <rect x="36" y="38" width="28" height="3" fill="#0062FF" />
      <rect x="36" y="44" width="28" height="3" fill="#0062FF" />
      <rect x="36" y="50" width="28" height="3" fill="#0062FF" />
      <rect x="36" y="56" width="28" height="3" fill="#0062FF" />
      <path d="M50 33 L52 37 L57 37 L53 39 L55 43 L50 41 L45 43 L47 39 L43 37 L48 37 Z" fill="#ffffff" />
    </svg>
  );
}

function MicrosoftBadge() {
  return (
    <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ms-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00A4EF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#00A4EF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#ms-glow)" />
      <circle cx="50" cy="50" r="38" fill="#131622" stroke="#1f293d" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="32" stroke="#00A4EF" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Microsoft 4-color grid logo centered perfectly */}
      <g transform="translate(37, 37)">
        {/* Red/Orange top-left */}
        <rect x="0" y="0" width="11" height="11" fill="#F25022" rx="1.5" />
        {/* Green top-right */}
        <rect x="14" y="0" width="11" height="11" fill="#7FBA00" rx="1.5" />
        {/* Blue bottom-left */}
        <rect x="0" y="14" width="11" height="11" fill="#00A4EF" rx="1.5" />
        {/* Yellow bottom-right */}
        <rect x="14" y="14" width="11" height="11" fill="#FFB900" rx="1.5" />
      </g>
    </svg>
  );
}

function OfficialBadgeCard({ title, org, type, category, desc }: { key?: string; title: string; org: string; type: string; category?: string; desc?: string }) {
  const renderBadgeImage = () => {
    switch (type) {
      case 'google-coursera':
        return <GoogleCourseraBadge />;
      case 'google-cloud':
        return <GoogleCloudBadge />;
      case 'aws':
        return <AWSBadge />;
      case 'google-dev':
        return <GoogleDevBadge />;
      case 'google-dev-premium':
        return <GoogleDevPremiumBadge />;
      case 'microsoft':
        return <MicrosoftBadge />;
      default:
        return <IBMBadge />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="p-5 h-full rounded-2xl bg-[#0f121d] border border-gray-800/80 hover:border-blue-500/20 text-center flex flex-col items-center gap-4 group hover:shadow-[0_0_20px_rgba(59,130,246,0.03)] selection:bg-transparent"
    >
      <div className="transform group-hover:scale-105 duration-300">
        {renderBadgeImage()}
      </div>
      <div className="space-y-1 w-full flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-display leading-tight min-h-[40px] flex items-center justify-center">
            {title}
          </h4>
          <p className="text-xs font-mono text-gray-500 font-medium">
            {org}
          </p>
          {category && (
            <p className="text-[10px] uppercase tracking-wider font-semibold text-[#00A4EF] font-mono mt-1">
              {category}
            </p>
          )}
        </div>
        
        {desc && (
          <p className="text-xs text-gray-400 leading-relaxed font-sans mt-3 text-center px-1">
            {desc}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  const internships = [
    {
      title: "IBM PBEL (Project-Based Experiential Learning) Virtual Internship",
      org: "IBM SkillsBuild",
      desc: "Immersive virtual learning course validating software development fundamentals, core Java exceptions, SQL integration structures, and structured collaboration principles.",
      icon: <Briefcase className="w-5 h-5 text-blue-400" />
    },
    {
      title: "AWS Media & Entertainment Cloud Engineering Virtual Internship",
      org: "AWS Skill Builder | EduSkills",
      desc: "Hands-on virtual engineering experience centered on highly scalable cloud storage deployments, CloudFront caching networks, and streaming formats.",
      icon: <Globe className="w-5 h-5 text-indigo-400" />
    }
  ];

  const googleBadges = [
    {
      title: "Joined Google Developer Program",
      org: "Google Developers",
      desc: "Joined the Google Developer Program to access developer resources, technical learning content, community events, and professional development opportunities.",
      icon: <Code className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Google Developer Program Premium Tier",
      org: "Google Developers",
      desc: "Earned Premium Tier status in the Google Developer Program through active participation and learning activities.",
      icon: <Trophy className="w-5 h-5 text-yellow-500" />
    },
    {
      title: "5-Day AI Agents: Intensive Vibe Coding Course With Google",
      org: "Google Developer Program",
      desc: "Successfully completed Google's 5-Day AI Agents Intensive program focused on AI Agents, Agent Development Kit (ADK), Agent Skills, MCP integrations, Human-in-the-Loop workflows, AI security, evaluation, and production-grade agent development.",
      icon: <Code className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Google Skills Badge",
      org: "Google Skills",
      desc: "Earned the Google Skills badge by beginning the learning journey on Google Skills and engaging with Google's developer learning ecosystem.",
      icon: <Trophy className="w-5 h-5 text-yellow-500" />
    }
  ];

  const officialBadges: { title: string; org: string; type: string; category?: string; desc?: string }[] = [
    {
      title: "Google AI Essentials",
      org: "Google / Coursera",
      type: "google-coursera"
    },
    {
      title: "Google Prompting Essentials",
      org: "Google / Coursera",
      type: "google-coursera"
    },
    {
      title: "Introduction to Generative AI",
      org: "Google Cloud",
      type: "google-cloud"
    },
    {
      title: "Gen AI: Transform Your Work",
      org: "Google Cloud",
      type: "google-cloud"
    },
    {
      title: "AWS Content Production Foundations",
      org: "AWS Skill Builder",
      type: "aws"
    },
    {
      title: "AWS D2C & Broadcast Foundations",
      org: "AWS Skill Builder",
      type: "aws"
    },
    {
      title: "Google Developer Program Badge",
      org: "Google Developers",
      type: "google-dev"
    },
    {
      title: "Google Developer Program Premium Tier Badge",
      org: "Google Developers",
      type: "google-dev-premium"
    },
    {
      title: "IBM SkillsBuild Learning Badge",
      org: "IBM SkillsBuild",
      type: "ibm"
    },
    {
      title: "Microsoft AI Skills Fest 2026 Badge",
      org: "Microsoft Learn",
      type: "microsoft",
      category: "AI Certification Badge"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0d0f14] border-t border-[#1f293d]/30">
      {/* Background Radial Rings decor */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Verified virtual internships, developer programs, and cloud-engineering certifications from leading global technology providers.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          
          {/* Sub-section: Internships */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-gray-800/60 max-w-xs">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                <Briefcase className="w-4 h-4" />
              </span>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                Virtual Internships
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {internships.map((item) => (
                <VerifiableAchievementCard
                  key={item.title}
                  title={item.title}
                  org={item.org}
                  desc={item.desc}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* Sub-section: Google Developer Program */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-gray-800/60 max-w-xs">
              <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <Trophy className="w-4 h-4" />
              </span>
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                Google Developer Program
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {googleBadges.map((item) => (
                <VerifiableAchievementCard
                  key={item.title}
                  title={item.title}
                  org={item.org}
                  desc={item.desc}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* Sub-section: Official Certifications & Badges */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-gray-800/60 max-w-xs font-mono">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Award className="w-4 h-4" />
              </span>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Official Badges & Credentials
              </h3>
            </div>
            {/* Using modern responsive grid, with col-span adjustments if necessary for large items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {officialBadges.map((item) => (
                <OfficialBadgeCard
                  key={item.title}
                  title={item.title}
                  org={item.org}
                  type={item.type}
                  category={item.category}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
