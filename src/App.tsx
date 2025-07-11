import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300); // Show loading for 1.3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 text-gray-800">
      <LoadingScreen isVisible={isLoading} />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Coursework />
        <Extracurricular />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

export default App;