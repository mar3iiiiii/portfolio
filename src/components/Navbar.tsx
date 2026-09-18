import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-b border-slate-200/80 dark:border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group text-slate-900 dark:text-white font-bold text-lg tracking-tight"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-500/40 group-hover:border-emerald-500 transition-all duration-300 shadow-sm shrink-0">
              <img
                src={PORTFOLIO_DATA.personal.profileImage}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-mono text-sm tracking-normal text-emerald-600 dark:text-emerald-400">
                ~/ahmed-marei
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                Class of 2027 • Eng.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & LinkedIn Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-emerald-400 shadow-sm transition-all"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 mt-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
