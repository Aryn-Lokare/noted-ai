
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { User, Settings } from 'lucide-react';

const ProfileInfo: React.FC = () => {
  const { user } = useAuth();
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

  return (
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
  );
};

export default ProfileInfo;
