"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#sectionA", label: "Inicio" },
  { href: "#sectionB", label: "Nosotros" },
  { href: "#sectionE", label: "Productos" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: "/icons/Facebook.svg", alt: "Facebook" },
  { href: "https://instagram.com", icon: "/icons/Instagram.svg", alt: "Instagram" },
  { href: "https://whatsapp.com", icon: "/icons/Whatsapp.svg", alt: "Whatsapp" },
  { href: "https://youtube.com", icon: "/icons/Youtube.svg", alt: "Youtube" },
];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 bg-black text-white shadow-md">
        {/* Logo + Desktop Menu */}
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/img/LG_01.png"
              alt="Logo"
              width={150}
              height={100}
              className="mr-2 transform transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="relative font-semibold hover:text-gray-400 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Redes sociales (solo en desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity duration-300"
            >
              <Image src={icon} alt={alt} width={30} height={30} />
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white space-y-6 px-4 py-6 shadow-xl transition-all duration-500 ease-in-out">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="block font-semibold text-xl hover:text-gray-400 transition-colors duration-300"
            >
              {label}
            </Link>
          ))}

          {/* Redes sociales en móvil */}
          <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700 mt-4">
            {socialLinks.map(({ href, icon, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity duration-300"
              >
                <Image src={icon} alt={alt} width={30} height={30} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
