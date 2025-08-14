import React from 'react';

const SEOMetadata = ({ title, description, keywords, imageUrl, url }) => {
  // --- VALORES POR DEFECTO ---
  // Estos se usarán si no se proporciona un valor específico en la página.
  const defaultTitle = "DATAINTEK | Desarrollo de Software e Inteligencia Artificial en Ecuador";
  const defaultDescription = "Transformamos ideas en soluciones tecnológicas. Expertos en desarrollo de software a medida, aplicaciones móviles, IA y Machine Learning para potenciar tu negocio.";
  const defaultKeywords = "desarrollo de software, inteligencia artificial, machine learning, ecuador, quito, dataintek, aplicaciones móviles, ptt, facturación electrónica";
  const siteName = "DATAINTEK";

  // Debes crear esta imagen (1200x630px) y ponerla en 'public/images/og-image.jpg'
  const defaultImageUrl = "https://www.dataintek.com/images/og-image.jpg"; 
  
  // El dominio final de tu web
  const siteUrl = "https://www.dataintek.com"; 

  // --- LÓGICA PARA COMBINAR VALORES ---
  const seo = {
    title: title ? `${title} | DATAINTEK` : defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: imageUrl ? `${siteUrl}${imageUrl}` : defaultImageUrl,
    url: url ? `${siteUrl}${url}` : siteUrl,
  };

  return (
    // React 19 moverá automáticamente estas etiquetas al <head> del documento.
    <>
      {/* --- Etiquetas Fundamentales para SEO --- */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.url} />

      {/* --- Etiquetas Open Graph (para Facebook, LinkedIn, etc.) --- */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="es_EC" />

      {/* --- Etiquetas Twitter Card (para Twitter) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
};

export default SEOMetadata;