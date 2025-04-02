// src/citas/citas.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citasRepository: Repository<Cita>,
  ) {}

  async crearCita(citaData: CreateCitaDto): Promise<Cita> {
    const nuevaCita = this.citasRepository.create({
      nombrePaciente: citaData.nombrePaciente,
      email: citaData.email,
      telefono: citaData.telefono,
      fecha: new Date(citaData.fecha), // Convierte string a Date
      hora: citaData.hora,
      motivo: citaData.motivo
    });
    return await this.citasRepository.save(nuevaCita);
  }
}