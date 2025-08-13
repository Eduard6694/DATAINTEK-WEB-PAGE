// src/pages/ProjectsPage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

// Simulación de los datos de tus proyectos. Esto podría venir de una API en el futuro.
const projectsData = [
  {
    title: 'Sistema de Detección de Defectos con Visión Artificial',
    description: 'Implementamos un modelo de Deep Learning (CNN) para analizar imágenes de una línea de producción en tiempo real, identificando defectos con una precisión del 99.5%, reduciendo costos y mejorando la calidad del producto final.',
    tags: ['Deep Learning', 'Python', 'TensorFlow', 'Visión por Computadora'],
    image: '/images/project-vision.jpg' // Ruta a una imagen en la carpeta `public/images`
  },
  {
    title: 'Mantenimiento Predictivo para Maquinaria Industrial',
    description: 'Desarrollamos un sistema de Machine Learning que analiza datos de sensores (IoT) para predecir fallos en maquinaria crítica, permitiendo un mantenimiento proactivo y minimizando el tiempo de inactividad no planificado.',
    tags: ['Machine Learning', 'IoT', 'Python', 'Scikit-learn', 'Cloud'],
    image: '/images/project-iot.jpg'
  },
  {
    title: 'Chatbot Inteligente para Automatización de Soporte',
    description: 'Integramos una solución de IA con Procesamiento del Lenguaje Natural (NLP) para crear un chatbot capaz de resolver el 80% de las consultas de soporte de primer nivel, liberando al equipo humano para tareas de mayor valor.',
    tags: ['IA', 'NLP', 'API Integration', 'Dialogflow'],
    image: '/images/project-chatbot.jpg'
  }
];

const ProjectsPage = () => {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      <Container>
        {/* --- Título de la Página --- */}
        <Row className="justify-content-center text-center my-5">
          <Col md={8}>
            <h1 className="display-4" style={{ fontWeight: 700 }}>Casos de Éxito en IA</h1>
            <p className="lead text-muted">
              Descubre cómo hemos aplicado tecnologías de vanguardia como Machine Learning y Deep Learning para resolver desafíos complejos y generar un impacto real en los negocios de nuestros clientes.
            </p>
          </Col>
        </Row>

        {/* --- Grid de Proyectos --- */}
        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col lg={4} md={6} key={index}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>

        {/* --- Futuros Proyectos CTA (opcional pero recomendado) --- */}
        <Row className="justify-content-center text-center mt-5 pt-4" style={{backgroundColor: '#f8f9fa', borderRadius: '0.5rem', padding: '3rem 1rem'}}>
           <Col md={8}>
            <h3>¿Tu desafío es el siguiente?</h3>
            <p className="lead">
              Si tienes un problema complejo que crees que la tecnología puede resolver, estamos aquí para ayudarte a explorarlo, diseñarlo y construirlo.
            </p>
            <a href="/contacto" className="btn btn-primary btn-lg cta-button-project">
              Contáctanos
            </a>
           </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsPage;