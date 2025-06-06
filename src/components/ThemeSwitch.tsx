
import React from 'react';
import { Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeSwitch = () => {
  const { language, toggleLanguage } = useTheme();

  return (
    <div className="flex items-center gap-4">
      {/* Language Toggle */}
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2"
      >
        <Globe size={16} />
        <span className="text-xs">
          {language === 'pt-br' ? 'PT' : 'EN'}
        </span>
      </Button>
    </div>
  );
};

export default ThemeSwitch;
