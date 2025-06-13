
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import Dashboard from '@/components/Dashboard';
import MeetingSummary from '@/components/MeetingSummary';
import MeetingNotes from '@/components/MeetingNotes';
import MeetingDetails from '@/components/MeetingDetails';
import Pricing from './Pricing';
import Guide from './Guide';
import About from './About';
import Profile from './Profile';

type ViewType = 'landing' | 'dashboard' | 'summary' | 'notes' | 'details' | 'pricing' | 'guide' | 'about' | 'profile';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [selectedMeetingId, setSelectedMeetingId] = useState<string>('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');

  const handleShowAuth = (type: 'login' | 'signup') => {
    setAuthType(type);
    setShowAuthModal(true);
  };

  const handleNavigation = (page: string) => {
    switch (page) {
      case 'home':
        setCurrentView(isAuthenticated ? 'dashboard' : 'landing');
        break;
      case 'dashboard':
        if (isAuthenticated) {
          setCurrentView('dashboard');
        } else {
          setCurrentView('landing');
        }
        break;
      case 'about':
        setCurrentView('about');
        break;
      case 'guide':
        setCurrentView('guide');
        break;
      case 'pricing':
        setCurrentView('pricing');
        break;
      case 'profile':
        if (isAuthenticated) {
          setCurrentView('profile');
        }
        break;
      default:
        setCurrentView('landing');
    }
  };

  const handleViewSummary = (meetingId: string) => {
    setSelectedMeetingId(meetingId);
    setCurrentView('summary');
  };

  const handleViewNotes = (meetingId: string) => {
    setSelectedMeetingId(meetingId);
    setCurrentView('notes');
  };

  const handleViewDetails = (meetingId: string) => {
    setSelectedMeetingId(meetingId);
    setCurrentView('details');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedMeetingId('');
  };

  // If user is authenticated, show dashboard by default
  React.useEffect(() => {
    if (isAuthenticated && currentView === 'landing') {
      setCurrentView('dashboard');
    } else if (!isAuthenticated && (currentView === 'dashboard' || currentView === 'profile')) {
      setCurrentView('landing');
    }
  }, [isAuthenticated]);

  // Handle specific page views
  if (currentView === 'pricing') {
    return <Pricing onShowAuth={handleShowAuth} />;
  }

  if (currentView === 'guide') {
    return <Guide onShowAuth={handleShowAuth} />;
  }

  if (currentView === 'about') {
    return <About onShowAuth={handleShowAuth} />;
  }

  if (currentView === 'profile' && isAuthenticated) {
    return <Profile onBack={handleBackToDashboard} />;
  }

  if (currentView === 'dashboard' && isAuthenticated) {
    return (
      <Dashboard
        onViewSummary={handleViewSummary}
        onViewNotes={handleViewNotes}
        onViewDetails={handleViewDetails}
      />
    );
  }

  if (currentView === 'summary' && isAuthenticated) {
    return (
      <MeetingSummary
        meetingId={selectedMeetingId}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (currentView === 'notes' && isAuthenticated) {
    return (
      <MeetingNotes
        meetingId={selectedMeetingId}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (currentView === 'details' && isAuthenticated) {
    return (
      <MeetingDetails
        meetingId={selectedMeetingId}
        onBack={handleBackToDashboard}
      />
    );
  }

  // Landing page
  return (
    <div className="min-h-screen bg-white">
      <Navbar onShowAuth={handleShowAuth} onNavigate={handleNavigation} />
      <Hero onShowAuth={handleShowAuth} />
      <Features />
      <Footer />
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        type={authType}
        onToggleType={() => setAuthType(authType === 'login' ? 'signup' : 'login')}
      />
    </div>
  );
};

export default Index;
