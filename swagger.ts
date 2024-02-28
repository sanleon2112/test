import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as path from 'path';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'API Rest',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'https://rest-api-backend-app.vercel.app'        
      }
    ],
  },
  //apis: [path.join(__dirname, 'src/users/*.ts')]
  apis: [path.join(__dirname, 'src/users/users.controller.ts')]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocs));

export default router;
