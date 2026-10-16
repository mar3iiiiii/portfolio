import React from 'react';
import { 
  Terminal, 
  Compass 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { ui, personal } = data;

  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>{ui.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {ui.about.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {ui.about.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Terminal className="w-6 h-6 text-red-500 shrink-0" />
              <span>{ui.about.cardTitle}</span>
            </h3>
            
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base sm:text-lg text-start whitespace-pre-line">
              {personal.aboutSummary}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
