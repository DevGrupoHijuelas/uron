"use client";
import { useState } from "react";

const SectionA = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bgImage = isHovered
    ? "bg-[url('/img/FONDO_LUZ.png')]"
    : "bg-[url('/img/FONDO_OSCURIDAD.png')]";

  return (
    <div
      className={`${bgImage} bg-center bg-no-repeat bg-cover h-screen flex flex-col lg:flex-row text-white transition-all duration-500`}
    >
      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">LA LUZ COBRA VIDA</h1>
        <h3 className="text-lg lg:text-2xl font-medium mt-4">
          Cuando ciencia y naturaleza se tocan
        </h3>
      </div>

      {/* Contenedor derecho sin hover */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        {/* Div pequeño con hover */}
        <div
          className={`w-50 h-140 hover:transition-opacity ${
            isHovered
              ? "cursor-[url('/img/MANOPLA.svg'),_auto]"
              : "cursor-auto"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
};

export default SectionA;
