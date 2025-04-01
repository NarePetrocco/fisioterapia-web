import Carousel from "../Home/components/carousel";

const HomePage = () => {
  return (
    <section className="w-full">
      {/* Sección del Carrusel */}
      <div className="relative h-[600px] w-full mt-10">
        <Carousel />
        
        {/* Overlay de texto */}
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Recupera tus lesiones con <br className="hidden md:block" />
              <span className="text-cyan-300">Fisioterapia de primer nivel</span>
            </h2>
            
            <button className="bg-cyan-600 hover:bg-[var(--custom-green)] text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Reserva tu cita aquí
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Texto Inferior  */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--custom-green)] mb-6">
          FISIOTERAPIA EN VALENCIA
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--custom-green)] leading-relaxed max-w-3xl mx-auto">
          Especialista en rehabilitación y tratamiento de lesiones con enfoque personalizado
        </p>
      </div>
    </section>
  );
};

export default HomePage;