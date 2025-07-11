import React from 'react';
import { Briefcase, Users, Target, TrendingUp } from 'lucide-react';

const Experience = () => {
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
    <section id="experience" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3 text-center md:text-right">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-4">
                    {exp.icon}
                  </div>
                  <div className="text-purple-600 font-semibold">{exp.period}</div>
                </div>
                
                <div className="md:col-span-9 bg-white/70 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover-scale shadow-sm">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{exp.title}</h3>
                  <div className="text-purple-600 font-semibold mb-1">{exp.company}</div>
                  <div className="text-gray-500 mb-6">{exp.location}</div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;