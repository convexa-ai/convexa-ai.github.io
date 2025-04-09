import React from 'react';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="w-full bg-convexa-yellow min-h-screen flex items-center py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Globe image with email overlay */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-full overflow-hidden bg-convexa-blue relative">
              <div className="absolute inset-0">
                <svg viewBox="0 0 500 500" width="100%" height="100%">
                  {/* Grid lines */}
                  <path d="M0,250 H500" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  <path d="M250,0 V500" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="200" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="150" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="100" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  <circle cx="250" cy="250" r="50" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
                  
                  {/* Continent shapes */}
                  <path d="M120,120 Q200,150 180,250 Q160,320 220,350 Q280,380 350,300 Q400,250 380,150 Q340,80 250,100 Q180,110 120,120 Z" fill="#004538" />
                </svg>
                
                {/* Small dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute top-3/5 right-1/4 w-2 h-2 bg-black rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-black rounded-full"></div>
                
                {/* Yellow indicator bars */}
                <div className="absolute top-1/4 left-[45%] w-4 h-12 bg-yellow-300 rounded"></div>
                <div className="absolute top-1/4 left-[55%] w-4 h-14 bg-yellow-300 rounded"></div>
                <div className="absolute top-1/4 left-[50%] w-4 h-10 bg-yellow-300 rounded"></div>
              </div>
            </div>
            
            {/* Email card overlay */}
            
          </div>
          
          {/* Text content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Strategic AI consulting to unlock your company's <span className="italic">Success</span>
            </h1>
            <p className="text-lg mb-8">
            We help you identify high-leverage AI opportunities, design tailored solutions, and implement them with speed and clarity.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-full flex items-center text-lg">
              <span>Contact us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;