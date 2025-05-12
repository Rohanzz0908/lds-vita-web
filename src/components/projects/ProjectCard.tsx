
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Image, Move, Star } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
  };
  index: number;
  isAnimated: boolean;
}

const ProjectCard = ({ project, index, isAnimated }: ProjectCardProps) => {
  return (
    <Card 
      key={project.id} 
      className={`overflow-hidden border-none bg-askspace-darkgray shadow-lg hover:shadow-xl transition-all duration-500 ${
        isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${0.1 * index}s`,
        transitionProperty: 'transform, opacity',
      }}
    >
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-askspace-black to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-askspace-red/40 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center">
            {project.category === 'residential' && <Layout className="h-5 w-5 text-askspace-red mr-2" />}
            {project.category === 'commercial' && <Move className="h-5 w-5 text-askspace-red mr-2" />}
            {project.category === 'interior' && <Image className="h-5 w-5 text-askspace-red mr-2" />}
            {project.category === 'landscape' && <Star className="h-5 w-5 text-askspace-red mr-2" />}
            <h3 className="font-bold text-lg text-white">{project.name}</h3>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-400 text-sm">{project.description}</p>
        <div className="mt-3 flex justify-end">
          <button className="text-xs text-askspace-red hover:text-white transition-colors duration-300 hover:underline transform hover:translate-x-1">
            View Details →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
