
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Projects = () => {
  const { t } = useTheme();
  const projects = [
    {
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'API de Gestão Financeira',
      description: 'API RESTful para controle financeiro pessoal com autenticação JWT e relatórios em tempo real.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'JWT', 'Swagger'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos dinâmicos e filtros avançados.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Material Design'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projetos" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
