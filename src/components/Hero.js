// src/components/Hero.js

import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css'; // Usaremos un CSS completamente renovado

// Define aquí las imágenes y el texto para cada slide del fondo
const slides = [
  {
    image: '/images/hero-bg-1.jpg', // Imagen de fondo
  },
  {
    image: '/images/hero-bg-2.jpg',
  },
  {
    image: '/images/hero-bg-3.jpg',
  }
];

const Hero = ({ isMenuOpen }) => {
  return (
    <section className="hero-section">
      {/* El Carousel actúa como el fondo dinámico */}
      <Carousel 
        fade 
        controls={false} 
        indicators={false} 
        interval={5000} /* Cambia de imagen cada 5 segundos */
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-item-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Capa superpuesta con el contenido */}
      <div className={`hero-content-overlay ${isMenuOpen ? 'menu-open' : ''}`}>
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center text-center">
            <Col md={10} lg={8}>
              <h1 className="hero-title animate__animated animate__fadeInDown">
                Ingeniería de Software e Inteligencia Artificial a tu Alcance
              </h1>
              <p className="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
                En DATAINTEK, creamos soluciones tecnológicas a medida que no solo resuelven problemas, sino que impulsan el crecimiento y la innovación.
              </p>
              <div className="animate__animated animate__fadeInUp animate__delay-2s">
                <Button as={Link} to="/servicios" variant="primary" size="lg" className="hero-cta-button">
                  Explora Nuestras Soluciones
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;