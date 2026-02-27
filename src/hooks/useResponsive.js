// src/hooks/useResponsive.js
import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        height: window.innerHeight
      });
      setIsMobile(width <= 768); // Mobile breakpoint at 768px
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet: screenSize.width > 768 && screenSize.width <= 1024,
    isDesktop: screenSize.width > 1024,
    screenSize
  };
};