import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import ReactCountryFlag from 'react-country-flag';

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
        <ReactCountryFlag 
          countryCode={language === 'pt-br' ? 'BR' : 'US'} 
          svg 
          style={{
            width: '16px',
            height: '16px',
          }}
          title={language === 'pt-br' ? 'Brasil' : 'United States'}
        />
        <span className="text-xs">
          {language === 'pt-br' ? 'PT' : 'EN'}
        </span>
      </Button>
    </div>
  );
};

export default ThemeSwitch;