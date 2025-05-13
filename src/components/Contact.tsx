
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-askspace-red mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from you.
            Reach out to us and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-askspace-darkgray border border-askspace-lightgray rounded-md focus:ring-1 focus:ring-askspace-red focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-askspace-darkgray border border-askspace-lightgray rounded-md focus:ring-1 focus:ring-askspace-red focus:outline-none text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-askspace-darkgray border border-askspace-lightgray rounded-md focus:ring-1 focus:ring-askspace-red focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 bg-askspace-darkgray border border-askspace-lightgray rounded-md focus:ring-1 focus:ring-askspace-red focus:outline-none text-white"
                />
              </div>

              <Button
                type="submit"
                className="bg-askspace-red hover:bg-askspace-red/80 text-white py-3 px-6"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div className="founder-info bg-askspace-darkgray rounded-md overflow-hidden">
                <img
                  src="public/lovable-uploads/cc886fc0-d1b8-495f-8fe4-d658e9256829.png"
                  alt="Founder"
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-1">Ashwini Shwetha Ketharaj</h3>
                  <p className="text-askspace-red mb-3">Founder & Principal Architect</p>
                  <p className="text-sm text-gray-300">
                    With over 15 years of experience in architecture and design, Ashwini leads our team with a passion for innovative, sustainable solutions.
                  </p>
                </div>
              </div>

              <div className="bg-askspace-darkgray rounded-md p-6">
                <h3 className="text-xl font-medium text-white mb-4">Reach Us</h3>
                
                <div className="flex items-center bg-black rounded-md p-4 mb-4">
                  <div className="bg-askspace-red p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">Email Us</p>
                    <a href="mailto:hello@askspace.com" className="block text-askspace-red hover:underline">hello@askspace.com</a>
                    <a href="mailto:careers@askspace.com" className="block text-askspace-red hover:underline">careers@askspace.com</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-4">
                  <Building className="text-askspace-red flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-white">Office</p>
                    <p className="text-sm text-gray-300">
                      350 Fifth Avenue<br />
                      New York, NY 10118<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-askspace-red flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-300">+1 (212) 555-1234</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
