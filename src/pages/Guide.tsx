
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Play, Users, FileText, Download, Calendar, Mic } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface GuidePageProps {
  onShowAuth: (type: 'login' | 'signup') => void;
}

const Guide: React.FC<GuidePageProps> = ({ onShowAuth }) => {
  const steps = [
    {
      icon: <Users className="h-8 w-8 text-noted-purple" />,
      title: 'Sign Up & Login',
      description: 'Create your account or login to access your personalized dashboard with all your meeting data.'
    },
    {
      icon: <Calendar className="h-8 w-8 text-noted-purple" />,
      title: 'Schedule Your Meeting',
      description: 'Connect your calendar or manually add meeting details. Our AI will automatically join at the scheduled time.'
    },
    {
      icon: <Mic className="h-8 w-8 text-noted-purple" />,
      title: 'AI Joins Automatically',
      description: 'Our AI assistant joins your meeting and starts recording. No manual intervention required - just focus on your discussion.'
    },
    {
      icon: <FileText className="h-8 w-8 text-noted-purple" />,
      title: 'Real-time Notes',
      description: 'Watch as AI takes comprehensive notes during your meeting, capturing key points, decisions, and action items.'
    },
    {
      icon: <Play className="h-8 w-8 text-noted-purple" />,
      title: 'Smart Summaries',
      description: 'After the meeting, get AI-generated summaries highlighting important discussions, decisions, and next steps.'
    },
    {
      icon: <Download className="h-8 w-8 text-noted-purple" />,
      title: 'Export & Share',
      description: 'Download your notes and summaries in various formats or share them directly with team members.'
    }
  ];

  const tips = [
    'Ensure your microphone is working properly for better AI transcription accuracy',
    'Speak clearly and avoid talking over each other for optimal note-taking',
    'Use the dashboard to review and edit AI-generated content after meetings',
    'Set up calendar integration for seamless meeting scheduling',
    'Tag important action items for easy follow-up tracking'
  ];

  return (
    <div className="min-h-screen bg-noted-gradient">
      <Navbar onShowAuth={onShowAuth} />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-body text-5xl font-bold text-white mb-6">
              How to Use Noted.ai
            </h1>
            <p className="text-body text-xl text-white/80 max-w-2xl mx-auto">
              Follow this simple guide to get the most out of your AI meeting assistant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-noted-purple/20 mr-4">
                      {step.icon}
                    </div>
                    <span className="text-cta text-2xl font-bold text-noted-purple">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-body text-xl font-bold text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-white/80">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-body text-2xl font-bold text-white text-center">
                Pro Tips for Better Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start text-body text-white/90">
                    <span className="text-noted-purple font-bold mr-3">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;
