import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300 relative selection:bg-violet-500/20 selection:text-violet-400">
      
      {/* Background technical grid pattern */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-60 dark:opacity-40 z-0" />

      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/85 dark:bg-zinc-950/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Identifier */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs tracking-wider shadow-sm group-hover:bg-violet-600 dark:group-hover:bg-violet-500 dark:group-hover:text-white transition-colors">
              GL
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Gabriel S. Lange
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                .NET & Backend Dev
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a 
              href="#about" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Sobre & Stack
            </a>
            <a 
              href="#experience" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Trajetória
            </a>
            <a 
              href="#projects" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
            >
              Projetos
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">4</span>
            </a>
            <a 
              href="#contact" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/GabrielSLange"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Gabriel S. Lange"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-sousa-lange-0265a6272"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Gabriel S. Lange"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>

            <div className="w-[1px] h-4 bg-zinc-300 dark:bg-zinc-800 mx-1" />

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
              title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center">
        <HeroSection />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-950/50 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Gabriel S. Lange · {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Sobre</a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Trajetória</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Contato</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;