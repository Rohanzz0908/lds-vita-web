
import React from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';

const Art = () => {
  const artProjects = [
    {
      id: 1,
      title: "Urban Canvas",
      description: "A series of architectural interventions that transform urban spaces into interactive art installations.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      year: 2023,
    },
    {
      id: 2,
      title: "Light & Space",
      description: "Exploring the relationship between architecture and natural light through minimalist structures.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      year: 2022,
    },
    {
      id: 3,
      title: "Material Studies",
      description: "Experimental works focusing on sustainable materials and their application in architectural contexts.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      year: 2021,
    }
  ];

  return (
    <MinimalLayout>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-askspace-red mb-2">Art & Installations</h1>
          <p className="text-gray-400 mb-10">Where architecture meets artistic expression</p>
          
          <div className="mb-12">
            <p className="text-gray-300 max-w-3xl">
              At AskSpace, we believe that architecture is not just about buildings—it's about creating experiences and evoking emotions. 
              Our artistic interventions and installations explore the boundaries between functional space and conceptual art.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: project.id * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-md mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{project.title} <span className="text-askspace-red text-sm">{project.year}</span></h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-askspace-darkgray rounded-md">
            <h2 className="text-2xl font-medium mb-4">Our Approach to Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-askspace-red font-medium mb-2">Experiential</h3>
                <p className="text-sm">We create immersive experiences that challenge perceptions and engage all senses, transforming how people interact with spaces.</p>
              </div>
              <div>
                <h3 className="text-askspace-red font-medium mb-2">Sustainable</h3>
                <p className="text-sm">Our installations prioritize environmentally conscious materials and practices, often incorporating renewable resources and natural elements.</p>
              </div>
              <div>
                <h3 className="text-askspace-red font-medium mb-2">Contextual</h3>
                <p className="text-sm">Each artistic intervention is specifically designed for its location, responding to cultural, historical, and environmental contexts.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MinimalLayout>
  );
};

export default Art;
