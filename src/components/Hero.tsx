import React, { useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
              number: { density: { enable: true, width: 1920, height: 1080 }, value: 60 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-primary font-mono mb-4 text-lg">Hi, my name is</motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-4 text-[#f1f5f9] tracking-tight hover:text-primary transition-colors cursor-default">
            Evan.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-textMuted h-[120px] md:h-[60px]">
            <Typewriter
              options={{
                strings: ['I build things for the web.', 'Passionate CS Student.', 'Backend Developer.', 'Full-Stack Creator.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-textMuted text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on writing accessible, human-centered products at the intersection of AI and web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center">
            <a href="#projects" className="px-8 py-3 rounded-md bg-transparent border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]">
              View My Work
            </a>
            <a href="/resume.pdf" target="_blank" className="px-8 py-3 rounded-md bg-surface border border-slate-700 text-textPrimary hover:border-slate-500 transition-colors">
              Download Resume
            </a>
            <div className="flex gap-5 ml-4 text-2xl text-slate-400">
              <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub /></a>
              <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] hover:scale-110 transition-all"><FaLinkedin /></a>
              <a href="mailto:evan@example.com" className="hover:text-primary hover:scale-110 transition-all"><FaEnvelope /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
