import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6">
      {/* Logo */}
      <Image
        src="/img/lumina green a.webp" // Cambia esto por la ruta de tu logo
        alt="Logo principal"
        width={250}
        height={250}
        className="mb-6"
      />

      {/* Mensaje */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white">
        Próximamente
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-md">
        Estamos trabajando en una experiencia increíble. ¡Vuelve pronto para conocer más!
      </p>
    </div>
  );
}
