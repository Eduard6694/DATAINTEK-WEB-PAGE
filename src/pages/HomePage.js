// src/pages/HomePage.js

import React from 'react';
import SEOMetadata from '../components/SEOMetadata';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';
import StatsCounter from '../components/StatsCounter';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

const HomePage = ({ isMenuOpen }) => {
  return (
    <>
      <SEOMetadata 
        title="Inicio" 
        description="Transformamos ideas en soluciones tecnológicas. Expertos en desarrollo de software a medida, aplicaciones móviles, IA y Machine Learning para potenciar tu negocio en Ecuador."
        url="/"
      />
      <Hero isMenuOpen={isMenuOpen} />
      <KeyFeatures />
      <StatsCounter />
      <FeaturedProjects />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default HomePage;