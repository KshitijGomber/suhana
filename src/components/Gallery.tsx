import React from 'react';
import { Camera, Users, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Gallery = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 }); // Reduced threshold for mobile
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [imageLoadErrors, setImageLoadErrors] = React.useState(new Set());
  
  // Check if device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const categories = ['All', 'Academic', 'Volunteer Work', 'Photography'];

  const galleryItems = [
    // Featured/Hero Images - Academic & Volunteer Highlights
    {
      image: '/g/g1.JPG',
      title: 'Class Group Photo',
      category: 'Academic',
      icon: <Award className="w-5 h-5" />,
      featured: true
    },
    {
      image: '/g/g5.jpeg',
      title: 'Volunteer Service',
      category: 'Volunteer Work',
      icon: <Heart className="w-5 h-5" />,
      featured: true
    },
    
    // Photography Portfolio
    {
      image: '/g/g2.jpeg',
      title: 'Sunset Photography',
      category: 'Photography',
      icon: <Camera className="w-5 h-5" />
    },
    {
      image: '/g/g3.jpeg',
      title: 'Nature Photography',
      category: 'Photography',
      icon: <Camera className="w-5 h-5" />
    },
    {
      image: '/g/g6.jpeg',
      title: 'Tree Photography',
      category: 'Photography',
      icon: <Camera className="w-5 h-5" />
    },
    {
      image: '/g/g11.jpeg',
      title: 'University Architecture',
      category: 'Photography',
      icon: <Camera className="w-5 h-5" />
    },
    {
      image: '/g/g14.jpeg',
      title: 'Pet Photography',
      category: 'Photography',
      icon: <Camera className="w-5 h-5" />
    },
    
    // Volunteer Work & Community
    {
      image: '/volunteer.jpeg',
      title: 'Community Outreach',
      category: 'Volunteer Work',
      icon: <Heart className="w-5 h-5" />
    },
    {
      image: '/g/g4.jpeg',
      title: 'Volunteer Initiative',
      category: 'Volunteer Work',
      icon: <Heart className="w-5 h-5" />
    },
    {
      image: '/g/g9.PNG',
      title: 'Community Service',
      category: 'Volunteer Work',
      icon: <Heart className="w-5 h-5" />
    },
    
    // Academic & Team Projects
    {
      image: '/g/g12.jpeg',
      title: 'Project Collaboration',
      category: 'Academic',
      icon: <Users className="w-5 h-5" />
    },
    {
      image: '/g/g7.jpeg',
      title: 'Group Study Session',
      category: 'Academic',
      icon: <Users className="w-5 h-5" />
    },
    {
      image: '/g/g10.jpeg',
      title: 'Team Group Photo',
      category: 'Academic',
      icon: <Users className="w-5 h-5" />
    },
    {
      image: '/g/g8.jpeg',
      title: 'Friends & Teamwork',
      category: 'Academic',
      icon: <Users className="w-5 h-5" />
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Debug logging
  React.useEffect(() => {
    console.log('Gallery component mounted');
    console.log('isInView:', isInView);
    console.log('filteredItems count:', filteredItems.length);
    console.log('isMobile:', isMobile);
  }, [isInView, filteredItems.length, isMobile]);

  return (
    <motion.section 
      id="gallery"
      className="py-16 md:py-20 bg-white/50"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Gallery</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/70 text-purple-700 hover:bg-purple-100 hover:text-purple-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl hover-scale ${
                item.featured ? 'col-span-2 md:col-span-2 lg:col-span-2' : ''
              }`}
              initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={isInView ? (isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }) : (isMobile ? { opacity: 0 } : { opacity: 0, y: 20 })}
              transition={{ duration: isMobile ? 0.3 : 0.4, delay: isMobile ? 0 : 0.1 + index * 0.05 }}
            >
              <div className={`overflow-hidden bg-gray-100 ${
                item.featured ? 'aspect-[4/3]' : 'aspect-square'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width="400"
                  height="400"
                  onError={(e) => {
                    console.log('Failed to load image:', item.image);
                    setImageLoadErrors(prev => new Set(prev).add(item.image));
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-purple-400">{item.icon}</div>
                    <span className="text-purple-300 text-xs md:text-sm font-semibold">{item.category}</span>
                  </div>
                  <h3 className="text-white text-sm md:text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3">
            <Camera className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Capturing meaningful moments</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;