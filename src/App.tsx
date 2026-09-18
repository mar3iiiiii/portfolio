import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <BackgroundAnimation />
        <Navbar />
        <main>
          <Hero />
          <RevealOnScroll>
            <About />
          </RevealOnScroll>
          <RevealOnScroll>
            <Skills />
          </RevealOnScroll>
          <RevealOnScroll>
            <Experience />
          </RevealOnScroll>
          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>
          <RevealOnScroll>
            <Certifications />
          </RevealOnScroll>
          <RevealOnScroll>
            <Education />
          </RevealOnScroll>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
