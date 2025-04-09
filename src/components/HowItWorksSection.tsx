import React from 'react';
import { MessageSquare, Settings, Users, BarChart, CheckCircle } from 'lucide-react';

type TimelineStepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  position: 'left' | 'right';
  isLast?: boolean;
};

const TimelineStep = ({
  number,
  title,
  description,
  icon,
  color,
  position,
  isLast = false
}: TimelineStepProps) => {
  return (
    <div className="flex items-center mb-20 relative">
      {/* Center timeline with dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center z-10`}>
          <span className="text-xs font-bold text-white">{number}</span>
        </div>
      </div>

      {/* Content boxes - one for left, one for right */}
      <div className="grid grid-cols-2 w-full">
        {/* Left side content */}
        <div className={`${position === 'left' ? 'block' : 'invisible'} pr-8 flex justify-end`}>
          <div className="max-w-xs text-right">
            {position === 'left' && (
              <>
                <span className="text-sm text-gray-500">STEP {number}</span>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </>
            )}
          </div>
        </div>
        
        {/* Right side content */}
        <div className={`${position === 'right' ? 'block' : 'invisible'} pl-8`}>
          <div className="max-w-xs text-left">
            {position === 'right' && (
              <>
                <span className="text-sm text-gray-500">STEP {number}</span>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "AI Readiness Assessment",
      description: "Evaluate your infrastructure, data maturity, and identify opportunities",
      icon: <Settings className="h-4 w-4 text-white" />,
      color: "bg-convexa-red",
      position: "left" as const
    },
    {
      number: 2,
      title: "Competitive Benchmarking",
      description: "Assess your maturity against industry leaders and uncover disruptive trends",
      icon: <MessageSquare className="h-4 w-4 text-white" />,
      color: "bg-convexa-red",
      position: "right" as const
    },
    {
      number: 3,
      title: "Strategy & Roadmap Development",
      description: "Create a clear AI adoption plan by identifying high-impact use cases",
      icon: <Users className="h-4 w-4 text-white" />,
      color: "bg-convexa-pink",
      position: "left" as const
    },
    {
      number: 4,
      title: "Workforce Upskilling",
      description: "Equip your team with the skills needed to adapt to AI-enabled workflows",
      icon: <BarChart className="h-4 w-4 text-white" />,
      color: "bg-convexa-pink",
      position: "right" as const
    },
    {
      number: 5,
      title: "Cost Benefit Analysis",
      description: "Review ROI, prioritize investments, and measure success of AI initiatives",
      icon: <CheckCircle className="h-4 w-4 text-white" />,
      color: "bg-convexa-blue",
      position: "left" as const
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          how can we <span className="italic">help?</span>
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-24">
          We help organizations define and execute their AI strategies aligned with their business goals.
        </p>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Continuous dotted center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-gray-200 z-0"></div>
          
          {steps.map((step, index) => (
            <TimelineStep 
              key={step.number} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>

        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
