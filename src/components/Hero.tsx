import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Hero = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleNavClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Use requestAnimationFrame to ensure the scroll happens after any layout changes
      requestAnimationFrame(() => {
        // Get the actual header height dynamically
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        
        // Account for section padding - sections have py-20 (80px top padding)
        // So we reduce the additional offset since sections already have padding
        const additionalOffset = 10;
        const targetPosition = targetElement.offsetTop - headerHeight - additionalOffset;
        
        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative values
          behavior: 'smooth'
        });
      });
    }
  };

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-screen py-20 md:py-24">
          
          {/* Left Side - Image */}
          <motion.div 
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <img
                src="/headshot.jpg"
                alt="Suhana Gomber"
                className="relative w-40 h-52 sm:w-48 sm:h-60 md:w-64 md:h-80 lg:w-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/50"
              />
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-2 px-4 md:px-0"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="text-gray-800">Suhana</span> <span className="gradient-text">Gomber</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm md:text-xl lg:text-2xl text-gray-600 mb-3 md:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              MBA Candidate | Human Capital | People & Strategy | Talent Acquisition | Recruitment 
            </motion.p>
            
            <motion.p 
              className="text-sm md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Connecting talent with opportunity backed by strategy, speed and a passion for people.
            </motion.p>
            
            {/* <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-stretch"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-base md:text-lg font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center min-w-[160px] md:min-w-[180px] min-h-[48px] overflow-hidden cursor-pointer active:scale-95"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className="group relative border-2 border-purple-500 text-purple-600 hover:text-white text-base md:text-lg font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center min-w-[160px] md:min-w-[180px] min-h-[48px] overflow-hidden cursor-pointer active:scale-95"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Suhana_Gomber_Resume.pdf';
                  link.click();
                }}
                className="group relative bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-base md:text-lg font-semibold px-6 md:px-10 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 md:gap-3 min-w-[180px] md:min-w-[200px] min-h-[48px] overflow-hidden active:scale-95"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Download size={20} />
                </motion.div>
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div> */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {/* Get In Touch */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="group relative bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 min-w-[160px] text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">💌 Get In Touch</span>
                <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </motion.a>

              {/* Learn More */}
              <motion.a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className="group relative bg-white border-2 border-pink-500 text-pink-600 hover:text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 hover:bg-gradient-to-r from-pink-400 to-fuchsia-500 shadow-md hover:shadow-lg min-w-[160px] text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">🎀 Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </motion.a>

              {/* Download Resume */}
              <motion.a
              href="/resume.pdf"
              download="Suhana_Gomber_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 min-w-[180px] text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="shrink-0" />
              <span className="relative z-10">💾 Download Resume</span>
              <div className="absolute inset-0 bg-pink-600/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-purple-500" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;