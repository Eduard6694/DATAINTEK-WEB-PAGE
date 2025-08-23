// src/components/Services.js

import React from 'react';
import { Container, Row, Col, Tabs, Tab, Badge, Image, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

// --- DATOS PARA LOS PLANES DE FACTURACIÓN ---
const billingPlans = [
  { name: 'BÁSICO', users: '2 simultáneos', docs: '11', price: '3.55', featured: false },
  { name: 'MEDIO', users: '2 simultáneos', docs: '22', price: '4.55', featured: false },
  { name: 'PLUS', users: '3 simultáneos', docs: '51', price: '6.55', featured: false },
  { name: 'PREMIUM', users: '3 simultáneos', docs: 'Ilimitado', price: '9.55', featured: true }
];

// --- NUEVOS DATOS PARA LOS PLANES DE PTT ---
const pttPlans = [
  {
    name: 'EQUIPOS PEQUEÑOS',
    userCount: '< 200 Usuarios',
    appPrice: '4.99',
    platformPrice: '20.99',
    featured: false,
    note: 'Ideal para startups y equipos en crecimiento.'
  },
  {
    name: 'EMPRESARIAL',
    userCount: '≥ 200 Usuarios',
    appPrice: '4.35',
    platformPrice: '19.99',
    featured: true, // Plan destacado
    note: 'La mejor relación costo-beneficio para empresas establecidas.'
  },
  {
    name: 'CORPORATIVO',
    userCount: 'Volumen (+700)',
    appPrice: '4.00',
    platformPrice: '14.99',
    featured: false,
    note: 'Precios especiales para implementaciones a gran escala.'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services-section py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h1 className="display-4" style={{ fontWeight: 700 }}>Nuestras Soluciones de Software</h1>
            <p className="lead text-muted">Productos robustos y listos para implementar, diseñados para optimizar áreas clave de tu negocio con tecnología de vanguardia.</p>
          </Col>
        </Row>

        <Tabs defaultActiveKey="facturacion" id="services-tabs" className="mb-4 justify-content-center" fill>
          
          {/* === PESTAÑA 1: FACTURACIÓN ELECTRÓNICA === */}
          <Tab eventKey="facturacion" title={<><i className="bi bi-receipt-cutoff me-2"></i>Facturación Electrónica</>}>
            {/* ... Contenido y precios de Facturación se mantienen igual ... */}
            <Row className="align-items-center mt-5"><Col lg={5} className="mb-4 mb-lg-0"><Image src="/images/servicio-facturacion.jpg" alt="Plataforma de Facturación Electrónica" fluid rounded /></Col><Col lg={7}><h3>Optimiza tu Flujo de Caja y Cumple con la Normativa</h3><p>Nuestra plataforma web de facturación electrónica es una solución completa y segura, diseñada para simplificar la gestión fiscal y agilizar tus procesos de venta.</p><ul className="feature-list"><li><i className="bi bi-check-circle-fill"></i>Punto de Venta integrado para una facturación rápida y eficiente.</li><li><i className="bi bi-check-circle-fill"></i>Gestión centralizada de productos, stock y códigos de barra.</li><li><i className="bi bi-check-circle-fill"></i>Acceso seguro desde cualquier lugar con roles y permisos (JWT).</li><li><i className="bi bi-check-circle-fill"></i>Módulos de configuración flexibles para adaptarse a tu negocio.</li></ul></Col></Row>
            <Row className="justify-content-center text-center mt-5 pt-4"><Col md={10}><h2 className="section-title">Planes Flexibles para tu Negocio</h2><p className="lead text-muted mb-5">Elige el plan que mejor se adapte a tu volumen de facturación. Todos nuestros planes son transparentes y sin costos ocultos.</p></Col></Row>
            <Row className="g-4 justify-content-center">
              {billingPlans.map((plan, index) => (
                <Col md={6} lg={3} key={index}><Card className={`pricing-card h-100 ${plan.featured ? 'featured-plan' : ''}`}>{plan.featured && <div className="featured-badge">MÁS POPULAR</div>}<Card.Header as="h4" className="pricing-header">{plan.name}</Card.Header><Card.Body className="d-flex flex-column"><div className="price-tag my-3"><span className="price-currency">$</span><span className="price-amount">{plan.price}</span><span className="price-period">/ mes</span></div><ul className="list-unstyled pricing-features mb-4"><li><i className="bi bi-people-fill me-2"></i><strong>{plan.users}</strong></li><li><i className="bi bi-file-earmark-text-fill me-2"></i><strong>{plan.docs}</strong> Documentos</li></ul><Button as={Link} to="/contacto" variant={plan.featured ? 'primary' : 'outline-primary'} className="mt-auto">Contactar</Button></Card.Body><Card.Footer className="text-muted">+ IVA</Card.Footer></Card></Col>
              ))}
            </Row>
          </Tab>

          {/* === PESTAÑA 2: APLICACIÓN PTT (ACTUALIZADA CON PRECIOS) === */}
          <Tab eventKey="ptt" title={<><i className="bi bi-broadcast-pin me-2"></i>Aplicación PTT Táctica</>}>
            <Row className="align-items-center mt-5">
              <Col lg={5} className="mb-4 mb-lg-0"><Image src="/images/servicio-ptt.jpg" alt="Aplicación Push-to-Talk" fluid rounded /></Col>
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

            {/* --- NUEVA SECCIÓN DE PRECIOS PARA PTT --- */}
            <Row className="justify-content-center text-center mt-5 pt-4">
              <Col md={10}>
                <h2 className="section-title">Planes por Volumen de Usuarios</h2>
                <p className="lead text-muted mb-5">Nuestra estructura de precios se adapta al tamaño de tu operación, ofreciendo un mayor valor a medida que tu equipo crece.</p>
              </Col>
            </Row>
            <Row className="g-4 justify-content-center">
              {pttPlans.map((plan, index) => (
                <Col md={6} lg={4} key={index}>
                  <Card className={`pricing-card h-100 ${plan.featured ? 'featured-plan' : ''}`}>
                    {plan.featured && <div className="featured-badge">RECOMENDADO</div>}
                    <Card.Header as="h4" className="pricing-header">{plan.name}</Card.Header>
                    <Card.Body className="d-flex flex-column">
                      <div className="user-count-tag my-3">{plan.userCount}</div>
                      <ul className="list-unstyled pricing-features mb-4">
                        <li>
                          <span className="feature-name">App Móvil PTT</span>
                          <span className="feature-price">${plan.appPrice} <small>/ usuario</small></span>
                        </li>
                        <li>
                          <span className="feature-name">Plataforma Web</span>
                          <span className="feature-price">${plan.platformPrice} <small>/ mes</small></span>
                        </li>
                      </ul>
                      <p className="text-muted flex-grow-1">{plan.note}</p>
                      <Button as={Link} to="/contacto" variant={plan.featured ? 'primary' : 'outline-primary'} className="mt-auto">
                        Solicitar Cotización
                      </Button>
                    </Card.Body>
                     <Card.Footer className="text-muted">
                      + IVA
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Services;