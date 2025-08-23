// src/components/ScrollToTop.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "Scroll to top" en cada cambio de ruta
    window.scrollTo(0, 0);
  }, [pathname]); // El efecto se dispara cada vez que la URL cambia

  return null; // Este componente no renderiza nada
};

export default ScrollToTop;