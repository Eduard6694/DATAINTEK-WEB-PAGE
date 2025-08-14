// src/components/Services.js

import React from 'react';
import { Container, Row, Col, Tabs, Tab, Badge, Image } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  return (
    <section id="servicios" className="services-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h1 className="display-4" style={{ fontWeight: 700 }}>Nuestras Soluciones de Software</h1>
            <p className="lead text-muted">
              Productos robustos y listos para implementar, diseñados para optimizar áreas clave de tu negocio con tecnología de vanguardia.
            </p>
          </Col>
        </Row>

        <Tabs defaultActiveKey="facturacion" id="services-tabs" className="mb-4 justify-content-center" fill>
          
          {/* === PESTAÑA 1: FACTURACIÓN ELECTRÓNICA === */}
          <Tab eventKey="facturacion" title={<><i className="bi bi-receipt-cutoff me-2"></i>Facturación Electrónica</>}>
            <Row className="align-items-center mt-5">
              <Col lg={5} className="mb-4 mb-lg-0">
                {/* IMAGEN AÑADIDA */}
                <Image src="/images/servicio-facturacion.jpg" alt="Plataforma de Facturación Electrónica" fluid rounded />
              </Col>
              <Col lg={7}>
                <h3>Optimiza tu Flujo de Caja y Cumple con la Normativa</h3>
                <p>Nuestra plataforma web de facturación electrónica es una solución completa y segura, diseñada para simplificar la gestión fiscal y agilizar tus procesos de venta.</p>
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i>Punto de Venta integrado para una facturación rápida y eficiente.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Gestión centralizada de productos, stock y códigos de barra.</li>
                  <li><i className="bi bi-check-circle-fill"></i>Acceso seguro desde cualquier lugar con roles y permisos (JWT).</li>
                  <li><i className="bi bi-check-circle-fill"></i>Módulos de configuración flexibles para adaptarse a tu negocio.</li>
                </ul>
              </Col>
            </Row>
          </Tab>

          {/* === PESTAÑA 2: APLICACIÓN PTT === */}
          <Tab eventKey="ptt" title={<><i className="bi bi-broadcast-pin me-2"></i>Aplicación PTT Táctica</>}>
            <Row className="align-items-center mt-5">
              <Col lg={5} className="mb-4 mb-lg-0">
                {/* IMAGEN AÑADIDA */}
                <Image src="/images/servicio-ptt.jpg" alt="Aplicación Push-to-Talk" fluid rounded />
              </Col>
              <Col lg={7}>
                <h3>Comunicación Instantánea y Segura para Equipos Críticos</h3>
                <p>Nuestra aplicación Push-to-Talk (PTT) para Android, junto a su plataforma web de administración, es la herramienta definitiva para la coordinación de equipos en tiempo real.</p>
                
                <h4 className="mt-4">Características Principales</h4>
                <ul className="feature-list">
                  <li><i className="bi bi-shield-lock-fill"></i>Comunicación cifrada de extremo a extremo (256 bits).</li>
                  <li><i className="bi bi-people-fill"></i>Gestión de grupos y usuarios por roles desde la plataforma web.</li>
                  <li><i className="bi bi-cloud-arrow-down-fill"></i>Soporte táctico y almacenamiento de conversaciones en la nube.</li>
                </ul>

                <h4 className="mt-4">Hoja de Ruta (Roadmap)</h4>
                <ul className="feature-list">
                  <li><i className="bi bi-geo-alt-fill"></i>Registro de ubicación y Botón de Emergencia <Badge bg="success">PRÓXIMAMENTE</Badge></li>
                  <li><i className="bi bi-camera-video-fill"></i>Videollamadas y Análisis de Riesgos con IA <Badge bg="warning" text="dark">BAJO DEMANDA</Badge></li>
                </ul>
              </Col>
            </Row>
          </Tab>

        </Tabs>
      </Container>
    </section>
  );
};

export default Services;