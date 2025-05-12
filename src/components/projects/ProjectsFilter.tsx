
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface ProjectsFilterProps {
  categories: {
    id: string;
    name: string;
  }[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectsFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: ProjectsFilterProps) => {
  return (
    <Tabs defaultValue={selectedCategory} onValueChange={onCategoryChange} className="w-full">
      <TabsList className="w-full flex flex-wrap justify-center mb-6 md:mb-8 bg-askspace-darkgray p-1 shadow-md overflow-x-auto">
        {categories.map((category, index) => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className={`data-[state=active]:bg-askspace-red data-[state=active]:text-white px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
              selectedCategory === category.id ? 'animate-pulse' : ''
            }`}
            style={{ 
              animationDelay: `${0.1 * index}s`,
              transform: selectedCategory === category.id ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ProjectsFilter;
