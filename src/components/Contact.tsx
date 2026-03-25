import React from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-primary font-mono mb-4 text-sm">What's Next?</motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-heading text-textPrimary mb-6">Get In Touch</motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-textMuted text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          href="mailto:evan.lojenzhen@gmail.com"
          className="inline-block px-10 py-4 border border-primary text-primary font-bold font-mono rounded bg-primary/10 hover:bg-primary hover:text-[#0a0f1e] text-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] focus:outline-none"
        >
          Say Hello
        </motion.a>
      </div>

      <footer className="absolute bottom-0 w-full py-6 text-center z-10">
        <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="text-slate-500 font-mono text-sm hover:text-primary transition-colors">
          Designed & Built by Evan © {new Date().getFullYear()}
        </a>
      </footer>
    </section>
  );
};
