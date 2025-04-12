import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasModule } from './citas/citas.module';
import { Cita } from './citas/entities/cita.entity';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: process.env.DB_HOST ?? '',
      port: parseInt(process.env.DB_PORT || '5432'), 
      username: process.env.DB_USER ?? '', 
      password: process.env.DB_PASSWORD ?? '', 
      database: process.env.DB_NAME ?? '', 
      entities: [Cita],
      synchronize: true,
    }),
    CitasModule,
  ],
})
export class AppModule {}
