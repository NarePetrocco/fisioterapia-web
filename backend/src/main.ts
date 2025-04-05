import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CorsOptions } from 'cors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración CORS
  const corsOptions: CorsOptions = {
    origin: 'https://localhost:5173', // Permitir solicitudes solo desde tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization', // Ajusta los headers según tus necesidades
  };

  app.enableCors(corsOptions); // Habilitar CORS con las opciones especificadas

  await app.listen(3000);
}
bootstrap();
