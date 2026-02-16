import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeSwitch from './ThemeSwitch';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTheme();

  const navItems = [
    { href: 'inicio', label: t('nav.home') },
    { href: 'sobre', label: t('nav.about') },
    { href: 'habilidades', label: t('nav.skills') },
    { href: 'destaques', label: t('nav.highlights') },
    { href: 'experiencia', label: t('nav.experience') },
    { href: 'formacao', label: t('nav.education') },
    { href: 'certificacoes', label: t('nav.certifications') },
    { href: 'contato', label: t('nav.contact') }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-800">
            <span className="text-blue-600">Antonino</span>Dev
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={true}
                duration={50}
                offset={-80}
                className="cursor-pointer text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </ScrollLink>
            ))}
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.href}
                to={item.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="block py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
