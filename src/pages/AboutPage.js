// src/pages/AboutPage.js

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './AboutPage.css'; // Crearemos este CSS para los estilos únicos de la página

// TODO: Reemplazar con una foto real del equipo o de la oficina
import teamPhoto from '../assets/images/team-placeholder.jpg'; 

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '50px' }}>
      {/* --- Sección Hero: Nuestra Esencia --- */}
      <Container className="text-center my-5">
        <Row className="justify-content-center">
          <Col md={9}>
            <h1 className="display-4" style={{ fontWeight: 700 }}>Jóvenes, Apasionados y Expertos en Tecnología</h1>
            <p className="lead text-muted mt-3">
              Somos un equipo de emprendedores que fundó DATAINTEK en 2020 con una meta clara: usar nuestro conocimiento en desarrollo y nuestra pasión por la Inteligencia Artificial para construir el futuro de nuestros clientes.
            </p>
          </Col>
        </Row>
      </Container>
      
      <Container className="my-5">
        <Image src={teamPhoto} fluid rounded />
      </Container>

      {/* --- Sección de Misión y Visión --- */}
      <Container className="my-5 py-5 bg-light rounded">
        <Row>
          {/* Misión */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="d-flex">
              <i className="bi bi-bullseye mission-vision-icon"></i>
              <div>
                <h3>Nuestra Misión</h3>
                <p>
                  Ofrecer asesoría, soluciones informáticas con un alto rendimiento y productos de primera calidad, que permita organizar y hacer accesible la información para automatizar procesos. Mejorando así la competitividad de nuestros clientes.
                </p>
              </div>
            </div>
          </Col>
          {/* Visión */}
          <Col md={6}>
            <div className="d-flex">
              <i className="bi bi-binoculars-fill mission-vision-icon"></i>
              <div>
                <h3>Nuestra Visión</h3>
                <p>
                  Ser una empresa líder en desarrollar soluciones tecnológicas de alta calidad, con el mejor personal capacitado y empoderado en sus funciones que ayuden a mejorar el desempeño de cualquier empresa u organización.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* --- Sección de Nuestra Historia (Timeline) --- */}
      <Container className="my-5 py-5">
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title">Nuestra Trayectoria</h2>
          </Col>
        </Row>
        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-badge">2020</div>
            <div className="timeline-panel">
              <h5>La Fundación</h5>
              <p>Nace DATAINTEK, fundada por jóvenes emprendedores con una visión compartida: hacer la tecnología de punta accesible para empresas de todos los tamaños.</p>
            </div>
          </div>
          {/* Item 2 (Invertido) */}
          <div className="timeline-item timeline-inverted">
            <div className="timeline-badge">2021-2023</div>
            <div className="timeline-panel">
              <h5>Crecimiento y Experiencia</h5>
              <p>Ejecutamos con éxito diversos proyectos de desarrollo de software, consolidando nuestra experiencia y construyendo una base sólida de clientes satisfechos.</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-badge">2024+</div>
            <div className="timeline-panel">
              <h5>Liderando con IA</h5>
              <p>Profundizamos nuestra especialización en Inteligencia Artificial y Machine Learning, desarrollando soluciones innovadoras que nos posicionan a la vanguardia del sector.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;