export const projects = [
  {
    id: 'evolua-ponto',
    title: 'Evolua Ponto',
    description: 'Sistema completo de controle de ponto eletrônico aderente à legislação brasileira (Portaria 671 e eSocial). Desenvolvido para garantir segurança jurídica às empresas, a aplicação conta com registro de ponto via geolocalização, geração de comprovantes em PDF com assinatura digital (Hash SHA-256) e exportação de relatórios fiscais (AFD/AEJ).',
    tech: ['C#', '.NET 8', 'React Native', 'Expo', 'PostgreSQL', 'Docker'],
    category: 'MVP / Mobile & Web',
    image: '', 
    github: '', 
    demo: '', 
    highlights: [
      'Conformidade legal com regras do Ministério do Trabalho',
      'Geolocalização em tempo real e auditoria de IP',
      'Geração nativa de PDFs assinados no backend',
      'Arquitetura Multitenant com controle de acesso (RBAC)'
    ]
  },
  {
    id: 'evolua-checkin',
    title: 'Evolua Check-in',
    description: 'Plataforma SaaS multi-tenant para gestão de presença em eventos. Substitui listas de papel por um check-in digital ágil, utilizando WebSockets para garantir que múltiplos fiscais operem dispositivos simultaneamente com o status de presença sincronizado em tempo real.',
    tech: ['C#', '.NET 10', 'Blazor WASM', 'SignalR', 'PostgreSQL', 'Docker'],
    category: 'SaaS / Web',
    image: '',
    github: '',
    demo: '',
    highlights: [
      'Sincronização em tempo real via WebSockets (SignalR)',
      'Arquitetura multi-tenant para isolamento de dados institucionais',
      'Responsividade Dual-View (Cards no mobile, Tabelas no desktop)',
      'Geração e exportação nativa de relatórios em PDF e Excel'
    ]
  },
  {
    id: 'evolua-soft',
    title: 'EvoluaSoft',
    description: 'Plataforma SaaS multi-tenant focada na gestão estratégica de escritórios de contabilidade. Centraliza o cadastro de clientes, automatiza a geração de contratos em PDF personalizados e gerencia ativamente os vencimentos de certificados digitais (A1/A3) através de um dashboard inteligente.',
    tech: ['C#', '.NET 10', 'Blazor WASM', 'Google Drive API', 'PostgreSQL', 'Docker'],
    category: 'SaaS / Web',
    image: '',
    github: '',
    demo: '',
    highlights: [
      'Integração nativa com Google Drive API para armazenamento seguro',
      'Sistema inteligente de alertas para certificados próximos do vencimento',
      'Geração server-side de contratos em PDF (PuppeteerSharp)',
      'Arquitetura Multi-tenant completa com perfis de acesso'
    ]
  },
  {
    id: 'automacao-dms',
    title: 'Robô ISSNet (Automação DMS)',
    description: 'Software RPA (Robotic Process Automation) desktop desenvolvido para automatizar o fechamento de declarações fiscais de serviços no portal da prefeitura. O robô reduz drasticamente o trabalho manual navegando autonomamente por sistemas legados e lidando com barreiras anti-bot.',
    tech: ['Python', 'DrissionPage', 'Tkinter', 'Pandas'],
    category: 'Automação / RPA',
    image: '',
    github: '',
    demo: '',
    highlights: [
      'Bypass de proteções Cloudflare utilizando DrissionPage (Chromium)',
      'Sistema de duas fases: login via procuração e fallback para Certificado Digital',
      'Interface gráfica desktop (GUI) construída nativamente com Tkinter',
      'Geração automatizada de relatórios de execução em PDF'
    ]
  }
];