import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, TrendingUp } from 'lucide-react';
import { useInView } from 'framer-motion';

const Experience = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const experiences = [
    {
      title: 'Associate Consultant | Talent Acquisition',
      company: 'Capgemini',
      location: 'Bangalore, India',
      period: '2021 – 2024',
      icon: <Briefcase className="w-6 h-6" />,
      highlights: [
        'Led high-volume talent pipelines for up to 10 roles daily across IT domains',
        'Screened 200+ resumes per day and conducted interviews for a French multinational',
        'Managed and mentored a team of 2 interns with hands-on guidance',
        'Onboarded 250+ employees, including a peak of 82 in a single month',
        'Secured 20% of hires through referrals and consistently exceeded KPIs'
      ]
    },
    {
      title: 'Business Development Intern',
      company: 'Business Fundamental Consulting',
      location: 'Bangalore, India',
      period: '2019 – 2020',
      icon: <TrendingUp className="w-6 h-6" />,
      highlights: [
        'Managed full business development cycle across 5 industries',
        'Generated leads and supported tailored pitch efforts for HR solutions',
        'Leveraged LinkedIn and social media to expand reach',
        'Contributed to a 20% increase in candidate engagement within 3 months'
      ]
    }
  ];

  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-gradient-to-br from-pink-50 to-purple-50"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative">
          {/* Animated Timeline Line - Centered */}
          <motion.div
            className="absolute left-1/2 md:left-[25%] transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 z-10"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 8rem)" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ top: "4rem" }}
          />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Timeline Icon - Always in center column */}
                  <div className="md:col-span-3 flex justify-center md:justify-end relative z-20">
                    <motion.div 
                      className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-xl border-4 border-white"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {exp.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-9">
                    <motion.div 
                      className="bg-white/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                          <div className="text-purple-600 font-semibold text-lg">{exp.company}</div>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <div className="text-purple-700 font-bold text-lg">{exp.period}</div>
                          <div className="text-gray-500 text-sm">{exp.location}</div>
                        </div>
                      </div>
                      
                      <motion.ul 
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.li 
                            key={hIndex} 
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + 0.6 + hIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Target className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;