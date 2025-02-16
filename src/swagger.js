import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de mi-app-next',
      version: '1.0.0',
      description: 'Documentación de la API con Swagger',
    },
  },
  apis: ['./src/app/api/**/*.js'], // Ruta donde están los endpoints
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
