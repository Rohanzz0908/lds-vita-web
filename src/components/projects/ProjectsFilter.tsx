
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    </Tabs>
  );
};

export default ProjectsFilter;
