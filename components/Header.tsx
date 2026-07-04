"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/556191010505?text=Olá!%20Vi%20um%20imóvel%20no%20site%20da%20Imobiliária%20Jardim%20Ingá%20e%20gostaria%20de%20receber%20mais%20informações.";

  const zapLink = "https://www.zapimoveis.com.br/imobiliaria/849619/";

  const menu = [
    { nome: "Início", link: "/" },
    { nome: "Imóveis", link: zapLink, externo: true },
    { nome: "Bairros", link: "/bairros" },
    { nome: "Sobre Nós", link: "/#sobre" },
    { nome: "Diferenciais", link: "/diferenciais" },
    { nome: "Contato", link: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-5 md:h-28 md:px-8 lg:h-32 lg:px-10">
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://i.ibb.co/TM62mjgf/file-000000000320720ea667cf785ae277a9.png"
            alt="Imobiliária Jardim Ingá"
            className="h-auto w-[250px] transition duration-300 hover:scale-105 md:w-[300px] lg:w-[340px]"
          />
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {menu.map((item, index) =>
            item.externo ? (
              <a
                key={item.nome}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-[15px] font-semibold uppercase tracking-wide text-[#222] transition hover:text-[#C79A2E]"
              >
                {item.nome}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#C79A2E] transition-all duration-300 ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ) : (
              <Link
                key={item.nome}
                href={item.link}
                className="group relative text-[15px] font-semibold uppercase tracking-wide text-[#222] transition hover:text-[#C79A2E]"
              >
                {item.nome}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#C79A2E] transition-all duration-300 ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-[#214D2F] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#183923] active:scale-95 lg:inline-flex"
        >
          Falar com Corretor
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-200 lg:hidden"
          aria-label="Abrir menu"
        >
          <span className="h-[2px] w-6 rounded-full bg-[#183D24]" />
          <span className="h-[2px] w-6 rounded-full bg-[#183D24]" />
          <span className="h-[2px] w-6 rounded-full bg-[#183D24]" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-5">
            {menu.map((item) =>
              item.externo ? (
                <a
                  key={item.nome}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold uppercase tracking-wide text-[#183D24]"
                >
                  {item.nome}
                </a>
              ) : (
                <Link
                  key={item.nome}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold uppercase tracking-wide text-[#183D24]"
                >
                  {item.nome}
                </Link>
              )
            )}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-[#214D2F] px-6 py-4 text-center font-semibold text-white"
            >
              Falar com Corretor
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}