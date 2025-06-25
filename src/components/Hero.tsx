import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { t } = useTheme();

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1yCovWWB3l487WFvswEmyQJIa0usdQ-ZU/view?usp=sharing';
    window.open(cvUrl, '_blank');
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projetos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <img
            src="https://avatars.githubusercontent.com/u/19830645?v=4"
            alt="Desenvolvedor Java Full Stack"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            {t('hero.greeting')}
            <span className="block text-blue-600 mt-2">{t('hero.name')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('hero.title')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleDownloadCV}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              {t('hero.download-cv')}
            </button>
            {/* <button 
              onClick={handleViewProjects}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              {t('hero.view-projects')}
            </button> */}
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/antonino3g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/antoninopraxedes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:antonino.praxedes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
