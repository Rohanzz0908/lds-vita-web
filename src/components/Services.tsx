
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Image, Move } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "Innovative architectural solutions for residential and commercial spaces that balance aesthetics, functionality, and sustainability.",
      icon: <Layout className="h-10 w-10 text-askspace-red" />,
    },
    {
      title: "Interior Design",
      description: "Thoughtful interior design that transforms spaces into personalized, functional, and visually stunning environments.",
      icon: <Image className="h-10 w-10 text-askspace-red" />,
    },
    {
      title: "Space Planning",
      description: "Strategic space planning that maximizes efficiency and flow, creating harmonious environments tailored to specific needs.",
      icon: <Move className="h-10 w-10 text-askspace-red" />,
    }
  ];

  const specialties = [
    "Residential Architecture",
    "Commercial Spaces",
    "Landscape Design",
    "Sustainable Architecture"
  ];

  return (
    <section id="services" className="py-20 bg-askspace-darkgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services & Specialties</h2>
          <div className="w-20 h-1 bg-askspace-red mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            At AskSpace, we offer comprehensive design services that transform concepts into extraordinary spaces, each reflecting our commitment to innovation and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none bg-askspace-black shadow-lg hover:shadow-xl transition-shadow animate-zoom-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-askspace-red/10 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold text-center text-white mb-10">Our Design Specialties</h2>
          <div className="bg-askspace-black p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((specialty, index) => (
                <div key={index} className="bg-askspace-red/10 p-5 rounded-lg text-center transform hover:scale-105 transition-transform">
                  <p className="text-askspace-red font-medium">{specialty}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-300 mb-6">
                Our expert team brings creativity and technical excellence to every project, ensuring exceptional results that exceed expectations.
              </p>
              <Link to="/projects">
                <button className="bg-askspace-red text-white px-6 py-2 rounded hover:bg-askspace-red/80 transition-colors transform hover:-translate-y-1 duration-300">
                  View Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
