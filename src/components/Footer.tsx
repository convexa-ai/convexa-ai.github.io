import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterColumn = ({
  title,
  links
}: {
  title: string;
  links: string[];
}) => {
  return (
    <div>
      <h3 className="text-white text-lg font-medium mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return <footer className="w-full bg-convexa-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Footer columns removed as requested */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-4">Who we are</h3>
            <p className="mb-4">
            We’re a team of AI experts helping businesses turn strategy into intelligent systems
            </p>
            
            {/* <div className="mt-8">
              <a href="#" className="block">
                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60,60 a30,30 0 1,0 0,1 z" fill="#FFC5F0" />
                  <path d="M110,60 l40,0 q20,0 20,30 t-20,30 l-40,0 0,-60" fill="#FFC5F0" />
                  <path d="M170,60 l40,0 q20,0 20,30 t-20,30 l-40,0 0,-60" fill="#FFC5F0" />
                  <path d="M40,60 l40,0 q20,0 20,30 t-20,30 l-40,0 0,-60" fill="#FFC5F0" />
                </svg>
              </a>
            </div> */}

<svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#004437" />

  <text x="50%" y="50%" dominant-baseline="left" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="60"
        font-weight="900"
        fill="#FFC5F0">
    CONVEXA
  </text>
</svg>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Linkedin</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            
            <p className="mb-4">Stay up to date</p>
            <div className="flex">
              <input type="email" placeholder="Business Email Address" className="flex-grow abg-transparent border border-white/20 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-white" />
              <button className="bg-convexa-red text-white px-4 py-2 rounded-r-md flex items-center">
                <span className="sr-only">Subscribe</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-wrap justify-between text-sm">
          
          <div className="text-white/60">
            © {new Date().getFullYear()} Convexa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
