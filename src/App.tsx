import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Coursework from './components/Coursework';
import Extracurricular from './components/Extracurricular';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 text-gray-800">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />
      <LoadingScreen isVisible={isLoading} onFinish={handleLoadingFinish} />
      
      {/* Floating GIF - Always visible on main site */}
      {!isLoading && (
        <div className="fixed bottom-4 right-4 z-30 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
          <img 
            src="https://www.animatedimages.org/data/media/1250/animated-hello-kitty-image-0066.gif" 
            alt="Cute waving cat" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 bg-transparent pointer-events-none"
            style={{ backgroundColor: '' }}
          />
        </div>
      )}
      
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Coursework />
        <Extracurricular />
        <Contact />
        <Gallery />
      </main>
    </div>
  );
}

export default App;