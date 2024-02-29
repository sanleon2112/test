import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';
import { setupSwagger } from '../swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  app.use('/', express.static(path.join(__dirname, '..', 'public', 'swagger')));
  await app.listen(3000);
}

bootstrap();
