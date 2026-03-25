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
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-textPrimary">About <span className="text-primary">Me</span></h2>
          <div className="h-[1px] bg-slate-700 flex-1 ml-4 sm:max-w-xs"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full md:w-2/5 md:mx-10">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 group">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="absolute inset-0 bg-[#0a192f] rounded-xl overflow-hidden z-10 border border-slate-700 group-hover:border-primary/50 transition-colors">
                <img src="https://avatars.githubusercontent.com/u/175320666?v=4" alt="Evan Profile" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full md:w-3/5">
            <p className="text-textMuted mb-6 leading-relaxed">
              Hello! My name is Evan and I'm an Aspiring Tech Professional and Educator with a strong background in Robotics, Cybersecurity, and Software Development. I have proven my leadership through student committees and athletics, and I remain deeply dedicated to community service and continuous technical innovation.
            </p>
            <p className="text-textMuted mb-8 leading-relaxed">
              Fast-forward to today, and I've had the privilege of serving as a Lab Apprentice at HUMAC performing 3D modelling and hardware assembly, as a Cybersecurity Intern at LGMS Berhad conducting penetration testing, and as a Robotics Teacher fostering hands-on learning. My main focus these days is bridging the gap between hardware engineering and intelligent software to build resilient systems.
            </p>

            <h3 className="text-xl font-heading text-textPrimary mb-4">Core Technologies</h3>
            <div className="space-y-4 max-w-md">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-primary font-mono">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                    <motion.div 
                      initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                      className="bg-primary h-2 rounded-full relative">
                        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
