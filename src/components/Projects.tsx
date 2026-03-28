import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCode } from 'react-icons/fa';

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
  const filters = ['All', 'Web', 'ML/AI', 'Mobile App', 'Systems', 'Algorithms', 'Other'];

  // Multi-category overrides: key = normalised substring to match, value = array of categories
  // Repo name normalised = lowercase, all [-_ ] stripped
  const multiOverrides: Array<{ match: string; cats: string[] }> = [
    // Web
    { match: 'travelicks', cats: ['Web'] },
    { match: 'jobhub',     cats: ['Web'] },
    // ML/AI + Mobile App
    { match: 'punca',      cats: ['ML/AI', 'Mobile App'] },
    // ML/AI
    { match: 'gemma',      cats: ['ML/AI'] },
    // Algorithms
    { match: 'mergesort',  cats: ['Algorithms'] },
    { match: 'huffmancoding', cats: ['Algorithms'] },
    // Other / Portfolio
    { match: 'portfolio',  cats: ['Other'] },
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/evan-2005/repos?per_page=100')
      .then(res => res.json())
      .then((data: any) => {
        if (Array.isArray(data)) {
          const sorted = data
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

  const getCategories = (repo: Repo): string[] => {
    const key = repo.name.toLowerCase().replace(/[-_\s]/g, '');

    // Check substring overrides (first match wins, but we check all for multi-cat)
    for (const override of multiOverrides) {
      if (key.includes(override.match)) return override.cats;
    }

    // Auto-detect fallback
    const lang = repo.language?.toLowerCase() || '';
    const topics = repo.topics?.map(t => t.toLowerCase()) || [];

    if (lang.includes('typescript') || lang.includes('javascript') || lang.includes('html') || lang.includes('css') || topics.includes('web') || topics.includes('react')) return ['Web'];
    if (lang.includes('python') || lang.includes('jupyter') || topics.includes('ai') || topics.includes('ml') || topics.includes('chatbot')) return ['ML/AI'];
    if (topics.includes('algorithm') || topics.includes('data-structure') || topics.includes('algorithms')) return ['Algorithms'];
    if (lang.includes('java') || lang.includes('kotlin') || lang.includes('swift') || topics.includes('android') || topics.includes('mobile')) return ['Mobile App'];
    if (lang.includes('c') || lang.includes('rust') || lang.includes('go')) return ['Systems'];

    return ['Other'];
  };

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    return getCategories(p).includes(filter);
  });


  return (
    <section id="projects" className="py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">Selected Works</span>
            <h2 className="text-5xl md:text-6xl font-black text-primary leading-tight tracking-tight">
              A collection of <br />
              <span className="text-accent italic">curated</span> projects.
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-textMuted overflow-x-auto pb-4 no-scrollbar">
            {filters.map(f => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`transition-all duration-300 whitespace-nowrap ${filter === f ? 'text-accent border-b-2 border-accent pb-1' : 'hover:text-primary transition-colors'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[4/3] bg-white/50 animate-pulse rounded-[40px] border border-black/5"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.a
                  key={project.id}
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group bg-white rounded-[40px] p-10 border border-black/5 hover:border-accent/10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden relative flex flex-col h-full cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center text-2xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <FaCode />
                    </div>
                    {project.homepage && (
                      <div className="flex gap-4">
                        <a 
                          href={project.homepage} 
                          target="_blank" 
                          rel="noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-textMuted hover:bg-accent hover:text-white transition-all"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-black text-primary mb-4 group-hover:text-accent transition-colors">
                    {project.name.replace(/-/g, ' ')}
                  </h3>
                  <p className="text-textMuted font-medium leading-relaxed mb-6 line-clamp-2 uppercase text-[11px] tracking-widest opacity-60">
                    {project.description || 'A unique technical solution developed to bridge complex systems and intelligent software.'}
                  </p>

                  <div className="flex items-center gap-2 mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-accent">View on GitHub</span>
                    <div className="w-8 h-[1px] bg-accent/30" />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-8 border-t border-black/[0.03] mt-auto">
                    {project.language && (
                      <span className="text-[9px] font-black uppercase text-accent tracking-widest px-4 py-2 bg-accent/5 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        {project.language}
                      </span>
                    )}
                    {project.topics.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-black uppercase text-textMuted tracking-widest px-4 py-2 bg-surface rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredProjects.length === 0 && !loading && (
          <div className="py-32 text-center text-textMuted font-bold text-xs tracking-widest uppercase opacity-40">
            No projects archived in '{filter}'
          </div>
        )}

        <div className="mt-20 text-center">
          <a href="https://github.com/evan-2005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 px-12 py-6 rounded-full border border-black/5 font-black text-[11px] uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-white transition-all translate-y-0 hover:-translate-y-1 shadow-sm hover:shadow-xl">
            Explore more on GitHub <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};
