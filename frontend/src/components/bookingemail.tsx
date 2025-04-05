import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ReservarCita = () => {
  const [nombrePaciente, setNombrePaciente] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Datos de la cita
    const citaData = {
      nombrePaciente,
      email,
      telefono,
      fecha,
      hora,
      motivo,
    };

    // Llamada al backend para guardar la cita
    try {
      const response = await fetch('/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(citaData),
      });

      if (response.ok) {
        // Si la cita se guarda correctamente, enviar el correo con EmailJS
        const emailParams = {
          to_email: 'narellapetrocco@gmail.com',
          from_name: nombrePaciente,
          paciente_email: email,
          paciente_telefono: telefono,
          fecha_cita: fecha,
          hora_cita: hora,
          motivo_cita: motivo,
        };

        emailjs.send('service_jks594v', 'template_xbzlp6u', emailParams, '0Xg_7VFbkIMsOVN4uD')
          .then((response) => {
            console.log('Correo enviado: ', response);
          })
          .catch((error) => {
            console.error('Error al enviar el correo: ', error);
          });
      } else {
        console.error('Error al guardar la cita');
      }
    } catch (error) {
      console.error('Error en la conexión con el servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" value={nombrePaciente} onChange={(e) => setNombrePaciente(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Teléfono:</label>
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

      <label>Fecha:</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

      <label>Hora:</label>
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

      <label>Motivo:</label>
      <textarea value={motivo} onChange={(e) => setMotivo(e.target.value)} />

      <button type="submit">Reservar Cita</button>
    </form>
  );
};

export default ReservarCita;
