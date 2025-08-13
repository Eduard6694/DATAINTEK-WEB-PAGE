import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './KeyFeatures.css'; // Crearemos este archivo para estilos personalizados

const KeyFeatures = () => {
  return (
    <section className="key-features-section bg-light py-5">
      <Container>
        <Row className="text-center">
          {/* Feature 1: Soluciones Integrales */}
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Body>
                <div className="feature-icon mb-3">
                  <i className="bi bi-cpu-fill"></i>
                </div>
                <Card.Title as="h3">Soluciones Integrales</Card.Title>
                <Card.Text>
                  Desde cableado estructurado hasta desarrollo de software a medida y venta de equipos. Ofrecemos una solución tecnológica completa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2: Innovación y Futuro */}
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Body>
                <div className="feature-icon mb-3">
                  <i className="bi bi-robot"></i>
                </div>
                <Card.Title as="h3">Innovación con IA</Card.Title>
                <Card.Text>
                  Implementamos proyectos de Machine Learning e Inteligencia Artificial para automatizar procesos y potenciar la competitividad de tu empresa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3: Calidad y Rendimiento */}
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Body>
                <div className="feature-icon mb-3">
                  <i className="bi bi-gem"></i>
                </div>
                <Card.Title as="h3">Calidad y Rendimiento</Card.Title>
                <Card.Text>
                  Nuestra misión es entregar soluciones informáticas de alto rendimiento y productos de primera calidad que garanticen tu éxito.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KeyFeatures;