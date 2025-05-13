
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "AskSpace Wins International Design Award",
    date: "May 10, 2025",
    image: "/placeholder.svg",
    excerpt: "Our Cloudscape project has been recognized for its innovative approach to sustainable architecture.",
    content: "AskSpace is proud to announce that our Cloudscape project has been awarded the prestigious International Design Award for sustainable architecture. The project, which features a unique approach to natural ventilation and energy conservation, was praised by the jury for its innovative design and commitment to environmental responsibility. This achievement marks a significant milestone for our firm as we continue to push the boundaries of what's possible in architectural design."
  },
  {
    id: 2,
    title: "New Residential Tower Breaks Ground in Downtown",
    date: "April 25, 2025",
    image: "/placeholder.svg",
    excerpt: "Construction begins on our latest residential development featuring innovative sustainable features.",
    content: "Construction has officially begun on AskSpace's newest residential development in the heart of downtown. The 35-story tower will feature 250 luxury apartments, each designed with our signature attention to detail and commitment to sustainable living. The building will incorporate state-of-the-art energy systems, including solar panels, rainwater harvesting, and a geothermal heating system. We expect the project to be completed by late 2027 and are already seeing strong interest from potential residents."
  },
  {
    id: 3,
    title: "AskSpace Expands International Presence with New Tokyo Office",
    date: "March 15, 2025",
    image: "/placeholder.svg",
    excerpt: "Our firm continues its global expansion with a new office in Tokyo's design district.",
    content: "AskSpace is excited to announce the opening of our new office in Tokyo, Japan. This expansion represents an important step in our firm's growth and our commitment to bringing our unique design philosophy to new markets around the world. The Tokyo office will be led by renowned architect Hiroshi Tanaka, who brings over 20 years of experience and a deep understanding of Japanese design principles. We look forward to combining these influences with our own approach to create truly unique architectural experiences for our clients in the region."
  },
  {
    id: 4,
    title: "Community Center Project Receives Unanimous Approval",
    date: "February 28, 2025",
    image: "/placeholder.svg",
    excerpt: "Our design for the new community center has been approved by the city council.",
    content: "We're pleased to announce that our design for the new Central Community Center has received unanimous approval from the city council. This project, which has been in development for over two years, will provide much-needed community space, including a library, recreation facilities, and multipurpose rooms. The design incorporates extensive community input gathered through a series of public workshops and focuses on creating a welcoming, accessible space for residents of all ages and abilities. Construction is expected to begin in June 2025."
  },
  {
    id: 5,
    title: "AskSpace Partners with University for Research Initiative",
    date: "January 20, 2025",
    image: "/placeholder.svg",
    excerpt: "New partnership will explore innovative materials and building techniques.",
    content: "AskSpace is proud to announce a new research partnership with the Department of Architecture at State University. This collaboration will focus on developing new sustainable building materials and construction techniques that reduce environmental impact while maintaining structural integrity and aesthetic appeal. The five-year initiative will involve both faculty and students from the university working alongside our design team to test and implement new approaches to architectural challenges. We believe this partnership represents an important investment in the future of our industry and our commitment to pushing the boundaries of what's possible in architectural design."
  }
];

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <MinimalLayout>
      <div className="p-6 md:p-12 max-w-6xl mx-auto">
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mb-8 text-askspace-red"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News
        </motion.h1>

        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row gap-8'}`}>
          {/* News list */}
          <div className={`${selectedNews && !isMobile ? 'w-1/3' : 'w-full'}`}>
            <ScrollArea className="h-[70vh]">
              <motion.div 
                className="pr-4 space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {newsItems.map((news, index) => (
                  <motion.div 
                    key={news.id} 
                    variants={itemVariants}
                    className={`p-4 cursor-pointer transition-all duration-300 border-l-2 ${
                      selectedNews === news.id 
                        ? 'border-askspace-red bg-askspace-darkgray'
                        : 'border-transparent hover:border-askspace-red hover:bg-askspace-darkgray/50'
                    }`}
                    onClick={() => setSelectedNews(news.id)}
                  >
                    <p className="text-xs text-askspace-red">{news.date}</p>
                    <h3 className="text-lg font-semibold mt-1">{news.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{news.excerpt}</p>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollArea>
          </div>

          {/* News content */}
          {selectedNews && (
            <motion.div 
              className={`${isMobile ? 'mt-8' : 'w-2/3'} bg-askspace-darkgray p-6 rounded-lg`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {newsItems.filter(n => n.id === selectedNews).map(news => (
                <div key={`content-${news.id}`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-xs text-askspace-red">{news.date}</p>
                      <h2 className="text-xl md:text-2xl font-bold mt-1">{news.title}</h2>
                    </div>
                    {isMobile && (
                      <button 
                        className="p-2 bg-askspace-lightgray rounded-full"
                        onClick={() => setSelectedNews(null)}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                  
                  <div className="aspect-video bg-askspace-lightgray mb-6 rounded overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">{news.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </MinimalLayout>
  );
};

export default News;
