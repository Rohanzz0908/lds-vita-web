
import React from "react";
import Navbar from "@/components/Navbar";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default ContactPage;
