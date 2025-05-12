
import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Image, Move, Star } from "lucide-react"; 
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const isMobile = useIsMobile();

  // Animation effect for staggered reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      const items = [];
      for (let i = 0; i < projects.length; i++) {
        items.push(i);
        setAnimatedItems([...items]);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "interior", name: "Interior Design" },
    { id: "landscape", name: "Landscape" }
  ];

  const projects = [
    {
      id: 1,
      name: "Modern Minimalist Home",
      category: "residential",
      description: "Clean lines and open spaces define this minimalist residential project.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Luxury Apartment Complex",
      category: "residential",
      description: "A blend of luxury and functionality in urban living.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Corporate Headquarters",
      category: "commercial",
      description: "Innovative office design promoting collaboration and productivity.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Boutique Hotel",
      category: "commercial",
      description: "Unique hospitality design blending comfort with luxury.",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Contemporary Living Room",
      category: "interior",
      description: "Sleek interior design focusing on comfort and aesthetics.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Executive Office Suite",
      category: "interior",
      description: "Professional work environment designed for productivity.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Urban Garden Retreat",
      category: "landscape",
      description: "Transformative outdoor space in an urban setting.",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Rooftop Garden Design",
      category: "landscape",
      description: "Innovative green space utilization in high-rise buildings.",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 bg-askspace-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Project Portfolio</h2>
          <div className="w-20 h-1 bg-askspace-red mx-auto"></div>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-gray-300 px-4 md:px-0">
            Explore our diverse range of architectural and interior design projects, each reflecting our commitment to excellence and innovation.
          </p>
        </div>

        <div className="mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-6 md:mb-8 bg-askspace-darkgray p-1 shadow-md overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-askspace-red data-[state=active]:text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {filteredProjects.map((project, index) => (
                    <Card 
                      key={project.id} 
                      className={`overflow-hidden border-none bg-askspace-darkgray shadow-lg hover:shadow-xl transition-all duration-500 ${
                        animatedItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

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

        <div className="mt-12 md:mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="text-askspace-red" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-askspace-red border-askspace-red">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-white hover:text-askspace-red">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="text-askspace-red" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Projects;
