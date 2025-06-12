
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface HeroProps {
  onShowAuth: (type: 'login' | 'signup') => void;
}

const Hero: React.FC<HeroProps> = ({ onShowAuth }) => {
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      onShowAuth('signup');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-cta text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your AI Meeting
          <span className="bg-gradient-to-r from-noted-purple to-noted-indigo bg-clip-text text-transparent">
            {" "}Assistant
          </span>
        </h1>
        
        <p className="text-body text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Automatically join meetings, capture every word, and generate intelligent summaries. 
          Make your post-meeting experience completely stress-free.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="text-body bg-noted-purple hover:bg-noted-purple/90 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
          >
            Get Started Free
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="text-body bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
          >
            Watch Demo
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-white/60">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-body">Google Meet</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-body">Zoom</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span className="text-body">Microsoft Teams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
