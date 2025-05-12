
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedProjectsProps {
  projects: {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
  }[];
}

const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
  return (
    <div className="mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-6 md:mb-8">Featured Projects</h3>
      <Carousel className="w-full">
        <CarouselContent>
          {projects.slice(0, 4).map((project) => (
            <CarouselItem key={project.id} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card className="overflow-hidden border-none bg-askspace-darkgray shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 sm:h-60">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-white">{project.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </div>
      </Carousel>
    </div>
  );
};

export default FeaturedProjects;
