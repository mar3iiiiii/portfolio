import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  Star, 
  ExternalLink, 
  Eye, 
  X, 
  FileCheck, 
  ShieldCheck,
  Calendar,
  Hash,
  Shield,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 relative bg-slate-100/40 dark:bg-slate-950/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credentials & Documents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Authentic certificates verified from official industry leaders including Huawei ICT Academy, NTI, and ITIDA.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Certificate Thumbnail Preview if Available */}
                {cert.certificateImage && (
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 cursor-pointer group-hover:border-red-500/50 transition-colors"
                  >
                    <img 
                      src={cert.certificateImage} 
                      alt={cert.name}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-xs transition-opacity">
                      <Eye className="w-4 h-4" />
                      <span>View Official Document</span>
                    </div>
                  </div>
                )}

                {/* Score & Issuer Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-red-600 dark:text-red-400 font-semibold uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mt-0.5">
                      {cert.name}
                    </h3>
                    {cert.track && (
                      <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-700 dark:text-rose-300 font-mono text-xs font-semibold border border-rose-500/20">
                        <Shield className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>Track: {cert.track}</span>
                      </div>
                    )}
                  </div>

                  {cert.score && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/30 shrink-0">
                      <Star className="w-3 h-3 fill-current" />
                      {cert.score}
                    </span>
                  )}
                </div>

                {/* Verification Identifiers */}
                <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {cert.code && (
                    <div className="flex items-center gap-1.5">
                      <Hash className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.code}</span>
                    </div>
                  )}
                  {cert.issueDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>Issued: {cert.issueDate}</span>
                    </div>
                  )}
                  {cert.hours && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.hours}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.details}
                </p>

                {/* Core Capabilities */}
                {cert.capabilities && cert.capabilities.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold font-mono text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>Key Responsibilities & Competencies:</span>
                    </div>
                    <ul className="space-y-1">
                      {cert.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Courses & Modules Box */}
                {cert.courses && cert.courses.length > 0 && (
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 overflow-hidden mt-3">
                    <div className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                        Track Courses ({cert.courses.length} Modules)
                      </span>
                      <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                        Curriculum
                      </span>
                    </div>
                    <div className="p-2.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {cert.courses.map((course, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 px-2 py-1 rounded bg-white dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                          <span className="truncate">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {cert.certificateImage && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-red-500/20 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Inspect Certificate</span>
                  </button>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Resolution Certificate Modal */}
      {selectedCert && selectedCert.certificateImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{selectedCert.name}</h4>
                  <p className="text-xs text-slate-500">{selectedCert.issuer}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-[75vh] overflow-y-auto flex items-center justify-center bg-slate-900">
              <img 
                src={selectedCert.certificateImage} 
                alt={selectedCert.name}
                className="max-h-full max-w-full object-contain rounded-lg shadow-md" 
              />
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono">{selectedCert.code || selectedCert.score}</span>
              <a 
                href={selectedCert.certificateImage} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline font-medium"
              >
                <span>Open full image in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
