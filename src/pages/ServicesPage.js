// src/pages/ServicesPage.js

import React from 'react';
import Services from '../components/Services';
import CustomSoftware from '../components/CustomSoftware'; // 1. Importar el nuevo componente

const ServicesPage = () => {
  return (
    // El padding superior se mantiene en el contenedor principal
    <div style={{ paddingTop: '80px' }}> 
      <Services />

      {/* Una línea divisoria para separar visualmente las dos secciones */}
      <hr className="my-0" /> 
      
      {/* 2. Añadir la nueva sección */}
      <CustomSoftware />
    </div>
  );
};

export default ServicesPage;