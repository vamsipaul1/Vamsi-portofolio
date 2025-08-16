'use client';

import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Scroll to top button */}
        <div className="text-center mb-6">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-white font-poppins">
            Vamsi Rangumudri
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Full Stack Developer passionate about creating exceptional digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-xs">
            <p>© {currentYear} Vamsi Rangumudri. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Built with <Heart size={12} className="text-red-500" fill="currentColor" /> and coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
