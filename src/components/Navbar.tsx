import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { DarkModeToggle } from './DarkModeToggle';

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/10' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#hero" className="text-xl font-black text-primary dark:text-primary-dark tracking-tighter">Evan Lo</a>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest whitespace-nowrap">Available for work</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-10 items-center text-[11px] font-bold tracking-widest uppercase text-textMuted dark:text-textMuted-dark">
          <a href="#hero" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Home</a>
          <a href="#about" className="hover:text-primary dark:hover:text-primary-dark transition-colors">About</a>
          <a href="#projects" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Projects</a>
          <a href="#experience" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Experience</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <DarkModeToggle />
          <button
            id="search-button"
            onClick={onSearchOpen}
            className="flex items-center gap-2 text-textMuted dark:text-textMuted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
          >
            <FaSearch className="text-[10px]" />
            <span className="text-[11px] font-bold tracking-widest uppercase">Search</span>
          </button>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary dark:bg-primary-dark text-white text-[11px] font-bold tracking-widest uppercase hover:bg-accent transition-all duration-300">
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};
