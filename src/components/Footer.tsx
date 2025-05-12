
import React from "react";
import { Layout } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-askspace-black text-white border-t border-askspace-red/20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Layout className="h-8 w-8 text-askspace-red" />
              <span className="ml-2 text-xl font-bold">AskSpace</span>
            </div>
            <p className="mb-6 text-gray-400">
              Transforming spaces through innovative architecture and interior design. 
              Creating environments that inspire and elevate the human experience.
            </p>
            <div className="border-l-4 border-askspace-red pl-4 italic text-sm text-gray-400">
              "Design is not just what it looks like and feels like. Design is how it works."
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-askspace-red">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-askspace-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-askspace-red transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-askspace-red transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-askspace-red transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-askspace-red">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Design Street</p>
              <p className="mb-2">Architecture Avenue</p>
              <p className="mb-2">Email: hello@askspace.com</p>
              <p>Phone: +1 (234) 567-8900</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-askspace-red/20 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} AskSpace. All rights reserved.</p>
          <p className="mt-2 text-askspace-red">All rights claimed by Rohan Chandupatla</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
