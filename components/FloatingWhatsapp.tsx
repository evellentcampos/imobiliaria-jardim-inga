"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const [showButton, setShowButton] = useState(false);

  const whatsappLink =
    "https://wa.me/556191010505?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20a%20um%20imóvel.";

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 650);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed z-[9999]
        bottom-5 right-4
        flex items-center gap-2
        rounded-full bg-[#25D366]
        px-5 py-3
        text-sm font-bold text-white
        shadow-[0_10px_30px_rgba(0,0,0,0.28)]
        transition-all duration-500 ease-out
        hover:scale-105
        sm:right-6 sm:px-6 sm:py-4 sm:text-base
        md:text-lg
        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span>Agendar visita</span>
    </a>
  );
}