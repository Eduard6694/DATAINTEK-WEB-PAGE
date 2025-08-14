// src/components/ProjectCard.js

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importar Link
import './ProjectCard.css';

// Ahora onShowModal es una prop opcional
const ProjectCard = ({ project, onShowModal }) => {
  // Si por alguna razón el proyecto no llega, no rompemos la app.
  if (!project) return null;

  const { image, title, description, tags } = project;

  // Creamos el botón dinámicamente
  const ActionButton = () => {
    if (onShowModal) {
      // Si hay función para el modal, el botón abre el modal
      return (
        <Button variant="primary" className="mt-auto align-self-start cta-button-project" onClick={onShowModal}>
          Ver Caso de Estudio
        </Button>
      );
    } else {
      // Si no, el botón es un enlace a la página de proyectos
      return (
        <Button as={Link} to="/proyectos" variant="primary" className="mt-auto align-self-start cta-button-project">
          Ver Detalles
        </Button>
      );
    }
  };

  return (
    <Card className="project-card h-100">
      <div className="project-card-image-container">
        <Card.Img variant="top" src={image || 'https://via.placeholder.com/400x250/343a40/ffffff?text=DATAINTEK'} className="project-card-image" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h4" className="project-card-title">{title}</Card.Title>
        <div className="project-card-tags mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge pill bg="secondary" key={index} className="me-2">
              {tag}
            </Badge>
          ))}
        </div>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        
        {/* Renderizamos el botón que creamos dinámicamente */}
        <ActionButton />
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;