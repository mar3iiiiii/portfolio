import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* Dynamic Animated Ambient Dot Matrix */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:28px_28px] animate-pulse-slow motion-reduce:animate-none"></div>

      {/* Mobile-optimized single ambient wash */}
      <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-600/15 via-rose-500/5 to-transparent blur-3xl pointer-events-none"></div>

      {/* Desktop Floating Orb 1: Crimson Red (Top-Left) */}
      <div 
        className="hidden md:block absolute -top-20 -left-20 w-[500px] lg:w-[680px] h-[500px] lg:h-[680px] rounded-full bg-gradient-to-tr from-red-600/35 via-rose-500/20 to-transparent blur-[90px] opacity-75 dark:opacity-60 animate-blob-1 motion-reduce:animate-none will-change-transform"
      ></div>

      {/* Desktop Floating Orb 2: Deep Ruby / Rose (Center-Right) */}
      <div 
        className="hidden md:block absolute top-1/3 -right-24 w-[450px] lg:w-[600px] h-[450px] lg:h-[600px] rounded-full bg-gradient-to-bl from-rose-600/30 via-red-500/20 to-transparent blur-[95px] opacity-70 dark:opacity-55 animate-blob-2 motion-reduce:animate-none will-change-transform"
      ></div>

      {/* Desktop Floating Orb 3: Warm Amber / Crimson (Bottom-Left) */}
      <div 
        className="hidden lg:block absolute -bottom-24 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-600/20 via-red-600/20 to-transparent blur-[100px] opacity-65 dark:opacity-50 animate-blob-3 motion-reduce:animate-none will-change-transform"
      ></div>

      {/* Ambient Floating Dust / Light Beacons (Desktop only for max mobile performance) */}
      <div className="hidden md:block absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-red-400/40 blur-[1px] animate-float motion-reduce:animate-none"></div>
      <div className="hidden md:block absolute top-2/3 right-1/4 w-2.5 h-2.5 rounded-full bg-rose-400/40 blur-[1px] animate-float-slow motion-reduce:animate-none"></div>
      <div className="hidden lg:block absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-amber-400/40 blur-[1px] animate-blob-2 motion-reduce:animate-none"></div>
    </div>
  );
};
