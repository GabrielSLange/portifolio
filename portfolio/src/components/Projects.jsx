import { projects } from '../data/Projectsdata';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { CheckCircle2, Terminal, Code2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
            03 // Engenharia Aplicada
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
            Projetos & Sistemas Desenvolvidos
          </h2>
        </div>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          SaaS · Multitenant · Real-Time · RPA
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="group rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md"
          >
            
            <div>
              {/* Media / Visual Container */}
              <div className="aspect-video w-full bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="p-3 rounded-xl bg-zinc-200/60 dark:bg-zinc-800/80 text-violet-500 mb-3">
                      <Code2 size={28} />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      Arquitetura & Código Backend
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-400 mt-1">
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Category Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-zinc-950/80 text-zinc-200 backdrop-blur-sm border border-zinc-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7">
                
                {/* Title & Actions */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        aria-label={`Código do projeto ${project.title}`}
                      >
                        <FaGithub size={19} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        aria-label={`Demo do projeto ${project.title}`}
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Technical Highlights */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="text-[11px] font-mono uppercase text-zinc-400 dark:text-zinc-400 mb-2">
                    Destaques de Engenharia
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 leading-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}