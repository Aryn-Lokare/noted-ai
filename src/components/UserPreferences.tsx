
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Settings, Moon, Sun } from 'lucide-react';

const UserPreferences: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
    // In a real app, this would save the preference to backend
    console.log('Dark mode toggled:', checked);
    
    // Apply dark mode class to document
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="text-body text-2xl font-bold text-gray-900 flex items-center">
          <Settings className="h-6 w-6 mr-2 text-noted-purple" />
          Preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {darkMode ? (
              <Moon className="h-5 w-5 text-noted-purple" />
            ) : (
              <Sun className="h-5 w-5 text-noted-purple" />
            )}
            <div>
              <Label className="text-body text-gray-900 text-lg">Dark Mode</Label>
              <p className="text-body text-gray-600 text-sm">
                Switch between light and dark themes
              </p>
            </div>
          </div>
          <Switch
            checked={darkMode}
            onCheckedChange={handleDarkModeToggle}
            className="data-[state=checked]:bg-noted-purple"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserPreferences;
