
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { projectsData, categoriesData } from '@/components/projects';

const MinimalProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: any) => {
    if (window.openProjectModal) {
      window.openProjectModal(
        project.name,
        project.image,
        project.location,
        project.year
      );
    }
  };
  
  return (
    <MinimalLayout>
      <div className="p-6">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-4 mb-6 text-sm">
            {categoriesData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-2 py-1 transition-colors duration-300 ${
                  selectedCategory === category.id ? 'text-askspace-red' : 'text-gray-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="group relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-xs text-askspace-red mt-1">{project.location}, {project.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <motion.p 
            className="text-center py-20 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </MinimalLayout>
  );
};

export default MinimalProjects;
