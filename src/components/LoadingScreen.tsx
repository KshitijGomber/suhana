import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isVisible: boolean;
  onFinish?: () => void; // Optional callback to notify parent when animation is done
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible, onFinish }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 2500); // Reduced from 3000ms to 2500ms
      return () => clearTimeout(timer);
    }
  }, [isVisible, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          {/* Typing Animation */}
          <div className="text-3xl md:text-5xl font-bold font-mono mb-8">
            <TypingLine text="Hi," delay={300} />
            <TypingLine text="I am Suhana" delay={1000} />
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-2 mt-4">
            <span className="dot-animation bg-purple-500 w-3 h-3 rounded-full animate-bounce"></span>
            <span className="dot-animation bg-pink-500 w-3 h-3 rounded-full animate-bounce delay-200"></span>
            <span className="dot-animation bg-indigo-500 w-3 h-3 rounded-full animate-bounce delay-400"></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

// TypingLine sub-component
const TypingLine: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    setDisplayText(''); // Reset text
    setIsTyping(false);
    
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i + 1)); // Use slice instead of concatenation
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 100); // Faster typing speed (reduced from 150ms to 100ms per character)
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="typing-text whitespace-pre">
      {displayText}
      {isTyping && <span className="animate-pulse">|</span>}
    </div>
  );
};
