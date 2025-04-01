import { FaClinicMedical, FaAward, FaUniversity, FaHandsHelping } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      title: "Más de 10 años de experiencia",
      description: "Especializado en fisioterapia deportiva y rehabilitación",
      icon: <FaClinicMedical className="text-3xl text-cyan-600" />
    },
    {
      title: "Formación",
      description: "Máster en Fisioterapia Deportiva",
      icon: <FaUniversity className="text-3xl text-green-600" />
    },
    {
      title: "Enfoque personalizado",
      description: "Cada tratamiento se adapta a tus necesidades específicas",
      icon: <FaHandsHelping className="text-3xl text-purple-600" />
    },
    {
      title: "Certificaciones internacionales",
      description: "Técnicas avanzadas en terapia manual, electrupunsion y punción seca",
      icon: <FaAward className="text-3xl text-orange-600" />
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full bg-gradient-to-r from-cyan-600 to-[var(--custom-green)] flex items-center justify-center text-center px-4">
        <div className="text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Sobre <span className="text-cyan-200">Mí</span>
          </h1>
          <p className="text-xl md:text-2xl">
            Mi pasión es ayudarte a recuperar tu movilidad y calidad de vida
          </p>
        </div>
      </section>

      {/* Sección Principal */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Columna izquierda - Foto */}
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-[var(--custom-green)] shadow-xl">
            <img 
              src="/assets/mariano.png"
              alt="Fisioterapeuta [Mariano]"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--custom-green)] mb-6">
            Hola, soy <span className="text-cyan-600">Mariano Nuñez</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Fisioterapeuta colegiado con especialización en rehabilitación deportiva y terapia manual. 
            Mi enfoque combina lo mejor de las técnicas tradicionales con los avances más recientes 
            en fisioterapia basada en evidencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Sección Filosofía */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--custom-green)] mb-8">
            Mi filosofía de tratamiento
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
            <p>
              Creo en un enfoque <strong>integral</strong> donde no solo tratamos los síntomas, 
              sino que buscamos la raíz del problema.
            </p>
            <p>
              Cada paciente recibe un <strong>plan personalizado</strong> basado en evidencia 
              científica y adaptado a sus objetivos específicos.
            </p>
            <p>
              La <strong>educación del paciente</strong> es clave para prevenir futuras lesiones 
              y mantener los resultados a largo plazo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;