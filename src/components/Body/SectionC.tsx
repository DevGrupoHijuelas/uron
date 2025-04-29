"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/img/Macetas_1.jpg",
    title: "QUIÉNES SOMOS",
    text: "Somos un equipo de emprendedores apasionados por la biotecnología. Creamos soluciones que fusionan la sabiduría de la naturaleza con el poder de la tecnología para iluminar un futuro más sostenible y consciente.",
  },
  {
    image: "/img/Macetas_2.jpg",
    title: "NUESTRA VISIÓN",
    text: "Imaginamos un mundo donde la innovación verde lidera el cambio. Diseñamos productos con impacto positivo, cuidando el medio ambiente en cada paso.",
  },
  {
    image: "/img/Macetas_3.jpg",
    title: "NUESTRA MISIÓN",
    text: "Un grupo multidisciplinario comprometido con el futuro. Desde ingenieros hasta creativos, trabajamos juntos por un planeta mejor.",
  },
];

const SectionC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, text } = slides[currentSlide];

  return (
    <section
      id="sectionC"
      className="relative h-screen w-full text-white flex flex-col transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Título centrado */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
        <h2 className="text-5xl font-bold drop-shadow-lg">{title}</h2>
      </div>


      {/* Contenido en dos columnas */}
      <div className="flex flex-1 w-full h-full">
      {/* Contenedor izquierdo fijo */}
      <div className="w-1/2 backdrop-blur-sm bg-[rgba(0,113,103,0.8)] flex items-end justify-start p-10 pb-20">
        <div className="max-w-lg text-white overflow-y-auto h-[250px]">
          <p className="text-lg leading-relaxed tracking-wide font-light">
            {text}
          </p>
        </div>
      </div>

        {/* Columna derecha transparente */}
        <div className="w-1/2 bg-black/20"></div>
      </div>

      {/* Botones de slide */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-4 h-4 rounded-full ${
              idx === currentSlide ? "bg-white" : "bg-gray-500"
            } transition-all duration-500`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default SectionC;
