
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MinimalLayoutProps {
  children: React.ReactNode;
}

interface ProjectModal {
  show: boolean;
  title: string;
  image: string;
  location?: string;
  year?: number;
}

const MinimalLayout: React.FC<MinimalLayoutProps> = ({ children }) => {
  const [modal, setModal] = useState<ProjectModal>({
    show: false,
    title: "",
    image: "",
  });

  // Make this available to child components
  React.useEffect(() => {
    window.openProjectModal = (title: string, image: string, location?: string, year?: number) => {
      setModal({
        show: true,
        title,
        image,
        location,
        year
      });
      document.body.style.overflow = 'hidden';
    };
    
    return () => {
      window.openProjectModal = undefined;
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    setModal(prev => ({ ...prev, show: false }));
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-askspace-black min-h-screen text-white">
      {/* Sidebar navigation */}
      <motion.div 
        className="fixed left-0 top-0 h-full p-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="mb-12 block">
          <h1 className="text-2xl font-bold tracking-tight text-askspace-red">mad</h1>
        </Link>
        
        <nav className="space-y-4 mt-16">
          <Link to="/" className="block text-sm hover:text-askspace-red transition-colors duration-300">news</Link>
          <Link to="/projects" className="block text-sm hover:text-askspace-red transition-colors duration-300">works</Link>
          <Link to="#" className="block text-sm hover:text-askspace-red transition-colors duration-300">art</Link>
          <Link to="#" className="block text-sm hover:text-askspace-red transition-colors duration-300">books</Link>
          <Link to="#" className="block text-sm hover:text-askspace-red transition-colors duration-300">office</Link>
          <Link to="#" className="block text-sm hover:text-askspace-red transition-colors duration-300">jobs</Link>
          <Link to="/#contact" className="block text-sm hover:text-askspace-red transition-colors duration-300">contact</Link>
        </nav>
        
        <div className="absolute bottom-8 left-8">
          <button className="text-sm hover:text-askspace-red transition-colors duration-300">中文</button>
        </div>
      </motion.div>

      {/* Main content */}
      <main className="pl-32 w-full">
        {children}
      </main>

      {/* Project modal */}
      {modal.show && (
        <motion.div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 bg-white text-black border-b">
              <h2 className="text-lg font-medium">{modal.title}</h2>
              <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-0">
              <img src={modal.image} alt={modal.title} className="w-full h-auto" />
            </div>
            
            {(modal.location || modal.year) && (
              <div className="p-4 bg-white text-black text-sm">
                {modal.location && <p>{modal.location}</p>}
                {modal.year && <p>{modal.year}</p>}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MinimalLayout;

// Add type declaration for the global window object
declare global {
  interface Window {
    openProjectModal?: (title: string, image: string, location?: string, year?: number) => void;
  }
}
