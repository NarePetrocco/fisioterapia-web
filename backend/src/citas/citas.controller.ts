import { Controller, Post, Body } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CreateCitaDto } from './dto/create-cita.dto';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post()
  async crearCita(@Body() citaData: CreateCitaDto) {
    // Almacenar la cita en la base de datos
    const cita = await this.citasService.crearCita(citaData);
    return cita; // Retornamos la cita para confirmar que se ha guardado
  }
}
