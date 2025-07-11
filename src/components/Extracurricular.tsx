import React from 'react';
import { Users, Heart, Award, Calendar } from 'lucide-react';

const Extracurricular = () => {
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
    <section id="extracurricular" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Community Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Committed to making a positive difference through leadership and volunteer work
          </p>
        </div>
        
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white/70 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover-scale shadow-sm">
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white mb-4">
                    {activity.icon}
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-purple-600 font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.period}</span>
                  </div>
                </div>
                
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{activity.title}</h3>
                  <div className="text-purple-600 font-semibold mb-1">{activity.organization}</div>
                  <div className="text-gray-500 mb-4">{activity.location}</div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-purple-700 italic">{activity.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;