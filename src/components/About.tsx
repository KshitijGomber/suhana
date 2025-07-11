import React from 'react';
import { User, Heart, Globe, Palette } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: <Heart className="w-6 h-6" />, text: 'Mindfulness meditation' },
    { icon: <Globe className="w-6 h-6" />, text: 'Collecting fridge magnets & notebooks' },
    { icon: <Palette className="w-6 h-6" />, text: 'Classical dancer & Amateur Artist' },
    { icon: <Globe className="w-6 h-6" />, text: 'Travelling & learning languages' }
  ];

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <User className="w-8 h-8 text-purple-500" />
              <h3 className="text-2xl font-semibold text-gray-800">Professional Journey</h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing my MBA in Digital Business at Queen's University's Smith School of Business, 
              I bring over 3 years of experience in talent acquisition and business development. My passion lies 
              in connecting the right people with the right opportunities while driving organizational growth.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Capgemini, I led high-volume talent pipelines, managed cross-functional teams, and consistently 
              exceeded KPIs. My approach combines strategic thinking with hands-on execution, ensuring both 
              immediate results and long-term success.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Personal Interests</h3>
            <div className="grid grid-cols-1 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/70 hover:bg-white transition-all duration-300 shadow-sm">
                  <div className="text-purple-500">{hobby.icon}</div>
                  <span className="text-gray-700">{hobby.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-purple-50 border border-purple-200">
              <p className="text-purple-700 italic">
                "Currently learning French - expanding my horizons one language at a time!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;