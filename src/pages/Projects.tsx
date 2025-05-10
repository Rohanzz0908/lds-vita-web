
import React from "react";
import Navbar from "@/components/Navbar";
import ProjectsComponent from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectsComponent />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
