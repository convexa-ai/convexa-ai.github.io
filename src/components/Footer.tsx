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
  return (
    <footer className="w-full bg-convexa-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Footer columns removed as requested */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-2">
            {/* <h3 className="text-white text-xl font-medium mb-4">Who We Are</h3> */}
            <div className="mt-2">
              <a href="#" className="block">
                <span className="text-2xl font-bold text-[#C6C2F2]">Convexa AI</span>
              </a>
            </div>
            <br />
            <p className="mb-4">
            We are a focused team of AI consultants who help businesses find and implement high-impact AI opportunities. Our approach is practical, results-driven, and tailored specifically to your goals.
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

            {/* <div className="mt-2">
              <a href="#" className="block">
                <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
                  <style>
                    {`.text { font-family: 'Helvetica', sans-serif; font-size: 36px; font-weight: bold; fill: #C6C2F2; }
                    .shape { fill: #C6C2F2; }`}
                  </style>
                   <path className="shape" d="M0 20 A40 40 0 0 1 40 60 L0 60 Z" />
                   <text x="50" y="60" className="text">Convexa AI</text>
                </svg>
              </a>
            </div> */}

            {/* <div className="mt-2">
              <a href="#" className="block">
                <svg width="300" height="100" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
                  <style>
                    {`.text { font-family: 'Helvetica', sans-serif; font-size: 36px; font-weight: bold; fill: #C6C2F2; }
                    .shape { fill: #C6C2F2; }`}
                  </style> */}
                   {/* Lavender crescent shape */}
                   {/* <g transform="translate(0, 0) scale(0.2)">
                     <path className="shape" d="M234.512,392.528
                           C173.12,371.648 132.424,316.544 132.424,250
                           C132.424,183.456 173.12,128.352 234.512,107.472
                           C220.096,147.296 212.888,193.312 212.888,250
                           C212.888,306.688 220.096,352.704 234.512,392.528
                           Z
                           M224.032,373.616
                           C211.576,341.056 205.348,300.36 205.348,250
                           C205.348,199.64 211.576,158.944 224.032,126.384
                           C186.228,154.56 162.328,199.64 162.328,250
                           C162.328,300.36 186.228,345.44 224.032,373.616
                           Z" />
                   </g> */}
                   {/* <text x="48" y="65" className="text">Convexa AI</text>
                </svg>
              </a>
            </div>
          </div> */}
          </div>
          
          {/* Harman: follow us section removed for now */}
           {/* <div>
            <h3 className="text-white text-lg font-medium mb-4">Follow us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Linkedin</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>  */}

          
          {/* <div className="lg:col-span-2 ml-auto justify-self-end">
            
            <p className="mb-4">Stay up to date</p>
            <div className="flex">
              <input type="email" placeholder="Business Email Address" className="flex-grow abg-transparent border border-white/20 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-white" />
              <button className="bg-convexa-red text-white px-4 py-2 rounded-r-md flex items-center">
                <span className="sr-only">Subscribe</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div> */}
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-wrap justify-between text-sm">
          
          <div className="text-white/60">
            © {new Date().getFullYear()} Convexa AI. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
