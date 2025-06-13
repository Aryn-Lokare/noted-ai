
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ProfileHeaderProps {
  onBack: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onBack }) => {
  return (
    <div className="mb-8">
      <Button
        onClick={onBack}
        variant="outline"
        className="text-body bg-white border-gray-300 text-gray-700 hover:bg-gray-100 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>
      
      <div className="text-center">
        <h1 className="text-body text-4xl font-bold text-gray-900 mb-4">
          User Profile
        </h1>
        <p className="text-body text-gray-700">
          Manage your account settings and preferences
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
