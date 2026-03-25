import React, { useState, useEffect, useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies Used', value: '20+' },
  { label: 'Years In Tech', value: '4+' },
  { label: 'Work Experience', value: '3+' },
];

export const Hero = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" } },
              modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
            },
            particles: {
              color: { value: "#00d4ff" },
              links: { color: "#00d4ff", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1, direction: "none", random: true, outModes: "out" },
              number: { density: { enable: true, width: 1920, height: 1080 }, value: 80 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-primary font-mono mb-4 text-lg">Hi, my name is</motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold font-heading mb-4 text-[#f1f5f9] tracking-tight hover:text-primary transition-colors cursor-default">
            Evan.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6 text-textMuted h-[100px] md:h-[60px]">
            <Typewriter
              options={{
                strings: ['CS Student.', 'Robotics Researcher.', 'Cybersecurity Intern.', 'Full-Stack Creator.', 'Tech Educator.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-textMuted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Aspiring Tech Professional at the intersection of <span className="text-primary">Robotics</span>, <span className="text-primary">Cybersecurity</span>, and <span className="text-primary">Software Engineering</span>. Passionate about bridging hardware and intelligent software to build resilient, impactful systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-16">
            <a href="#projects" className="flex items-center gap-2 px-8 py-3 rounded-md bg-transparent border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]">
              <FaCode /> View My Work
            </a>
            <a href="/resume.pdf" download className="flex items-center gap-2 px-8 py-3 rounded-md bg-surface border border-slate-700 text-textPrimary hover:border-primary hover:text-primary transition-colors">
              <FaDownload /> Download Resume
            </a>
            <div className="flex gap-5 ml-2 text-2xl text-slate-400">
              <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/evan-lo-jen-zhen" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] hover:scale-110 transition-all"><FaLinkedin /></a>
              <a href="mailto:evan.lojenzhen@gmail.com" className="hover:text-primary hover:scale-110 transition-all"><FaEnvelope /></a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center md:justify-end w-full"
        >
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                className="bg-surface/60 border border-slate-700 rounded-2xl p-6 text-center backdrop-blur-sm transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-center min-h-[140px]"
              >
                <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-textMuted font-mono leading-tight tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-mono">
          <span>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};
