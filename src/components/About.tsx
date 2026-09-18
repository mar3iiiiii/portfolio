import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  ShieldCheck, 
  CheckCircle, 
  Compass 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-red-500" />
                <span>Professional Summary</span>
              </h3>
              
              <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-base">
                <p>
                  I am a Computer and Control Engineering student at <strong className="text-slate-900 dark:text-white">El Shorouk Academy</strong> (Class of 2027) with an active focus on backend web architecture, relational databases, and enterprise cloud systems.
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

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Full Stack PHP & MySQL</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">95% score in 120-hr NTI & ITIDA Summer Training.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Huawei HCIA Cloud</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Certified in virtualization, storage, and cloud systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">DEPI Penetration Testing</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Vulnerability analyst & penetration testing track.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Control & Systems</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Engineering logic, hardware interfacing, and networking.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-600 dark:text-red-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {education[0].institution}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {education[0].faculty}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl space-y-2 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Major</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">{education[0].major}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Timeline</span>
                  <span className="font-mono text-red-600 dark:text-red-400">{education[0].period}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Graduation</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{education[0].status}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Campus Location</span>
                  <span className="text-slate-700 dark:text-slate-300">{education[0].location}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 via-rose-500/5 to-transparent border border-red-500/20 space-y-3">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Fact Integrity Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                All records and credentials displayed are 100% verified against official certificates issued by Huawei ICT Academy and the National Telecommunication Institute (NTI) & ITIDA.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
