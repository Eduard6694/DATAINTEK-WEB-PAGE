// src/components/Footer.js

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import logo from '../assets/images/logo-dataintek.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5">
          {/* Columna 1: Logo y Misión */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <img src={logo} alt="DATAINTEK Logo" className="footer-logo mb-3" />
            <p className="footer-text">
              Soluciones tecnológicas de alta calidad con personal capacitado para mejorar el desempeño de cualquier organización.
            </p>
          </Col>

          {/* Columna 2: Navegación */}
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Navegación</h5>
            {/* Usamos as={Link} y to="..." para la navegación SPA */}
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
              <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Col>

          {/* Columna 3: Servicios Clave */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Servicios Clave</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/servicios">Desarrollo a Medida</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Diseño de Páginas Web</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Machine Learning & IA</Nav.Link>
              <Nav.Link as={Link} to="/servicios">Facturación Electrónica</Nav.Link>
            </Nav>
          </Col>

          {/* Columna 4: Contacto (INFORMACIÓN ACTUALIZADA) */}
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-title">Contacto</h5>
            <ul className="list-unstyled footer-contact-list">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Carcelen, Quito, Ecuador
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>
                <a href="tel:+593979127751">+593 0979 127 751</a>
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href="mailto:fredys.pineda@dataintek.com">fredys.pineda@dataintek.com</a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="footer-divider" />

        {/* Sección Inferior: Copyright y Redes Sociales */}
        <Row className="py-3 d-flex justify-content-between align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} DATAINTEK CIA LTDA. Todos los derechos reservados.</p>
            <Link to="/politica-de-privacidad" className="privacy-link ms-3">Política de Privacidad</Link>
          </Col>
          <Col md={6} className="text-center text-md-end">
            {/* TODO: Reemplazar '#' con los enlaces reales a tus redes sociales */}
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;