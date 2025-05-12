
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-askspace-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-askspace-red to-askspace-black"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Revolutionizing <span className="text-askspace-red">Architecture</span> & <span className="text-askspace-red">Interior Design</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              AskSpace transforms ideas into inspiring spaces. We design with passion, 
              precision, and a deep understanding of how spaces shape human experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="bg-askspace-red text-white hover:bg-askspace-red/80 transition-all duration-300 transform hover:-translate-y-1">
                  View Our Projects
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block animate-slide-in-right relative z-10">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-askspace-red rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-askspace-darkgray p-6 rounded-lg shadow-2xl">
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-askspace-red shadow-lg animate-bounce-subtle">
                    <img 
                      src="public/lovable-uploads/d23a2eaa-b3d2-480e-a1eb-18b524214eaf.png" 
                      alt="Founder of AskSpace" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 text-askspace-red">Founder & Creative Director</h3>
                  <p className="text-gray-300 mb-4">Leading the vision of exceptional design and flawless execution</p>
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                      "Architecture is not just about buildings; it's about crafting experiences and emotions through space."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
