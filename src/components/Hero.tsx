import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Database, 
  Cloud, 
  ExternalLink,
  Github 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-transparent blur-[110px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{personal.statusBadge}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {personal.title}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{personal.location}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">El Shorouk Academy (Class of '27)</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer and Control Engineering student specializing in full-stack web development with PHP & MySQL and enterprise cloud infrastructure certified by Huawei ICT Academy.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Database className="w-3.5 h-3.5 text-emerald-500" />
                Full Stack PHP (NTI/ITIDA 95%)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Cloud className="w-3.5 h-3.5 text-cyan-500" />
                Huawei HCIA-Cloud Computing V5.5
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <Layers className="w-3.5 h-3.5 text-purple-500" />
                Control & Computing Systems
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Official Certificates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium text-sm transition-all"
              >
                <span>Projects</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-brand-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>

              <div className="relative bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
                <div className="relative flex flex-col items-center">
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-emerald-500/30 p-1 bg-gradient-to-b from-emerald-500/20 to-transparent">
                    <img
                      src={personal.profileImage}
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0c1222] shadow"></div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                    Class of 2027 • El Shorouk Academy
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {personal.keyHighlights.slice(0, 4).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-3 text-center"
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                        {highlight.value}
                      </div>
                      <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {highlight.label}
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                        {highlight.subtext}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Official Credentials
                  </span>
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-white underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
