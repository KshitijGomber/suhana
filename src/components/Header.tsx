import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['about', 'experience', 'education', 'coursework', 'extracurricular', 'contact', 'gallery'];
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const scrollPosition = window.scrollY + headerHeight + 100; // Add some buffer
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      
      // If we're at the very top, no section is active
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    // { href: '#coursework', label: 'Coursework' },
    { href: '#extracurricular', label: 'Community Impact' },
    { href: '#contact', label: 'Contact' },
    { href: '#gallery', label: 'Gallery' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu first if open
      setIsMenuOpen(false);
      
      // Use Lenis scroll to target element
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const additionalOffset = 10;
      const targetPosition = targetElement.offsetTop - headerHeight - additionalOffset;
      
      // Use Lenis scrollTo if available, otherwise fallback to regular scroll
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(Math.max(0, targetPosition));
      } else {
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
      }
    } else {
      // Close mobile menu if element not found
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg md:text-2xl font-bold truncate cursor-pointer hover:opacity-80 transition-opacity duration-200"
        >
          <span className="text-gray-800">Suhana</span> <span className="gradient-text">Gomber</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => {
            const sectionId = item.href.slice(1); // Remove '#' from href
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-200 font-medium cursor-pointer ${
                  isActive 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-3 rounded-lg hover:bg-purple-100 transition-colors text-gray-800 min-w-[48px] min-h-[48px] flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 md:px-6 py-4 space-y-2">
            {menuItems.map((item) => {
              const sectionId = item.href.slice(1); // Remove '#' from href
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block transition-colors duration-200 font-medium cursor-pointer py-3 px-4 rounded-lg min-h-[48px] flex items-center ${
                    isActive 
                      ? 'text-purple-600 font-semibold bg-purple-50' 
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50/50 active:bg-purple-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;