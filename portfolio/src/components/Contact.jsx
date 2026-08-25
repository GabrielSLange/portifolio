import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail, ArrowUpRight, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-zinc-200 dark:border-zinc-800/80">
      
      <div className="rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-8 sm:p-12">
        
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400">
            03 // Próximos Passos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-2 mb-4">
            Vamos conversar sobre tecnologia e oportunidades?
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Estou aberto a oportunidades profissionais em engenharia de software (.NET / C#), desenvolvimento de sistemas corporativos, projetos de microsserviços e automações fiscais.
          </p>
        </div>

        {/* Action Grid */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          
          <a
            href="https://www.linkedin.com/in/gabriel-sousa-lange-0265a6272"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-medium text-sm hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] transition-all shadow-sm"
          >
            <FaLinkedin size={18} />
            Conectar no LinkedIn
            <ArrowUpRight size={15} />
          </a>

          <a
            href="https://wa.me/5562992491057"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm active:scale-[0.98] transition-all shadow-sm shadow-emerald-900/20"
          >
            <FaWhatsapp size={18} />
            Conversa no WhatsApp
            <ArrowUpRight size={15} />
          </a>

          <a
            href="mailto:gabriellange845@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-750 active:scale-[0.98] transition-all"
          >
            <Mail size={18} />
            gabriellange845@gmail.com
          </a>

        </div>

        {/* Meta / Timezone Info */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-zinc-400" />
            <span>Goiás, Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-zinc-400" />
            <span>Fuso Horário: BRT (UTC-3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Resposta rápida por e-mail ou WhatsApp</span>
          </div>
        </div>

      </div>

    </section>
  );
}