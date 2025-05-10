
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Pill, Tablet, Tablets } from "lucide-react"; 
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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "generic", name: "Generic Pharmaceuticals" },
    { id: "specialty", name: "Specialty Medicines" },
    { id: "otc", name: "OTC Products" },
    { id: "nutra", name: "Nutraceuticals" }
  ];

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      category: "generic",
      description: "Standard pain relief medication.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Paracetamol"
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      category: "generic",
      description: "Common antibiotic treatment.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Amoxicillin"
    },
    {
      id: 3,
      name: "Specialized Oncology Drug",
      category: "specialty",
      description: "Advanced treatment for specific cancers.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Oncology"
    },
    {
      id: 4,
      name: "Immune Support Capsules",
      category: "specialty",
      description: "Specialized immune system support.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Immune+Support"
    },
    {
      id: 5,
      name: "Cold & Flu Relief",
      category: "otc",
      description: "Fast-acting cold and flu symptom relief.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Cold+%26+Flu"
    },
    {
      id: 6,
      name: "Allergy Relief Tablets",
      category: "otc",
      description: "24-hour allergy symptom relief.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Allergy"
    },
    {
      id: 7,
      name: "Vitamin D3 Supplements",
      category: "nutra",
      description: "Daily vitamin D3 for bone health.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Vitamin+D3"
    },
    {
      id: 8,
      name: "Omega-3 Fish Oil",
      category: "nutra",
      description: "Heart and brain health supplement.",
      image: "https://placehold.co/300x200/D3E4FD/0056b3?text=Omega+3"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-pharma-darkgray mb-4">Our Product Portfolio</h2>
          <div className="w-20 h-1 bg-pharma-blue mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            Explore our comprehensive range of pharmaceutical products developed with innovation and quality.
          </p>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-white p-1 shadow-sm">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-pharma-blue data-[state=active]:text-white px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="relative h-48">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <Pill className="h-5 w-5 text-pharma-blue mr-2" />
                          <h3 className="font-bold text-lg text-pharma-darkgray">{product.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold text-center text-pharma-darkgray mb-8">Featured Products</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {products.slice(0, 4).map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
                      <div className="h-36">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-pharma-darkgray">{product.name}</h4>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default Projects;
