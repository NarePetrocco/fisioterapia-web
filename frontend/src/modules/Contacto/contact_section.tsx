import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section (como en otras páginas) */}
      <section className="relative h-[400px] w-full bg-gradient-to-r from-cyan-600 to-[var(--custom-green)] flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl">
            Estamos aquí para ayudarte en tu recuperación
          </p>
        </div>
      </section>

      {/* Sección de Información */}
      <section className="max-w-4xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Columna izquierda - Información básica */}
        <div className="space-y-8">
          {/* Horarios */}
          <div className="flex items-start gap-4">
            <FaClock className="text-2xl text-[var(--custom-green)] mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Horarios de atención</h3>
              <ul className="space-y-1">
                <li>Lunes a Viernes: 10:00 - 20:00</li>
                <li>Sábados: 10:00 - 12:00</li>
              </ul>
            </div>
          </div>

          {/* Dirección */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-2xl text-[var(--custom-green)] mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">Dirección</h3>
              <p>Calle Obispo Don Jeronimo 8, 46003, Valencia</p>
              <Button variant="link" className="px-0 text-cyan-600 mt-2">
                Ver en mapa
              </Button>
            </div>
          </div>

          {/* Contacto directo */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Comunícate directamente</h3>
            
            <Button className="w-full gap-2 bg-cyan-600 hover:bg-[var(--custom-green)]">
              <FaPhone /> Llamar ahora
            </Button>
            
            <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
              <FaWhatsapp /> WhatsApp
            </Button>
          </div>
        </div>

        {/* Columna derecha - Acciones */}
        <div className="space-y-8">
          {/* Formulario de consulta */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Déjanos tu consulta</h3>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full gap-2 bg-[var(--custom-green)]  hover:bg-green-700">
                  <FaPaperPlane /> Enviar consulta
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Reserva de cita */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Reserva tu cita</h3>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full gap-2 bg-[var(--custom-green)] hover:bg-green-700">
                  <FaCalendarAlt /> Reservar ahora
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <BookingForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  );
};

// Componente del formulario de contacto
const ContactForm = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Envíanos tu consulta</h2>
      <Input placeholder="Nombre completo" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Teléfono (opcional)" type="tel" />
      <Textarea placeholder="Tu mensaje" rows={5} />
      <Button className="w-full bg-cyan-600 hover:bg-[var(--custom-green)]">Enviar mensaje</Button>
    </div>
  );
};

// Componente del formulario de reserva
const BookingForm = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Reserva tu cita</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendario */}
        <div>
          <h3 className="font-medium mb-2">Selecciona una fecha</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        
        {/* Horario y datos */}
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Horario disponible</h3>
            <div className="grid grid-cols-3 gap-2">
              {['10:00', '11:00','12:00','13:00','14:00','15:30','16:30', '17:30', '18:30', '19:30'].map(time => (
                <Button variant="outline" key={time}>
                  {time}
                </Button>
              ))}
            </div>
          </div>
          
          <Input placeholder="Nombre completo" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Teléfono" type="tel" />
          <Textarea placeholder="Motivo de la consulta" rows={3} />
          
          <Button className="w-full bg-cyan-600 hover:bg-[var(--custom-green)]">Confirmar reserva</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;