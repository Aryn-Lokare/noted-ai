
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Edit, Clock } from 'lucide-react';

interface MeetingNotesProps {
  meetingId: string;
  onBack: () => void;
}

const MeetingNotes: React.FC<MeetingNotesProps> = ({ meetingId, onBack }) => {
  const getNotesData = (id: string) => {
    const notes = {
      '1': {
        title: 'Product Strategy Meeting',
        date: '2024-06-10',
        timestamps: [
          { time: '2:30', note: 'Meeting started with agenda overview' },
          { time: '5:15', note: 'John presented Q3 roadmap slides - focus on mobile improvements' },
          { time: '8:45', note: 'Sarah raised concerns about timeline feasibility' },
          { time: '12:20', note: 'Discussion about AI integration budget - Mike to research costs' },
          { time: '18:30', note: 'Lisa shared user feedback data from Q2' },
          { time: '22:10', note: 'Decision: Approved 20% budget increase for mobile development' },
          { time: '25:45', note: 'Tom suggested React Native for cross-platform development' },
          { time: '30:20', note: 'Anna proposed postponing web redesign to Q4' },
          { time: '35:30', note: 'Action items assigned to team members' },
          { time: '42:15', note: 'Next meeting scheduled for June 17th' }
        ],
        rawNotes: `Product Strategy Meeting - June 10, 2024

Attendees: John Doe (PM), Sarah Wilson (Design), Mike Chen (Engineering), Lisa Garcia (Research), Tom Brown (Dev), Anna Smith (Marketing)

Agenda:
1. Q3 Roadmap Review
2. Mobile App Priorities
3. AI Integration Discussion
4. Budget Allocation
5. Timeline Planning

Key Discussions:
- John opened with roadmap presentation focusing on mobile improvements
- Sarah expressed concerns about aggressive timeline
- Mike will research AI integration costs and provide estimates
- Lisa presented user feedback showing demand for mobile features
- Team agreed on React Native for cross-platform development
- Web redesign pushed to Q4 to focus resources on mobile

Budget Decisions:
- Approved 20% increase for mobile development team
- AI integration budget to be determined after Mike's research
- Marketing budget reallocated to support mobile launch

Action Items:
- John: Prepare detailed wireframes by June 15th
- Sarah: Coordinate with design team on mobile UI/UX
- Mike: Research and cost AI integration options
- Lisa: Schedule user testing sessions for mobile prototypes
- Tom: Set up React Native development environment
- Anna: Develop go-to-market strategy for mobile app

Next Steps:
- Follow-up meeting: June 17th, 2024
- Weekly check-ins on mobile development progress
- Monthly budget reviews starting July`
      },
      '2': {
        title: 'Client Onboarding Call',
        date: '2024-06-09',
        timestamps: [
          { time: '1:00', note: 'Welcome and introductions' },
          { time: '3:30', note: 'Platform overview and core features demonstration' },
          { time: '8:15', note: 'Client questions about security and compliance' },
          { time: '12:45', note: 'Implementation timeline discussion' },
          { time: '18:20', note: 'Training schedule planning' },
          { time: '22:30', note: 'Package selection and pricing confirmation' },
          { time: '26:10', note: 'Next steps and follow-up actions' }
        ],
        rawNotes: `Client Onboarding Call - June 9, 2024

Attendees: Alex Johnson (Account Manager), Maria Rodriguez (Implementation), David Kim (Client - CTO)

Meeting Purpose: Onboard new enterprise client

Client Background:
- Tech startup with 50+ employees
- Looking for meeting management solution
- Previous experience with basic tools
- Security-conscious due to industry regulations

Platform Demonstration:
- Showed core transcription features
- Demonstrated AI summary generation
- Explained integration capabilities
- Highlighted security measures and compliance

Client Questions & Concerns:
- Data encryption and storage location
- GDPR compliance documentation
- Integration with existing Slack workspace
- User permission management
- Backup and data export options

Implementation Plan:
- Start with basic package (10 users)
- 2-week implementation timeline
- Training sessions for admin team
- Gradual rollout to all users
- Monthly check-ins for first quarter

Agreed Actions:
- Alex to send setup instructions and security docs
- Maria to schedule training session for admin team
- Client to provide Slack workspace details
- Follow-up call in one week to check progress

Package Details:
- Basic Enterprise Plan selected
- Monthly billing cycle
- Option to upgrade after trial period`
      }
    };

    return notes[id as keyof typeof notes] || notes['1'];
  };

  const notes = getNotesData(meetingId);

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
              Meeting Notes
            </h1>
            <p className="text-body text-white/80">
              Detailed timestamped notes and raw transcript
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button
              size="sm"
              className="bg-noted-purple hover:bg-noted-purple/90 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Meeting Info */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-2xl font-bold text-white">
              {notes.title}
            </CardTitle>
            <p className="text-body text-white/70">{notes.date}</p>
          </CardHeader>
        </Card>

        {/* Timestamped Notes */}
        <Card className="card-gradient border-white/10 mb-6">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Timestamped Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notes.timestamps.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 text-noted-purple font-semibold text-sm min-w-[60px]">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>
                  <div className="text-body text-white/90 flex-1">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Raw Notes */}
        <Card className="card-gradient border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-cta text-xl font-bold text-white">
              Complete Meeting Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <pre className="text-body text-white/90 whitespace-pre-wrap text-sm leading-relaxed">
                {notes.rawNotes}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MeetingNotes;
