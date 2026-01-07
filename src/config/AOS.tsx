'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
      easing: 'ease-in-out',
    });
  }, []);

  return null; // This component doesn’t render anything
};

export default AOSInit;