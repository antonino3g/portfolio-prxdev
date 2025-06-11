
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { t } = useTheme();
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Antonino Junior</h3>
            <p className="text-slate-400">{t('footer.stack')}</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/antonino3g"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/antoninopraxedes/"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:antonino.praxedes@gmail.com"
              target="_blank"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              {t('footer.by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
