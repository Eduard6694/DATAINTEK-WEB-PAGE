// src/components/CustomSoftware.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomSoftware.css';

const CustomSoftware = () => {
  return (
    <section className="custom-software-section py-5">
      <Container>
        {/* --- Título de la Sección --- */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title">Desarrollo de Software a Medida</h2>
            <p className="lead">
              Transformamos tus procesos únicos en soluciones tecnológicas eficientes y escalables que se adaptan perfectamente a tus necesidades.
            </p>
          </Col>
        </Row>

        {/* --- Nuestro Proceso --- */}
        <h3 className="text-center mb-4">Nuestro Proceso Probado</h3>
        <Row>
          {/* Etapa 1: Análisis y Consultoría */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="process-step-card h-100">
              <Card.Body className="text-center">
                <div className="process-icon"><i className="bi bi-search"></i></div>
                <Card.Title as="h5">1. Análisis y Consultoría</Card.Title>
                <Card.Text>
                  Entendemos tus objetivos y desafíos para definir el alcance y la estrategia tecnológica ideal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Etapa 2: Diseño UX/UI y Arquitectura */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="process-step-card h-100">
              <Card.Body className="text-center">
                <div className="process-icon"><i className="bi bi-palette-fill"></i></div>
                <Card.Title as="h5">2. Diseño y Arquitectura</Card.Title>
                <Card.Text>
                  Creamos interfaces intuitivas y una arquitectura robusta, escalable y segura para tu software.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Etapa 3: Desarrollo e Implementación */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="process-step-card h-100">
              <Card.Body className="text-center">
                <div className="process-icon"><i className="bi bi-code-slash"></i></div>
                <Card.Title as="h5">3. Desarrollo Ágil</Card.Title>
                <Card.Text>
                  Construimos tu solución con metodologías ágiles, entregando valor de forma continua y transparente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Etapa 4: Despliegue y Soporte */}
          <Col md={6} lg={3} className="mb-4">
            <Card className="process-step-card h-100">
              <Card.Body className="text-center">
                <div className="process-icon"><i className="bi bi-rocket-takeoff-fill"></i></div>
                <Card.Title as="h5">4. Despliegue y Soporte</Card.Title>
                <Card.Text>
                  Lanzamos tu producto al mercado y ofrecemos soporte continuo para garantizar su óptimo funcionamiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* --- Llamada a la Acción (CTA) --- */}
        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <h3>¿Tienes una idea o un desafío para nosotros?</h3>
            <p>
              Nuestro equipo de expertos está listo para escuchar tus requerimientos y proponerte una solución tecnológica que impulse tu negocio.
            </p>
            <Button as={Link} to="/contacto" variant="primary" size="lg" className="cta-button-custom">
              Hablemos de tu Proyecto
            </Button>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default CustomSoftware;