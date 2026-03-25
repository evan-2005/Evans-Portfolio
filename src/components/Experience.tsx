import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Lab Apprentice (Advanced Robotics Team)',
      org: 'Research Centre for Human-Machine Collaboration (HUMAC)',
      date: 'Feb 2026 - Present',
      desc: 'Performing 3D modelling and hardware assembly of electronic components for robotic systems. Contributing to the design, development, and evaluation of robotic solutions for research and industry applications.',
      tags: ['ROS', '3D Modelling', 'Arduino', 'Robotics', 'CAD', 'Hardware', 'Soldering'],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      type: 'work',
      title: 'Admin cum Coach',
      org: 'Robinuo Learning Hub',
      date: 'Aug 2025 - Present',
      desc: 'Coaching children in Robotics and Arduino, simplifying complex engineering concepts. Managing administrative paperwork and streamlining hub operations for a seamless learning environment.',
      tags: ['Robotics', 'Arduino', 'Communication', 'Working with Children', 'Problem Solving', 'Tech-Savvy'],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      type: 'work',
      title: 'Publicity and Marketing Executive',
      org: 'IMechE Sunway Student Chapter · Contract',
      date: 'Mar 2025 - Present',
      desc: 'Contributing to the Publicity and Marketing team, enhancing the chapter\'s visibility and engagement. Designed and executed marketing strategies for events, workshops, and competitions. Ran social media campaigns to boost student involvement and awareness. Collaborated with committees to ensure cohesive branding and communication.',
      tags: ['Marketing', 'Administration', 'Social Media', 'Event Management', 'Communication'],
      icon: <FaBriefcase />
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Science (Honours) in Computer Science',
      org: 'Sunway University & Lancaster University',
      date: '2025 - 2027',
      desc: 'Exploring advanced software development, AI, and system architecture.',
      cgpa: 'CGPA: 3.80',
      tags: ['Business Analysis', 'OOP', 'Digital Image Processing', 'Algorithm Analysis', 'Scala', 'IoT Networking & Security', 'Startup Foundry'],
      icon: <FaGraduationCap />
    },
    {
      id: 5,
      type: 'education',
      title: 'Diploma in Information Technology',
      org: 'Sunway College Kuala Lumpur',
      date: '2023 - 2025',
      desc: 'Strong foundational skills in IT and software creation.',
      cgpa: 'CGPA: 3.82 (Distinction)',
      tags: ['OOP', 'SQL', 'Web Development', 'Java', 'Android Development', 'Database Design', 'Software Development'],
      icon: <FaGraduationCap />
    },
    {
      id: 6,
      type: 'work',
      title: 'Cybersecurity Intern',
      org: 'LGMS Berhad',
      date: 'Aug 2024 - Jan 2025',
      desc: 'Conducted penetration testing using Burp Suite and developed custom scripts to detect backend security flaws. Authored technical reports on risk levels and remediation.',
      tags: ['Penetration Testing', 'Burp Suite', 'Kali Linux', 'Python', 'Network Security', 'Vulnerability Assessment'],
      icon: <FaBriefcase />
    },
    {
      id: 7,
      type: 'work',
      title: 'Robotics Teacher',
      org: 'P3 Robotics',
      date: 'Oct 2023 - May 2025',
      desc: 'Taught Scratch, Python, and sensor integration to foster hands-on learning. Monitored student progress and prepared teams for robotics challenges.',
      tags: ['Robotics', 'Python', 'Communication', 'Working with Children', 'Problem Solving', 'Tech-Savvy'],
      icon: <FaBriefcase />
    },
    {
      id: 8,
      type: 'education',
      title: 'Sijil Pelajaran Malaysia (SPM)',
      org: 'SMK USJ 12',
      date: '2018 - 2023',
      desc: 'Served as House Captain and Class Monitor. Top scorer in French DELF (A1/A2). Active in school committees and leadership activities.',
      tags: ['Leadership', 'French (DELF A1/A2)', 'Public Speaking', 'Team Management', 'Problem Solving'],
      icon: <FaGraduationCap />
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-[#0a0f1e] border-2 border-primary flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                {exp.icon}
              </div>
              
              <div className="bg-[#112240] p-6 rounded-xl border border-slate-800 hover:border-primary/50 transition-colors relative group shadow-lg">
                <div className="absolute top-5 -left-8 md:-left-12 w-8 md:w-12 h-[2px] bg-slate-700 group-hover:bg-primary/50 transition-colors -z-10"></div>
                
                <span className="text-primary font-mono text-sm mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-textPrimary">{exp.title}</h3>
                <h4 className="text-lg text-slate-400 mb-1">{exp.org}</h4>
                {exp.cgpa && (
                  <p className="text-primary/80 font-mono text-sm mb-3">{exp.cgpa}</p>
                )}
                <p className="text-textMuted leading-relaxed mb-4">
                  {exp.desc}
                </p>
                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="bg-primary/10 text-primary border border-primary/20 text-xs px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
