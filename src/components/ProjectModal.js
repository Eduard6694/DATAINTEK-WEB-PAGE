// src/components/ProjectModal.js

import React from 'react';
import { Modal, Button, Row, Col, Badge, Image } from 'react-bootstrap';
import './ProjectModal.css';

const ProjectModal = ({ show, handleClose, project }) => {
  // Si no hay un proyecto seleccionado, no renderizamos nada para evitar errores.
  if (!project) {
    return null;
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered dialogClassName="project-modal">
      <Modal.Header closeButton>
        <Modal.Title as="h3">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {/* Columna de la Imagen */}
          <Col md={5}>
            <Image src={project.image} fluid rounded className="mb-3" />
            <h5>Tecnologías Clave</h5>
            <div>
              {project.tags.map((tag, index) => (
                <Badge pill bg="dark" key={index} className="me-2 mb-2">
                  {tag}
                </Badge>
              ))}
            </div>
          </Col>
          {/* Columna de los Detalles */}
          <Col md={7}>
            <div className="project-detail-section">
              <h4>El Desafío</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="project-detail-section">
              <h4>Nuestra Solución</h4>
              <p>{project.solution}</p>
            </div>
            <div className="project-detail-section">
              <h4>Impacto y Resultados</h4>
              <ul>
                {project.results.map((result, index) => (
                  <li key={index}><i className="bi bi-check-circle-fill me-2 text-success"></i>{result}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" as="a" href="/contacto" className="cta-button-project">
          Contactar sobre un Proyecto Similar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;