import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  ExternalLink,
  Github 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-25 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-red-600/20 via-rose-500/15 to-transparent blur-[110px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>{personal.statusBadge}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-500">{personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {personal.title}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{personal.location}</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span className="text-red-600 dark:text-red-400 font-mono text-xs">El Shorouk Academy (Class of '27)</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Computer and Control Engineer specializing in full-stack web development with PHP & MySQL, enterprise cloud infrastructure certified by Huawei ICT Academy, and cybersecurity vulnerability assessment.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#certifications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-lg shadow-red-500/25 transition-all transform hover:-translate-y-0.5"
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
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Elegant ambient glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-700"></div>

              {/* Clean, large portrait photo without border card */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
