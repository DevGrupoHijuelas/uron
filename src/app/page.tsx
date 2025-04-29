import SectionA from "../components/Body/SectionA";
import SectionB from "../components/Body/SectionB";
import SectionC from "../components/Body/SectionC";
import SectionD from "../components/Body/SectionD";
import SectionE from "../components/Body/SectionE";
import Menu from "../components/Header/Menu";

const Home = () => {
  return (
    <div className="">

      {/* Menú de Navegación */}
      <Menu />

      {/* Sección Principal */}
      <SectionA />

      {/* Sección Video */}
      <SectionB />  

      {/* Sección Vision */}
      <SectionC/>
      
      {/* Sección Mision */}
      <SectionD/>

      {/* Sección Productos */}
      <SectionE/>
      



      {/* Sección Contacto */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">Contacto</h2>
          <p className="text-lg mt-4">
            Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros. ¡Estaremos encantados de ayudarte!
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>&copy; 2025 Lu. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
