
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PricingPageProps {
  onShowAuth: (type: 'login' | 'signup') => void;
}

const Pricing: React.FC<PricingPageProps> = ({ onShowAuth }) => {
  const plans = [
    {
      name: 'Freemium',
      price: 'Free',
      description: 'Perfect for trying out our AI meeting assistant',
      features: [
        '3 meetings per month',
        'Basic meeting summaries',
        'Limited note-taking features',
        'Email support'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$10',
      period: '/month',
      description: 'Ideal for individuals and professionals',
      features: [
        'Unlimited meetings',
        'Advanced AI summaries',
        'Full note-taking capabilities',
        'Priority support',
        'Export to multiple formats',
        'Calendar integration'
      ],
      buttonText: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large teams',
      features: [
        'Everything in Pro',
        'Team management',
        'Custom integrations',
        'Dedicated account manager',
        'SSO authentication',
        'Advanced analytics'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar onShowAuth={onShowAuth} />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-body text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h1>
            <p className="text-body text-xl text-gray-700 max-w-2xl mx-auto">
              Select the perfect plan for your meeting needs. Start with our free plan and upgrade as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-gradient relative ${plan.popular ? 'ring-2 ring-noted-purple' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-noted-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-body text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-cta text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-body text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  <CardDescription className="text-body text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-body text-gray-700">
                        <Check className="h-5 w-5 text-noted-purple mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full text-body ${
                      plan.popular 
                        ? 'bg-noted-purple hover:bg-noted-purple/90' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                    onClick={() => onShowAuth('signup')}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
