import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

interface NavbarProps {
  onSearchOpen: () => void;
}

export const Navbar = ({ onSearchOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold font-heading text-primary hover:opacity-80 transition-opacity">Evan<span className="text-textPrimary">.dev</span></a>
        
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#hero" className="text-textMuted hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-textMuted hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-textMuted hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-textMuted hover:text-primary transition-colors">Experience</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button 
            id="search-button"
            onClick={onSearchOpen}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-slate-700 text-xs text-textMuted hover:border-primary hover:text-primary transition-colors"
          >
            <FaSearch className="text-[10px]" />
            <span className="text-slate-400">Search</span>
            <kbd className="bg-background px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-700">Ctrl K</kbd>
          </button>
          <a href="#contact" className="px-5 py-2 rounded-md bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background transition-colors font-medium text-sm">
            Let's Connect
          </a>
        </div>
      </div>
    </header>
  );
};
