
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
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.highlights': 'Destaques',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.education': 'Formação',
    'nav.certifications': 'Certificações',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.about': 'Sobre',
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Antonino Junior',
    'hero.title': 'Engenheiro de Software Sênior | Java & Angular | Node.js & ReactJS | MySQL | PostgreSQL | AWS',
    'hero.download-cv': 'Download Currículo',
    'hero.cv-url': 'https://drive.google.com/file/d/1nJzFFshKdCzdMMgo02WvezSMMLx20EOf/view?usp=sharing',
    'hero.view-projects': 'Ver Projetos',

    'hero.featurecc': 'Clean Code',
    'hero.featurecc.ph': 'Código limpo e manutenível',
    'hero.featureino': 'Inovação',
    'hero.featureino.ph': 'Soluções criativas',
    'hero.featureded': 'Dedicação',
    'hero.featureded.ph': 'Comprometimento total',

    // About
    'about.text.p1': 'Engenheiro de Software com mais de 6 anos de experiência em desenvolvimento Full Stack, com foco na construção de sistemas escaláveis e de alta disponibilidade. Atuo com Java (Spring Boot, Jakarta EE, Hibernate), Angular, Node.js/Express e React/Next.js, com experiência sólida em PostgreSQL, MySQL, Redis, automação com Python e infraestrutura AWS (EC2, Lambda, RDS, Amplify).',
    'about.text.p2': 'Entusiasta de GNU/Linux e escritor nas horas vagas, mantinha um ',
    'about.text.p3': 'desde 2015 que alcançou mais de 56k acessos, onde compartilhava artigos e anotações com a comunidade.',

    // Skills
    'skills.title': 'Habilidades Técnicas',

    // Highlights Section
    'highlights.title': 'Destaques',
    'highlights.metrics.years': 'Anos de Experiência',
    'highlights.metrics.transactions': 'Processados em Transações',
    'highlights.metrics.salons': 'Salões Conectados',
    'highlights.metrics.clients': 'Clientes Gerenciados',
    'highlights.teaching.title': 'Professor de Programação',
    'highlights.teaching.description': 'Atuação na criação de núcleos de automação e capacitação de mais de 20 servidores do TJRR, promovendo a democratização do conhecimento em programação.',
    'highlights.lisbon.title': 'Projeto Internacional - Lisboa',
    'highlights.lisbon.description': 'Projeto de automação apresentado no ExpoJud Portugal agiliza processos de guarda de menores venezuelanos, reduz custos e libera servidores para atividades mais complexas.',
    'highlights.podcast.title': 'Podcast - Lançamento de Produto',
    'highlights.podcast.description': 'Participação no Podcast Gloss Express Brasil no lançamento da plataforma Mapa de Salões, conectando mais de 15.000 salões e profissionais do setor de beleza.',
    'highlights.awards.title': 'Premiações TJRR',
    'highlights.awards.description': 'Reconhecimento por excelência técnica e inovação em projetos desenvolvidos para o Tribunal de Justiça de Roraima.',
    'highlights.view article': 'Ver matéria',

    // Projects
    'projects.title': 'Projetos em Destaque',

    // Experience Section
    'experience.title': 'Experiência Profissional',
    'experience.achievements': 'Principais conquistas:',

    // Gloss Express
    'experience.gloss.position': 'Engenheiro de Software Sênior',
    'experience.gloss.company': 'Gloss Express',
    'experience.gloss.location': 'Florianópolis - SC',
    'experience.gloss.period': 'Jul/2025 - Presente',
    'experience.gloss.description': 'Atuação como Engenheiro de Software Sênior em equipe multidisciplinar no desenvolvimento Full Stack de soluções escaláveis para o setor de beleza, utilizando Node.js, PostgreSQL e Next.js/React. Participação ativa na arquitetura de sistemas de alta disponibilidade e na automação de processos de dados com Python.',
    'experience.gloss.achievements.1': 'Plataforma Mapa de Salões: co-desenvolvimento da plataforma que conecta mais de 15.000 salões e profissionais em nível nacional e internacional.',
    'experience.gloss.achievements.2': 'Checkout Proprietário: sistema de checkout otimizado para alta conversão, processando volume financeiro superior a R$ 10 milhões.',
    'experience.gloss.achievements.3': 'SIG – Sistema Integrado Gloss Express: ecossistema de gestão centralizada para +28.000 clientes com módulos de CRM, Billing e RBAC.',
    'experience.gloss.achievements.4': 'Automação de processos de ETL e pipelines de dados com Python (Selenium, Pandas).',

    // SCC4
    'experience.mid.position': 'Desenvolvedor Full Stack Java/Angular Pleno',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis - SC',
    'experience.mid.period': 'Fev/2025 - Jul/2025',
    'experience.mid.description': 'Desenvolvimento backend em Java EE, MySQL e Hibernate, com criação de Web Services e APIs REST para o ecossistema Portal Postal. Atuação no frontend com Angular e na manutenção do app Portal Postal Coletas em Flutter 3.16+, com publicação na Play Store.',
    'experience.mid.achievements.1': 'Integração da API Coletas dos Correios como nova funcionalidade Portal Postal (Java/Angular).',
    'experience.mid.achievements.2': 'Publicação do app Portal Postal Coletas em Flutter na Google Play Store, com documentação técnica para o time de devs.',
    'experience.mid.achievements.3': 'Criação de relatórios gerenciais com JasperReports e desenvolvimento de aplicações desktop em Java Swing.',

    // ToolsData
    'experience.java.position': 'Desenvolvedor Backend Java',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis - SC',
    'experience.java.period': 'Nov/2024 - Mar/2025',
    'experience.java.description': 'Desenvolvimento de APIs REST utilizando Java 17+, Jakarta EE e Hibernate, com integrações envolvendo RabbitMQ, Redis e documentação via OpenAPI. Atuação com testes automatizados (JUnit) e deploy de aplicações em servidores WildFly/JBoss.',
    'experience.java.achievements.1': 'Integração com diversas APIs externas, desenvolvendo endpoints para um motor de crédito voltado à tomada de decisões automatizadas para concessão a clientes.',
    'experience.java.achievements.2': 'Implementação de testes automatizados com JUnit e gerenciamento de deploy em servidores WildFly/JBoss.',

    // Sonda Manager
    'experience.sondaManager.position': 'Gerente de Projetos e Operações RPA',
    'experience.sondaManager.company': 'SONDA',
    'experience.sondaManager.location': 'Boa Vista - RR',
    'experience.sondaManager.period': 'Jan/2024 - Set/2024',
    'experience.sondaManager.description': 'Liderança de equipes de desenvolvimento de software e automação RPA, com foco na comunicação clara e no alinhamento entre times técnicos e stakeholders, facilitando a colaboração e a tomada de decisões.',
    'experience.sondaManager.achievements.1': 'Professor de Introdução à Programação no Tribunal de Justiça de Roraima (TJRR) - 2024.',
    'experience.sondaManager.achievements.2': '1º lugar no Prêmio de Inovação 2023 – TJRR.',
    'experience.sondaManager.achievements.3': 'Coordenação de entregas de projetos de automação RPA com impacto direto na eficiência operacional.',

    // Sonda Dev
    'experience.sondaDev.position': 'Desenvolvedor Full Stack',
    'experience.sondaDev.company': 'SONDA',
    'experience.sondaDev.location': 'Boa Vista - RR',
    'experience.sondaDev.period': 'Mar/2020 - Dez/2023',
    'experience.sondaDev.description': 'Desenvolvimento de APIs RESTful utilizando Java (MVC, JSF, JPA, Hibernate), PostgreSQL e Maven, além de Node.js/Express integradas ao Orchestrator UiPath. Atuação com metodologias ágeis (Scrum, Kanban) e gerenciamento de tarefas via Monday.',
    'experience.sondaDev.achievements.1': 'Projeto de automação RPA com impacto social que beneficiou mais de 400 famílias migrantes venezuelanas em Roraima, com reconhecimento internacional e apresentação em Lisboa (2023).',
    'experience.sondaDev.achievements.2': 'Arquitetura e desenvolvimento de APIs RESTful integradas ao Orchestrator UiPath para automação de processos judiciais.',
    'experience.sondaDev.achievements.3': 'Aplicação e promoção de metodologias ágeis (Scrum, Kanban) no time.',

    // Flutter Curitiba
    'experience.flutterPr.position': 'Desenvolvedor Flutter',
    'experience.flutterPr.company': 'Brain XCode',
    'experience.flutterPr.location': 'Curitiba - PR',
    'experience.flutterPr.period': 'Out/2020 - Abr/2022',
    'experience.flutterPr.description': 'Desenvolvimento de projetos mobile com Flutter (Dart, Mockito, MobX, Cubit, Bloc), aplicando Clean Architecture e SOLID, em equipe remota colaborativa.',
    'experience.flutterPr.achievements.1': 'Primeiro projeto remoto colaborativo com equipe distribuída, utilizando Flutter, Clean Architecture, SOLID e testes automatizados.',

    // Education Section
    'education.title': 'Formação Acadêmica',
    'education.ifrr.institution': 'IFRR - Instituto Federal de Roraima',
    'education.ifrr.degree': 'Curso Superior de Tecnologia (CST)',
    'education.ifrr.field': 'Análise e Desenvolvimento de Sistemas',
    'education.ifrr.period': '2013 - 2016',
    'education.ibf.institution': 'IBF Pós - Instituto Brasileiro de Formação',
    'education.ibf.degree': 'Pós-graduação Lato Sensu',
    'education.ibf.field': 'Desenvolvimento de Aplicações para Dispositivos Móveis',
    'education.ibf.period': '2020',

    // Certifications Section
    'certifications.title': 'Certificações',
    'certifications.flutter.name': 'MasterClass Flutter',
    'certifications.qa.name': 'Quality Assurance: plano de testes e gestão de bugs',
    'certifications.git.name': 'Git e Github: estratégias de ramificação, Conflitos e Pull Requests',

    // Contact Section
    'contact': 'Entre em Contato',
    'contact.h3': 'Vamos conversar!',
    'contact.p': 'Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato!',
    'contact.email': 'E-mail',
    'contact.email.ph': 'antonino.praxedes@gmail.com',
    'contact.location': 'Localização',
    'contact.sendMensseger.name': 'Nome',
    'contact.sendMensseger.name.ph': 'Seu nome',
    'contact.sendMensseger.email': 'Email',
    'contact.sendMensseger.email.ph': 'seu@email.com',
    'contact.sendMensseger.subject': 'Assunto',
    'contact.sendMensseger.subject.ph': 'Assunto da mensagem',
    'contact.sendMensseger.mensseger': 'Mensagem',
    'contact.sendMensseger.mensseger.ph': 'Sua mensagem',
    'contact.sendMensseger.btn': 'Enviar Mensagem',
    'contact.toast.title': 'Mensagem enviada!',
    'contact.toast.msg': 'Obrigado pelo contato. Responderei em breve!',

    // Footer
    'footer.stack': 'Engenheiro de Software Sênior',
    'footer.by': '© 2026 Antonino Junior. Todos os direitos reservados.',

    // Language
    'language.portuguese': 'Português',
    'language.english': 'English',
  },
  'en-us': {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.highlights': 'Highlights',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.about': 'About',
    'hero.greeting': "Hello, I'm",
    'hero.name': 'Antonino Junior',
    'hero.title': 'Senior Software Engineer | Java & Angular | Node.js & ReactJS | MySQL | PostgreSQL | AWS',
    'hero.download-cv': 'Download Resume',
    'hero.cv-url': 'https://drive.google.com/file/d/1F0u6Rb44rwu-xHi_dO1USdzjYn2m3jh_/view?usp=sharing',
    'hero.view-projects': 'View Projects',

    'hero.featurecc': 'Clean Code',
    'hero.featurecc.ph': 'Clean and maintainable code',
    'hero.featureino': 'Innovation',
    'hero.featureino.ph': 'Creative solutions',
    'hero.featureded': 'Dedication',
    'hero.featureded.ph': 'Total commitment',

    // About
    'about.text.p1': "Software Engineer with over 6 years of experience in Full Stack development, focused on building scalable and high-availability systems. I work with Java (Spring Boot, Jakarta EE, Hibernate), Angular, Node.js/Express, and React/Next.js, with solid experience in PostgreSQL, MySQL, Redis, Python automation, and AWS infrastructure (EC2, Lambda, RDS, Amplify).",
    'about.text.p2': "A GNU/Linux enthusiast and writer in my spare time, I maintained a ",
    'about.text.p3': "since 2015 that reached over 56k views, where I shared technical articles and notes with the community.",

    // Skills
    'skills.title': 'Technical Skills',

    // Highlights Section
    'highlights.title': 'Highlights',
    'highlights.metrics.years': 'Years of Experience',
    'highlights.metrics.transactions': 'Processed in Transactions',
    'highlights.metrics.salons': 'Salons Connected',
    'highlights.metrics.clients': 'Clients Managed',
    'highlights.teaching.title': 'Programming Instructor',
    'highlights.teaching.description': 'Led the creation of automation hubs and trained over 20 public servants at TJRR, promoting the democratization of programming knowledge.',
    'highlights.lisbon.title': 'International Project - Lisbon',
    'highlights.lisbon.description': 'Automation project presented at ExpoJud Portugal, streamlining custody processes for Venezuelan minors, reducing costs and freeing up staff for more complex activities.',
    'highlights.podcast.title': 'Podcast - Product Launch',
    'highlights.podcast.description': 'Featured on the Gloss Express Brasil Podcast for the launch of the Salon Map platform, connecting over 15,000 salons and beauty professionals.',
    'highlights.awards.title': 'TJRR Awards',
    'highlights.awards.description': 'Recognition for technical excellence and innovation in projects developed for the Court of Justice of Roraima.',
    'highlights.view article': 'View article',

    // Projects
    'projects.title': 'Featured Projects',

    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.achievements': 'Main achievements:',

    // Gloss Express
    'experience.gloss.position': 'Senior Software Engineer',
    'experience.gloss.company': 'Gloss Express',
    'experience.gloss.location': 'Florianópolis - SC',
    'experience.gloss.period': 'Jul/2025 - Present',
    'experience.gloss.description': 'Senior Software Engineer in a multidisciplinary team, developing Full Stack scalable solutions for the beauty industry using Node.js, PostgreSQL, and Next.js/React. Active participation in high-availability system architecture and data process automation with Python.',
    'experience.gloss.achievements.1': 'Salon Map Platform: co-developed the platform connecting over 15,000 salons and professionals nationally and internationally.',
    'experience.gloss.achievements.2': 'Proprietary Checkout: built a high-conversion checkout system, processing financial volume exceeding R$ 10 million.',
    'experience.gloss.achievements.3': 'SIG – Gloss Express Integrated System: centralized management ecosystem for 28,000+ clients with CRM, Billing, and RBAC modules.',
    'experience.gloss.achievements.4': 'ETL process automation and data pipelines with Python (Selenium, Pandas).',

    // SCC4
    'experience.mid.position': 'Java/Angular Full Stack Developer',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis - SC',
    'experience.mid.period': 'Feb/2025 - Jul/2025',
    'experience.mid.description': 'Backend development using Java EE, MySQL, and Hibernate, with Web Services and REST APIs creation for the Portal Postal ecosystem. Frontend work with Angular and maintenance of the Portal Postal Coletas app in Flutter 3.16+, with Play Store publication.',
    'experience.mid.achievements.1': 'Integration of the Post Office Collections API as a new Portal Postal feature (Java/Angular).',
    'experience.mid.achievements.2': 'Publication of the Portal Postal Coletas app in Flutter on the Google Play Store, with technical documentation for the dev team.',
    'experience.mid.achievements.3': 'Management reports with JasperReports and desktop application development in Java Swing.',

    // ToolsData
    'experience.java.position': 'Java Backend Developer',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis - SC',
    'experience.java.period': 'Nov/2024 - Mar/2025',
    'experience.java.description': 'REST API development using Java 17+, Jakarta EE, and Hibernate, with integrations involving RabbitMQ, Redis, and OpenAPI documentation. Automated testing (JUnit) and application deployment on WildFly/JBoss servers.',
    'experience.java.achievements.1': 'Integrated multiple external APIs, developing endpoints for a credit engine supporting automated decision-making for customer credit approval.',
    'experience.java.achievements.2': 'Automated testing implementation with JUnit and deployment management on WildFly/JBoss servers.',

    // Sonda Manager
    'experience.sondaManager.position': 'RPA Projects and Operations Manager',
    'experience.sondaManager.company': 'SONDA',
    'experience.sondaManager.location': 'Boa Vista - RR',
    'experience.sondaManager.period': 'Jan/2024 - Sep/2024',
    'experience.sondaManager.description': 'Led software development and RPA automation teams, focused on clear communication and alignment between technical teams and stakeholders, facilitating collaboration and decision-making.',
    'experience.sondaManager.achievements.1': 'Programming Instructor at the Court of Justice of Roraima (TJRR) – 2024.',
    'experience.sondaManager.achievements.2': '1st place in the 2023 Innovation Award – TJRR.',
    'experience.sondaManager.achievements.3': 'Coordinated RPA automation project deliveries with direct impact on operational efficiency.',

    // Sonda Dev
    'experience.sondaDev.position': 'Full Stack Developer',
    'experience.sondaDev.company': 'SONDA',
    'experience.sondaDev.location': 'Boa Vista - RR',
    'experience.sondaDev.period': 'Mar/2020 - Dec/2023',
    'experience.sondaDev.description': 'Developed RESTful APIs using Java (MVC, JSF, JPA, Hibernate), PostgreSQL, and Maven, as well as Node.js/Express integrated with UiPath Orchestrator. Experienced in agile methodologies (Scrum, Kanban) and task management using the Monday platform.',
    'experience.sondaDev.achievements.1': 'RPA automation project with social impact that benefited over 400 Venezuelan migrant families in Roraima, with international recognition and presentation in Lisbon (2023).',
    'experience.sondaDev.achievements.2': 'Architecture and development of RESTful APIs integrated with UiPath Orchestrator for judicial process automation.',
    'experience.sondaDev.achievements.3': 'Implementation and promotion of agile methodologies (Scrum, Kanban) within the team.',

    // Flutter Curitiba
    'experience.flutterPr.position': 'Flutter Developer',
    'experience.flutterPr.company': 'Brain XCode',
    'experience.flutterPr.location': 'Curitiba - PR',
    'experience.flutterPr.period': 'Oct/2020 - Apr/2022',
    'experience.flutterPr.description': 'Mobile project development using Flutter (Dart, Mockito, MobX, Cubit, Bloc), applying Clean Architecture and SOLID principles, in a collaborative remote team.',
    'experience.flutterPr.achievements.1': 'Completed the first collaborative remote project with a distributed team, using Flutter, Clean Architecture, SOLID principles, and automated testing.',

    // Education Section
    'education.title': 'Education',
    'education.ifrr.institution': 'IFRR - Federal Institute of Roraima',
    'education.ifrr.degree': 'Technology Degree (CST)',
    'education.ifrr.field': 'Systems Analysis and Development',
    'education.ifrr.period': '2013 - 2016',
    'education.ibf.institution': 'IBF Pós - Brazilian Institute of Training',
    'education.ibf.degree': 'Postgraduate Specialization',
    'education.ibf.field': 'Mobile Application Development',
    'education.ibf.period': '2020',

    // Certifications Section
    'certifications.title': 'Certifications',
    'certifications.flutter.name': 'MasterClass Flutter',
    'certifications.qa.name': 'Quality Assurance: test planning and bug management',
    'certifications.git.name': 'Git and Github: branching strategies, Conflicts and Pull Requests',

    // Contact Section
    'contact': 'Get in Touch',
    'contact.h3': "Let's talk!",
    'contact.p': "I'm always interested in new projects and opportunities. If you have an idea or need help with development, don't hesitate to reach out!",
    'contact.email': 'Email',
    'contact.email.ph': 'antonino.praxedes@gmail.com',
    'contact.location': 'Location',
    'contact.sendMensseger.name': 'Name',
    'contact.sendMensseger.name.ph': 'Your name',
    'contact.sendMensseger.email': 'Email',
    'contact.sendMensseger.email.ph': 'your@email.com',
    'contact.sendMensseger.subject': 'Subject',
    'contact.sendMensseger.subject.ph': 'Message subject',
    'contact.sendMensseger.mensseger': 'Message',
    'contact.sendMensseger.mensseger.ph': 'Your message',
    'contact.sendMensseger.btn': 'Send Message',
    'contact.toast.title': 'Message sent!',
    'contact.toast.msg': "Thank you for reaching out! I'll get back to you soon.",

    // Footer
    'footer.stack': 'Senior Software Engineer',
    'footer.by': '© 2026 Antonino Junior. All rights reserved.',

    // Language
    'language.portuguese': 'Português',
    'language.english': 'English',
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-br');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-br' ? 'en-us' : 'pt-br');
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
