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
        <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center z-10`}>
          <span className="text-lg font-bold text-white">{number}</span>
        </div>
      </div>

      {/* Content boxes - one for left, one for right */}
      <div className="grid grid-cols-2 w-full">
        {/* Left side content */}
        <div className={`${position === 'left' ? 'block' : 'invisible'} pr-8 flex justify-end`}>
          <div className="max-w-md text-right">
            {position === 'left' && (
              <>
                <span className="text-xl text-gray-500">STEP {number}</span>
                <h3 className="text-4xl font-bold mb-3">{title}</h3>
                <p className="text-xl text-gray-600">{description}</p>
              </>
            )}
          </div>
        </div>
        
        {/* Right side content */}
        <div className={`${position === 'right' ? 'block' : 'invisible'} pl-8`}>
          <div className="max-w-md text-left">
            {position === 'right' && (
              <>
                <span className="text-xl text-gray-500">STEP {number}</span>
                <h3 className="text-4xl font-bold mb-3">{title}</h3>
                <p className="text-xl text-gray-600">{description}</p>
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
      description: "Evaluate your technology landscape and data maturity to pinpoint immediate AI opportunities.",
      icon: <Settings className="h-4 w-4 text-white" />,
      // color: "bg-convexa-lavendar",
      color: "bg-convexa-red",
      position: "left" as const
    },
    {
      number: 2,
      title: "Competitive Benchmarking",
      description: "Measure your performance against industry leaders and uncover disruptive trends that can set you apart.",
      icon: <MessageSquare className="h-4 w-4 text-white" />,
      color: "bg-convexa-red",
      position: "right" as const
    },
    {
      number: 3,
      title: "Strategy & Roadmap Development",
      description: "Craft a clear, actionable AI strategy focused on high-impact use cases that align with your business objectives.",
      icon: <Users className="h-4 w-4 text-white" />,
      // color: "bg-convexa-blue",
      color: "bg-convexa-red",
      position: "left" as const
    },
    {
      number: 4,
      title: "Workforce Upskilling",
      description: "Empower your team with the necessary skills and training to seamlessly integrate AI into everyday operations.",
      icon: <BarChart className="h-4 w-4 text-white" />,
      // color: "bg-convexa-brown",
      color: "bg-convexa-red",
      position: "right" as const
    },
    {
      number: 5,
      title: "Cost Benefit Analysis",
      description: "Quantitatively assess ROI, optimize investments, and scale successful AI initiatives for sustainable growth.",
      icon: <CheckCircle className="h-4 w-4 text-white" />,
      // color: "bg-convexa-pink",
      color: "bg-convexa-red",
      position: "left" as const
    }
  ];

  return (
    <section className="w-full min-h-screen py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12">
          Your Roadmap to <span className="italic">AI Transformation</span>
        </h2>
        <p className="text-xl text-center max-w-4xl mx-auto mb-32">
          Partner with us to navigate a structured, five-step approach that transforms challenges into opportunities for growth.
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Continuous dotted center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full border-l-4 border-dashed border-gray-200 z-0"></div>
          
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
