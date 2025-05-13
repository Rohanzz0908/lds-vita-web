
export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  location?: string;
  year?: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export const categoriesData: Category[] = [
  {
    id: "all",
    name: "All Projects",
  },
  {
    id: "residential",
    name: "Residential",
  },
  {
    id: "commercial",
    name: "Commercial",
  },
  {
    id: "interior",
    name: "Interior Design",
  },
  {
    id: "landscape",
    name: "Landscape",
  },
];

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Absolute Towers",
    category: "residential",
    description: "Iconic residential towers with a distinctive curved design",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Mississauga, Canada",
    year: 2024,
    featured: true,
  },
  {
    id: 2,
    name: "The Never Hut",
    category: "commercial",
    description: "Innovative pavilion structure for the Guangdong Nanhai Land Art Festival",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Guangdong, China",
    year: 2024,
    featured: true,
  },
  {
    id: 3,
    name: "Urban Loft Redesign",
    category: "interior",
    description: "Contemporary interior redesign focusing on open space and natural light",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "New York, USA",
    year: 2023,
  },
  {
    id: 4,
    name: "Red Pavilion",
    category: "landscape",
    description: "Striking red pavilion integrated with surrounding landscape",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Tokyo, Japan",
    year: 2023,
  },
  {
    id: 5,
    name: "Glass House",
    category: "residential",
    description: "Minimalist glass house with panoramic views of the surrounding nature",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Helsinki, Finland",
    year: 2022,
  },
];
