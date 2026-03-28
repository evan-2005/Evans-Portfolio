import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  const skills = [
    { name: 'HTML / CSS / Web', level: 95 },
    { name: 'Python', level: 85 },
    { name: 'C++ / Java', level: 75 },
    { name: 'Penetration Testing (Burp Suite)', level: 80 },
    { name: 'Arduino / ROS / Robotics', level: 80 },
    { name: 'SQL / Database Design', level: 75 },
  ];

  return (
    <section id="about" className="py-24 bg-surface/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-4">The Brief</h2>
            <h3 className="text-3xl font-black text-primary leading-tight">Beyond the code.</h3>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg text-textMuted leading-relaxed font-medium">
              I'm <span className="text-primary">Evan</span>, a developer and researcher dedicated to building secure, intelligent systems. 
              Currently exploring the boundaries of <span className="text-primary italic">robotics</span> and <span className="text-primary italic">machine learning</span>, 
              with a focus on creating practical, high-impact technology that bridges the physical and digital worlds.
            </p>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-textMuted/40 mb-2">Location</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Kuala Lumpur, MY</span>
              </div>
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-textMuted/40 mb-2">Status</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Open to Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
