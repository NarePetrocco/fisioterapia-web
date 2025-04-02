// src/citas/dto/create-cita.dto.ts
export class CreateCitaDto {
  nombrePaciente: string;
  email: string;
  telefono: string;
  fecha: Date;
  hora: string;
  motivo: string;
}