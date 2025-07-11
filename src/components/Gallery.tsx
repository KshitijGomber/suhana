import React from 'react';
import { Camera, Users, Heart, Award } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Team Collaboration',
      category: 'Professional',
      icon: <Users className="w-5 h-5" />
    },
    {
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Community Outreach',
      category: 'Volunteer Work',
      icon: <Heart className="w-5 h-5" />
    },
    {
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Leadership Workshop',
      category: 'Professional Development',
      icon: <Award className="w-5 h-5" />
    },
    {
      image: 'https://images.pexels.com/photos/5427673/pexels-photo-5427673.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Group Discussion',
      category: 'Team Building',
      icon: <Users className="w-5 h-5" />
    },
    {
      image: 'https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Educational Session',
      category: 'Teaching',
      icon: <Heart className="w-5 h-5" />
    },
    {
      image: 'https://images.pexels.com/photos/7688281/pexels-photo-7688281.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Conference Presentation',
      category: 'Speaking',
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Moments from my professional journey and volunteer experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl hover-scale">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-purple-400">{item.icon}</div>
                    <span className="text-purple-300 text-sm font-semibold">{item.category}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3">
            <Camera className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Capturing meaningful moments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;