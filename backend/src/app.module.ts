import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasModule } from './citas/citas.module';
import { Cita } from './citas/entities/cita.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // O el tipo de base de datos que estés usando
      host: process.env.DB_HOST ?? '', // Asegúrate de que no sea undefined
      port: parseInt(process.env.DB_PORT || '5432'), // Si DB_PORT es undefined, usa 5432 por defecto
      username: process.env.DB_USER ?? '', // Asegúrate de que no sea undefined
      password: process.env.DB_PASSWORD ?? '', // Asegúrate de que no sea undefined
      database: process.env.DB_NAME ?? '', // Asegúrate de que no sea undefined
      entities: [Cita],
      synchronize: true,
    }),
    CitasModule,
  ],
})
export class AppModule {}
