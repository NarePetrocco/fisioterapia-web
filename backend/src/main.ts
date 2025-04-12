import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { CorsOptions } from 'cors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 
  const corsOptions: CorsOptions = {
    origin: 'https://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization', 
  };

  app.enableCors(corsOptions); 

  await app.listen(3000);
}
bootstrap();
