import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Projects = () => {
  const { t } = useTheme();
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'backend', name: 'Backend' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sistema de E-commerce',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamentos e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      category: 'backend',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'API de Gestão Financeira',
      description: 'API RESTful para controle financeiro pessoal com autenticação JWT e relatórios em tempo real.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'JWT', 'Swagger'],
      category: 'backend',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para análise de dados com gráficos dinâmicos e filtros avançados.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'Material Design'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Portfólio Responsivo',
      description: 'Site portfólio moderno e responsivo desenvolvido com React e Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'App de Delivery',
      description: 'Aplicativo móvel para delivery de comida com geolocalização e pagamentos integrados.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Expo', 'Firebase', 'Maps API'],
      category: 'mobile',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'App de Tarefas',
      description: 'Aplicativo mobile para gerenciamento de tarefas com sincronização offline.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'SQLite', 'Redux', 'AsyncStorage'],
      category: 'mobile',
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projetos" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          {t('projects.title')}
        </h2>
        
        {/* Tabs de Categorias */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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