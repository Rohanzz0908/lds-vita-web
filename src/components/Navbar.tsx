
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Medicine } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <Medicine className="h-8 w-8 text-pharma-blue" />
              <span className="ml-2 text-xl font-bold text-pharma-blue">LDS Life Sciences</span>
            </a>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-pharma-blue">
              About
            </a>
            <a href="#services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-pharma-blue">
              Services
            </a>
            <a href="#products" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-pharma-blue">
              Products
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-pharma-blue">
              Contact
            </a>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" className="hidden md:block border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white">
              Get in Touch
            </Button>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pharma-blue"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pharma-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pharma-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pharma-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pharma-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-pharma-blue text-white hover:bg-blue-700">
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
