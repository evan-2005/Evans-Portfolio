import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { PingPong } from './PingPong';

const PerspectiveCard = ({ children, className, ...props }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...props}
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 bg-background dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
        {/* Left Content */}
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-8 group cursor-default">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold text-accent uppercase tracking-[0.2em]">Available for work</span>
            </div>

            <h1 className="text-[75px] md:text-[110px] font-black leading-[0.9] text-primary dark:text-primary-dark mb-10 tracking-[-0.04em]">
              Hi, I'm <br />
              <span className="text-accent italic">Evan Lo,</span> <br />
              a CS student
            </h1>

            <p className="text-lg md:text-xl text-textMuted dark:text-textMuted-dark mb-12 max-w-lg font-medium tracking-tight">
              <span className="text-accent font-black">Robotics </span>Researcher & Teacher,{" "}
              <span className="text-accent font-black">Cybersecurity </span>Practitioner.
              <br />
              <span className="text-sm font-normal opacity-60 mt-2 block">
                Lab researcher, penetration tester, hackathon enthusiast, and educator
              </span>
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="#contact" className="px-10 py-5 rounded-full bg-primary dark:bg-primary-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10 dark:shadow-primary-dark/10 hover:shadow-accent/20 hover:-translate-y-1">
                Let's connect
              </a>
              <div className="flex items-center gap-6 ml-2">
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Evan-Lo-Jen-Zhen-Resume.pdf" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted dark:text-textMuted-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
                  <FaDownload className="text-[10px]" /> Resume
                </a>
                <div className="w-px h-4 bg-black/10 dark:bg-white/10" />
                <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="text-lg text-textMuted dark:text-textMuted-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/evan-lo-jen-zhen" target="_blank" rel="noreferrer" className="text-lg text-textMuted dark:text-textMuted-dark hover:text-primary dark:hover:text-primary-dark transition-colors">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Interactive Game */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <PingPong />
          </div>

          {/* Subtle Decorative Elements for the Game Area */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-delayed-pulse" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-surface rounded-full blur-[100px] -z-10" />
    </section>
  );
};
