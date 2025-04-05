import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasController } from './citas.controller';
import { CitasService } from './citas.service';
import { Cita } from './entities/cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita])], // Importa la entidad Cita
  controllers: [CitasController],
  providers: [CitasService],
  exports: [CitasService], // Exportar si lo usas en otros módulos
})
export class CitasModule {}
