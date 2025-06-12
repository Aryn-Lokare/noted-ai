
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Mail } from 'lucide-react';

const AccountActions: React.FC = () => {
  const { logout } = useAuth();

  return (
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
  );
};

export default AccountActions;
