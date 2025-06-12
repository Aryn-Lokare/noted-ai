
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, Target, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface AboutPageProps {
  onShowAuth: (type: 'login' | 'signup') => void;
}

const About: React.FC<AboutPageProps> = ({ onShowAuth }) => {
  const values = [
    {
      icon: <Brain className="h-8 w-8 text-noted-purple" />,
      title: 'AI-Powered Intelligence',
      description: 'We leverage cutting-edge artificial intelligence to transform how meetings are conducted and documented.'
    },
    {
      icon: <Target className="h-8 w-8 text-noted-purple" />,
      title: 'Focus on What Matters',
      description: 'Let our AI handle note-taking so you can concentrate on meaningful discussions and decision-making.'
    },
    {
      icon: <Users className="h-8 w-8 text-noted-purple" />,
      title: 'Team Collaboration',
      description: 'Enhance team productivity with seamless sharing and collaboration on meeting insights.'
    },
    {
      icon: <Zap className="h-8 w-8 text-noted-purple" />,
      title: 'Instant Results',
      description: 'Get real-time transcription and immediate post-meeting summaries for faster follow-ups.'
    }
  ];

  return (
    <div className="min-h-screen bg-noted-gradient">
      <Navbar onShowAuth={onShowAuth} />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-body text-5xl font-bold text-white mb-6">
              About Noted.ai
            </h1>
            <p className="text-body text-xl text-white/80 max-w-3xl mx-auto">
              Revolutionizing meetings with artificial intelligence to make every conversation more productive and actionable.
            </p>
          </div>

          <div className="mb-16">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-body text-3xl font-bold text-white text-center mb-6">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-body text-lg text-white/90 leading-relaxed mb-6">
                  At Noted.ai, we believe that meetings should be about meaningful conversations, not manual note-taking. 
                  Our AI-powered meeting assistant joins your meetings automatically, captures every important detail, 
                  and transforms discussions into actionable insights.
                </p>
                <p className="text-body text-lg text-white/90 leading-relaxed">
                  Founded with the vision of making meetings smarter and more efficient, we're committed to helping 
                  teams focus on what truly matters - collaboration, innovation, and decision-making.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-body text-3xl font-bold text-white text-center mb-12">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-gradient">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-noted-purple/20 mr-4">
                        {value.icon}
                      </div>
                      <CardTitle className="text-body text-xl font-bold text-white">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-white/80">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="card-gradient">
            <CardHeader>
              <CardTitle className="text-body text-3xl font-bold text-white text-center mb-6">
                The Technology Behind Noted.ai
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-body text-lg text-white/90 leading-relaxed mb-6">
                Our platform combines advanced natural language processing, machine learning, and real-time audio analysis 
                to deliver unparalleled meeting intelligence. From automatic transcription to intelligent summarization, 
                every feature is designed to enhance your meeting experience.
              </p>
              <p className="text-body text-lg text-white/90 leading-relaxed">
                We continuously improve our AI models to better understand context, identify key decisions, 
                and extract actionable items from your conversations, ensuring you never miss important details again.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
