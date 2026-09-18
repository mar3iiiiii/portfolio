import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Dynamic Animated Ambient Dot Matrix */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 bg-[radial-gradient(#ef4444_1.2px,transparent_1.2px)] [background-size:28px_28px] animate-pulse-slow"></div>

      {/* Floating Orb 1: Crimson Red (Top-Left to Center) */}
      <div 
        className="absolute -top-20 -left-20 w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full bg-gradient-to-tr from-red-600/40 via-rose-500/25 to-transparent blur-[100px] opacity-80 dark:opacity-65 animate-blob-1 will-change-transform"
      ></div>

      {/* Floating Orb 2: Deep Ruby / Rose (Center-Right to Top) */}
      <div 
        className="absolute top-1/3 -right-24 w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] rounded-full bg-gradient-to-bl from-rose-600/35 via-red-500/25 to-transparent blur-[110px] opacity-75 dark:opacity-60 animate-blob-2 will-change-transform"
      ></div>

      {/* Floating Orb 3: Warm Amber / Crimson (Bottom-Left) */}
      <div 
        className="absolute -bottom-24 left-1/4 w-[480px] sm:w-[650px] h-[480px] sm:h-[650px] rounded-full bg-gradient-to-tr from-amber-600/25 via-red-600/25 to-transparent blur-[120px] opacity-70 dark:opacity-55 animate-blob-3 will-change-transform"
      ></div>

      {/* Ambient Floating Dust / Light Beacons */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-red-400/40 blur-[1px] animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 rounded-full bg-rose-400/40 blur-[1px] animate-float-slow"></div>
      <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-amber-400/40 blur-[1px] animate-blob-2"></div>
      <div className="absolute top-3/4 left-1/3 w-2.5 h-2.5 rounded-full bg-red-500/30 blur-[1px] animate-blob-1"></div>
    </div>
  );
};
