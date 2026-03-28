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
      tags: ['ROS', '3D Modelling', 'Arduino', 'Robotics', 'CAD', 'Hardware', 'Electrical Assembly', 'Sensors'],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      type: 'work',
      title: 'Admin cum Coach',
      org: 'Robinuo Learning Hub',
      date: 'Aug 2025 - Present',
      desc: 'Coaching children in Robotics and Arduino, simplifying complex engineering concepts. Managing administrative paperwork and streamlining hub operations for a seamless learning environment.',
      tags: ['Robotics', 'Arduino', 'Communication', 'Team Leadership', 'Curriculum Design', 'Client Relations', 'Operations'],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      type: 'work',
      title: 'Publicity and Marketing Executive',
      org: 'IMechE Sunway Student Chapter · Contract',
      date: 'Mar 2025 - Present',
      desc: 'Contributing to the Publicity and Marketing team, enhancing the chapter\'s visibility and engagement. Designed and executed marketing strategies for events, workshops, and competitions. Ran social media campaigns to boost student involvement and awareness. Collaborated with committees to ensure cohesive branding and communication.',
      tags: ['Marketing', 'Administration', 'Social Media', 'Event Management', 'Brand Design', 'Stakeholder Management', 'Analytics'],
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
      tags: ['Business Analysis', 'OOP', 'Digital Image Processing', 'Algorithm Analysis', 'Scala', 'IoT Security', 'Startup Foundry', 'Data Science'],
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
      tags: ['OOP', 'SQL', 'Web Development', 'Java', 'Android Dev', 'Database Design', 'Software Engineering', 'Networking'],
      icon: <FaGraduationCap />
    },
    {
      id: 6,
      type: 'work',
      title: 'Cybersecurity Intern',
      org: 'LGMS Berhad',
      date: 'Aug 2024 - Jan 2025',
      desc: 'Conducted penetration testing using Burp Suite and developed custom scripts to detect backend security flaws. Authored technical reports on risk levels and remediation.',
      tags: ['Penetration Testing', 'Burp Suite', 'Kali Linux', 'Python', 'Network Security', 'Threat Modelling', 'Wireshark', 'Metasploit'],
      icon: <FaBriefcase />
    },
    {
      id: 7,
      type: 'work',
      title: 'Robotics Teacher',
      org: 'P3 Robotics',
      date: 'Oct 2023 - May 2025',
      desc: 'Taught Scratch, Python, and sensor integration to foster hands-on learning. Monitored student progress and prepared teams for robotics challenges.',
      tags: ['Robotics', 'Python', 'STEM Education', 'LEGO Mindstorms', 'OpenCV', 'Project Based Learning', 'Public Speaking'],
      icon: <FaBriefcase />
    },
    {
      id: 8,
      type: 'education',
      title: 'Sijil Pelajaran Malaysia (SPM)',
      org: 'SMK USJ 12',
      date: '2018 - 2023',
      desc: 'Served as House Captain and Class Monitor. Top scorer in French DELF (A1/A2). Active in school committees and leadership activities.',
      tags: ['Leadership', 'French (DELF A1/A2)', 'Public Speaking', 'Team Management', 'Problem Solving', 'Project Coordination', 'Teamwork'],
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
          {/* Section Heading Left */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">The Timeline</span>
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
              Wanna see my <br /> 
              <span className="text-accent underline decoration-accent/20 underline-offset-8">experience?</span>
            </h2>
            <p className="mt-12 text-lg text-textMuted font-medium max-w-sm">
              Helping teams build better products through research and engineering.
            </p>
          </div>

          {/* Experience Cards Right */}
          <div className="relative space-y-12 pl-12 lg:pl-16">
            {/* Vertical Line */}
            <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Node Dot */}

                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group p-8 md:p-10 rounded-[40px] bg-surface hover:bg-white border border-transparent hover:border-black/5 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="text-[10px] font-black uppercase text-accent tracking-widest mb-2 block">
                        {exp.type === 'work' ? 'Professional' : 'Academic'}
                      </span>
                      <h3 className="text-3xl font-black text-primary group-hover:text-accent transition-colors tracking-tight">{exp.title}</h3>
                    </div>
                    <div className="text-[11px] font-black uppercase text-primary/40 tracking-widest whitespace-nowrap bg-black/[0.03] px-6 py-3 rounded-full">
                      {exp.date}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-textMuted mb-6">{exp.org}</h4>
                  {exp.cgpa && (
                    <p className="text-accent font-black text-sm mb-6 tracking-widest inline-block px-3 py-1 bg-accent/5 rounded-lg">{exp.cgpa}</p>
                  )}
                  <p className="text-base font-medium text-textMuted/80 leading-relaxed mb-8 max-w-2xl">
                    {exp.desc}
                  </p>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-3">
                      {exp.tags.slice(0, 7).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase text-textMuted leading-none tracking-widest px-4 py-3 bg-white/50 rounded-xl group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
