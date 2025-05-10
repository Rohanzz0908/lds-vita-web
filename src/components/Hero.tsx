
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-pharma-blue to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Advancing Healthcare Through Innovation
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              LDS Life Sciences is dedicated to developing innovative pharmaceutical solutions 
              to improve health and quality of life worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-pharma-blue hover:bg-blue-50">
                Learn More
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Products
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Laboratory equipment" 
                  className="w-full h-64 object-cover rounded-md" 
                />
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3 className="text-pharma-blue font-semibold">Commitment to Quality</h3>
                    <p className="text-gray-700 text-sm">ISO 9001 Certified</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    GMP Approved
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
