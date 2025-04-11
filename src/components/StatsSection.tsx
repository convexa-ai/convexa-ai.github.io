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
          The AI Opportunity: Unlocking Exponential Value
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="h-[400px]">
            <StatCard 
              number="$990B" 
              description="Estimated Global Market Value by 2027" 
              bgColor="bg-convexa-yellow" 
              textColor="text-convexa-black"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="3.7x" 
              description="Average ROI Achieved Through AI Investments" 
              bgColor="bg-convexa-brown" 
              textColor="text-white"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="20%" 
              description="Annual Surge in Generative AI Adoption (2024)" 
              bgColor="bg-convexa-blue" 
              textColor="text-convexa-black"
            />
          </div>
          
          <div className="h-[400px]">
            <StatCard 
              number="2.5x" 
              description="Revenue Growth Exceeding Industry Peers" 
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
