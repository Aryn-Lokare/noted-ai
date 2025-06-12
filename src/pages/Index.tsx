
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

type ViewType = 'landing' | 'dashboard' | 'summary' | 'notes' | 'details';

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
    if (isAuthenticated) {
      setCurrentView('dashboard');
    } else {
      setCurrentView('landing');
    }
  }, [isAuthenticated]);

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
    <div className="min-h-screen bg-noted-gradient">
      <Navbar onShowAuth={handleShowAuth} />
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
