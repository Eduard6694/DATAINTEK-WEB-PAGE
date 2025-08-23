// src/components/ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra el botón cuando el usuario ha hecho scroll más de 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Realiza el scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // ¡La magia del scroll suave!
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button" title="Volver Arriba">
          <i className="bi bi-arrow-up-short"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;