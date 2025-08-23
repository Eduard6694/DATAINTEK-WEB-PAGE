// src/App.js

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker'; // Importa el rastreador
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop'; // Importa el componente de scroll en navegación
import ScrollToTopButton from './components/ScrollToTopButton'; // Importa el botón visible

// Páginas
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';



// --- INICIALIZACIÓN DE GOOGLE ANALYTICS ---
// Lee el ID del archivo .env
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

// Solo inicializa si el ID existe (para evitar errores en desarrollo si no está configurado)
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* El rastreador se coloca aquí para que siempre esté activo */}
      <AnalyticsTracker />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTopButton />
    </div>
  );
}

export default App;