
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-body text-2xl font-bold text-white mb-2">
              Noted.ai
            </h3>
            <p className="text-body text-white/60">
              Making meetings smarter with AI
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-body text-white/80 mb-2">
              Founded by
            </p>
            <p className="text-cta text-xl font-semibold text-white">
              Aryan
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-body text-white/60">
            © 2024 Noted.ai. All rights reserved. Transforming meetings with artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
