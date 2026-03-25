import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

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
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg bg-surface border border-slate-700 rounded-xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <Command className="w-full">
          <div className="flex items-center border-b border-slate-700 px-3">
            <span className="text-primary mr-2 font-mono ml-2">›</span>
            <Command.Input 
              autoFocus 
              placeholder="Type a command or search..." 
              className="w-full bg-transparent p-4 outline-none text-textPrimary placeholder:text-slate-500 font-mono text-sm" 
            />
            <kbd className="hidden sm:inline-block bg-background px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-700 text-slate-400 mr-2">ESC</kbd>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-700">
            <Command.Empty className="p-4 text-center text-sm text-slate-500 py-6 font-mono">No results found.</Command.Empty>

            <Command.Group heading="Navigation" className="text-xs text-slate-500 font-medium px-2 py-1 [&_[cmdk-group-heading]]:mb-2 uppercase tracking-wider mt-2">
              <Command.Item onSelect={() => navigateTo('#hero')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaHome /> Home
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#about')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaUser /> About Me
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#projects')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaCode /> Projects
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#experience')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaBriefcase /> Experience
              </Command.Item>
              <Command.Item onSelect={() => navigateTo('#contact')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaEnvelope /> Contact
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-700 my-2" />

            <Command.Group heading="Actions" className="text-xs text-slate-500 font-medium px-2 py-1 [&_[cmdk-group-heading]]:mb-2 uppercase tracking-wider">
              <Command.Item onSelect={() => { setOpen(false); window.open('/resume.docx'); }} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaDownload /> Download Resume
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-slate-700 my-2" />

            <Command.Group heading="Social" className="text-xs text-slate-500 font-medium px-2 py-1 [&_[cmdk-group-heading]]:mb-2 uppercase tracking-wider">
              <Command.Item onSelect={() => openLink('https://github.com/evan-2005')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaGithub /> GitHub
              </Command.Item>
              <Command.Item onSelect={() => openLink('https://www.linkedin.com/in/evan-lo-jen-zhen')} className="flex items-center gap-3 px-3 py-2 text-sm text-textPrimary rounded-md cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors mb-1 aria-selected:bg-primary/20 aria-selected:text-primary">
                <FaLinkedin /> LinkedIn
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
