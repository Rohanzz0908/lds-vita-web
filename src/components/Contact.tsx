
import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isMobile = useIsMobile();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the form data to your backend
  };
  
  return (
    <section className="py-24 bg-askspace-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-askspace-red mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            We'd love to hear from you. Whether you're looking to start a project or just want to ask a question, our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-none bg-askspace-darkgray animate-slide-in-left shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
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
                </div>
                
                <div>
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
                </div>
                
                <div>
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
                </div>
                
                <div>
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
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-askspace-red hover:bg-askspace-red/80 text-white py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="flex flex-col space-y-6 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
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
            
            <Card className="border-none bg-askspace-darkgray shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Map placeholder - in a real application, this would be a real map */}
                <div className="h-64 w-full bg-askspace-lightgray relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-sm">Interactive Map Would Go Here</p>
                  </div>
                  {/* Map overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-askspace-black to-transparent opacity-70"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
