
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

const AccountActions: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="text-body text-xl font-bold text-gray-900">
          Account Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={logout}
          variant="outline"
          className="w-full text-body bg-transparent border-red-400 text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccountActions;
