import { Server, Terminal, Shield, FileCheck, Layers, Workflow } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
            01 // Perfil & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-1">
            Engenharia Prática para Regras de Negócio
          </h2>
        </div>
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
          C# · .NET · DevOps · Multitenancy
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Context & Philosophy */}
        <div className="lg:col-span-5 space-y-5 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 font-mono mb-2 flex items-center gap-2">
              <Shield size={16} className="text-violet-500" />
              Visão de Negócio & Setor Fiscal
            </h3>
            <p className="text-sm">
              Minha experiência com operações contábeis e fiscais me deu clareza sobre o impacto de falhas operacionais em empresas. Não crio apenas código: construo sistemas desenhados para mitigar riscos, automatizar rotinas fiscais e garantir conformidade com a legislação.
            </p>
          </div>

          <p>
            No backend, utilizo o ecossistema <strong>C# e .NET (8/10)</strong> para estruturar APIs seguras, padrões de multitenancy e comunicação em tempo real via WebSockets (SignalR).
          </p>

          <p>
            Acredito que o ciclo de vida do software inclui a infraestrutura. Gerencio ambientes <strong>Linux (VPS)</strong>, contêineres <strong>Docker</strong> e esteiras de <strong>CI/CD com GitHub Actions</strong> para garantir deploys previsíveis e monitorados.
          </p>
        </div>

        {/* Right Side: Asymmetric Technical Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Pillar 1: Backend */}
          <div className="p-5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors sm:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-violet-600 dark:text-violet-400">
                  <Server size={18} />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                  Backend & Arquitetura .NET
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Core</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              APIs RESTful em ASP.NET Core, Entity Framework Core, PostgreSQL, autenticação JWT/RBAC e comunicação assíncrona com SignalR.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">C#</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">.NET 10/8</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">SignalR</span>
            </div>
          </div>

          {/* Pillar 2: DevOps */}
          <div className="p-5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400">
                <Workflow size={18} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                DevOps & Infra Linux
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              Deploy contínuo em VPS Linux, Docker Compose e automação de pipelines no GitHub Actions.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Linux VPS</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Docker</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">CI/CD</span>
            </div>
          </div>

          {/* Pillar 3: Frontend & Automação */}
          <div className="p-5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sky-600 dark:text-sky-400">
                <Layers size={18} />
              </div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                Frontend & Automações
              </h3>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              Interfaces com Blazor WASM e React, mobile com Expo, além de RPAs em Python para portais legados.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Blazor</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">React</span>
              <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">Python RPA</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}