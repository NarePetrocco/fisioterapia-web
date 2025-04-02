import { Controller, Post, Body } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private citasService: CitasService) {}

 // src/citas/citas.controller.ts
@Post()
async crearCita(@Body() citaData: CreateCitaDto) {
  return this.citasService.crearCita(citaData);
}
}