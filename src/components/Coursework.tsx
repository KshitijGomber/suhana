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
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Relevant Coursework</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my academic pursuits and professional certifications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseworkCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/70 rounded-2xl p-6 hover:bg-white transition-all duration-300 hover-scale shadow-sm"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3">
            <Certificate className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Continuously expanding knowledge base</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Coursework;