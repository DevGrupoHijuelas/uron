"use client";
import React, { useEffect, useRef, useState } from "react";

const products = [
  {
    src: "../Icons/ICONOS-01.svg",
    alt: "Producto 1",
    title: "Innovación consciente",
    review: "Integra tecnología avanzada con respeto por el medio ambiente, promoviendo un estilo de vida más responsable.",
  },
  {
    src: "../Icons/ICONOS-06.svg",
    alt: "Producto 2",
    title: "Sostenibilidad",
    review: "Diseñado para reducir el impacto ecológico, ofreciendo soluciones efectivas sin comprometer la salud del planeta.",
  },
  {
    src: "/Icons/ICONOS-05.svg",
    alt: "Producto 3",
    title: "Armonía",
    review: "Equilibra ciencia y naturaleza para crear un ambiente saludable en tu hogar, con beneficios a largo plazo.",
  },
  {
    src: "/Icons/ICONOS-04.svg",
    alt: "Producto 4",
    title: "Eficiencia energética",
    review: "Optimiza recursos naturales con fórmulas 100% biodegradables, garantizando rendimiento y responsabilidad ecológica.",
  },
];

const SectionD = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setShowCards(true), 800); // espera un poco antes de mostrar tarjetas
        }
      },
      { threshold: 0.3 } // Ajusta cuánta parte debe estar visible (30%)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/img/Blur_3.png')] bg-center bg-no-repeat bg-cover text-white min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      {visible && (
        <h2 className="text-4xl font-bold mb-12 text-center transition-opacity duration-1000 ease-in-out opacity-100">
          Nuestros valores
        </h2>
      )}
      <div className="max-w-7xl w-full flex flex-wrap justify-center gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className={`w-[220px] sm:w-[300px] md:w-[230px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-700 ease-out
              ${showCards ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <h3 className="text-xl font-semibold mb-1 text-center p-3 min-h-[64px] flex items-center justify-center">
              {product.title}
            </h3>
            <img
              src={product.src}
              alt={product.alt}
              className="w-full h-100 object-cover mt-20"
            />
            <div className="p-4">
              <p className="text-sm text-gray-300 mb-1">{product.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionD;
