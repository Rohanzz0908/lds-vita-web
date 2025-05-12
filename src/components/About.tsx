
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Eye, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-askspace-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">About AskSpace</h2>
          <div className="w-20 h-1 bg-askspace-red mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4 text-askspace-red">Our Vision</h3>
            <p className="text-gray-300 mb-6">
              AskSpace is a pioneering architecture and interior design firm dedicated to creating spaces that inspire and transform. We blend innovative design with functional practicality to deliver exceptional living and working environments.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-askspace-red/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-askspace-red" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Our Approach</h4>
                  <p className="mt-1 text-gray-400">
                    We approach each project as a unique opportunity to create something extraordinary, focusing on client needs, sustainability, and timeless design.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-askspace-red/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-askspace-red" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Our Commitment</h4>
                  <p className="mt-1 text-gray-400">
                    We're committed to excellence in every aspect of our work, from the initial concept to the final execution, ensuring each project exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <Card className="overflow-hidden border-none bg-askspace-darkgray shadow-2xl">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center text-askspace-red">Leadership</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-2 ring-askspace-red">
                      <img 
                        src="public/lovable-uploads/d23a2eaa-b3d2-480e-a1eb-18b524214eaf.png" 
                        alt="Founder of AskSpace" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-1 text-white">Founder, AskSpace</h4>
                    <p className="text-askspace-red mb-4">Visionary Architect & Designer</p>
                    <p className="text-center text-gray-400 text-sm">
                      The creative force behind AskSpace, our founder brings extensive experience in architectural innovation
                      and interior excellence. Her leadership guides our commitment to transformative design solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
