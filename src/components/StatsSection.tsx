import React from 'react';


type StatCardProps = {
  number: string;
  description: string;
  bgColor: string;
  textColor: string;
};

const StatCard = ({ number, description, bgColor, textColor }: StatCardProps) => {
  return (
    <div className={`${bgColor} ${textColor} p-8 rounded-lg h-full flex flex-col justify-between`}>
      <div className="text-5xl md:text-6xl font-bold mb-6">{number}</div>
      <div className="text-base md:text-lg">{description}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          The <span className="italic">AI</span> Wave is <span className="italic">Here</span>
        </h2>

        <p className="text-xl md:text-2xl text-center text-gray-600 mb-12">
          Don't get left behind—capitalize on AI and future‑proof your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="h-[400px]">
            <StatCard 
              number="3.7x" 
              description="Average ROI from AI adoption" 
              bgColor="bg-convexa-yellow" 
              textColor="text-convexa-black"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="40%"
              description="Productivity boost with AI tools" 
              bgColor="bg-convexa-brown" 
              textColor="text-white"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="7.5hrs" 
              description="Avg employee time saved per week using AI"
              bgColor="bg-convexa-blue" 
              textColor="text-convexa-black"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="2.5x" 
              description="Higher revenue growth compared to peers" 
              bgColor="bg-convexa-red" 
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
