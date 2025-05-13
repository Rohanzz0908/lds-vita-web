
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MinimalLayout from '@/components/MinimalLayout';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const News = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      id: 1,
      title: "AskSpace Wins International Design Competition",
      excerpt: "Our innovative design for the new cultural center in Barcelona has been selected as the winner of the prestigious International Architecture Award.",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      category: "awards"
    },
    {
      id: 2,
      title: "New Sustainable Housing Project Breaks Ground",
      excerpt: "Construction begins on our latest eco-friendly residential development, featuring renewable energy systems and biophilic design elements.",
      date: "April 25, 2023",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      category: "projects"
    },
    {
      id: 3,
      title: "AskSpace Partners with Local University for Research Initiative",
      excerpt: "We're excited to announce our collaboration with the School of Architecture to explore innovative materials and construction techniques.",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      category: "partnerships"
    },
    {
      id: 4,
      title: "Director Ashwini Shwetha Featured in Architecture Today",
      excerpt: "Our founding director discusses the future of urban planning and the importance of community-centered design in this month's issue.",
      date: "February 20, 2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "press"
    },
    {
      id: 5,
      title: "AskSpace Exhibition Opens at Design Museum",
      excerpt: "Our retrospective exhibition showcasing 10 years of innovative architectural projects opens this weekend at the National Design Museum.",
      date: "January 5, 2023",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      category: "events"
    }
  ]);
  
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsItems);
  
  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'projects', name: 'Projects' },
    { id: 'awards', name: 'Awards' },
    { id: 'press', name: 'Press' },
    { id: 'events', name: 'Events' },
    { id: 'partnerships', name: 'Partnerships' }
  ];
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredNews(newsItems);
    } else {
      setFilteredNews(newsItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory, newsItems]);
  
  return (
    <MinimalLayout>
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-askspace-red mb-2">News & Updates</h1>
          <p className="text-gray-400 mb-8">Stay current with our latest projects and announcements</p>
          
          {/* Categories filter */}
          <div className="mb-10 flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-askspace-red text-white'
                    : 'bg-askspace-darkgray text-gray-300 hover:bg-askspace-lightgray'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-askspace-darkgray rounded-md overflow-hidden"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2 text-xs text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                    <span className="ml-3 px-2 py-1 bg-askspace-black rounded text-askspace-red">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.excerpt}</p>
                  <Button variant="link" className="text-askspace-red hover:text-white p-0 flex items-center">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No news articles found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>
    </MinimalLayout>
  );
};

export default News;
