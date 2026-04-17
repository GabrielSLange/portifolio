import { projects } from '../data/Projectsdata';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 dark:text-white border-l-4 border-sky-500 pl-4">
        Projetos em Destaque
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              ) : (
                <div className="text-slate-400 dark:text-slate-600 font-medium italic">
                  Preview em breve
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}