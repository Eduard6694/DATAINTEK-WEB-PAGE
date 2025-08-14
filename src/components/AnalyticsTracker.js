// src/components/AnalyticsTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Envía un evento "pageview" cada vez que la URL cambia.
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search,
      title: document.title 
    });
  }, [location]);

  return null;
};

export default AnalyticsTracker;