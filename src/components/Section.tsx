import React from 'react';

interface SectionProps {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}

/**
 * Editorial section wrapper — numbered heading with serif title
 * and top border separator.
 */
const Section: React.FC<SectionProps> = ({ id, num, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 border-t border-neutral-200">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div
          data-reveal
          className="reveal mb-14 md:mb-16 flex items-baseline gap-6"
        >
          <span className="text-[12px] tracking-[0.2em] text-neutral-400 font-mono-editorial">
            {num}
          </span>
          <h2
            className="font-serif-editorial text-[40px] md:text-[56px] tracking-[-0.02em] text-neutral-900"
            style={{ fontWeight: 400 }}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
