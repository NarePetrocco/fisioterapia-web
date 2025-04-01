import { FaClinicMedical, FaRunning, FaUserInjured} from 'react-icons/fa';
import { MdElectricBolt } from "react-icons/md";
import { FaPersonCane } from "react-icons/fa6";
import { TbMassage } from "react-icons/tb";



const ServicesPage = () => {
  const services = [
    {
      title: "Fisioterapia Deportiva",
      description: "Recuperación de lesiones deportivas y mejora del rendimiento físico",
      icon: <FaRunning className="text-4xl text-cyan-600 mb-4" />,
      bgColor: "bg-cyan-50"
    },
    {
      title: "Rehabilitación Postoperatoria",
      description: "Programas personalizados para recuperación después de cirugías",
      icon: <FaClinicMedical className="text-4xl text-green-600 mb-4" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Tratamiento de Lesiones",
      description: "Solución especializada para lesiones musculares y articulares",
      icon: <FaUserInjured className="text-4xl text-purple-600 mb-4" />,
      bgColor: "bg-cyan-50"
    },
    {
      title: "Terapia Manual",
      description: "Técnicas manuales para alivio del dolor y mejora de movilidad",
      icon: <TbMassage className="text-4xl text-orange-600 mb-4" />,
      bgColor: "bg-green-50"
    },
    {
      title: "Fisioterapia Geriátrica",
      description: "Cuidado especializado para adultos mayores",
      icon: <FaPersonCane className="text-4xl text-blue-600 mb-4" />,
      bgColor: "bg-cyan-50"
    },
    {
      title: "Terapia Invasiva",
      description: "Tecnica avanzada con Electropunsion para el tratamiento del dolor muscular y reducir la inflamacion",
      icon: <MdElectricBolt className="text-4xl text-yellow-600 mb-4" />,
      bgColor: "bg-green-50"
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-gradient-to-r from-cyan-600 to-[var(--custom-green)] flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Nuestros <span className="text-cyan-200">Servicios</span>
          </h1>
          <p className="text-xl md:text-2xl">
            Soluciones especializadas para tu recuperación y bienestar físico
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 bg-[var(--custom-green)] hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-all">
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--custom-green)] mb-6">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nuestro especialista está listo para evaluar tu caso y recomendarte el mejor tratamiento
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg hover:scale-105">
            Reserva tu cita aqui
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;