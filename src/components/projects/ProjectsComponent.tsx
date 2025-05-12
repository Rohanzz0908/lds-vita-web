
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { projectsData, categoriesData } from "./ProjectsData";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";
import FeaturedProjects from "./FeaturedProjects";
import ProjectsPagination from "./ProjectsPagination";

const ProjectsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  // Animation effect for staggered reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      const items = [];
      for (let i = 0; i < projectsData.length; i++) {
        items.push(i);
        setAnimatedItems([...items]);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

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
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <ProjectsFilter 
              categories={categoriesData}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            {categoriesData.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <ProjectsGrid 
                  categories={categoriesData}
                  projects={projectsData}
                  animatedItems={animatedItems}
                  selectedCategory={selectedCategory}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <FeaturedProjects projects={projectsData} />
        
        <ProjectsPagination />
      </div>
    </section>
  );
};

export default ProjectsComponent;
