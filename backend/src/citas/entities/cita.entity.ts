
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre_paciente' })
  nombrePaciente: string;  

  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @Column()
  motivo: string;
}