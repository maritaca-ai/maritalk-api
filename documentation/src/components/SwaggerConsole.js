import React, { useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerConsole() {
  useEffect(() => {
    const interval = setInterval(() => {
      const linksSections = document.querySelectorAll('.response-col_links');
      linksSections.forEach(section => {
        section.style.display = 'none';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <SwaggerUI
      url="/swagger.json"
      docExpansion="none"
      deepLinking={true}
      defaultModelsExpandDepth={-1}
      defaultModelExpandDepth={1}
      showExtensions={true}
      showCommonExtensions={true}
      tryItOutEnabled={true}
    />
  );
}
