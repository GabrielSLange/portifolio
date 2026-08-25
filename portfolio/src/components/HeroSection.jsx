import { ArrowDown, ArrowUpRight, Terminal, Server, ShieldCheck, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Core Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Label (Clean & Professional) */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Disponível para novos projetos & contratos</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08] mb-6">
            Engenharia de software com foco em <span className="underline decoration-violet-500 decoration-2 underline-offset-8">.NET & C#</span>
          </h1>

          {/* Value Proposition Subtext */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
            Olá, eu sou o <strong>Gabriel S. Lange</strong>. Construo sistemas corporativos robustos, arquiteturas SaaS multi-tenant, automações fiscais e esteiras de CI/CD para operações que não podem parar.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all shadow-sm"
            >
              Explorar Projetos
              <ArrowDown size={16} />
            </a>

            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 font-medium text-sm active:scale-[0.98] transition-all"
            >
              Falar Comigo
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Tech Stack Bar */}
          <div className="w-full pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 mb-3">
              Stack Principal & Ambiente
            </div>
            <div className="flex flex-wrap gap-2">
              {['C#', '.NET 10 / 8', 'ASP.NET Core', 'Blazor WASM', 'PostgreSQL', 'Docker', 'Linux VPS', 'CI/CD Actions'].map((item) => (
                <span 
                  key={item} 
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Live Terminal / Engineering Snapshot Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 shadow-xl overflow-hidden font-mono text-xs">
            
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
                <span className="ml-2 text-zinc-400 text-[11px]">gabriel@arch-vps: ~</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                online
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 text-zinc-300 leading-relaxed">
              
              <div>
                <span className="text-violet-400">$</span> dotnet --info
                <div className="text-zinc-400 mt-1 pl-3 border-l border-zinc-800">
                  <p>Runtime: .NET 10.0 / .NET 8.0 LTS</p>
                  <p>Arch: x64 Linux / Containerized</p>
                </div>
              </div>

              <div>
                <span className="text-violet-400">$</span> inspect --focus-areas
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2.5 rounded bg-zinc-950/60 border border-zinc-800/80">
                    <div className="text-zinc-100 font-semibold flex items-center gap-1.5 mb-1">
                      <Server size={13} className="text-violet-400" />
                      Backend & APIs
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal">
                      C#, EF Core, SignalR WebSockets, Multitenancy.
                    </p>
                  </div>

                  <div className="p-2.5 rounded bg-zinc-950/60 border border-zinc-800/80">
                    <div className="text-zinc-100 font-semibold flex items-center gap-1.5 mb-1">
                      <Cpu size={13} className="text-violet-400" />
                      Infra & DevOps
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-normal">
                      VPS Linux, Docker Compose, GitHub Actions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-zinc-400 text-[11px]">
                <span>Status: Pronto para entregas reais</span>
                <span className="text-violet-400 font-medium">GSL // Dev</span>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}