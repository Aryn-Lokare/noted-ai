
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { User, Mail, Calendar, Settings, ArrowLeft } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
}

const Profile: React.FC<ProfilePageProps> = ({ onBack }) => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: 'Tech Corp',
    role: 'Product Manager',
    timezone: 'UTC-8 (Pacific Time)'
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log('Saving profile data:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      company: 'Tech Corp',
      role: 'Product Manager',
      timezone: 'UTC-8 (Pacific Time)'
    });
    setIsEditing(false);
  };

  const stats = [
    { label: 'Total Meetings', value: '47' },
    { label: 'This Month', value: '12' },
    { label: 'Hours Saved', value: '23.5' },
    { label: 'Notes Generated', value: '156' }
  ];

  return (
    <div className="min-h-screen bg-noted-gradient p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="text-body bg-transparent border-white/30 text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-body text-4xl font-bold text-white mb-4">
              User Profile
            </h1>
            <p className="text-body text-white/80">
              Manage your account settings and preferences
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <Card className="card-gradient mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-body text-2xl font-bold text-white flex items-center">
                  <User className="h-6 w-6 mr-2 text-noted-purple" />
                  Profile Information
                </CardTitle>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant="outline"
                  className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-body text-white/90 mb-2 block">Full Name</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="bg-white/10 border-white/30 text-white"
                      />
                    ) : (
                      <p className="text-body text-white text-lg">{profileData.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-body text-white/90 mb-2 block">Email Address</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="bg-white/10 border-white/30 text-white"
                      />
                    ) : (
                      <p className="text-body text-white text-lg">{profileData.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-body text-white/90 mb-2 block">Company</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.company}
                        onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                        className="bg-white/10 border-white/30 text-white"
                      />
                    ) : (
                      <p className="text-body text-white text-lg">{profileData.company}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label className="text-body text-white/90 mb-2 block">Role</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.role}
                        onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                        className="bg-white/10 border-white/30 text-white"
                      />
                    ) : (
                      <p className="text-body text-white text-lg">{profileData.role}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label className="text-body text-white/90 mb-2 block">Timezone</Label>
                  {isEditing ? (
                    <Input
                      value={profileData.timezone}
                      onChange={(e) => setProfileData({...profileData, timezone: e.target.value})}
                      className="bg-white/10 border-white/30 text-white"
                    />
                  ) : (
                    <p className="text-body text-white text-lg">{profileData.timezone}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <Button 
                      onClick={handleSave}
                      className="text-body bg-noted-purple hover:bg-noted-purple/90 text-white"
                    >
                      Save Changes
                    </Button>
                    <Button 
                      onClick={handleCancel}
                      variant="outline"
                      className="text-body bg-transparent border-white/30 text-white hover:bg-white/10"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div>
            <Card className="card-gradient mb-8">
              <CardHeader>
                <CardTitle className="text-body text-xl font-bold text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-noted-purple" />
                  Usage Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-body text-white/80">{stat.label}</span>
                      <span className="text-cta text-xl font-bold text-noted-purple">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-body text-xl font-bold text-white">
                  Account Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={logout}
                  variant="outline"
                  className="w-full text-body bg-transparent border-red-400/50 text-red-400 hover:bg-red-400/10"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
