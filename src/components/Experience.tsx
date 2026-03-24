import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Computer Science, B.S.',
      org: 'University Name',
      date: '2023 - 2027',
      desc: 'Focusing on Software Engineering, Data Structures, and Artificial Intelligence. Participating in competitive programming and hackathons.',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      type: 'work',
      title: 'Backend / Full Stack Developer',
      org: 'Freelance & Open Source',
      date: '2022 - Present',
      desc: 'Developing advanced backend systems using Scala, PHP (Laravel), C++, and Python. Maintaining open-source projects on GitHub solving real-world domain problems.',
      icon: <FaBriefcase />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-textPrimary">Experience & <span className="text-primary">Education</span></h2>
          <div className="h-[1px] bg-slate-700 flex-1 ml-4"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-700 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-[#0a0f1e] border-2 border-primary flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                {exp.icon}
              </div>
              
              <div className="bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors relative group shadow-lg">
                <div className="absolute top-5 -left-8 md:-left-12 w-8 md:w-12 h-[2px] bg-slate-700 group-hover:bg-primary/50 transition-colors -z-10"></div>
                
                <span className="text-primary font-mono text-sm mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-textPrimary">{exp.title}</h3>
                <h4 className="text-lg text-slate-400 mb-4">{exp.org}</h4>
                <p className="text-textMuted leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
