import React from "react";
import { Separator } from "@/components/ui/separator";
import { BrandSection } from "./BrandSection";
import { FooterSection } from "./FooterSection";
import { ContactSection } from "./ContactSection";
import { footerSections } from "@/data/footerData";

export const Section: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <BrandSection />

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <FooterSection
              key={section.title}
              section={section}
              highlightLastLink={section.title === "Our Centres"}
            />
          ))}

          {/* Contact and Additional Sections */}
          <ContactSection />
        </div>
      </div>

      {/* Bottom Section */}
      <Separator className="bg-gray-200" />
    </footer>
  );
};
