import { FaLinkedin, FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 w-full max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">
        Pronto para o próximo passo?
      </h2>
      
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
        Estarei disponível para novas oportunidades e desafios focados em engenharia de software a partir de julho. Se você busca um desenvolvedor focado em resolver problemas reais com arquiteturas modernas, vamos conversar.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/gabriel-sousa-lange-0265a6272"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/30 w-full sm:w-auto justify-center"
        >
          <FaLinkedin size={24} />
          Chamar no LinkedIn
        </a>

        <a
          href="https://wa.me/5562992491057"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/30 w-full sm:w-auto justify-center"
        >
          <FaWhatsapp size={24} />
          Mensagem Rápida
        </a>
      </div>
    </section>
  );
}