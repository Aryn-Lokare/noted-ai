
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, FileText, Eye, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface Meeting {
  id: string;
  title: string;
  date: string;
  duration: string;
  participants: number;
  status: 'completed' | 'processing' | 'upcoming';
  platform: 'zoom' | 'meet' | 'teams';
}

interface DashboardProps {
  onViewSummary: (meetingId: string) => void;
  onViewNotes: (meetingId: string) => void;
  onViewDetails: (meetingId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewSummary, onViewNotes, onViewDetails }) => {
  const { user } = useAuth();

  const meetings: Meeting[] = [
    {
      id: '1',
      title: 'Product Strategy Meeting',
      date: '2024-06-10',
      duration: '45 min',
      participants: 6,
      status: 'completed',
      platform: 'zoom'
    },
    {
      id: '2',
      title: 'Client Onboarding Call',
      date: '2024-06-09',
      duration: '30 min',
      participants: 3,
      status: 'completed',
      platform: 'meet'
    },
    {
      id: '3',
      title: 'Team Standup',
      date: '2024-06-08',
      duration: '15 min',
      participants: 8,
      status: 'completed',
      platform: 'teams'
    },
    {
      id: '4',
      title: 'Quarterly Review',
      date: '2024-06-07',
      duration: '60 min',
      participants: 12,
      status: 'processing',
      platform: 'zoom'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'processing': return 'bg-yellow-500';
      case 'upcoming': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'zoom': return 'bg-blue-500';
      case 'meet': return 'bg-green-500';
      case 'teams': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-noted-gradient pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-cta text-4xl font-bold text-white mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-body text-white/80 text-lg">
            Here's your meeting activity and insights
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-gradient border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body text-white/70 text-sm">Total Meetings</p>
                  <p className="text-cta text-2xl font-bold text-white">24</p>
                </div>
                <Calendar className="w-8 h-8 text-noted-purple" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body text-white/70 text-sm">Hours Saved</p>
                  <p className="text-cta text-2xl font-bold text-white">18.5</p>
                </div>
                <Clock className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body text-white/70 text-sm">Participants</p>
                  <p className="text-cta text-2xl font-bold text-white">156</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body text-white/70 text-sm">Summaries</p>
                  <p className="text-cta text-2xl font-bold text-white">24</p>
                </div>
                <FileText className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Meetings */}
        <Card className="card-gradient border-white/10">
          <CardHeader>
            <CardTitle className="text-cta text-2xl font-bold text-white">
              Recent Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-body text-lg font-semibold text-white">
                          {meeting.title}
                        </h3>
                        <Badge className={`${getStatusColor(meeting.status)} text-white text-xs`}>
                          {meeting.status}
                        </Badge>
                        <Badge className={`${getPlatformColor(meeting.platform)} text-white text-xs`}>
                          {meeting.platform}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {meeting.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {meeting.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {meeting.participants} participants
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        onClick={() => onViewSummary(meeting.id)}
                        size="sm"
                        variant="outline"
                        className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View Summary
                      </Button>
                      
                      <Button
                        onClick={() => onViewNotes(meeting.id)}
                        size="sm"
                        variant="outline"
                        className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        View Notes
                      </Button>
                      
                      <Button
                        onClick={() => onViewDetails(meeting.id)}
                        size="sm"
                        className="text-body bg-noted-purple hover:bg-noted-purple/90 text-white"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
