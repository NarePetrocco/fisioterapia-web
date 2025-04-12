import { IsString, IsEmail, IsDateString, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateCitaDto {
  @IsString()
  @IsNotEmpty()
  nombrePaciente: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @Matches(/^\d{9,15}$/, { message: 'El teléfono debe tener entre 9 y 15 dígitos' })
  @IsNotEmpty()
  telefono: string;

  @IsDateString({}, { message: 'La fecha debe tener un formato válido (YYYY-MM-DD)' })
  @IsNotEmpty()
  fecha: string; 

  @IsString()
  @Length(5, 5, { message: 'La hora debe estar en formato HH:MM' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'Formato de hora inválido (HH:MM)' })
  @IsNotEmpty()
  hora: string;

  @IsString()
  @IsNotEmpty()
  motivo: string;
}
