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
        fixed bottom-6 right-6 z-[9999]
        flex items-center gap-3
        rounded-full bg-[#25D366]
        px-7 py-4
        text-lg font-bold text-white
        shadow-2xl
        transition-all duration-500 ease-out
        hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <FaWhatsapp className="text-4xl" />
      <span>Agende sua visita</span>
    </a>
  );
}