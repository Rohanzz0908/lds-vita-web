
import React from "react";
import { Medicine } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-pharma-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Medicine className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">LDS Life Sciences</span>
            </div>
            <p className="mb-4 text-blue-100">
              Advancing healthcare through innovation and research. LDS LIFE SCIENCES LLP (LLPIN: AAY-5611) is registered at the Registrar of Companies, Hyderabad.
            </p>
            <div>
              <p className="mb-2 text-sm">Designated Partners:</p>
              <ul className="list-disc list-inside text-blue-100 text-sm">
                <li>SRINIVASULU PUTTA</li>
                <li>SAI SANHITH NICHENAMETLA</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-blue-100">
              <p className="mb-2">Hyderabad, Telangana</p>
              <p className="mb-2">Email: info@ldslifesciences.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} LDS Life Sciences LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
