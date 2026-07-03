"use client";

import { useState } from "react";

export default function EmailContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleContact() {
    const message = `Olá! Meu nome é ${name || "não informado"}.

Meu e-mail é ${email || "não informado"}.

Gostaria que um corretor entrasse em contato comigo para encontrar um imóvel.`;

    const whatsappUrl = `https://wa.me/556191010505?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section id="contato" className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#173E2B] to-[#214D2F] shadow-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center p-12">
          <div>
            <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Quer que encontremos o imóvel ideal para você?
            </h2>

            <p className="text-white/90 text-lg leading-8">
              Informe seus dados e nossa equipe entrará em contato para
              apresentar as melhores oportunidades disponíveis de acordo com o
              seu perfil.
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-white border border-white px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C79A2E]"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-white border border-white px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C79A2E]"
            />

            <button
              type="button"
              onClick={handleContact}
              className="w-full rounded-xl bg-[#C79A2E] py-4 font-semibold text-white transition duration-300 hover:brightness-110"
            >
              Quero que entrem em contato
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}