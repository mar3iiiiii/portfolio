import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b14] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-sm shrink-0">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {personal.name}
              </span>
              <p className="text-xs text-slate-500">
                Computer & Control Engineering • Class of 2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-emerald-500 transition-colors">Certifications</a>
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-emerald-500 transition-colors">
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Built strictly from verified LinkedIn records (Zero synthetic filler).</span>
          </div>

          <div>
            © {new Date().getFullYear()} Ahmed Marei. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
