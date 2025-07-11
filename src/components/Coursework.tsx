import React from 'react';
import { BookOpen, AlignCenterVertical as Certificate, Code, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Coursework = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const courseworkCategories = [
    {
      category: 'Digital Business & Strategy',
      icon: <BarChart3 className="w-6 h-6" />,
      courses: [
        'Digital Transformation Strategy',
        'Data Analytics for Business',
        'Digital Marketing & E-commerce',
        'Innovation Management'
      ]
    },
    {
      category: 'Business Management',
      icon: <BookOpen className="w-6 h-6" />,
      courses: [
        'Strategic Management',
        'Organizational Behavior',
        'Operations Management',
        'Financial Management'
      ]
    },
    {
      category: 'Human Resources',
      icon: <Certificate className="w-6 h-6" />,
      courses: [
        'Talent Management',
        'Recruitment & Selection',
        'Performance Management',
        'Employee Relations'
      ]
    },
    {
      category: 'Technical Skills',
      icon: <Code className="w-6 h-6" />,
      courses: [
        'Microsoft Office Suite',
        'ATS Platforms',
        'LinkedIn Recruiter',
        'Boolean Search Techniques'
      ]
    }
  ];

  return (
    <motion.section 
      id="coursework"
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Coursework</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {courseworkCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/90 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 hover-scale"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <div className="text-purple-600 font-semibold text-xs md:text-base">{category.category}</div>
              </div>
              <ul className="list-disc pl-5 space-y-1 md:space-y-2">
                {category.courses.map((course, i) => (
                  <li key={i} className="text-gray-700 text-xs md:text-base">{course}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Coursework;