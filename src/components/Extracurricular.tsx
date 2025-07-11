import React from 'react';
import { Users, Heart, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Extracurricular = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const activities = [
    {
      title: 'President of Smith Cares Club',
      organization: 'Queen\'s University',
      location: 'Kingston, ON, Canada',
      period: '2025 – Present',
      icon: <Award className="w-6 h-6" />,
      description: 'Leading a team of 2 to coordinate club initiatives focused on social impact by organizing charity drives and volunteer events that engage classmates in giving back to the Kingston community.',
      impact: 'Building partnerships with local non-profits and fostering empathy through hands-on service opportunities'
    },
    {
      title: 'Local Volunteer',
      organization: 'HMEL',
      location: 'Bathinda, India',
      period: '2022 - 2024',
      icon: <Heart className="w-6 h-6" />,
      description: 'Conducted multiple educational sessions on women\'s empowerment and menstrual health for rural middle school girls.',
      impact: 'Partnered with educators and health workers to develop culturally sensitive workshops that encouraged open dialogue and reduced stigma in underserved communities'
    },
    {
      title: 'Volunteer',
      organization: 'Rotary Club',
      location: 'Bangalore, India',
      period: '2018 - 2020',
      icon: <Users className="w-6 h-6" />,
      description: 'Volunteered for healthcare and education initiatives by managing event logistics, organizing awareness campaigns, and coordinating distribution drives.',
      impact: 'Aided low-income families and underserved communities through organized outreach programs'
    }
  ];

  return (
    <motion.section 
      id="extracurricular"
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">Community Impact</h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        <div className="space-y-4 md:space-y-6">
          {activities.map((activity, index) => (
            <motion.div 
              key={index} 
              className="bg-white/90 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 hover-scale"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.95 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className="grid md:grid-cols-12 gap-2 md:gap-4">
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-2 md:mb-4">
                    {activity.icon}
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-purple-600 font-semibold text-xs md:text-base">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.period}</span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-base md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{activity.title}</h3>
                  <div className="text-xs md:text-base text-purple-600 mb-1 md:mb-2">{activity.organization}</div>
                  <div className="text-xs md:text-base text-gray-500 mb-2 md:mb-3">{activity.location}</div>
                  <p className="text-xs md:text-base text-gray-700 mb-1 md:mb-2">{activity.description}</p>
                  <p className="text-xs md:text-base text-gray-500 italic">{activity.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Extracurricular;