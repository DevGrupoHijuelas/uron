import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-6">
      {/* Logo */}
      <Image
        src="/img/lumina green a.webp" // Cambia esto por la ruta de tu logo
        alt="Logo principal"
        width={250}
        height={250}
        className="mb-6"
      />

      {/* Mensaje */}
      <h1 className="text-4xl sm:text-6xl font-bold text-white">
        Próximamente
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 mt-4 max-w-md">
        Estamos trabajando en una experiencia increíble. ¡Vuelve pronto para conocer más!
      </p>
      <div className="contacto text-4xl sm:text-sm font-bold text-white mt-4">
        <p>Puedes contactarnos en el siguiente correo electrónico</p>
        <p>ventas@luminagreen.cl</p>
      </div>
    </div>
  );
}
