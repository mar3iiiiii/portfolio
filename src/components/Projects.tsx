import React, { useState, useRef, useEffect } from 'react';
import { 
  FileCode, 
  Terminal, 
  Play, 
  RotateCcw, 
  Server, 
  Database 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const phpProject = projects[0];
  const cloudProject = projects[1];

  // Interactive PHP REST & MySQL Simulation Playground
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('GET /api/users');
  const [userRoleFilter, setUserRoleFilter] = useState<string>('all');
  const [isQuerying, setIsQuerying] = useState<boolean>(false);
  const [queryOutput, setQueryOutput] = useState<{
    status: number;
    responseTime: string;
    sqlQuery: string;
    jsonResult: any;
  } | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const sampleUsers = [
    { id: 1, name: 'Ahmed Marei', role: 'Developer', email: 'ahmed@example.com', status: 'Active' },
    { id: 2, name: 'Eng. Team Lead', role: 'Administrator', email: 'lead@example.com', status: 'Active' },
    { id: 3, name: 'Client Account', role: 'Client', email: 'client@example.com', status: 'Pending' }
  ];

  const runQuery = () => {
    setIsQuerying(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      let filtered = sampleUsers;
      if (userRoleFilter !== 'all') {
        filtered = sampleUsers.filter(u => u.role.toLowerCase() === userRoleFilter.toLowerCase());
      }

      setQueryOutput({
        status: 200,
        responseTime: '18ms',
        sqlQuery: `SELECT id, name, role, email, status FROM users ${userRoleFilter !== 'all' ? "WHERE role = '" + userRoleFilter + "'" : ""} ORDER BY id ASC;`,
        jsonResult: {
          success: true,
          count: filtered.length,
          data: filtered
        }
      });
      setIsQuerying(false);
    }, 350);
  };

  const resetPlayground = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelectedEndpoint('GET /api/users');
    setUserRoleFilter('all');
    setQueryOutput(null);
    setIsQuerying(false);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            <FileCode className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Implementations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Grounded in rigorous full-stack development with PHP/MySQL and enterprise cloud virtualization architecture.
          </p>
        </div>

        {/* Featured Project #1: Full Stack Web App */}
        <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 mb-12">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30">
                  {phpProject.category}
                </span>
                <span>•</span>
                <span>{phpProject.context}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {phpProject.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Database className="w-3.5 h-3.5 text-red-500" />
                PHP & MySQL Certified (95%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Description & Technical Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {phpProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Architectural Milestones
                </h4>
                <div className="space-y-2.5">
                  {phpProject.details.map((detail, idx) => (
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

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {phpProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-red-500/5 text-red-700 dark:text-red-300 border border-red-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Live Interactive PHP/REST & SQL Simulation */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Live PHP/REST & MySQL Simulator
                  </h4>
                </div>
                <button
                  onClick={resetPlayground}
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
                  title="Reset simulator"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select an endpoint parameter to simulate backend PHP routing, parameterized SQL queries, and JSON response payloads.
              </p>

              {/* Endpoint Controls */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">Endpoint Route:</label>
                  <select 
                    value={selectedEndpoint} 
                    onChange={(e) => setSelectedEndpoint(e.target.value)}
                    className="w-full text-xs font-mono p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
                  >
                    <option value="GET /api/users">GET /api/users</option>
                    <option value="GET /api/users?role=Developer">GET /api/users (Filter by Role)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400">Filter By Role (SQL WHERE):</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['all', 'Developer', 'Administrator'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setUserRoleFilter(role)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-mono border transition-all ${
                          userRoleFilter === role
                            ? 'bg-red-500/20 border-red-500 text-red-700 dark:text-red-300 font-bold'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={runQuery}
                disabled={isQuerying}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold font-mono tracking-wide flex items-center justify-center gap-2 shadow-md shadow-red-500/25 transition-all disabled:opacity-50"
              >
                {isQuerying ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                    <span>Executing PHP Controller...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Execute Endpoint & SQL Query</span>
                  </>
                )}
              </button>

              {/* Output Display */}
              {queryOutput && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-[11px] space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                    <span className="text-red-400 font-bold">HTTP {queryOutput.status} OK</span>
                    <span>Lat: {queryOutput.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-amber-400">SQL:</span>
                    <p className="text-slate-300 text-[10px] mt-0.5 break-all">{queryOutput.sqlQuery}</p>
                  </div>
                  <div>
                    <span className="text-rose-400">JSON Payload:</span>
                    <pre className="text-[10px] text-red-300 mt-1 max-h-32 overflow-y-auto">
                      {JSON.stringify(queryOutput.jsonResult, null, 2)}
                    </pre>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

        {/* Project #2: Cloud Infrastructure & Virtualization */}
        <div className="bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-rose-600 dark:text-rose-400">
                {cloudProject.category} • {cloudProject.context}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {cloudProject.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/30 self-start sm:self-auto">
              <Server className="w-3.5 h-3.5" />
              Huawei HCIA Certified
            </span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {cloudProject.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cloudProject.details.map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 font-mono">
                  Module 0{i + 1}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {cloudProject.technologies.map(t => (
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
