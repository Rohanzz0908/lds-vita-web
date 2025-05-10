
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pharma-darkgray mb-4">About LDS Life Sciences</h2>
          <div className="w-20 h-1 bg-pharma-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pharma-blue">Our Company</h3>
            <p className="text-gray-700 mb-6">
              LDS LIFE SCIENCES LLP (LLPIN: AAY-5611) is a Limited Liability Partnership firm incorporated on 12 Dec 2021. Registered at the Registrar of Companies, Hyderabad, we are committed to advancing pharmaceutical research and development.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pharma-lightblue flex items-center justify-center">
                  <FileText className="h-5 w-5 text-pharma-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Our Mission</h4>
                  <p className="mt-1 text-gray-500">
                    To develop innovative pharmaceutical products that improve the quality of life for patients worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pharma-lightblue flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-pharma-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Company Structure</h4>
                  <p className="mt-1 text-gray-500">
                    Led by our Designated Partners, SRINIVASULU PUTTA and SAI SANHITH NICHENAMETLA, LDS Life Sciences combines expertise with innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-center text-pharma-blue">Leadership</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 ring-2 ring-pharma-lightblue">
                      <img 
                        src="public/lovable-uploads/ef011c44-1fc1-4a02-b8b3-508cfa596760.png" 
                        alt="SRINIVASULU PUTTA" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-1">SRINIVASULU PUTTA</h4>
                    <p className="text-pharma-blue mb-3">Founder & Managing Partner</p>
                    <p className="text-center text-gray-600 text-sm">
                      As the founder of LDS Life Sciences, Mr. PUTTA brings extensive experience in 
                      pharmaceutical research and development. His leadership guides our commitment to innovation and quality.
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
