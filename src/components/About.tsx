import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Globe, Palette } from 'lucide-react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const hobbies = [
    { icon: <Heart className="w-6 h-6" />, text: 'Mindfulness meditation' },
    { icon: <Globe className="w-6 h-6" />, text: 'Collecting fridge magnets & notebooks' },
    { icon: <Palette className="w-6 h-6" />, text: 'Classical dancer & Amateur Artist' },
    { icon: <Globe className="w-6 h-6" />, text: 'Travelling & learning languages' }
  ];

  return (
    <motion.section 
      id="about" 
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Get to Know Me</h3>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Currently pursuing my MBA in Digital Business at Queen's University's Smith School of Business, 
              I bring over 3 years of experience in talent acquisition and business development. My passion lies 
              in connecting the right people with the right opportunities while driving organizational growth.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              With a strong foundation in international business and specialized expertise in digital transformation, 
              I'm excited to leverage technology and data-driven insights to create innovative business solutions. 
              My goal is to bridge the gap between human potential and business success.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Personal Interests</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white/70 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-purple-500">
                    {hobby.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{hobby.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-sm text-gray-500 italic mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              "Balance is not something you find, it's something you create." - Jana Kingsford
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;