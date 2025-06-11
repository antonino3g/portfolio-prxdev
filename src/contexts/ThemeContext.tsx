
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt-br' | 'en-us';

interface ThemeContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const translations = {
  'pt-br': {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.highlights': 'Destaques',
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.about' : "Sobre",
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Antonino Junior',
    'hero.title': 'Desenvolvedor Java Full Stack com experiência em JSP, Angular e ReactJS, utilizando Java EE / Jakarta EE, Spring Boot e arquiteturas modernas de software.',
    'hero.download-cv': 'Download CV',
    'hero.view-projects': 'Ver Projetos',

  
    'hero.featurecc': 'Clean Code',
    'hero.featurecc.ph': 'Código limpo e manutenível',
    'hero.featureino': 'Inovação',
    'hero.featureino.ph': 'Soluções criativas',
    'hero.featureded': 'Dedicação',
    'hero.featureded.ph': 'Comprometimento total',

    // Skills
    'skills.title' : "Habilidades Técnicas",
    
    // Highlights Section
    'highlights.title': 'Destaques',
    'highlights.teaching.title': 'Professor de Programação',
    'highlights.teaching.description': 'Atuação na criação de núcleos de automação e capacitação de mais de 20 servidores do TJRR, promovendo a democratização do conhecimento em programação.',
    'highlights.lisbon.title': 'Projeto Internacional - Lisboa',
    'highlights.lisbon.description': 'Projeto de automação apresentado no ExpoJud Portugal agiliza processos de guarda de menores venezuelanos, reduz custos e libera servidores para atividades mais complexas.',
    'highlights.awards.title': 'Premiações TJRR',
    'highlights.awards.description': 'Reconhecimento por excelência técnica e inovação em projetos desenvolvidos para o Tribunal de Justiça de Roraima.',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    'experience.mid.achievements' : 'Principais conquistas:',

    // SCC4
    'experience.mid.position': 'Desenvolvedor Full Stack Java/Angular Pleno',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis - SC',
    'experience.mid.period': 'Fev/2025 - Presente',
    'experience.mid.description': 'Experiência com desenvolvimento backend em Java EE, MySQL e Hibernate, criação de Web Services e APIs REST, além de relatórios com JasperReports e aplicações desktop em Java Swing. Atuação no frontend com Angular 7+ e na manutenção do app Portal Postal Coletas em Flutter 3.16+, com publicação na Play Store, ajustes de compatibilidade e geração de builds.',

    'experience.mid.achievements.1':'Integração da API Coletas dos Correios como nova funcionalidade Portal Postal (Java/Angular)',
    'experience.mid.achievements.2':'Reativação do app Coletas na Play Store com ajustes em Flutter e documentação técnica para devs.',

    // ToolsData
    'experience.java.position': 'Desenvolvedor Backend Java',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis - SC',
    'experience.java.period': 'Nov/2024 - Mar/2025',
    'experience.java.description': 'Experiência no desenvolvimento de APIs REST utilizando Java 17+, Jakarta EE e Hibernate, com integrações envolvendo RabbitMQ, Redis e OpenAPI. Atuação com testes automatizados utilizando JUnit, versionamento de código com Git e deploy de aplicações em servidores WildFly/JBoss.',
    'experience.java.achievements' : 'Principais conquistas:',
    'experience.java.achievements.1':'Integração com diversas APIs, desenvolvendo endpoints para um motor de crédito voltado ao apoio na tomada de decisões para concessão a clientes.',

    // Sonda Manager
    'experience.sondaManager.position': 'Gerente de Projetos e Operações RPA',
    'experience.sondaManager.company': 'SONDA',
    'experience.sondaManager.location': 'Boa Vista - RR',
    'experience.sondaManager.period': 'Jan/2024 - Set/2024',
    'experience.sondaManager.description': 'Experiência na liderança de equipes de desenvolvimento de software e automação RPA, contribuindo para a organização e o bom andamento dos projetos. Atua com foco na comunicação clara e no alinhamento entre times técnicos e stakeholders, facilitando a colaboração e a tomada de decisões no dia a dia.',
    'experience.sondaManager.achievements' : 'Principais conquistas:',
    'experience.sondaManager.achievements.1': 'Professor de Introdução à Programação no Tribunal de Justiça de Roraima (TJRR) - 2024.',
    'experience.sondaManager.achievements.2': '1º lugar no Prêmio de Inovação 2023 – TJRR',

    // Sonda Dev
    'experience.sondaDev.position': 'Desenvolvedor Full Stack',
    'experience.sondaDev.company': 'SONDA',
    'experience.sondaDev.location': 'Boa Vista - RR',
    'experience.sondaDev.period': 'Mar/2020 - Dez/2024',
    'experience.sondaDev.description': 'Desenvolvimento de APIs RESTful utilizando Java (com MVC, JSF, JPA, Hibernate), PostgreSQL e Maven, além de Node.js/Express integradas ao Orchestrator UiPath. Também possui experiência com metodologias ágeis, como Scrum e Kanban, e no gerenciamento de tarefas por meio da plataforma Monday.',
    'experience.sondaDev.achievements.1': 'Projeto de automação com RPA que beneficiou mais de 400 famílias migrantes venezuelanas em Roraima, com reconhecimento internacional e apresentação em Lisboa, em 2023.',
    
    // Flutter Curitiba
    'experience.flutterPr.position': 'Desenvolvedor Flutter',
    'experience.flutterPr.company': 'Brain XCode',
    'experience.flutterPr.location': 'Curitiba - PR',
    'experience.flutterPr.period': 'Out/2020 - Abr/2022',
    'experience.flutterPr.description': 'Desenvolvimento de projetos mobile com Flutter (Dart, Mockito, MobX, Cubit, Bloc), aplicando Clean Architecture e SOLID, em parceria com grupo de desenvolvedores de Roraima atuando em Curitiba/PR.',
    "experience.flutterPr.achievements.1": "Primeiro projeto remoto colaborativo com equipe de Roraima, utilizando Flutter, Clean Architecture, SOLID e testes automatizados.",

    // Contact Section
    'contact':'Entre em Contato',
    'contact.h3':'Vamos conversar!',
    'contact.p':'Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou precisa de ajuda com desenvolvimento, não hesite em entrar em contato!',
    "contact.email":"E-mail",
    "contact.email.ph":"anderson.silva@email.com",
    "contact.location":"Localização",
    "contact.sendMensseger.name":"Nome",
    "contact.sendMensseger.name.ph":"Seu nome",
    "contact.sendMensseger.email":"Email",
    "contact.sendMensseger.email.ph":"seu@email.com",
    "contact.sendMensseger.subject":"Assunto",
    "contact.sendMensseger.subject.ph":"Assunto da mensagem",
    "contact.sendMensseger.mensseger":"Mensagem",
    "contact.sendMensseger.mensseger.ph":"Sua mensagem",
    "contact.sendMensseger.btn":"Enviar Mensagem",
    "contact.toast.title":"Mensagem enviada!",
    "contact.toast.msg":"Obrigado pelo contato. Responderei em breve!",

    // Footer
    "footer.stack":"Desenvolvedor Full Stack Java",
    "footer.by": "© 2025 Antonino Junior. Todos os direitos reservados.",

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
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.about' : "About",
    'hero.greeting': "Hello, I'm",
    'hero.name': 'Antonino Junior',
    'hero.title': 'Full Stack Java Developer with experience in JSP, Angular, and ReactJS, using Java EE / Jakarta EE, Spring Boot, and modern software architectures.',
    'hero.download-cv': 'Download CV',
    'hero.view-projects': 'View Projects',

    'hero.featurecc': 'Clean Code',
    'hero.featurecc.ph': 'Clean and maintainable code',
    'hero.featureino': 'Innovation',
    'hero.featureino.ph': 'Creative solutions',
    'hero.featureded': 'Dedication',
    'hero.featureded.ph': 'Total commitment',


    // Skills
    'skills.title' : "Technical Skills",
    
    // Highlights Section
    'highlights.title': 'Highlights',
    'highlights.teaching.title': 'Programming Instructor',
    'highlights.teaching.description': 'Led the creation of automation hubs and trained over 20 public servants at TJRR, promoting the democratization of programming knowledge.',
    'highlights.lisbon.title': 'International Project - Lisbon',
    'highlights.lisbon.description': 'Participation in an innovative project that was implemented in Lisbon, Portugal, focusing on enterprise solutions.',
    'highlights.awards.title': 'TJRR Awards',
    'highlights.awards.description': 'Recognition for technical excellence and innovation in projects developed for the Court of Justice of Roraima.',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.mid.achievements' : 'Main achievements',

    // SCC4
    'experience.mid.position': 'Java/Angular Full Stack Developer',
    'experience.mid.company': 'SCC4',
    'experience.mid.location': 'Florianópolis - SC',
    'experience.mid.period': 'Feb/2025 - Present',
    'experience.mid.description': 'Experience in backend development using Java EE, MySQL, and Hibernate, including the creation of Web Services and REST APIs, report generation with JasperReports, and desktop applications with Java Swing. Frontend work with Angular 7+ and maintenance of the App Coletas (Portal Postal) in Flutter 3.16+, including Play Store publication, compatibility adjustments, and build generation.',
    'experience.mid.achievements.1':'Integration of the Post Office Collections API as a new Postal Portal feature (Java/Angular).',
    'experience.mid.achievements.2':'Reactivated App Coletas on Play Store with Flutter fixes and developer documentation.',

    // ToolsData
    'experience.java.position': 'Java Backend Developer',
    'experience.java.company': 'ToolsData',
    'experience.java.location': 'Florianópolis - SC',
    'experience.java.period': 'Nov/2024 - Mar/2025',
    'experience.java.description': 'Experience in developing REST APIs using Java 17+, Jakarta EE, and Hibernate, with integrations involving RabbitMQ, Redis, and OpenAPI. Worked with automated testing using JUnit, code versioning with Git, and application deployment on WildFly/JBoss servers.',
    'experience.java.achievements.1': 'Integrated multiple APIs by developing endpoints for a credit engine designed to support decision-making in customer credit approval.',

    // Sonda Manager
    "experience.sondaManager.position": "RPA Projects and Operations Manager",
    "experience.sondaManager.company": "SONDA",
    "experience.sondaManager.location": "Boa Vista - RR",
    "experience.sondaManager.period": "Jan/2024 - Sep/2024",
    "experience.sondaManager.description": "Experience leading software development and RPA automation teams, contributing to the organization and smooth execution of projects. Focused on clear communication and alignment between technical teams and stakeholders, supporting collaboration and effective day-to-day decision-making.",
    "experience.sondaManager.achievements.1": "Instructor of Introduction to Programming at the Court of Justice of Roraima (TJRR) – 2024.",
    "experience.sondaManager.achievements.2": "1st place in the 2023 Innovation Award – TJRR.",
    
    //Sonda Dev
    "experience.sondaDev.position": "Full Stack Developer",
    "experience.sondaDev.company": "SONDA",
    "experience.sondaDev.location": "Boa Vista - RR",
    "experience.sondaDev.period": "Mar/2020 - Dec/2024",
    "experience.sondaDev.description": "Developed RESTful APIs using Java (with MVC, JSF, JPA, Hibernate), PostgreSQL, and Maven, as well as Node.js/Express integrated with UiPath Orchestrator. Also experienced in agile methodologies such as Scrum and Kanban, and task management using the Monday platform.",
    "experience.sondaDev.achievements.1": "RPA automation project that benefited over 400 Venezuelan migrant families in Roraima, gaining international recognition and presented in Lisbon in 2023.",
    
    // Flutter Curitiba
    "experience.flutterPr.position": "Flutter Developer",
    "experience.flutterPr.company": "Brain XCode",
    "experience.flutterPr.location": "Curitiba - PR",
    "experience.flutterPr.period": "Oct/2020 - Apr/2022",
    "experience.flutterPr.description": "Mobile project development using Flutter (Dart, Mockito, MobX, Cubit, Bloc), applying Clean Architecture and SOLID principles, in collaboration with a group of developers from Roraima working in Curitiba/PR.",
    "experience.flutterPr.achievements.1": "Completed the first collaborative remote project with a Roraima-based team, using Flutter, Clean Architecture, SOLID principles, and automated testing.",

    // Contact Section
    'contact':'Get in Touch',
    "contact.h3": "Let's talk!",
    "contact.p": "I'm always interested in new projects and opportunities. If you have an idea or need help with development, don't hesitate to reach out!",
    "contact.email": "Email",
    "contact.email.ph": "anderson.silva@email.com",
    "contact.location": "Location",
    "contact.sendMensseger.name": "Name",
    "contact.sendMensseger.name.ph": "Your name",
    "contact.sendMensseger.email": "Email",
    "contact.sendMensseger.email.ph": "your@email.com",
    "contact.sendMensseger.subject": "Subject",
    "contact.sendMensseger.subject.ph": "Message subject",
    "contact.sendMensseger.mensseger": "Message",
    "contact.sendMensseger.mensseger.ph": "Your message",
    "contact.sendMensseger.btn": "Send Message",
    "contact.toast.title": "Message sent!",
    "contact.toast.msg": "Thank you for reaching out! I’ll get back to you soon.",

    // Footer
    "footer.stack": "Full Stack Java Developer",
    "footer.by": "© 2025 Antonino Junior. All rights reserved.",

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
