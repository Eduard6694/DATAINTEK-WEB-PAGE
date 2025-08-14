// src/pages/ProjectsPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
  {
    title: 'Sistema de Detección de Defectos con Visión Artificial',
    description: 'Implementamos un modelo de Deep Learning (CNN) para analizar imágenes de una línea de producción en tiempo real...',
    tags: ['Deep Learning', 'Python', 'TensorFlow', 'Visión por Computadora', 'OpenCV'],
    image: '/images/project-vision.jpg',
    challenge: 'Una empresa manufacturera perdía miles de dólares al día debido a defectos microscópicos en sus productos que no eran detectados por el ojo humano, resultando en devoluciones y pérdida de confianza del cliente.',
    solution: 'Desarrollamos e integramos una cámara de alta resolución en la línea de producción, conectada a un sistema con un modelo de Redes Neuronales Convolucionales (CNN) entrenado para identificar más de 50 tipos de defectos con una precisión submilimétrica.',
    results: [
      'Reducción del 98% en productos defectuosos enviados al cliente.',
      'Aumento del 15% en la velocidad de la línea de producción.',
      'Retorno de la inversión (ROI) alcanzado en menos de 8 meses.'
    ]
  },
  {
    title: 'Mantenimiento Predictivo para Maquinaria Industrial',
    description: 'Desarrollamos un sistema de Machine Learning que analiza datos de sensores (IoT) para predecir fallos en maquinaria...',
    tags: ['Machine Learning', 'IoT', 'Python', 'Scikit-learn', 'AWS'],
    image: '/images/project-iot.jpg',
    challenge: 'Una compañía de energía sufría paradas no planificadas en sus turbinas, lo que causaba interrupciones en el servicio y costos de reparación de emergencia extremadamente altos.',
    solution: 'Instalamos sensores IoT para recolectar datos de vibración, temperatura y ruido. Estos datos alimentan un modelo de Machine Learning en la nube que predice la probabilidad de fallo de un componente en las próximas 72 horas.',
    results: [
      'Disminución del 70% en paradas no planificadas.',
      'Ahorro del 40% en costos de mantenimiento anual.',
      'Extensión de la vida útil de los equipos en un 20%.'
    ]
  },
  {
    title: 'Chatbot Inteligente para Automatización de Soporte',
    description: 'Integramos una solución de IA con Procesamiento del Lenguaje Natural (NLP) para crear un chatbot capaz de resolver el 80% de las consultas...',
    tags: ['IA', 'NLP', 'API Integration', 'Dialogflow', 'React'],
    image: '/images/project-chatbot.jpg',
    challenge: 'Un e-commerce con alto volumen de ventas tenía a su equipo de soporte sobrecargado respondiendo las mismas preguntas repetitivas (estado del pedido, políticas de devolución, etc.), lo que generaba largos tiempos de espera.',
    solution: 'Creamos un chatbot integrado en la web y en WhatsApp, utilizando NLP para entender la intención del usuario. El bot se conectó a su sistema interno para dar respuestas personalizadas y en tiempo real.',
    results: [
      'Automatización del 82% de las consultas de primer nivel.',
      'Reducción del tiempo de respuesta promedio de 2 horas a 2 segundos.',
      'Aumento de la satisfacción del cliente en un 35%.'
    ]
  }
];

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <SEOMetadata 
        title="Nuestros Proyectos"
        description="Explora nuestros casos de éxito en Inteligencia Artificial, Machine Learning y Desarrollo de Software. Ve cómo hemos resuelto problemas reales con tecnología."
        url="/proyectos"
      />
      <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
        <Container>
          <Row className="justify-content-center text-center my-5">
            <Col md={8}>
              <h1 className="display-4" style={{ fontWeight: 700 }}>Casos de Éxito en IA</h1>
              <p className="lead text-muted">
                Descubre cómo hemos aplicado tecnologías de vanguardia como Machine Learning y Deep Learning para resolver desafíos complejos y generar un impacto real.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {projectsData.map((project, index) => (
              <Col lg={4} md={6} key={index}>
                <ProjectCard 
                  project={project} 
                  onShowModal={() => handleShowModal(project)} 
                />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center text-center mt-5 pt-4" style={{backgroundColor: '#f8f9fa', borderRadius: '0.5rem', padding: '3rem 1rem'}}>
            <Col md={8}>
              <h3>¿Tu desafío es el siguiente?</h3>
              <p className="lead">Si tienes un problema complejo que crees que la tecnología puede resolver, estamos aquí para ayudarte a explorarlo, diseñarlo y construirlo.</p>
              <Button as={Link} to="/contacto" variant="primary" size="lg" className="cta-button-project">Contáctanos</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <ProjectModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        project={selectedProject} 
      />
    </>
  );
};

export default ProjectsPage;