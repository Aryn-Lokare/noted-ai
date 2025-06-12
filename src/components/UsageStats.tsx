
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const UsageStats: React.FC = () => {
  const stats = [
    { label: 'Total Meetings', value: '47' },
    { label: 'This Month', value: '12' },
    { label: 'Hours Saved', value: '23.5' },
    { label: 'Notes Generated', value: '156' }
  ];

  return (
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
  );
};

export default UsageStats;
