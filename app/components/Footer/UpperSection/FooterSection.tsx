import React from 'react';
import type { FooterSection as FooterSectionType } from '../../../types/footer';

interface FooterSectionProps {
  section: FooterSectionType;
  highlightLastLink?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ 
  section, 
  highlightLastLink = false 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
      <ul className="space-y-3">
        {section.links.map((link, index) => {
          const isLastLink = index === section.links.length - 1;
          const shouldHighlight = highlightLastLink && isLastLink;
          
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className={`transition-colors ${
                  shouldHighlight
                    ? 'text-blue-600 hover:text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};