import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaSearch } from 'react-icons/fa';

interface CommandPaletteProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CommandPalette = ({ open, setOpen }: CommandPaletteProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  const navigateTo = (selector: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const openLink = (url: string) => {
    setOpen(false);
    window.open(url, '_blank');
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white/40 dark:bg-black/60 backdrop-blur-md flex items-start justify-center pt-[15vh]" onClick={() => setOpen(false)}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-lg bg-white dark:bg-surface-dark border border-black/5 dark:border-white/10 rounded-[32px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)]" 
        onClick={e => e.stopPropagation()}
      >
        <Command className="w-full font-sans">
          <div className="flex items-center border-b border-black/5 dark:border-white/10 px-6 py-4">
            <FaSearch className="text-textMuted/40 mr-4 text-sm" />
            <Command.Input 
              autoFocus 
              placeholder="Search everything..." 
              className="w-full bg-transparent py-4 outline-none text-primary dark:text-primary-dark placeholder:text-textMuted/40 dark:placeholder:text-textMuted-dark/40 text-sm font-bold tracking-tight" 
            />
            <kbd className="hidden sm:inline-block px-2 py-1 bg-surface dark:bg-white/[0.06] rounded-md text-[9px] font-black text-textMuted dark:text-textMuted-dark border border-black/5 dark:border-white/10 shadow-sm">ESC</kbd>
          </div>

          <Command.List className="max-h-[450px] overflow-y-auto p-4 no-scrollbar">
            <Command.Empty className="p-12 text-center text-[10px] font-black tracking-widest uppercase text-textMuted/30 italic">No matches found.</Command.Empty>

            <Command.Group heading="Navigation" className="text-[10px] text-textMuted/40 font-black px-4 py-3 uppercase tracking-widest mb-2">
              <Command.Item onSelect={() => navigateTo('#hero')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-primary dark:group-hover:bg-primary-dark group-hover:text-white dark:group-hover:text-background-dark transition-all"><FaHome /></div> Home
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#about')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-primary dark:group-hover:bg-primary-dark group-hover:text-white dark:group-hover:text-background-dark transition-all"><FaUser /></div> The Brief
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#projects')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-accent group-hover:text-white transition-all"><FaCode /></div> Project Archive
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#experience')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-primary dark:group-hover:bg-primary-dark group-hover:text-white dark:group-hover:text-background-dark transition-all"><FaBriefcase /></div> Experience
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#contact')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-accent group-hover:text-white transition-all"><FaEnvelope /></div> Get in touch
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Resources" className="text-[10px] text-textMuted/40 font-black px-4 py-3 uppercase tracking-widest mb-2 mt-4">
              <Command.Item onSelect={() => { setOpen(false); window.open(`${import.meta.env.BASE_URL}resume.pdf`); }} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all"><FaDownload /></div> Download CV
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Socials" className="text-[10px] text-textMuted/40 font-black px-4 py-3 uppercase tracking-widest mb-2 mt-4">
              <Command.Item onSelect={() => openLink('https://github.com/evan-2005')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-primary dark:group-hover:bg-primary-dark group-hover:text-white dark:group-hover:text-background-dark transition-all"><FaGithub /></div> GitHub Profile
              </Command.Item>
              <Command.Item onSelect={() => openLink('https://www.linkedin.com/in/evan-lo-jen-zhen')} className="flex items-center gap-4 px-4 py-4 text-xs font-bold text-primary dark:text-primary-dark rounded-2xl cursor-pointer hover:bg-surface dark:hover:bg-white/[0.06] transition-all mb-1 aria-selected:bg-surface dark:aria-selected:bg-white/[0.06] group">
                <div className="w-8 h-8 rounded-xl bg-surface dark:bg-white/[0.06] flex items-center justify-center text-textMuted dark:text-textMuted-dark group-hover:bg-primary dark:group-hover:bg-primary-dark group-hover:text-white dark:group-hover:text-background-dark transition-all"><FaLinkedin /></div> LinkedIn Profile
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </motion.div>
    </div>
  );
};
