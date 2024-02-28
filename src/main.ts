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
  customCss: string;
  swaggerUrl: string;
  swaggerJs: string;
  swaggerCss: string;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui-bundle.js',
    swaggerJs: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui.js',
    swaggerCss: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/swagger-ui.css',
  };

  SwaggerModule.setup('/api-docs', app, document, options);

  await app.listen(3000);
}
bootstrap();
