import React from 'react';
import { contactMethods, quickLinks, products } from '@/data/footerData';

export const ContactSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Connect with us */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Connect with us</h3>
        <ul className="space-y-3">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <li key={method.label}>
                <a
                  href={method.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span>{method.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Our Products */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Our Products</h3>
        <ul className="space-y-3">
          {products.map((product) => (
            <li key={product.label}>
              <a
                href={product.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {product.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};