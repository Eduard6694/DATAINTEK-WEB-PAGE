// src/pages/AboutPage.js

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import './AboutPage.css';

// --- IMÁGENES ---
import teamPhoto from '../assets/images/team-photo.jpg'; 

const AboutPage = () => {
  return (
    <>
      <SEOMetadata 
        title="Sobre Nosotros"
        description="Conoce la historia, el equipo y los valores detrás de DATAINTEK. Somos jóvenes emprendedores apasionados por la tecnología, fundados en 2020 y creciendo en el campo de la IA."
        url="/nosotros"
      />
      <div style={{ paddingTop: '80px', paddingBottom: '0' }}>
        {/* --- Sección Hero --- */}
        <Container className="text-center my-5">
          <Row className="justify-content-center">
            <Col md={9}>
              <h1 className="display-4" style={{ fontWeight: 700 }}>Jóvenes, Apasionados y Expertos en Tecnología</h1>
              <p className="lead text-muted mt-3">Somos un equipo de emprendedores que fundó DATAINTEK en 2020 con una meta clara: usar nuestro conocimiento en desarrollo y nuestra pasión por la Inteligencia Artificial para construir el futuro de nuestros clientes.</p>
            </Col>
          </Row>
        </Container>
        
        <Container className="my-5">
          <Image src={teamPhoto} fluid rounded />
        </Container>
        
        {/* --- NUEVA SECCIÓN: POR QUÉ ELEGIR DATAINTEK --- */}
        <Container className="my-5 py-5">
            <Row className="justify-content-center text-center mb-5">
                <Col md={8}><h2 className="section-title">¿Por Qué Elegir DATAINTEK?</h2></Col>
            </Row>
            <Row className="g-4">
                <Col lg={4} md={6}>
                    <div className="why-us-card">
                        <div className="why-us-icon"><i className="bi bi-code-slash"></i></div>
                        <h4>Soluciones a Medida</h4>
                        <p>No creemos en soluciones genéricas. Escuchamos tus necesidades únicas y construimos software que se adapta perfectamente a tus procesos, dándote una verdadera ventaja competitiva.</p>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="why-us-card">
                        <div className="why-us-icon"><i className="bi bi-robot"></i></div>
                        <h4>Expertos en IA</h4>
                        <p>Estamos a la vanguardia de la Inteligencia Artificial. No solo seguimos las tendencias, las implementamos para automatizar tareas, predecir resultados y descubrir nuevas oportunidades en tus datos.</p>
                    </div>
                </Col>
                <Col lg={4} md={6}>
                    <div className="why-us-card">
                        <div className="why-us-icon"><i className="bi bi-headset"></i></div>
                        <h4>Soporte y Acompañamiento</h4>
                        <p>Somos tu socio tecnológico a largo plazo. Desde la consultoría inicial hasta el soporte post-lanzamiento, estamos comprometidos con tu éxito y crecimiento continuo.</p>
                    </div>
                </Col>
            </Row>
        </Container>

        {/* --- Misión y Visión (con diseño mejorado) --- */}
        <Container fluid className="mission-vision-container bg-light py-5">
            <Container>
                <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                        <Card className="h-100 mission-vision-card">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-bullseye mission-vision-icon"></i>
                                    <h3>Nuestra Misión</h3>
                                </div>
                                <p>Ofrecer asesoría y soluciones informáticas de alto rendimiento que permitan organizar y automatizar procesos, mejorando la competitividad de nuestros clientes.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="h-100 mission-vision-card">
                            <Card.Body>
                                <div className="d-flex align-items-center mb-3">
                                    <i className="bi bi-binoculars-fill mission-vision-icon"></i>
                                    <h3>Nuestra Visión</h3>
                                </div>
                                <p>Ser una empresa líder en desarrollar soluciones tecnológicas de alta calidad, con el mejor personal capacitado y empoderado para mejorar el desempeño de cualquier organización.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
        
        {/* --- Nuestros Valores Fundamentales --- */}
        <Container className="my-5 py-5">
            <Row className="justify-content-center text-center mb-5"><Col md={8}><h2 className="section-title">Nuestros Valores Fundamentales</h2></Col></Row>
            <Row className="text-center">
                <Col md={4} className="mb-4"><div className="value-item"><div className="value-icon"><i className="bi bi-lightbulb-fill"></i></div><h5>Innovación Constante</h5><p>Buscamos activamente las tecnologías más avanzadas para ofrecer soluciones que preparan a nuestros clientes para el futuro.</p></div></Col>
                <Col md={4} className="mb-4"><div className="value-item"><div className="value-icon"><i className="bi bi-gem"></i></div><h5>Calidad Ante Todo</h5><p>Nos obsesiona la calidad, la robustez y la seguridad de cada producto que entregamos, desde el código hasta el soporte.</p></div></Col>
                <Col md={4} className="mb-4"><div className="value-item"><div className="value-icon"><i className="bi bi-people-fill"></i></div><h5>Colaboración Transparente</h5><p>Tú eres parte de nuestro equipo. Creemos en una comunicación abierta y honesta para que el resultado sea exactamente lo que necesitas.</p></div></Col>
            </Row>
        </Container>

        {/* --- Línea de Tiempo de la Historia --- */}
        <Container fluid className="timeline-container bg-dark text-white py-5">
            <Container>
                <Row className="justify-content-center text-center mb-5"><Col md={8}><h2 className="section-title text-white">Nuestra Trayectoria</h2></Col></Row>
                <div className="timeline">
                    <div className="timeline-item"><div className="timeline-badge">2020</div><div className="timeline-panel dark-panel"><h5>La Fundación</h5><p>Nace DATAINTEK, fundada por jóvenes emprendedores con la visión de hacer la tecnología de punta accesible para las empresas.</p></div></div>
                    <div className="timeline-item timeline-inverted"><div className="timeline-badge">2021-23</div><div className="timeline-panel dark-panel"><h5>Crecimiento y Experiencia</h5><p>Ejecutamos con éxito diversos proyectos de desarrollo, consolidando nuestra experiencia y construyendo una base de clientes satisfechos.</p></div></div>
                    <div className="timeline-item"><div className="timeline-badge">2024+</div><div className="timeline-panel dark-panel"><h5>Liderando con IA</h5><p>Profundizamos nuestra especialización en Inteligencia Artificial y Machine Learning, desarrollando soluciones innovadoras a la vanguardia del sector.</p></div></div>
                </div>
            </Container>
        </Container>

        {/* --- Llamada a la Acción --- */}
        <Container className="my-5 py-5 text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="section-title">Construyamos el Futuro Juntos</h2>
                    <p className="lead my-4">Ahora que conoces nuestra historia y nuestros valores, nos encantaría conocer la tuya. Hablemos de cómo podemos ayudarte a alcanzar tus objetivos.</p>
                    <Link to="/contacto" className="btn btn-primary btn-lg">Inicia tu Proyecto</Link>
                </Col>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;