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
      className="py-20 bg-white/50"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white/70 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover-scale shadow-sm"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div className="text-purple-600 font-semibold">{item.period}</div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.degree}</h3>
              <p className="text-xl text-purple-600 mb-4">{item.specialization}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{item.institution}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{item.location}</span>
                </div>
              </div>
              
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-semibold">
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