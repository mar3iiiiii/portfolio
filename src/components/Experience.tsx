import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  UserCheck, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative bg-slate-100/40 dark:bg-slate-950/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Traineeships
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Hands-on professional training programs with national telecommunication institutes and technology initiatives.
          </p>
        </div>

        <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-32 space-y-12">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-6 md:pl-10 group">
              
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow group-hover:scale-110 transition-transform">
                <span className="font-mono text-xs font-bold">{index + 1}</span>
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all space-y-4">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <div className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {item.score && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30 self-start sm:self-auto">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.score}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                  {item.hours && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.hours}</span>
                    </div>
                  )}
                  {item.instructor && (
                    <div className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Instructor(s): {item.instructor}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                    Key Highlights & Outcomes:
                  </h4>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
