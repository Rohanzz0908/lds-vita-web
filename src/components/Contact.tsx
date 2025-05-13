
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    reset();
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-askspace-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-askspace-red mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            We'd love to hear from you. Whether you're looking to start a project or just want to ask a question, our team is here to help.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="border-none bg-askspace-darkgray shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </motion.h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 bg-askspace-lightgray text-white rounded-md focus:outline-none focus:ring-2 focus:ring-askspace-red"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-askspace-red">{errors.name.message as string}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 bg-askspace-lightgray text-white rounded-md focus:outline-none focus:ring-2 focus:ring-askspace-red"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-askspace-red">{errors.email.message as string}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      className="w-full px-4 py-3 bg-askspace-lightgray text-white rounded-md focus:outline-none focus:ring-2 focus:ring-askspace-red"
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-askspace-red">{errors.subject.message as string}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      className="w-full px-4 py-3 bg-askspace-lightgray text-white rounded-md focus:outline-none focus:ring-2 focus:ring-askspace-red resize-none"
                      placeholder="Tell us about your project or inquiry"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-askspace-red">{errors.message.message as string}</p>
                    )}
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="pt-2">
                    <Button type="submit" className="w-full bg-askspace-red hover:bg-askspace-red/80 text-white py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info and Founder */}
          <div className="flex flex-col space-y-6">
            {/* Founder section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-none bg-askspace-darkgray shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white mb-2">Meet Our Founder</h3>
                      <h4 className="text-askspace-red font-medium mb-3">Priya Shah</h4>
                      <p className="text-sm text-gray-300 mb-4">
                        With over 15 years of experience in architecture and design, Priya founded AskSpace with a vision to create sustainable, innovative spaces that inspire.
                      </p>
                      <div className="flex space-x-3 mt-2">
                        <a href="#" className="p-2 bg-askspace-lightgray rounded-full hover:bg-askspace-red transition-colors">
                          <Linkedin size={16} />
                        </a>
                        <a href="#" className="p-2 bg-askspace-lightgray rounded-full hover:bg-askspace-red transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="#" className="p-2 bg-askspace-lightgray rounded-full hover:bg-askspace-red transition-colors">
                          <Instagram size={16} />
                        </a>
                      </div>
                    </div>
                    <div className="h-64 md:h-auto bg-askspace-lightgray">
                      <img 
                        src="/lovable-uploads/f55e0d47-5628-4820-b4af-3c9f61fbf7af.png" 
                        alt="Priya Shah - Founder of AskSpace" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-none bg-askspace-darkgray shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-askspace-red p-4 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Visit Our Office</h3>
                      <p className="text-gray-300">123 Design Street</p>
                      <p className="text-gray-300">Architecture Avenue</p>
                      <p className="text-gray-300">New York, NY 10001</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-none bg-askspace-darkgray shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-askspace-red p-4 rounded-full mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                      <p className="text-gray-300">+1 (234) 567-8900</p>
                      <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-none bg-askspace-darkgray shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500">
                  <CardContent className="p-6 flex items-start">
                    <div className="bg-askspace-red p-4 rounded-full mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                      <p className="text-gray-300">hello@askspace.com</p>
                      <p className="text-gray-300">careers@askspace.com</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-none bg-askspace-darkgray shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-full w-full bg-askspace-lightgray relative">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946233!3d40.69766374873451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796667088!5m2!1sen!2s" 
                        width="100%" 
                        height="150" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        title="AskSpace Location"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-askspace-black to-transparent opacity-70 pointer-events-none"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
