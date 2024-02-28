import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as swaggerUI from 'swagger-ui-express';
import swaggerRouter from '../swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('CRUD server built self-taught.')
    .setVersion('1.0')
    .build();
  //const document = SwaggerModule.createDocument(app, config);
  //app.use('', swaggerUI.serve, swaggerUI.setup(document));

  app.use('/', swaggerRouter);

  await app.listen(3000);
}
bootstrap();






