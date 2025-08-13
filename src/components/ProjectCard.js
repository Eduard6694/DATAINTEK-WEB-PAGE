// src/components/ProjectCard.js

import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, tags, link }) => {
  return (
    <Card className="project-card h-100">
      <div className="project-card-image-container">
        {/* Usaremos un placeholder por ahora. Luego se reemplaza con la imagen real. */}
        <Card.Img variant="top" src={image || 'https://via.placeholder.com/400x250/343a40/ffffff?text=DATAINTEK'} className="project-card-image" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h4" className="project-card-title">{title}</Card.Title>
        <div className="project-card-tags mb-3">
          {tags.map((tag, index) => (
            <Badge pill bg="secondary" key={index} className="me-2">
              {tag}
            </Badge>
          ))}
        </div>
        <Card.Text className="flex-grow-1">{description}</Card.Text>
        <Button variant="primary" className="mt-auto align-self-start cta-button-project">
          Ver Caso de Estudio
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;