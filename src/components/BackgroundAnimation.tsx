import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Subtle background dot matrix grid with gentle breathing opacity */}
      <div className="absolute inset-0 opacity-[0.16] dark:opacity-[0.20] bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:32px_32px] animate-pulse-slow"></div>

      {/* Floating Orb 1: Crimson / Red (Top-Left to Center) */}
      <div 
        className="absolute -top-24 -left-24 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-gradient-to-tr from-red-600/25 via-rose-500/15 to-transparent blur-[130px] opacity-70 dark:opacity-50 animate-blob-1 will-change-transform"
      ></div>

      {/* Floating Orb 2: Deep Rose / Ruby (Center-Right to Top) */}
      <div 
        className="absolute top-1/3 -right-28 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-gradient-to-bl from-rose-600/20 via-red-500/15 to-transparent blur-[140px] opacity-60 dark:opacity-45 animate-blob-2 will-change-transform"
      ></div>

      {/* Floating Orb 3: Warm Amber / Crimson (Bottom-Left) */}
      <div 
        className="absolute -bottom-32 left-1/4 w-[460px] sm:w-[600px] h-[460px] sm:h-[600px] rounded-full bg-gradient-to-tr from-amber-600/15 via-red-600/15 to-transparent blur-[150px] opacity-50 dark:opacity-40 animate-blob-3 will-change-transform"
      ></div>
    </div>
  );
};
