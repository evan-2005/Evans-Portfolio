import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { CommandPalette } from './components/CommandPalette';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="bg-background dark:bg-background-dark min-h-screen text-textPrimary dark:text-textPrimary-dark font-body selection:bg-primary/30 dark:selection:bg-accent/30 selection:text-white relative">
        <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
        <Navbar onSearchOpen={() => setPaletteOpen(true)} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
