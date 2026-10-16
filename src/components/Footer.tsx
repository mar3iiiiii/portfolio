import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { personal, ui } = data;

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b14] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-red-500/40 shadow-sm shrink-0">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-start">
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {personal.name}
              </span>
              <p className="text-xs text-slate-500">
                {ui.footer.roleSub}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-red-500 transition-colors">{ui.nav.about}</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">{ui.nav.skills}</a>
            <a href="#projects" className="hover:text-red-500 transition-colors">{ui.nav.projects}</a>
            <a href="#certifications" className="hover:text-red-500 transition-colors">{ui.nav.certifications}</a>
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-500 transition-colors">
              <span>{ui.hero.githubBtn}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-red-500 transition-colors">
              <span>{ui.hero.linkedinBtn}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-1.5 text-center sm:text-start">
            <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
            <span>{ui.footer.privacyNotice}</span>
          </div>

          <div className="text-center sm:text-end">
            © {new Date().getFullYear()} {personal.name}. {ui.footer.rightsReserved}
          </div>
        </div>

      </div>
    </footer>
  );
};
