import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export const Projects = () => {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Web', 'ML/AI', 'Systems', 'Algorithms', 'Other'];

  useEffect(() => {
    fetch('https://api.github.com/users/evan-2005/repos')
      .then(res => res.json())
      .then((data: any) => {
        if (Array.isArray(data)) {
          // Exclude forks, sort by last updated
          const sorted = data
            .filter((repo: any) => !repo.fork)
            .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
            .map((repo: any) => ({
              id: repo.id,
              name: repo.name,
              description: repo.description,
              html_url: repo.html_url,
              homepage: repo.homepage,
              language: repo.language,
              topics: repo.topics || [],
              updated_at: repo.updated_at,
              fork: repo.fork
            }));
          setProjects(sorted);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching repos', err);
        setLoading(false);
      });
  }, []);

  const getCategory = (repo: Repo) => {
    const lang = repo.language?.toLowerCase() || '';
    const topics = repo.topics?.map(t => t.toLowerCase()) || [];
    
    if (lang.includes('typescript') || lang.includes('javascript') || lang.includes('html') || lang.includes('css') || topics.includes('web') || topics.includes('react')) return 'Web';
    if (lang.includes('python') || lang.includes('jupyter') || topics.includes('ai') || topics.includes('ml')) return 'ML/AI';
    if (lang.includes('c') || lang.includes('rust') || lang.includes('go') || lang.includes('java')) return 'Systems';
    if (topics.includes('algorithm') || topics.includes('data-structure')) return 'Algorithms';
    
    return 'Other';
  };

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    return getCategory(p) === filter;
  });

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12">
           <div className="h-[1px] bg-slate-700 flex-1 mr-4 hidden sm:block"></div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-textPrimary">Some Things I've <span className="text-primary">Built</span></h2>
          <div className="h-[1px] bg-slate-700 flex-1 ml-4 sm:hidden"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center sm:justify-start gap-4 mb-12">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-300 border ${filter === f ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,212,255,0.2)]' : 'bg-surface border-slate-700 text-textMuted hover:border-textPrimary hover:text-textPrimary'}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-[320px] bg-surface rounded-xl animate-pulse border border-slate-800"></div>
            ))}
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group block relative"
                >
                  <div className="h-full relative overflow-hidden bg-surface border border-slate-800 rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_-15px_rgba(0,212,255,0.3)] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-4xl text-primary"><FaFolder /></div>
                      <div className="flex gap-4">
                        {project.homepage && (
                          <a href={project.homepage} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors text-xl z-10">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                        <a href={project.html_url} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors text-xl z-10">
                          <FaGithub />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-textPrimary mb-3 group-hover:text-primary transition-colors relative z-10">
                      <a href={project.html_url} target="_blank" rel="noreferrer" className="before:absolute before:inset-0">
                        {project.name.replace(/-/g, ' ')}
                      </a>
                    </h3>
                    
                    <p className="text-textMuted text-sm font-body mb-8 flex-grow leading-relaxed relative z-10">
                      {project.description || 'A cool project I built to solve a problem and learn new technologies.'}
                    </p>

                    <div className="flex flex-wrap gap-x-3 gap-y-2 mt-auto font-mono text-xs text-slate-400 relative z-10">
                      {project.language && <span className="text-primary/90">{project.language}</span>}
                      {project.topics.slice(0, 3).map((topic: string) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center text-textMuted font-mono text-sm border border-slate-800 rounded-xl bg-surface/50">
                No projects found in the '{filter}' category.
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
