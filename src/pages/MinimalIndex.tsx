
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { projectsData } from '@/components/projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const MinimalIndex = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Ensure any scroll is reset when the page loads
    window.scrollTo(0, 0);
  }, []);

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
        {featuredProjects.length > 0 && (
          <motion.div
            className="relative w-full md:w-3/4 lg:w-2/3 mx-auto my-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="cursor-pointer overflow-hidden"
              onClick={() => handleProjectClick(featuredProjects[0])}
            >
              <motion.img 
                src={featuredProjects[0].image} 
                alt={featuredProjects[0].name} 
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-0 left-0 right-0 bg-askspace-black/70 p-4">
                <h2 className="font-medium text-white">{featuredProjects[0].name}</h2>
                <p className="text-sm text-askspace-red">{featuredProjects[0].location}, {featuredProjects[0].year}</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div 
          className="mt-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/projects" className="inline-flex items-center text-askspace-red hover:text-white transition-colors duration-300 group">
            View All Projects 
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className={`${isMobile ? 'relative mt-20' : 'absolute bottom-8 right-8'} text-xs text-gray-500`}>
          <p>Copyright © AskSpace {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default MinimalIndex;
