import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Play, 
  RotateCcw, 
  Server, 
  ExternalLink,
  Github,
  Radio,
  Lock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const data = getPortfolioData(language);
  const { projects, ui } = data;
  const project1 = projects[0];
  const project2 = projects[1];

  // Interactive Network Reconnaissance & Port Scanning Simulation Playground
  const [selectedScanProfile, setSelectedScanProfile] = useState<string>('-sS -sV -T4');
  const [selectedTargetHost, setSelectedTargetHost] = useState<string>('192.168.1.50');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanOutput, setScanOutput] = useState<{
    status: string;
    responseTime: string;
    command: string;
    openPortsCount: number;
    ports: { port: string; state: string; service: string; version: string; risk: 'low' | 'medium' | 'high' }[];
    jsonIntel: any;
  } | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const targetProfiles: Record<string, {
    ports: { port: string; state: string; service: string; version: string; risk: 'low' | 'medium' | 'high' }[];
    os: string;
    description: string;
  }> = {
    '192.168.1.50': {
      os: 'Linux 5.15 (Ubuntu 22.04 LTS)',
      description: 'Internal Enterprise App & Database Server',
      ports: [
        { port: '22/tcp', state: 'open', service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu', risk: 'low' },
        { port: '80/tcp', state: 'open', service: 'http', version: 'Apache httpd 2.4.52', risk: 'medium' },
        { port: '443/tcp', state: 'open', service: 'https', version: 'Apache (SSL/TLS 1.3)', risk: 'low' },
        { port: '3306/tcp', state: 'open', service: 'mysql', version: 'MySQL 8.0.32 (Local auth)', risk: 'medium' }
      ]
    },
    '10.0.4.22': {
      os: 'Debian 11 (Bullseye) / Hardened Gateway',
      description: 'DMZ Perimeter & Bastion Management Host',
      ports: [
        { port: '21/tcp', state: 'open', service: 'ftp', version: 'vsftpd 3.0.3 (Anon read detected)', risk: 'high' },
        { port: '22/tcp', state: 'open', service: 'ssh', version: 'OpenSSH 8.4p1 (PubKey only)', risk: 'low' },
        { port: '8080/tcp', state: 'open', service: 'http-proxy', version: 'Werkzeug/2.2.2 (Debug exposed)', risk: 'high' }
      ]
    },
    '172.16.10.5': {
      os: 'Alpine Linux v3.18 (Containerized Environment)',
      description: 'Isolated Staging Microservices Pod',
      ports: [
        { port: '80/tcp', state: 'open', service: 'http', version: 'nginx 1.24.0', risk: 'low' },
        { port: '6379/tcp', state: 'open', service: 'redis', version: 'Redis 7.0.12 (Protected mode)', risk: 'medium' }
      ]
    }
  };

  const runReconScan = () => {
    setIsScanning(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const targetData = targetProfiles[selectedTargetHost] || targetProfiles['192.168.1.50'];
      
      setScanOutput({
        status: 'Host is up',
        responseTime: '12ms',
        command: `nmap ${selectedScanProfile} ${selectedTargetHost}`,
        openPortsCount: targetData.ports.length,
        ports: targetData.ports,
        jsonIntel: {
          target: selectedTargetHost,
          hostStatus: 'UP',
          latency: '0.0012s',
          scanProfile: selectedScanProfile,
          osGuess: targetData.os,
          openPorts: targetData.ports,
          reconSummary: `${targetData.ports.length} open ports enumerated. ${targetData.ports.filter(p => p.risk === 'high').length} high-risk exposed endpoints flagged.`
        }
      });
      setIsScanning(false);
    }, 380);
  };

  const resetScanner = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelectedScanProfile('-sS -sV -T4');
    setSelectedTargetHost('192.168.1.50');
    setScanOutput(null);
    setIsScanning(false);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <Shield className="w-3.5 h-3.5" />
            <span>{ui.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {ui.projects.title}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            {ui.projects.subtitle}
          </p>
        </div>

        {/* Featured Project #1: DEPI Penetration Testing Assessment */}
        <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 mb-12 text-start">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30">
                  {project1.category}
                </span>
                <span>•</span>
                <span>{project1.context}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {project1.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Lock className="w-3.5 h-3.5 text-red-500" />
                {project1.status}
              </span>
              {project1.liveUrl && (
                <a
                  href={project1.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${ui.projects.viewProjectBtn} - ${project1.title}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold font-mono tracking-wide shadow-md shadow-red-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-[#0c1222]"
                >
                  <span>{ui.projects.viewProjectBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left/Start: Description & Technical Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project1.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {ui.projects.milestonesTitle}
                </h4>
                <div className="space-y-2.5">
                  {project1.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                      <div className="w-6 h-6 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Domains */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {ui.projects.techTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project1.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-red-500/5 text-red-700 dark:text-red-300 border border-red-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Project & GitHub */}
              {(project1.liveUrl || project1.githubUrl) && (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {project1.liveUrl && (
                    <a
                      href={project1.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ui.projects.viewProjectBtn} - ${project1.title}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs sm:text-sm font-bold shadow-lg shadow-red-500/25 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-[#0c1222]"
                    >
                      <span>{ui.projects.viewProjectBtn}</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  )}

                  {project1.githubUrl && (
                    <a
                      href={project1.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${ui.projects.githubBtn} - ${project1.title}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-mono font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
                    >
                      <Github className="w-4 h-4 shrink-0" />
                      <span>{ui.projects.githubBtn}</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right/End: Interactive Network Recon & Port Scanning Playground */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {ui.projects.simulatorTitle}
                  </h4>
                </div>
                <button
                  onClick={resetScanner}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                  title={ui.projects.resetBtn}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{ui.projects.resetBtn}</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {ui.projects.simulatorDesc}
              </p>

              {/* Scanner Profile & Flags Selection */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">{ui.projects.endpointLabel}</label>
                  <select 
                    value={selectedScanProfile} 
                    onChange={(e) => setSelectedScanProfile(e.target.value)}
                    dir="ltr"
                    className="w-full text-xs font-mono p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
                  >
                    <option value="-sS -sV -T4">-sS -sV -T4 (SYN Stealth & Service Detection)</option>
                    <option value="-sV -p 21,22,80,443,3306,8080">-sV -p 21,22,80,443,3306,8080 (Targeted Top Ports)</option>
                    <option value="-A -sC -Pn">-A -sC -Pn (Aggressive Recon & Scripts)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">{ui.projects.filterRoleLabel}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['192.168.1.50', '10.0.4.22', '172.16.10.5'].map((ip) => (
                      <button
                        key={ip}
                        onClick={() => setSelectedTargetHost(ip)}
                        dir="ltr"
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-mono border transition-all truncate ${
                          selectedTargetHost === ip
                            ? 'bg-red-500/20 border-red-500 text-red-700 dark:text-red-300 font-bold'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {ip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={runReconScan}
                disabled={isScanning}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-2 shadow-md shadow-red-500/25 transition-all disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    <span>{ui.projects.executingBtn}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{ui.projects.executeBtn}</span>
                  </>
                )}
              </button>

              {/* Scan Results Output Terminal - LTR */}
              {scanOutput && (
                <div dir="ltr" className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-[11px] space-y-2.5 animate-in fade-in duration-200 text-left">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Radio className="w-3 h-3 animate-pulse" />
                      {scanOutput.status}
                    </span>
                    <span>Latency: {scanOutput.responseTime}</span>
                  </div>

                  <div>
                    <span className="text-red-400 font-bold"># {scanOutput.command}</span>
                  </div>

                  {/* Open Ports Table */}
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider flex justify-between border-b border-slate-800 pb-0.5">
                      <span>PORT / STATE</span>
                      <span>SERVICE / VERSION</span>
                    </div>
                    {scanOutput.ports.map((p, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] py-0.5">
                        <span className="text-slate-300">
                          <span className="text-emerald-400 font-bold">{p.port}</span> {p.state}
                        </span>
                        <span className={`truncate max-w-[170px] ${
                          p.risk === 'high' ? 'text-rose-400 font-bold' : p.risk === 'medium' ? 'text-amber-300' : 'text-slate-300'
                        }`}>
                          {p.version}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1 border-t border-slate-800">
                    <span className="text-rose-400 text-[10px]">Recon Intelligence Payload:</span>
                    <pre className="text-[10px] text-red-300 mt-1 max-h-28 overflow-y-auto">
                      {JSON.stringify(scanOutput.jsonIntel, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Project #2: Network Reconnaissance & Attack Surface Mapping */}
        <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6 text-start">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-rose-600 dark:text-rose-400">
                {project2.category} • {project2.context}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {project2.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30 self-start sm:self-auto shrink-0">
                <Server className="w-3.5 h-3.5" />
                {project2.status}
              </span>
              {project2.liveUrl && (
                <a
                  href={project2.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${ui.projects.viewProjectBtn} - ${project2.title}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-sm transition-all"
                >
                  <span>{ui.projects.viewProjectBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project2.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project2.details.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="text-xs font-bold text-red-600 dark:text-red-400 font-mono">
                  {language === 'ar' ? `المحور 0${i + 1}` : `Module 0${i + 1}`}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project2.technologies.map(t => (
              <span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
