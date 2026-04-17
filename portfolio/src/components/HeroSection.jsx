import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 w-full max-w-4xl mx-auto">
      
      <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 text-sm font-medium border border-sky-200 dark:border-sky-800/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
        </span>
        Disponível para novos desafios
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
        Construindo soluções com <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          Lógica e Eficiência
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
        Olá, eu sou o Gabriel. Sou um Desenvolvedor de Software focado em criar sistemas robustos, automatizar processos e resolver problemas complexos de negócios utilizando o ecossistema C# e .NET.
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a 
          href="https://www.linkedin.com/in/gabriel-sousa-lange-0265a6272" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/25"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        
        <a 
          href="https://github.com/GabrielSLange" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all"
        >
          <FaGithub size={20} />
          GitHub
        </a>

        <a 
          href="mailto:gabriellange845@gmail.com" 
          className="flex items-center justify-center p-3 text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 hover:scale-110 active:scale-95 transition-all bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-xl"
        >
          <Mail size={22} />
        </a>
      </div>
    </section>
  );
}