import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Ana Martínez",
      role: "Paciente con lesión deportiva",
      content: "Después de mi operación de rodilla, Mariano me ayudó a recuperar la movilidad completa. Su enfoque personalizado hizo toda la diferencia.",
      rating: 5,
      date: "Enero 2025",
      photo: "ana.jpg"
    },
    {
      name: "Carlos Rodríguez",
      role: "Atleta amateur",
      content: "Increíble profesional. Sus técnicas de terapia manual eliminaron mi dolor crónico de espalda en solo 6 sesiones.",
      rating: 5,
      date: "Marzo 2025",
      photo: "carlos.jpg"
    },
    {
      name: "Lucía Fernández",
      role: "Paciente post-cirugía",
      content: "El tratamiento de rehabilitación fue excelente. Ahora puedo jugar con mis hijos sin dolor. ¡Gracias!",
      rating: 4,
      date: "Diciembre 2025",
      photo: "lucia.jpg"
    },
    {
      name: "Javier Gómez",
      role: "Corredor de maratón",
      content: "Gracias a sus consejos y tratamiento pude terminar mi primer maratón sin lesiones. Totalmente recomendado.",
      rating: 5,
      date: "Noviembre 2024",
      photo: "javier.jpg"
    },
    {
      name: "María López",
      role: "Paciente con tendinitis",
      content: "He probado varios fisioterapeutas y Mariano es el mejor. Me enseñó ejercicios que puedo hacer en casa.",
      rating: 5,
      date: "Febrero 2025",
      photo: "maria.jpg"
    },
    {
      name: "David Sánchez",
      role: "Oficinista con dolor cervical",
      content: "En solo 4 sesiones noté una gran mejoría. Su trato cercano y profesional hace que las visitas sean muy agradables.",
      rating: 4,
      date: "Octubre 2023",
      photo: "david.jpg"
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-gradient-to-r from-cyan-600 to-[var(--custom-green)] flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Testimonios de <span className="text-cyan-200">Pacientes</span>
          </h1>
          <p className="text-xl md:text-2xl">
            La opinión de quienes han confiado en mi trabajo
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[var(--custom-green)] flex flex-col"
            >
              {/* Sección Superior - Info del Paciente */}
              <div className="flex items-start gap-4 mb-6">
                {/* Foto */}
                <div className="flex-shrink-0">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[var(--custom-green)]">
                    <img
                      src={`/assets/testimonials/${testimonial.photo}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Nombre y Rating */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center ml-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección Inferior - Comentario */}
              <div className="mt-auto"> 
                <FaQuoteLeft className="text-2xl text-gray-300 mb-3" />
                <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                <p className="text-gray-400 text-xs text-right">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--custom-green)] mb-6">
            ¿Listo para comenzar tu tratamiento?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Reserva tu primera cita y experimenta un enfoque diferente en fisioterapia
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:scale-105">
            Reservar tu cita aqui
          </button>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;