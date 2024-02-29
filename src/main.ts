import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('CRUD server built self-taught.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    swaggerUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.11.8'    
  });

  // Manejar redirección en la raíz
  await app.listen(3000);
}

bootstrap();
