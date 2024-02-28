import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

interface SwaggerCustomOptions {
  swaggerOptions: {
    urls: {
      url: string;
      name: string;
    }[];
    docExpansion: string;
    defaultModelsExpandDepth: number;
  };
  swaggerUrl: string;

}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('CRUD server built self-taught.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const options: SwaggerCustomOptions = {
    swaggerOptions: {
      urls: [
        {
          url: '/api-docs/swagger.json',
          name: 'API',
        },
      ],
      docExpansion: 'none',
      defaultModelsExpandDepth: -1,
    },    
    swaggerUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.11.8/'        
  };

  SwaggerModule.setup('/api-docs', app, document, options);

  // Manejar redirección en la raíz
  await app.listen(3000);
}

bootstrap();
