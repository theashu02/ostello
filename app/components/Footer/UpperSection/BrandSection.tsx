import React from 'react';
import { Button } from '@/components/ui/button';
import { Store, Smartphone } from 'lucide-react';
import { socialLinks, appDownloadButtons } from '@/data/footerData';
import { cn } from '@/lib/utils';
import type { AppDownloadButton } from '../../../types/footer';

const AppDownloadButton: React.FC<{ button: AppDownloadButton }> = ({ button }) => {
  const Icon = button.platform === 'google' ? Store : Smartphone;
  
  return (
    <Button
      variant="default"
      className="flex items-center space-x-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors h-auto"
      asChild
    >
      <a href={button.href}>
        <Icon className="w-5 h-5" />
        <div className="text-left">
          <div className="text-xs">{button.subtitle}</div>
          <div className="text-sm font-semibold">{button.title}</div>
        </div>
      </a>
    </Button>
  );
};

export const BrandSection: React.FC = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Brand Logo and Name */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">PW</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Physics Wallah</h2>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
        We understand that every student has unique needs and abilities, that's 
        why our curriculum is designed to adapt to your needs and help you grow!
      </p>
      
      {/* App Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {appDownloadButtons.map((button) => (
          <AppDownloadButton key={button.platform} button={button} />
        ))}
      </div>
      
      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Let's get social :</h3>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  social.bgColor,
                  social.hoverColor
                )}
                aria-label={social.name}
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};