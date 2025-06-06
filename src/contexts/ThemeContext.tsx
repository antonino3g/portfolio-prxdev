
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
    'experience.senior.position': 'Desenvolvedor Java Full Stack Sênior',
    'experience.senior.company': 'TechCorp Brasil',
    'experience.senior.location': 'São Paulo, SP',
    'experience.senior.period': '2022 - Presente',
    'experience.senior.description': 'Liderança técnica no desenvolvimento de aplicações enterprise com Java/Spring Boot e Angular. Implementação de arquiteturas de microserviços e mentoria de desenvolvedores júnior.',
    
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
    'experience.senior.position': 'Senior Java Full Stack Developer',
    'experience.senior.company': 'TechCorp Brasil',
    'experience.senior.location': 'São Paulo, SP',
    'experience.senior.period': '2022 - Present',
    'experience.senior.description': 'Technical leadership in developing enterprise applications with Java/Spring Boot and Angular. Implementation of microservices architectures and mentoring junior developers.',
    
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
