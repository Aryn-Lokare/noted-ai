
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface NavbarProps {
  onShowAuth: (type: 'login' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowAuth }) => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white text-body">
            Noted.ai
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-nav text-white/90 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#guide" className="text-nav text-white/90 hover:text-white transition-colors">
              Guide
            </a>
            <a href="#pricing" className="text-nav text-white/90 hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-body text-white/90">Welcome, {user?.name}</span>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button
                  onClick={() => onShowAuth('login')}
                  variant="outline"
                  className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  Login
                </Button>
                <Button
                  onClick={() => onShowAuth('signup')}
                  className="text-body bg-noted-purple hover:bg-noted-purple/90 text-white"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
