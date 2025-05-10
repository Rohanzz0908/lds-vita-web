
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Medicine, FileText, FileMedical } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Pharmaceutical Research",
      description: "Innovative R&D focused on developing effective pharmaceutical solutions for various medical conditions.",
      icon: <Medicine className="h-10 w-10 text-pharma-blue" />,
    },
    {
      title: "Product Development",
      description: "End-to-end product development from concept to market, ensuring safety, efficacy, and compliance.",
      icon: <FileMedical className="h-10 w-10 text-pharma-blue" />,
    },
    {
      title: "Regulatory Compliance",
      description: "Comprehensive support for navigating complex regulatory requirements and securing approvals.",
      icon: <FileText className="h-10 w-10 text-pharma-blue" />,
    }
  ];

  const products = [
    "Generic Pharmaceuticals",
    "Specialty Medicines",
    "OTC Products",
    "Nutraceuticals"
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pharma-darkgray mb-4">Our Services & Products</h2>
          <div className="w-20 h-1 bg-pharma-blue mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500">
            At LDS Life Sciences, we offer a range of pharmaceutical services and products designed to meet the highest standards of quality and efficacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-pharma-lightblue rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="products" className="mt-20">
          <h2 className="text-2xl font-bold text-center text-pharma-darkgray mb-10">Our Product Portfolio</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className="bg-pharma-lightblue p-5 rounded-lg text-center">
                  <p className="text-pharma-blue font-medium">{product}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Our products are developed using state-of-the-art technology and adhere to the highest quality standards. Contact us for detailed product information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
