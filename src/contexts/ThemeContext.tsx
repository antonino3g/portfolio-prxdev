import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-br' | 'en-us';

interface ThemeContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  'pt-br': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.highlights': 'Destaques',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.courses': 'Cursos',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',

    // Hero
    'hero.name': 'Antonino Junior',
    'hero.title': 'Engenheiro de Software Sênior',
    'hero.subtitle': 'Java & Angular · Node.js & React · PostgreSQL · AWS',
    'hero.location': 'Florianópolis, Brasil',
    'hero.download-cv': 'Download Currículo',
    'hero.cv-url': 'https://drive.google.com/file/d/1nJzFFshKdCzdMMgo02WvezSMMLx20EOf/view?usp=sharing',
    'hero.view-projects': 'Ver Projetos',
    'hero.kicker': 'Portfólio · 2026',

    // About
    'about.title': 'Sobre',
    'about.p1': 'Engenheiro de Software com mais de 6 anos de experiência em desenvolvimento Full Stack, com foco na construção de sistemas escaláveis e de alta disponibilidade. Atuo com Java (Spring Boot, Jakarta EE, Hibernate), Angular, Node.js/Express e React/Next.js, com experiência sólida em PostgreSQL, MySQL, Redis, automação com Python e infraestrutura AWS (EC2, Lambda, RDS, Amplify).',
    'about.p2': 'Entusiasta de GNU/Linux e escritor nas horas vagas, mantive um blog pessoal desde 2015 que alcançou mais de 56 mil acessos, onde compartilhava artigos e anotações com a comunidade.',

    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Dados',
    'skills.infra': 'Infra & DevOps',
    'skills.practices': 'Práticas',

    // Highlights
    'highlights.title': 'Destaques',
    'highlights.kicker': 'Reconhecimentos e projetos com impacto',
    'highlights.teaching.title': 'Professor de Programação — TJRR',
    'highlights.teaching.description': 'Atuação na criação de núcleos de automação e capacitação de mais de 20 servidores do Tribunal de Justiça de Roraima, promovendo a democratização do conhecimento em programação.',
    'highlights.teaching.tag': 'Ensino',
    'highlights.lisbon.title': 'Projeto Internacional — ExpoJud Lisboa',
    'highlights.lisbon.description': 'Projeto de automação apresentado em Portugal que agilizou processos de guarda de menores venezuelanos, reduziu custos e liberou servidores para atividades mais complexas.',
    'highlights.lisbon.tag': 'Internacional',
    'highlights.podcast.title': 'Podcast — Gloss Express Brasil',
    'highlights.podcast.description': 'Participação no lançamento da plataforma Mapa de Salões, conectando mais de 15.000 salões e profissionais do setor de beleza.',
    'highlights.podcast.tag': 'Mídia',
    'highlights.awards.title': 'Prêmio de Inovação — TJRR',
    'highlights.awards.description': 'Reconhecimento por excelência técnica e inovação em projetos desenvolvidos para o Tribunal de Justiça de Roraima. 1º lugar em 2023.',
    'highlights.awards.tag': 'Reconhecimento',
    'highlights.readMore': 'Ler matéria',
    'highlights.prev': 'Anterior',
    'highlights.next': 'Próximo',

    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.mapa.title': 'Mapa de Salões',
    'projects.mapa.desc': 'Plataforma que conecta mais de 15.000 salões e profissionais do setor de beleza em nível nacional e internacional.',
    'projects.checkout.title': 'Checkout Proprietário',
    'projects.checkout.desc': 'Sistema de checkout otimizado para alta conversão, processando volume financeiro superior a R$ 10 milhões.',
    'projects.sig.title': 'SIG — Sistema Integrado',
    'projects.sig.desc': 'Ecossistema de gestão centralizada para +28.000 clientes com módulos de CRM, Billing e RBAC.',
    'projects.rpa.title': 'Automação RPA · TJRR',
    'projects.rpa.desc': 'Projeto de automação apresentado em Lisboa que beneficiou +400 famílias migrantes venezuelanas em Roraima.',

    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.achievements': 'Principais conquistas',

    'experience.gloss.position': 'Engenheiro de Software Sênior',
    'experience.gloss.company': 'Gloss Express',
    'experience.gloss.location': 'Florianópolis, SC',
    'experience.gloss.period': 'Jul 2025 — Presente',
    'experience.gloss.description': 'Engenheiro de Software Sênior em equipe multidisciplinar no desenvolvimento Full Stack de soluções escaláveis para o setor de beleza, utilizando Node.js, PostgreSQL e Next.js/React. Participação ativa na arquitetura de sistemas de alta disponibilidade e automação de dados com Python.',
    'experience.gloss.a1': 'Plataforma Mapa de Salões: co-desenvolvimento da plataforma que conecta mais de 15.000 salões e profissionais em nível nacional e internacional.',
    'experience.gloss.a2': 'Checkout Proprietário: sistema de checkout otimizado para alta conversão, processando volume financeiro superior a R$ 10 milhões.',
    'experience.gloss.a3': 'SIG — Sistema Integrado Gloss Express: ecossistema de gestão centralizada para +28.000 clientes com módulos de CRM, Billing e RBAC.',
    'experience.gloss.a4': 'Automação de processos de ETL e pipelines de dados com Python (Selenium, Pandas).',

    'experience.mid.position': 'Desenvolvedor Full Stack Java/Angular',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis, SC',
    'experience.mid.period': 'Fev — Jul 2025',
    'experience.mid.description': 'Desenvolvimento backend em Java EE, MySQL e Hibernate, com criação de Web Services e APIs REST para o ecossistema Portal Postal. Atuação no frontend com Angular e manutenção do app Portal Postal Coletas em Flutter 3.16+, com publicação na Play Store.',
    'experience.mid.a1': 'Integração da API Coletas dos Correios como nova funcionalidade Portal Postal.',
    'experience.mid.a2': 'Publicação do app Portal Postal Coletas em Flutter na Google Play Store.',
    'experience.mid.a3': 'Criação de relatórios gerenciais com JasperReports e aplicações desktop em Java Swing.',

    'experience.java.position': 'Desenvolvedor Backend Java',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis, SC',
    'experience.java.period': 'Nov 2024 — Mar 2025',
    'experience.java.description': 'Desenvolvimento de APIs REST utilizando Java 17+, Jakarta EE e Hibernate, com integrações envolvendo RabbitMQ, Redis e documentação via OpenAPI. Testes automatizados com JUnit e deploy em servidores WildFly/JBoss.',
    'experience.java.a1': 'Endpoints para motor de crédito voltado à tomada de decisões automatizadas para concessão a clientes.',
    'experience.java.a2': 'Implementação de testes automatizados com JUnit e gerenciamento de deploy em servidores WildFly/JBoss.',

    'experience.sondaManager.position': 'Gerente de Projetos e Operações RPA',
    'experience.sondaManager.company': 'SONDA',
    'experience.sondaManager.location': 'Boa Vista, RR',
    'experience.sondaManager.period': 'Jan — Set 2024',
    'experience.sondaManager.description': 'Liderança de equipes de desenvolvimento de software e automação RPA, com foco na comunicação clara e no alinhamento entre times técnicos e stakeholders.',
    'experience.sondaManager.a1': 'Professor de Introdução à Programação no Tribunal de Justiça de Roraima (TJRR).',
    'experience.sondaManager.a2': '1º lugar no Prêmio de Inovação 2023 — TJRR.',
    'experience.sondaManager.a3': 'Coordenação de entregas de projetos de automação RPA com impacto direto na eficiência operacional.',

    'experience.sondaDev.position': 'Desenvolvedor Full Stack',
    'experience.sondaDev.company': 'SONDA',
    'experience.sondaDev.location': 'Boa Vista, RR',
    'experience.sondaDev.period': 'Mar 2020 — Dez 2023',
    'experience.sondaDev.description': 'Desenvolvimento de APIs RESTful utilizando Java (MVC, JSF, JPA, Hibernate), PostgreSQL e Maven, além de Node.js/Express integradas ao Orchestrator UiPath. Atuação com metodologias ágeis (Scrum, Kanban).',
    'experience.sondaDev.a1': 'Projeto de automação RPA com impacto social que beneficiou mais de 400 famílias migrantes venezuelanas em Roraima, com reconhecimento internacional e apresentação em Lisboa (2023).',
    'experience.sondaDev.a2': 'Arquitetura e desenvolvimento de APIs RESTful integradas ao Orchestrator UiPath para automação de processos judiciais.',
    'experience.sondaDev.a3': 'Aplicação e promoção de metodologias ágeis no time.',

    'experience.flutterPr.position': 'Desenvolvedor Flutter',
    'experience.flutterPr.company': 'Brain XCode',
    'experience.flutterPr.location': 'Curitiba, PR',
    'experience.flutterPr.period': 'Out 2020 — Abr 2022',
    'experience.flutterPr.description': 'Projetos mobile com Flutter (Dart, Mockito, MobX, Cubit, Bloc), aplicando Clean Architecture e SOLID, em equipe remota colaborativa.',
    'experience.flutterPr.a1': 'Primeiro projeto remoto colaborativo com equipe distribuída, utilizando Flutter, Clean Architecture, SOLID e testes automatizados.',

    // Education
    'education.title': 'Formação Acadêmica',
    'education.ifrr.institution': 'IFRR — Instituto Federal de Roraima',
    'education.ifrr.degree': 'Curso Superior de Tecnologia (CST)',
    'education.ifrr.field': 'Análise e Desenvolvimento de Sistemas',
    'education.ifrr.period': '2013 — 2016',
    'education.ibf.institution': 'IBF Pós — Instituto Brasileiro de Formação',
    'education.ibf.degree': 'Pós-graduação Lato Sensu',
    'education.ibf.field': 'Desenvolvimento de Aplicações para Dispositivos Móveis',
    'education.ibf.period': '2020',

    // Courses
    'courses.title': 'Cursos',
    'courses.kicker': 'Formação contínua e aprofundamento técnico',
    'courses.view': 'Exibir credencial',

    // Certifications
    'certs.title': 'Certificações',
    'certs.kicker': 'Roadmap AWS — 2026',
    'certs.status': 'Em preparação',
    'certs.h1': 'Primeiro semestre · 2026',
    'certs.h2': 'Segundo semestre · 2026',

    // Contact
    'contact.title': 'Contato',
    'contact.kicker': 'Aberto a novos projetos e oportunidades',
    'contact.email': 'E-mail',
    'contact.emailValue': 'antonino.praxedes@gmail.com',
    'contact.location': 'Localização',
    'contact.locationValue': 'Florianópolis, SC — Brasil',
    'contact.cta': 'Enviar mensagem',

    // Footer
    'footer.role': 'Engenheiro de Software Sênior',
    'footer.rights': '© 2026 Antonino Junior. Todos os direitos reservados.',

    // Em construção
    'underConstruction.title': 'Página em construção',
    'underConstruction.subtitle': 'Esta página está sendo preparada. Volte em breve.',
    'underConstruction.back': 'Voltar ao portfólio',
  },

  'en-us': {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.highlights': 'Highlights',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.courses': 'Courses',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    // Hero
    'hero.name': 'Antonino Junior',
    'hero.title': 'Senior Software Engineer',
    'hero.subtitle': 'Java & Angular · Node.js & React · PostgreSQL · AWS',
    'hero.location': 'Florianópolis, Brazil',
    'hero.download-cv': 'Download Resume',
    'hero.cv-url': 'https://drive.google.com/file/d/1F0u6Rb44rwu-xHi_dO1USdzjYn2m3jh_/view?usp=sharing',
    'hero.view-projects': 'View Projects',
    'hero.kicker': 'Portfolio · 2026',

    // About
    'about.title': 'About',
    'about.p1': "Software Engineer with over 6 years of experience in Full Stack development, focused on building scalable and high-availability systems. I work with Java (Spring Boot, Jakarta EE, Hibernate), Angular, Node.js/Express, and React/Next.js, with solid experience in PostgreSQL, MySQL, Redis, Python automation, and AWS infrastructure (EC2, Lambda, RDS, Amplify).",
    'about.p2': 'A GNU/Linux enthusiast and writer in my spare time, I maintained a personal blog since 2015 that reached over 56k views, where I shared technical articles and notes with the community.',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.data': 'Data',
    'skills.infra': 'Infra & DevOps',
    'skills.practices': 'Practices',

    // Highlights
    'highlights.title': 'Highlights',
    'highlights.kicker': 'Recognitions and high-impact projects',
    'highlights.teaching.title': 'Programming Instructor — TJRR',
    'highlights.teaching.description': 'Led the creation of automation hubs and trained over 20 public servants at the Court of Justice of Roraima, promoting the democratization of programming knowledge.',
    'highlights.teaching.tag': 'Teaching',
    'highlights.lisbon.title': 'International Project — ExpoJud Lisbon',
    'highlights.lisbon.description': 'Automation project presented in Portugal that streamlined custody processes for Venezuelan minors, reducing costs and freeing up staff for more complex activities.',
    'highlights.lisbon.tag': 'International',
    'highlights.podcast.title': 'Podcast — Gloss Express Brasil',
    'highlights.podcast.description': 'Featured at the launch of the Salon Map platform, connecting over 15,000 salons and beauty professionals.',
    'highlights.podcast.tag': 'Media',
    'highlights.awards.title': 'Innovation Award — TJRR',
    'highlights.awards.description': 'Recognition for technical excellence and innovation in projects developed for the Court of Justice of Roraima. 1st place in 2023.',
    'highlights.awards.tag': 'Recognition',
    'highlights.readMore': 'Read article',
    'highlights.prev': 'Previous',
    'highlights.next': 'Next',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.mapa.title': 'Salon Map',
    'projects.mapa.desc': 'Platform connecting over 15,000 salons and beauty professionals nationally and internationally.',
    'projects.checkout.title': 'Proprietary Checkout',
    'projects.checkout.desc': 'High-conversion checkout system processing financial volume exceeding R$ 10 million.',
    'projects.sig.title': 'SIG — Integrated System',
    'projects.sig.desc': 'Centralized management ecosystem for 28,000+ clients with CRM, Billing, and RBAC modules.',
    'projects.rpa.title': 'RPA Automation · TJRR',
    'projects.rpa.desc': 'Automation project presented in Lisbon that benefited 400+ Venezuelan migrant families in Roraima.',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.achievements': 'Main achievements',

    'experience.gloss.position': 'Senior Software Engineer',
    'experience.gloss.company': 'Gloss Express',
    'experience.gloss.location': 'Florianópolis, SC',
    'experience.gloss.period': 'Jul 2025 — Present',
    'experience.gloss.description': 'Senior Software Engineer in a multidisciplinary team, developing Full Stack scalable solutions for the beauty industry using Node.js, PostgreSQL, and Next.js/React. Active participation in high-availability system architecture and data process automation with Python.',
    'experience.gloss.a1': 'Salon Map Platform: co-developed the platform connecting over 15,000 salons and professionals nationally and internationally.',
    'experience.gloss.a2': 'Proprietary Checkout: built a high-conversion checkout system, processing financial volume exceeding R$ 10 million.',
    'experience.gloss.a3': 'SIG — Gloss Express Integrated System: centralized management ecosystem for 28,000+ clients with CRM, Billing, and RBAC modules.',
    'experience.gloss.a4': 'ETL process automation and data pipelines with Python (Selenium, Pandas).',

    'experience.mid.position': 'Java/Angular Full Stack Developer',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis, SC',
    'experience.mid.period': 'Feb — Jul 2025',
    'experience.mid.description': 'Backend development using Java EE, MySQL, and Hibernate, with Web Services and REST APIs creation for the Portal Postal ecosystem. Frontend work with Angular and maintenance of the Portal Postal Coletas app in Flutter 3.16+, with Play Store publication.',
    'experience.mid.a1': 'Integration of the Post Office Collections API as a new Portal Postal feature.',
    'experience.mid.a2': 'Publication of the Portal Postal Coletas app in Flutter on the Google Play Store.',
    'experience.mid.a3': 'Management reports with JasperReports and desktop application development in Java Swing.',

    'experience.java.position': 'Java Backend Developer',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis, SC',
    'experience.java.period': 'Nov 2024 — Mar 2025',
    'experience.java.description': 'REST API development using Java 17+, Jakarta EE, and Hibernate, with integrations involving RabbitMQ, Redis, and OpenAPI documentation. Automated testing (JUnit) and application deployment on WildFly/JBoss servers.',
    'experience.java.a1': 'Endpoints for a credit engine supporting automated decision-making for customer credit approval.',
    'experience.java.a2': 'Automated testing with JUnit and deployment management on WildFly/JBoss servers.',

    'experience.sondaManager.position': 'RPA Projects and Operations Manager',
    'experience.sondaManager.company': 'SONDA',
    'experience.sondaManager.location': 'Boa Vista, RR',
    'experience.sondaManager.period': 'Jan — Sep 2024',
    'experience.sondaManager.description': 'Led software development and RPA automation teams, focused on clear communication and alignment between technical teams and stakeholders.',
    'experience.sondaManager.a1': 'Programming Instructor at the Court of Justice of Roraima (TJRR).',
    'experience.sondaManager.a2': '1st place in the 2023 Innovation Award — TJRR.',
    'experience.sondaManager.a3': 'Coordinated RPA automation project deliveries with direct impact on operational efficiency.',

    'experience.sondaDev.position': 'Full Stack Developer',
    'experience.sondaDev.company': 'SONDA',
    'experience.sondaDev.location': 'Boa Vista, RR',
    'experience.sondaDev.period': 'Mar 2020 — Dec 2023',
    'experience.sondaDev.description': 'Developed RESTful APIs using Java (MVC, JSF, JPA, Hibernate), PostgreSQL, and Maven, as well as Node.js/Express integrated with UiPath Orchestrator. Experienced in agile methodologies (Scrum, Kanban).',
    'experience.sondaDev.a1': 'RPA automation project with social impact that benefited over 400 Venezuelan migrant families in Roraima, with international recognition and presentation in Lisbon (2023).',
    'experience.sondaDev.a2': 'Architecture and development of RESTful APIs integrated with UiPath Orchestrator for judicial process automation.',
    'experience.sondaDev.a3': 'Implementation of agile methodologies within the team.',

    'experience.flutterPr.position': 'Flutter Developer',
    'experience.flutterPr.company': 'Brain XCode',
    'experience.flutterPr.location': 'Curitiba, PR',
    'experience.flutterPr.period': 'Oct 2020 — Apr 2022',
    'experience.flutterPr.description': 'Mobile project development using Flutter (Dart, Mockito, MobX, Cubit, Bloc), applying Clean Architecture and SOLID principles, in a collaborative remote team.',
    'experience.flutterPr.a1': 'First collaborative remote project with a distributed team, using Flutter, Clean Architecture, SOLID, and automated testing.',

    // Education
    'education.title': 'Education',
    'education.ifrr.institution': 'IFRR — Federal Institute of Roraima',
    'education.ifrr.degree': 'Technology Degree (CST)',
    'education.ifrr.field': 'Systems Analysis and Development',
    'education.ifrr.period': '2013 — 2016',
    'education.ibf.institution': 'IBF Pós — Brazilian Institute of Training',
    'education.ibf.degree': 'Postgraduate Specialization',
    'education.ibf.field': 'Mobile Application Development',
    'education.ibf.period': '2020',

    // Courses
    'courses.title': 'Courses',
    'courses.kicker': 'Continuous learning and technical deepening',
    'courses.view': 'View credential',

    // Certifications
    'certs.title': 'Certifications',
    'certs.kicker': 'AWS Roadmap — 2026',
    'certs.status': 'In preparation',
    'certs.h1': 'First half · 2026',
    'certs.h2': 'Second half · 2026',

    // Contact
    'contact.title': 'Contact',
    'contact.kicker': 'Open to new projects and opportunities',
    'contact.email': 'Email',
    'contact.emailValue': 'antonino.praxedes@gmail.com',
    'contact.location': 'Location',
    'contact.locationValue': 'Florianópolis, SC — Brazil',
    'contact.cta': 'Send message',

    // Footer
    'footer.role': 'Senior Software Engineer',
    'footer.rights': '© 2026 Antonino Junior. All rights reserved.',

    // Under construction
    'underConstruction.title': 'Page under construction',
    'underConstruction.subtitle': 'This page is being prepared. Come back soon.',
    'underConstruction.back': 'Back to portfolio',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-br');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage === 'pt-br' || savedLanguage === 'en-us') {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt-br' ? 'en-us' : 'pt-br'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <ThemeContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
