import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 text-gray-800">
      <LoadingScreen isVisible={isLoading} onFinish={handleLoadingFinish} />
      
      {/* Floating GIF - Always visible on main site */}
      {!isLoading && (
        <div className="fixed bottom-2 right-2 z-40 w-24 h-24 md:w-32 md:h-32">
          <img 
            src="/cat-gif.gif" 
            alt="Cute waving cat" 
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300 bg-transparent"
            style={{ backgroundColor: 'transparent' }}
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