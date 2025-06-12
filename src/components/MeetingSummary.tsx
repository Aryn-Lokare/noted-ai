
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Share, Users, Clock, Calendar } from 'lucide-react';

interface MeetingSummaryProps {
  meetingId: string;
  onBack: () => void;
}

const MeetingSummary: React.FC<MeetingSummaryProps> = ({ meetingId, onBack }) => {
  // Mock data based on meetingId
  const getSummaryData = (id: string) => {
    const summaries = {
      '1': {
        title: 'Product Strategy Meeting',
        date: '2024-06-10',
        duration: '45 min',
        participants: ['John Doe', 'Sarah Wilson', 'Mike Chen', 'Lisa Garcia', 'Tom Brown', 'Anna Smith'],
        keyPoints: [
          'Discussed Q3 product roadmap priorities',
          'Decided to focus on mobile app improvements',
          'Allocated budget for new AI features integration',
          'Set timeline for beta testing phase',
          'Reviewed user feedback from last quarter'
        ],
        actionItems: [
          'John to prepare wireframes by June 15th',
          'Sarah to coordinate with design team',
          'Mike to research AI integration costs',
          'Lisa to schedule user testing sessions'
        ],
        decisions: [
          'Approved budget increase of 20% for mobile development',
          'Chose React Native for cross-platform development',
          'Postponed web redesign to Q4'
        ]
      },
      '2': {
        title: 'Client Onboarding Call',
        date: '2024-06-09',
        duration: '30 min',
        participants: ['Alex Johnson', 'Maria Rodriguez', 'Client: David Kim'],
        keyPoints: [
          'Welcomed new client to the platform',
          'Explained core features and capabilities',
          'Discussed implementation timeline',
          'Addressed client concerns about data security'
        ],
        actionItems: [
          'Alex to send setup instructions via email',
          'Maria to schedule training session for client team',
          'Follow up on security compliance documentation'
        ],
        decisions: [
          'Agreed on 2-week implementation timeline',
          'Client will start with basic package',
          'Monthly check-ins scheduled for first quarter'
        ]
      }
    };

    return summaries[id as keyof typeof summaries] || summaries['1'];
  };

  const summary = getSummaryData(meetingId);

  return (
    <div className="min-h-screen bg-noted-gradient pt-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            size="sm"
            className="bg-transparent border-white/30 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex-1">
            <h1 className="text-cta text-3xl font-bold text-white mb-2">
              Meeting Summary
            </h1>
            <p className="text-body text-white/80">
              AI-generated summary and key insights
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              size="sm"
              className="bg-noted-purple hover:bg-noted-purple/90 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Meeting Info */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-2xl font-bold text-white">
              {summary.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-noted-purple" />
                <span className="text-body">{summary.date}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-body">{summary.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-body">{summary.participants.length} participants</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Participants */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Participants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {summary.participants.map((participant, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-white px-3 py-1 rounded-full text-sm text-body"
                >
                  {participant}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Points */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Key Discussion Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {summary.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-noted-purple rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-body text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Action Items */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Action Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {summary.actionItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-body text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Decisions Made */}
        <Card className="card-gradient border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Decisions Made
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {summary.decisions.map((decision, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-body text-white/90">{decision}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeetingSummary;
