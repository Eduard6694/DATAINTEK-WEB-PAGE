// src/components/FeaturedProjects.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const featuredProjectsData = [
  {
    title: 'Sistema de Detección de Defectos con Visión Artificial',
    description: 'Implementamos un modelo de Deep Learning para analizar imágenes de una línea de producción en tiempo real...',
    tags: ['Deep Learning', 'Python', 'Visión por Computadora'],
    image: '/images/project-vision.jpg'
  },
  {
    title: 'Mantenimiento Predictivo para Maquinaria Industrial',
    description: 'Desarrollamos un sistema que analiza datos de sensores para predecir fallos en maquinaria crítica...',
    tags: ['Machine Learning', 'IoT', 'Cloud'],
    image: '/images/project-iot.jpg'
  },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title">Nuestro Trabajo Habla por Sí Mismo</h2>
            <p className="lead">Un vistazo a algunas de las soluciones innovadoras que hemos construido.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {featuredProjectsData.map((project, index) => (
            <Col lg={6} key={index}>
              {/* --- LÍNEA CORREGIDA --- */}
              {/* ANTES: <ProjectCard {...project} /> */}
              {/* AHORA: */}
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-5">
          <Col>
            <Button as={Link} to="/proyectos" variant="outline-primary" size="lg">
              Ver Todos los Proyectos
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;