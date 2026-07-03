import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

export default function ContatoPage() {
  const imobiliariaWhatsapp =
    "https://wa.me/556191010505?text=Olá!%20Gostaria%20de%20receber%20atendimento%20da%20Imobiliária%20Jardim%20Ingá.";

  const jhoneWhatsapp =
    "https://wa.me/5561992299329?text=Olá!%20Gostaria%20de%20falar%20com%20o%20corretor%20Jhone%20Silva.";

  const instagramImobiliaria =
    "https://www.instagram.com/imobiliaria_jardim_inga?igsh=MWV6ejlqMXl0NDdybQ==";

  const instagramJhone =
    "https://www.instagram.com/jhonesilva.corretor?igsh=YW91d2JqZGdleDll";

  return (
    <main className="min-h-screen bg-[#FAF8F2]">
      <section className="mx-auto max-w-[1300px] px-8 py-20">
        <p className="font-semibold uppercase tracking-[4px] text-[#C79A2E]">
          Contato
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-[#183D24]">
          Fale com a Imobiliária Jardim Ingá
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Estamos à disposição para apresentar imóveis, esclarecer dúvidas e
          auxiliar você em processos de compra, venda e avaliação.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <FaPhoneAlt className="text-3xl text-[#C79A2E]" />

            <h2 className="mt-6 text-2xl font-bold text-[#183D24]">
              Imobiliária Jardim Ingá
            </h2>

            <p className="mt-4 text-gray-600">WhatsApp: (61) 9101-0505</p>

            <a
              href={imobiliariaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#214D2F] px-6 py-4 font-semibold text-white transition hover:bg-[#183923]"
            >
              <FaWhatsapp />
              Conversar pelo WhatsApp
            </a>

            <a
              href={instagramImobiliaria}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#214D2F] px-6 py-4 font-semibold text-[#214D2F] transition hover:bg-[#214D2F] hover:text-white"
            >
              <FaInstagram />
              Instagram da Imobiliária
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <FaUserTie className="text-3xl text-[#C79A2E]" />

            <h2 className="mt-6 text-2xl font-bold text-[#183D24]">
              Jhone Silva
            </h2>

            <p className="mt-4 text-gray-600">CRECI 14643-F-GO</p>
            <p className="mt-2 text-gray-600">Compra • Venda • Avaliação</p>
            <p className="mt-2 text-gray-600">WhatsApp: (61) 9229-9329</p>

            <a
              href={jhoneWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#214D2F] px-6 py-4 font-semibold text-white transition hover:bg-[#183923]"
            >
              <FaWhatsapp />
              Falar com Jhone
            </a>

            <a
              href={instagramJhone}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#214D2F] px-6 py-4 font-semibold text-[#214D2F] transition hover:bg-[#214D2F] hover:text-white"
            >
              <FaInstagram />
              Instagram do Corretor
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <FaUserTie className="text-3xl text-[#C79A2E]" />

            <h2 className="mt-6 text-2xl font-bold text-[#183D24]">
              Fernando Escritório
            </h2>

            <p className="mt-4 text-gray-600">Atendimento comercial</p>
            <p className="mt-2 text-gray-600">Jardim do Ingá, Luziânia - GO</p>

            <a
              href={imobiliariaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#214D2F] px-6 py-4 font-semibold text-white transition hover:bg-[#183923]"
            >
              <FaWhatsapp />
              Falar com Fernando
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-[#183D24] p-10 text-white shadow-xl">
          <FaMapMarkerAlt className="text-3xl text-[#C79A2E]" />

          <h2 className="mt-5 text-3xl font-bold">Localização</h2>

          <p className="mt-4 text-white/80">
            Jardim Ingá, Luziânia - GO, Brasil.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="font-semibold text-[#183D24] transition hover:text-[#C79A2E]"
          >
            Voltar para a página inicial
          </Link>
        </div>
      </section>
    </main>
  );
}