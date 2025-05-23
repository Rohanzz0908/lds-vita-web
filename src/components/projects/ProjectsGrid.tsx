
import React from "react";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  categories: {
    id: string;
    name: string;
  }[];
  projects: {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
  }[];
  animatedItems: number[];
  selectedCategory: string;
}

const ProjectsGrid = ({ 
  categories,
  projects, 
  animatedItems, 
  selectedCategory 
}: ProjectsGridProps) => {
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="mt-6 animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            isAnimated={animatedItems.includes(index)} 
          />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 animate-fade-in">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
