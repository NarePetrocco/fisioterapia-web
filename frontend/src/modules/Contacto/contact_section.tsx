
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaPaperPlane } from "react-icons/fa";
import { DialogTitle } from "@radix-ui/react-dialog";
import ContactForm from "./components/contactForm";
import BookingForm from "./components/bookingForm";




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
              <DialogTitle className="text-2xl font-bold">Dejanos tu consulta
              </DialogTitle>
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
                <DialogTitle className="text-2xl font-bold">Reserva tu cita
                </DialogTitle>
                <BookingForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  );
};


export default ContactPage;