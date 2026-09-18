import React from 'react';
import { 
  Terminal, 
  Compass 
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A solid foundation in Computer & Control Engineering, reinforced with verified credentials from NTI, ITIDA, and Huawei ICT Academy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Terminal className="w-6 h-6 text-red-500" />
              <span>Professional Summary</span>
            </h3>
            
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                I am a Computer and Control Engineer at <strong className="text-slate-900 dark:text-white">El Shorouk Academy</strong> (Class of 2027) with an active focus on backend web architecture, relational databases, enterprise cloud systems, and infrastructure security assessment.
              </p>
              <p>
                I completed a 120-hour intensive summer training program jointly certified by the <strong className="text-slate-900 dark:text-white">National Telecommunication Institute (NTI)</strong> and <strong className="text-slate-900 dark:text-white">ITIDA</strong> in <strong className="text-red-600 dark:text-red-400">Full Stack Web Development using PHP</strong>, graduating with a high distinction score of <strong className="text-red-600 dark:text-red-400">95%</strong> (comprising 90 technical hours and 30 freelancing practice hours).
              </p>
              <p>
                In parallel, I successfully passed the study and examination for the <strong className="text-slate-900 dark:text-white">HCIA-Cloud Computing V5.5 Course</strong> from <strong className="text-red-600 dark:text-red-400">Huawei ICT Academy</strong> (Certificate Code: 20260917000498), developing hands-on mastery over computing virtualization, virtual storage pools, and network isolation.
              </p>
              <p>
                I also graduated from Round 5 of the <strong className="text-slate-900 dark:text-white">Digital Egypt Pioneers Initiative (DEPI)</strong> under the Ministry of Communications and Information Technology (MCIT), specializing in the Infrastructure & Security track as a Vulnerability Analyst and Penetration Tester.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
