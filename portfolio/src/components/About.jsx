import { FaServer, FaCode, FaLaptopCode, FaCodeBranch } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white border-l-4 border-sky-500 pl-4">
            Sobre Mim
          </h2>
          <div className="text-lg text-slate-600 dark:text-slate-400 space-y-6 leading-relaxed">
            <p>
              Sou um desenvolvedor de software com forte foco em resultados práticos. Acredito que a tecnologia deve ser usada para resolver dores reais e otimizar processos de negócios, transformando burocracia em eficiência.
            </p>
            <p>
              Minha vivência direta no setor contábil me deu uma visão clara sobre as necessidades das empresas. É por isso que foco na criação de sistemas de gestão, automações e soluções que realmente rodem no dia a dia das operações.
            </p>
            <p>
              Além do desenvolvimento da arquitetura e das regras de negócio com C# e .NET, tenho forte interesse pela cultura DevOps. Utilizo ativamente ambientes Linux (VPS) e construo esteiras de CI/CD com GitHub Actions para automatizar meus deploys, buscando sempre aprofundar meus conhecimentos em infraestrutura.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <FaServer size={32} className="text-sky-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Backend & APIs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Arquitetura robusta utilizando C# e .NET. Foco total em regras de negócio, segurança e performance.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <FaCode size={32} className="text-sky-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Frontend Prático</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Criação de interfaces diretas e funcionais com Blazor WebAssembly, React e Expo.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <FaCodeBranch size={32} className="text-sky-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Infra & CI/CD</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Deploy prático em VPS Linux e automação de entregas contínuas utilizando GitHub Actions.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <FaLaptopCode size={32} className="text-sky-500 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visão de Produto</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Experiência na construção de aplicações SaaS e MVPs orientados às necessidades do mercado corporativo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}