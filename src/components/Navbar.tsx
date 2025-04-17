import React from 'react';
import { ArrowRight } from 'lucide-react';
const Navbar = () => {
  return <div className="w-full">
      {/* Top announcement bar */}
      

      {/* Main navigation */}
      <div className="w-full bg-convexa-lavendar px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold">Convexa AI</span>
            </div>
            
            
          </div>
          
          <div className="flex items-center space-x-4">
            
            
            <a href="mailto:hello@convexa.co" className="bg-convexa-black text-white px-4 py-2 rounded-full flex items-center">
              <span>Contact us</span>
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default Navbar;