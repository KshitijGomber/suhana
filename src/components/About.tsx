import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Globe, Palette, Brush, Camera } from 'lucide-react';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const hobbies = [
    { icon: <Heart className="w-6 h-6" />, text: 'Mindfulness meditation' },
    { icon: <Globe className="w-6 h-6" />, text: 'Collecting fridge magnets & notebooks' },
    { icon: <Palette className="w-6 h-6" />, text: 'Classical dancer' },
    { 
      icon: (
        <div className="flex gap-1 items-center">
          <Brush className="w-5 h-5" />
          <Camera className="w-5 h-5" />
        </div>
      ),
      text: 'Amateur artist & photographer' 
    } ];

  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-20 bg-white/50"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">About Me</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800">Get to Know Me</h3>
            </div>
            
            <motion.p 
              className="text-sm md:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I’m an MBA candidate at Smith School of Business, Queen’s University, with over 3 years of global experience 
              in HR and talent acquisition. At Capgemini, I led high-volume hiring for IT roles, managed teams, 
              streamlined recruitment operations, and onboarded hundreds of employees, all while aligning talent 
              strategies with evolving business needs.
            </motion.p>
            
            <motion.p 
              className="text-sm md:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              With a  foundation in global business and a growing focus on digital innovation, 
              I’m equipped to design people-first solutions that are both strategic and scalable.
              I’m passionate about building high-performing teams, elevating the candidate experience, 
              and using data to drive smarter, more impactful hiring decisions.
            </motion.p>

            <motion.p 
              className="text-sm md:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Beyond the workplace, I believe in the power of community impact, whether through volunteerism, 
              mentorship, or creating more inclusive hiring practices that open doors for underrepresented talent.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800">Personal Interests</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/70 rounded-lg hover:bg-white transition-colors duration-300 shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-purple-500">
                    {hobby.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-xs md:text-base">{hobby.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              className="text-xs md:text-sm text-gray-500 italic mt-4 md:mt-6"
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