import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Suhana Gomber"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-2xl border-4 border-white/50"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gray-800">Suhana</span> <span className="gradient-text">Gomber</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-slide-up">
          MBA Candidate | Talent Acquisition Expert | Business Development Professional
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up">
          Passionate about connecting talent with opportunities and driving business growth through strategic thinking and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale"
          >
            Learn More
          </a>
          <button
            onClick={() => {
              // You can replace this with an actual resume file path
              const link = document.createElement('a');
              link.href = '/resume.pdf'; // Add your resume PDF to the public folder
              link.download = 'Suhana_Gomber_Resume.pdf';
              link.click();
            }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-scale shadow-lg flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;