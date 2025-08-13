// src/components/Services.js

import React from 'react';
import { Container, Row, Col, Tabs, Tab, Badge } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  return (
    <section id="servicios" className="services-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="section-title">Nuestros Servicios Estrella</h2>
            <p className="lead">
              Soluciones robustas y a medida diseñadas para optimizar y potenciar tu negocio. Explora lo que podemos hacer por ti.
            </p>
          </Col>
        </Row>

        {/* --- Componente de Pestañas --- */}
        <Tabs defaultActiveKey="facturacion" id="services-tabs" className="mb-4 justify-content-center" fill>
          
          {/* === PESTAÑA 1: FACTURACIÓN ELECTRÓNICA === */}
          <Tab eventKey="facturacion" title="Plataforma de Facturación Electrónica">
            <Row className="align-items-center mt-4">
              <Col lg={5} className="mb-4 mb-lg-0">
                <div className="service-image-placeholder">
                  {/* TODO: Reemplazar este div con una imagen o mockup atractivo de la plataforma */}
                  <i className="bi bi-receipt-cutoff"></i>
                </div>
              </Col>
              <Col lg={7}>
                <h3>Plataforma Web de Facturación</h3>
                <p>Una solución completa y segura para la gestión de facturas electrónicas, accesible desde cualquier lugar con conexión a internet.</p>
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i>Inicio de sesión seguro con JWT por roles.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Punto de venta integrado para generar facturas.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Gestión de productos, stock y códigos de barra.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Módulo de configuración y listado de facturas.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Ingreso de productos y servicios de forma sencilla.</li>
                </ul>
              </Col>
            </Row>
          </Tab>

          {/* === PESTAÑA 2: APLICACIÓN PTT === */}
          <Tab eventKey="ptt" title="Aplicación PTT (Push-to-Talk)">
            <Row className="align-items-center mt-4">
              <Col lg={5} className="mb-4 mb-lg-0">
                <div className="service-image-placeholder">
                  {/* TODO: Reemplazar este div con una imagen de la app en un teléfono */}
                  <i className="bi bi-phone-fill"></i>
                </div>
              </Col>
              <Col lg={7}>
                <h3>App Móvil PTT y Plataforma de Control</h3>
                <p>Comunicación táctica instantánea y segura para equipos de trabajo, con una potente plataforma web de administración.</p>
                
                <h4 className="mt-4">Características Principales</h4>
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i>Comunicación por audio, texto, imágenes y archivos.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Cifrado de datos de extremo a extremo de 256 bits.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Creación y gestión de grupos y usuarios por roles.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Soporte táctico y mantenimiento preventivo incluidos.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Almacenamiento en la nube por 6 meses (exportable a JSON).</li>
                  <li><i className="bi bi-check-circle-fill"></i>Compatible con Android 8.1 hasta la versión más actual.</li>
                </ul>

                <h4 className="mt-4">Próximas Características</h4>
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i>Registro de ubicación de los equipos <Badge bg="success">SIN COSTO</Badge></li>
                  <li><i className="bi bi-check-circle-fill"></i>Botón de Emergencia <Badge bg="success">SIN COSTO</Badge></li>
                  <li><i className="bi bi-check-circle-fill"></i>Video llamadas <Badge bg="warning">COSTO ADICIONAL</Badge></li>
                  <li><i className="bi bi-check-circle-fill"></i>Detección de riesgos por IA en conversaciones <Badge bg="warning">COSTO ADICIONAL</Badge></li>
                </ul>
                <blockquote className="feature-note">
                  <strong>Nota:</strong> Las nuevas características se incorporan automáticamente o previa aprobación, notificando siempre al cliente vía email.
                </blockquote>
              </Col>
            </Row>
          </Tab>

        </Tabs>
      </Container>
    </section>
  );
};

export default Services;