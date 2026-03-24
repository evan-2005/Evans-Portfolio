import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CommandPalette } from './components/CommandPalette';

function App() {
  return (
    <div className="bg-background min-h-screen text-textPrimary font-body selection:bg-primary/30 selection:text-white relative">
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
