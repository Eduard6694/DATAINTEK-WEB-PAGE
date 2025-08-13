// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import KeyFeatures from '../components/KeyFeatures';
import StatsCounter from '../components/StatsCounter';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';


const HomePage = ({ isMenuOpen }) => {
  return (
    <>
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