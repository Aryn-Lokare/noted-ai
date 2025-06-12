
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Calendar, Clock, Users, Mic, Video, FileText } from 'lucide-react';

interface MeetingDetailsProps {
  meetingId: string;
  onBack: () => void;
}

const MeetingDetails: React.FC<MeetingDetailsProps> = ({ meetingId, onBack }) => {
  const getDetailsData = (id: string) => {
    const details = {
      '1': {
        title: 'Product Strategy Meeting',
        date: '2024-06-10',
        startTime: '2:00 PM',
        endTime: '2:45 PM',
        duration: '45 minutes',
        platform: 'Zoom',
        meetingId: 'zoom-123-456-789',
        host: 'John Doe',
        status: 'Completed',
        participants: [
          { name: 'John Doe', role: 'Host', joinTime: '2:00 PM', leaveTime: '2:45 PM' },
          { name: 'Sarah Wilson', role: 'Participant', joinTime: '2:02 PM', leaveTime: '2:45 PM' },
          { name: 'Mike Chen', role: 'Participant', joinTime: '2:01 PM', leaveTime: '2:44 PM' },
          { name: 'Lisa Garcia', role: 'Participant', joinTime: '2:03 PM', leaveTime: '2:45 PM' },
          { name: 'Tom Brown', role: 'Participant', joinTime: '2:05 PM', leaveTime: '2:43 PM' },
          { name: 'Anna Smith', role: 'Participant', joinTime: '2:04 PM', leaveTime: '2:45 PM' }
        ],
        recordings: {
          audio: 'Available (45 min)',
          video: 'Available (45 min)',
          transcript: 'Available (3,247 words)',
          summary: 'Generated'
        },
        analytics: {
          speakingTime: [
            { name: 'John Doe', percentage: 35, minutes: '15.8 min' },
            { name: 'Sarah Wilson', percentage: 20, minutes: '9.0 min' },
            { name: 'Mike Chen', percentage: 18, minutes: '8.1 min' },
            { name: 'Lisa Garcia', percentage: 15, minutes: '6.8 min' },
            { name: 'Tom Brown', percentage: 8, minutes: '3.6 min' },
            { name: 'Anna Smith', percentage: 4, minutes: '1.8 min' }
          ],
          engagement: 'High',
          keywordsMentioned: ['roadmap', 'mobile', 'AI', 'budget', 'timeline', 'React Native']
        }
      },
      '2': {
        title: 'Client Onboarding Call',
        date: '2024-06-09',
        startTime: '10:30 AM',
        endTime: '11:00 AM',
        duration: '30 minutes',
        platform: 'Google Meet',
        meetingId: 'meet-abc-def-ghi',
        host: 'Alex Johnson',
        status: 'Completed',
        participants: [
          { name: 'Alex Johnson', role: 'Host', joinTime: '10:30 AM', leaveTime: '11:00 AM' },
          { name: 'Maria Rodriguez', role: 'Co-host', joinTime: '10:29 AM', leaveTime: '11:00 AM' },
          { name: 'David Kim', role: 'Client', joinTime: '10:32 AM', leaveTime: '10:59 AM' }
        ],
        recordings: {
          audio: 'Available (30 min)',
          video: 'Available (30 min)',
          transcript: 'Available (1,892 words)',
          summary: 'Generated'
        },
        analytics: {
          speakingTime: [
            { name: 'Alex Johnson', percentage: 45, minutes: '13.5 min' },
            { name: 'David Kim', percentage: 35, minutes: '10.5 min' },
            { name: 'Maria Rodriguez', percentage: 20, minutes: '6.0 min' }
          ],
          engagement: 'Medium',
          keywordsMentioned: ['onboarding', 'security', 'implementation', 'training', 'compliance']
        }
      }
    };

    return details[id as keyof typeof details] || details['1'];
  };

  const details = getDetailsData(meetingId);

  return (
    <div className="min-h-screen bg-noted-gradient pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
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
              Meeting Details
            </h1>
            <p className="text-body text-white/80">
              Complete meeting information and analytics
            </p>
          </div>

          <Button
            size="sm"
            className="bg-noted-purple hover:bg-noted-purple/90 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Basic Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Meeting Info */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-cta text-2xl font-bold text-white">
                  {details.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-noted-purple" />
                      <div>
                        <p className="text-body text-white/70 text-sm">Date</p>
                        <p className="text-body text-white font-semibold">{details.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-body text-white/70 text-sm">Duration</p>
                        <p className="text-body text-white font-semibold">{details.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-body text-white/70 text-sm">Participants</p>
                        <p className="text-body text-white font-semibold">{details.participants.length} people</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-body text-white/70 text-sm">Time</p>
                      <p className="text-body text-white font-semibold">{details.startTime} - {details.endTime}</p>
                    </div>
                    
                    <div>
                      <p className="text-body text-white/70 text-sm">Platform</p>
                      <Badge className="bg-blue-500 text-white">{details.platform}</Badge>
                    </div>

                    <div>
                      <p className="text-body text-white/70 text-sm">Status</p>
                      <Badge className="bg-green-500 text-white">{details.status}</Badge>
                    </div>

                    <div>
                      <p className="text-body text-white/70 text-sm">Meeting ID</p>
                      <p className="text-body text-white/90 font-mono text-sm">{details.meetingId}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participants */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-cta text-xl font-bold text-white">
                  Participants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {details.participants.map((participant, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-noted-purple rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {participant.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-body text-white font-semibold">{participant.name}</p>
                          <p className="text-body text-white/70 text-sm">{participant.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-body text-white/90 text-sm">
                          {participant.joinTime} - {participant.leaveTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Speaking Time Analytics */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-cta text-xl font-bold text-white">
                  Speaking Time Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {details.analytics.speakingTime.map((speaker, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-body text-white font-semibold">{speaker.name}</span>
                        <span className="text-body text-white/70 text-sm">{speaker.minutes}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-noted-purple h-2 rounded-full transition-all duration-300"
                          style={{ width: `${speaker.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-right">
                        <span className="text-body text-white/70 text-sm">{speaker.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recordings & Analytics */}
          <div className="space-y-6">
            {/* Recordings */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-cta text-xl font-bold text-white">
                  Available Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mic className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-body text-white font-semibold text-sm">Audio Recording</p>
                      <p className="text-body text-white/70 text-xs">{details.recordings.audio}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-body text-white font-semibold text-sm">Video Recording</p>
                      <p className="text-body text-white/70 text-xs">{details.recordings.video}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-body text-white font-semibold text-sm">Transcript</p>
                      <p className="text-body text-white/70 text-xs">{details.recordings.transcript}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Analytics */}
            <Card className="card-gradient border-white/10">
              <CardHeader>
                <CardTitle className="text-cta text-xl font-bold text-white">
                  Quick Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-body text-white/70 text-sm">Engagement Level</p>
                  <Badge className={`${details.analytics.engagement === 'High' ? 'bg-green-500' : 'bg-yellow-500'} text-white mt-1`}>
                    {details.analytics.engagement}
                  </Badge>
                </div>

                <div>
                  <p className="text-body text-white/70 text-sm mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {details.analytics.keywordsMentioned.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-white px-2 py-1 rounded text-xs text-body"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingDetails;
