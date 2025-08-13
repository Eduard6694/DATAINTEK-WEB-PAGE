// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// 1. Importa NavLink en lugar de Link
import { NavLink, Link } from 'react-router-dom'; 
import logo from '../assets/images/logo-dataintek.png';
import './Header.css';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  // Toda la lógica para el scroll y el menú abierto se mantiene exactamente igual
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (isMenuOpen) return;
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={scrolled ? 'scrolled' : ''}
      expanded={isMenuOpen}
      onToggle={() => setIsMenuOpen(!isMenuOpen)}
    >
      <Container>
        {/* Usamos Link para el logo, ya que no necesita el estilo "active" */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="DATAINTEK Logo" className="navbar-logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {/* 2. Cambia 'as={Link}' por 'as={NavLink}' en los enlaces de navegación */}
          <Nav onClick={() => setIsMenuOpen(false)}>
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link> {/* Añadimos la prop 'end' */}
            <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={NavLink} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            {/* El botón de contacto no necesita ser un NavLink, un Link normal es suficiente */}
            <Button as={Link} to="/contacto" variant="primary" className="ms-lg-3">Contacto</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;