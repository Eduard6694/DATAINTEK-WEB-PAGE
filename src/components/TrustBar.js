// src/components/TrustBar.js

import React from 'react';
import { Container } from 'react-bootstrap';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <section className="trust-bar-section py-4">
      <Container className="text-center">
        <p className="trust-bar-title">Tecnologías con las que transformamos ideas en realidad:</p>
        <div className="tech-logos">
          {/* Puedes usar los iconos de Bootstrap, o mejor aún, los logos oficiales en formato SVG o PNG */}
          <i className="bi bi-filetype-jsx" title="React"></i>
          <i className="bi bi-filetype-py" title="Python"></i>
          <i className="bi bi-bootstrap-fill" title="Bootstrap"></i>
          <i className="bi bi-git" title="Git"></i>
          <i className="bi bi-database-fill" title="SQL"></i>
          {/* Idealmente, aquí irían los logos de las tecnologías */}
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;