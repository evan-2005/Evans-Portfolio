import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-accent mb-12 block">Ready to start?</span>
          
          <h2 className="text-5xl md:text-8xl font-black text-primary mb-16 tracking-tight leading-[1.1]">
            Let's connect <br />
            and <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">build.</span>
          </h2>

          <a 
            href="mailto:evan.lojenzhen@gmail.com" 
            className="text-2xl md:text-5xl font-black text-primary hover:text-accent transition-all duration-500 break-words mb-24 block"
          >
            evan.lojenzhen@gmail.com
          </a>

          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t border-black/5">
            <div className="flex gap-10 text-xl text-textMuted">
              <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <FaGithub /> <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/evan-lo-jen-zhen" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <FaLinkedin /> <span className="text-[10px] font-black uppercase tracking-widest">LinkedIn</span>
              </a>
            </div>

            <p className="text-[10px] font-bold text-textMuted uppercase tracking-[0.3em]">
              {new Date().getFullYear()} — EVAN LO • MADE WITH PRECISION
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
