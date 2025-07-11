import React from 'react';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="typing-container">
        <div className="typing-text typing-line">HI,</div>
        <div className="typing-text typing-line">I AM SUHANA</div>
      </div>
      
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;