import { useState } from 'react';
import { experiences, education, certificationOverview } from '../data/ExperienceData';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Building2, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  CheckCircle2,
  Layers
} from 'lucide-react';

export default function Experience() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
            02 // Trajetória & Credenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
            Experiência & Formação Técnica
          </h2>
        </div>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Carreira · Ciência da Computação · 10x Balta.io
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (7 cols): Career Progression Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100 mb-1">
            <Briefcase size={17} className="text-violet-500" />
            <span>Histórico Profissional</span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
            
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[30px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-600 group-hover:border-violet-500 group-hover:scale-110 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-violet-500 transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                  
                  {/* Header: Company, Role & Period */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-0.5">
                        <Building2 size={14} className="text-zinc-400 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed my-3">
                    {exp.description}
                  </p>

                  {/* Achievements bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 leading-normal">
                        <ChevronRight size={14} className="text-violet-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Right Column (5 cols): Academic Foundation & Balta.io Mastery */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Education Card */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100 mb-3">
              <GraduationCap size={18} className="text-violet-500" />
              <span>Formação Acadêmica</span>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase font-semibold rounded bg-violet-100 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/60">
                  {education.status}
                </span>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {education.period}
                </span>
              </div>

              <h3 className="text-base font-bold text-zinc-950 dark:text-zinc-50 mb-1">
                {education.degree}
              </h3>
              
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                {education.institution}
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                {education.description}
              </p>

              <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Estruturas de Dados</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Algoritmos</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Sistemas Operacionais</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">Redes</span>
              </div>
            </div>
          </div>

          {/* Certifications Card: Balta.io Mastery */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100">
                <Award size={18} className="text-violet-500" />
                <span>Especialização .NET & C#</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Balta.io
              </span>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              
              {/* Card Header & Stats */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {certificationOverview.track}
                  </h4>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {certificationOverview.totalCount} Certificações Concluídas · {certificationOverview.totalHours}
                  </p>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  100% Autenticado
                </span>
              </div>

              {/* Pillars Overview */}
              <div className="grid grid-cols-1 gap-2.5 my-4">
                {certificationOverview.pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-zinc-800/70"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">
                      <span>{pillar.name}</span>
                      <span className="text-[10px] font-mono text-violet-600 dark:text-violet-400">{pillar.tech}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interactive Disclosure Button */}
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="w-full mt-2 py-2.5 px-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-medium font-mono flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>{showAllCerts ? 'Recolher Lista de Certificados' : `Ver todos os ${certificationOverview.totalCount} certificados & links de validação`}</span>
                {showAllCerts ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              {/* Expandable Certificates Full List */}
              {showAllCerts && (
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-2 max-h-[380px] overflow-y-auto pr-1">
                  {certificationOverview.list.map((cert, index) => (
                    <div 
                      key={index}
                      className="p-2.5 rounded-lg bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <div className="font-medium text-zinc-900 dark:text-zinc-100 truncate">
                          {cert.title}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 mt-0.5">
                          <span>{cert.hours}</span>
                          <span>·</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>

                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 p-1.5 rounded text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
                        title="Verificar certificado oficial no Balta.io"
                        aria-label={`Verificar certificado ${cert.title}`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
