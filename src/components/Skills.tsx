import React, { useState } from 'react';
import { 
  Terminal,
  Cpu, 
  Users, 
  Sparkles, 
  Check, 
  Shield 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { skills, ui } = data;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: ui.skills.allFilter },
    ...skills.map(s => ({ id: s.category, label: s.category }))
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Reconnaissance') || category.includes('استطلاع') || category.includes('Scanning') || category.includes('فحص')) {
      return <Terminal className="w-5 h-5 text-red-500" />;
    }
    if (category.includes('Security') || category.includes('Vulnerability') || category.includes('Penetration') || category.includes('أمن') || category.includes('اختراق') || category.includes('ثغرات')) {
      return <Shield className="w-5 h-5 text-red-500" />;
    }
    if (category.includes('Engineering') || category.includes('Systems') || category.includes('الهندسة') || category.includes('الأنظمة')) {
      return <Cpu className="w-5 h-5 text-purple-500" />;
    }
    return <Users className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ui.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {ui.skills.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {ui.skills.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-500/20 scale-105'
                  : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-red-500/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between text-start"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {categoryGroup.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Skill Badges */}
                <div className="space-y-2.5">
                  {categoryGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between group hover:border-red-500/30 transition-colors gap-2"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span className="truncate">{skill.name}</span>
                        </div>
                        {skill.verifiedContext && (
                          <div className="text-[10px] text-slate-400 dark:text-slate-500 ps-5 truncate">
                            {skill.verifiedContext}
                          </div>
                        )}
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20 shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>{categoryGroup.skills.length} {ui.skills.coreCountSuffix}</span>
                <span className="text-red-500 font-mono">{ui.skills.verifiedText}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
