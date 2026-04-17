import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
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
    <div className="min-h-screen transition-colors duration-500 bg-sky-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
      
      <header className="p-6 flex justify-end max-w-6xl mx-auto w-full absolute top-0 right-0 left-0">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="relative p-2 rounded-full bg-white text-sky-600 shadow-sm border border-sky-100 hover:bg-sky-100 dark:bg-slate-800 dark:text-sky-400 dark:border-slate-700 dark:hover:bg-slate-700 transition-all overflow-hidden flex items-center justify-center w-12 h-12 z-50"
          title="Alternar Tema"
        >
          <Sun 
            className={`absolute transition-all duration-500 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} 
            size={24} 
          />
          <Moon 
            className={`absolute transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} 
            size={24} 
          />
        </button>
      </header>

      <main className="flex flex-col items-center">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Gabriel S. Lange. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;