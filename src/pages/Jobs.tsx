
import React from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Jobs = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Architect',
      location: 'New York',
      type: 'Full-time',
      description: 'We are looking for a skilled Senior Architect to join our team in New York. You will be responsible for designing innovative architectural solutions for our clients.',
    },
    {
      id: 2,
      title: 'Interior Designer',
      location: 'Remote',
      type: 'Contract',
      description: 'AskSpace is seeking a creative Interior Designer to collaborate on residential and commercial projects. The ideal candidate will have experience in sustainable design practices.',
    },
    {
      id: 3, 
      title: 'Project Manager',
      location: 'Los Angeles',
      type: 'Full-time',
      description: 'Join our growing team as a Project Manager to oversee architectural projects from concept to completion. Strong communication and organizational skills required.',
    }
  ];

  return (
    <MinimalLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-askspace-red mb-2">Join Our Team</h1>
          <p className="text-gray-400 mb-10">Discover career opportunities at AskSpace</p>
          
          <div className="mb-12">
            <h2 className="text-xl font-medium mb-6">Current Openings</h2>
            
            <div className="space-y-6">
              {openPositions.map(position => (
                <motion.div 
                  key={position.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: position.id * 0.1 }}
                  className="bg-askspace-darkgray p-6 rounded-md"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-lg font-medium text-white">{position.title}</h3>
                    <div className="flex mt-2 md:mt-0 space-x-3">
                      <span className="inline-block text-xs py-1 px-2 bg-askspace-lightgray rounded text-white">{position.location}</span>
                      <span className="inline-block text-xs py-1 px-2 bg-askspace-red rounded text-white">{position.type}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                  <Button className="bg-askspace-red hover:bg-askspace-red/80">Apply Now</Button>
                </motion.div>
              ))}
            </div>
          </div>
          
          {openPositions.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400">No positions currently open. Check back soon!</p>
            </div>
          )}
          
          <div className="mt-16 bg-askspace-darkgray p-6 rounded-md">
            <h2 className="text-xl font-medium mb-4">Don't see the right role?</h2>
            <p className="text-gray-300 mb-6">We're always looking for talented people to join our team. Send your resume and portfolio to our careers email.</p>
            <div className="flex items-center bg-black rounded-md p-4">
              <div className="bg-askspace-red p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-medium text-white">Email Us</p>
                <a href="mailto:careers@askspace.com" className="text-askspace-red hover:underline">careers@askspace.com</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MinimalLayout>
  );
};

export default Jobs;
