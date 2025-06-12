
import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileInfo from '@/components/ProfileInfo';
import UserPreferences from '@/components/UserPreferences';
import UsageStats from '@/components/UsageStats';
import AccountActions from '@/components/AccountActions';

interface ProfilePageProps {
  onBack: () => void;
}

const Profile: React.FC<ProfilePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-noted-gradient p-6">
      <div className="container mx-auto max-w-4xl">
        <ProfileHeader onBack={onBack} />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <ProfileInfo />
            <UserPreferences />
          </div>

          {/* Statistics and Actions */}
          <div>
            <UsageStats />
            <AccountActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
