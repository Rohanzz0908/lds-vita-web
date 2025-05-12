
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-askspace-black text-white shadow-md sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Layout className="h-8 w-8 text-askspace-red" />
              <span className="ml-2 text-xl font-bold text-white">AskSpace</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/#about" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-askspace-red transition-colors">
              About
            </Link>
            <Link to="/#services" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-askspace-red transition-colors">
              Services
            </Link>
            <Link to="/projects" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/projects' ? 'text-askspace-red font-bold' : 'text-gray-300'} hover:text-askspace-red transition-colors`}>
              Projects
            </Link>
            <Link to="/#contact" className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-askspace-red transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" className="hidden md:block border-askspace-red text-askspace-red hover:bg-askspace-red hover:text-white transition-all duration-300">
              Get in Touch
            </Button>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-askspace-red hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-askspace-red transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-askspace-darkgray">
            <Link
              to="/#about"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-askspace-red hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#services"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-askspace-red hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 text-base font-medium ${location.pathname === '/projects' ? 'text-askspace-red font-bold' : 'text-gray-300'} hover:text-askspace-red hover:bg-gray-900 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-askspace-red hover:bg-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-askspace-red text-white hover:bg-askspace-red/90 transition-colors">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
