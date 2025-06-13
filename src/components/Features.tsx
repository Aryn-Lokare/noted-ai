
import React from 'react';
import { Calendar, Mic, FileText, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Meeting Integration",
      description: "Seamlessly connects with Google Calendar, Zoom, and Google Meet. Automatically joins your meetings and works in the background.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Mic,
      title: "Real-time Transcription",
      description: "Captures audio with crystal-clear accuracy using advanced speech-to-text technology. Never miss a word again.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: FileText,
      title: "AI-Generated Summaries",
      description: "Transforms raw transcripts into clean, structured notes and bullet-point summaries. Smart and actionable.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Dashboard & Analytics",
      description: "Comprehensive dashboard to view meeting history, download transcripts, and track your productivity metrics.",
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-cta text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-body text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to transform your meeting experience with AI-powered automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-cta text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-body text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-cta text-2xl font-bold text-gray-900 mb-4">
              Integration Capabilities
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <p className="text-body text-gray-700">Google Calendar & Meet</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <p className="text-body text-gray-700">Zoom Meetings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <p className="text-body text-gray-700">Microsoft Teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
