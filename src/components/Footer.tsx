import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useTheme();
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div
            className="font-serif-editorial text-[16px] text-neutral-900"
            style={{ fontWeight: 400 }}
          >
            Antonino Junior
          </div>
          <div className="text-[12px] text-neutral-500 mt-1">
            {t('footer.role')}
          </div>
        </div>
        <div className="text-[11px] text-neutral-400 tracking-wide">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
