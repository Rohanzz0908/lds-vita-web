
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

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

  // Function to determine if a nav item is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-askspace-white min-h-screen text-black">
      {/* Mobile menu button */}
      {isMobile && (
        <motion.div 
          className="fixed top-4 left-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="bg-askspace-red p-2 rounded-full"
          >
            {menuOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </motion.div>
      )}

      {/* Sidebar navigation */}
      <motion.div 
        className={`fixed left-0 top-0 h-full p-8 z-50 bg-askspace-white border-r border-askspace-lightgray ${isMobile ? 'w-64' : 'w-auto'}`}
        initial={{ opacity: isMobile ? 0 : 1, x: isMobile ? -100 : 0 }}
        animate={{ 
          opacity: isMobile ? (menuOpen ? 1 : 0) : 1, 
          x: isMobile ? (menuOpen ? 0 : -100) : 0 
        }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="mb-12 block" onClick={() => isMobile && setMenuOpen(false)}>
          <h1 className="text-2xl font-bold tracking-tight text-askspace-red">askspace</h1>
        </Link>
        
        <nav className="space-y-4 mt-16">
          <Link 
            to="/news" 
            className={`block text-sm ${isActive('/news') ? 'text-askspace-red' : 'text-black hover:text-askspace-red'} transition-colors duration-300`} 
            onClick={() => isMobile && setMenuOpen(false)}
          >
            news
          </Link>
          
          {/* Works dropdown menu */}
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center text-sm ${location.pathname.includes('/projects') ? 'text-askspace-red' : 'text-black hover:text-askspace-red'} transition-colors duration-300 focus:outline-none`}>
                <span>works</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-askspace-white border-askspace-lightgray min-w-[200px]">
                <Link to="/projects" onClick={() => isMobile && setMenuOpen(false)}>
                  <DropdownMenuItem className="text-black hover:bg-askspace-lightgray hover:text-askspace-red cursor-pointer">
                    all projects
                  </DropdownMenuItem>
                </Link>
                <Link to="/projects?category=residential" onClick={() => isMobile && setMenuOpen(false)}>
                  <DropdownMenuItem className="text-black hover:bg-askspace-lightgray hover:text-askspace-red cursor-pointer">
                    residential
                  </DropdownMenuItem>
                </Link>
                <Link to="/projects?category=commercial" onClick={() => isMobile && setMenuOpen(false)}>
                  <DropdownMenuItem className="text-black hover:bg-askspace-lightgray hover:text-askspace-red cursor-pointer">
                    commercial
                  </DropdownMenuItem>
                </Link>
                <Link to="/projects?category=cultural" onClick={() => isMobile && setMenuOpen(false)}>
                  <DropdownMenuItem className="text-black hover:bg-askspace-lightgray hover:text-askspace-red cursor-pointer">
                    cultural
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Link 
            to="/art" 
            className={`block text-sm ${isActive('/art') ? 'text-askspace-red' : 'text-black hover:text-askspace-red'} transition-colors duration-300`} 
            onClick={() => isMobile && setMenuOpen(false)}
          >
            art
          </Link>
          <Link 
            to="/jobs" 
            className={`block text-sm ${isActive('/jobs') ? 'text-askspace-red' : 'text-black hover:text-askspace-red'} transition-colors duration-300`} 
            onClick={() => isMobile && setMenuOpen(false)}
          >
            jobs
          </Link>
          <Link 
            to="/contact" 
            className={`block text-sm ${isActive('/contact') ? 'text-askspace-red' : 'text-black hover:text-askspace-red'} transition-colors duration-300`} 
            onClick={() => isMobile && setMenuOpen(false)}
          >
            contact
          </Link>
        </nav>
        
        <div className="absolute bottom-8 left-8">
          <p className="text-xs text-gray-500">AskSpace © {new Date().getFullYear()}</p>
        </div>
      </motion.div>

      {/* Main content */}
      <main className={`${isMobile ? 'pl-0' : 'pl-32'} w-full transition-all duration-300`}>
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
