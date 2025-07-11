import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const educationItems = [
    {
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Digital Business',
      institution: 'Smith School of Business, Queen\'s University',
      location: 'Kingston, ON, Canada',
      period: '2025 – Present',
      status: 'Currently Enrolled',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: 'Bachelor of Management Studies',
      specialization: 'International Business',
      institution: 'Jain University',
      location: 'Bangalore, India',
      period: '2018 – 2021',
      status: 'Graduated with Distinction – 82%',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <motion.section 
      id="education"
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Education</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-6 md:space-y-8">
          {educationItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white/90 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 hover-scale"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-4 md:mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="text-purple-600 font-semibold text-xs md:text-base">{item.period}</div>
              </div>
              
              <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-gray-800">{item.degree}</h3>
              <p className="text-sm md:text-lg text-purple-600 mb-2 md:mb-4">{item.specialization}</p>
              
              <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 text-xs md:text-base">{item.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600 text-xs md:text-base">{item.location}</span>
                </div>
              </div>
              
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold text-xs md:text-base">
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;