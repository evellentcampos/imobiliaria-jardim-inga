import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#102818] text-white">
      <div className="mx-auto max-w-[1500px] px-10 py-14">
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <img
              src="https://i.ibb.co/TM62mjgf/file-000000000320720ea667cf785ae277a9.png"
              alt="Imobiliária Jardim Ingá"
              className="w-[260px] brightness-0 invert"
            />

            <p className="mt-5 max-w-sm text-white/70 leading-7">
              Compra, venda e avaliação de imóveis com atendimento
              humanizado, transparência e segurança em todas as negociações.
            </p>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-bold text-[#C79A2E] text-lg">
              Institucional
            </h3>

            <div className="mt-5 space-y-3 text-white/70">
              <p>Início</p>
              <p>Imóveis</p>
              <p>Sobre Nós</p>
              <p>Contato</p>
            </div>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-bold text-[#C79A2E] text-lg">
              Atendimento
            </h3>

            <div className="mt-5 space-y-3 text-white/70">
              <p>WhatsApp: (61) 9229-9329</p>
              <p>Luziânia - GO</p>
              <p>Imobiliária Jardim Ingá</p>
            </div>
          </div>

          {/* Corretor */}
          <div>
            <h3 className="font-bold text-[#C79A2E] text-lg">
              Corretor responsável
            </h3>

            <div className="mt-5 space-y-3 text-white/70">
              <p>Jhone Silva</p>
              <p>CRECI 14643-F-GO</p>
              <p>Compra • Venda • Avaliação</p>
            </div>

            <div className="mt-6 flex gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C79A2E] transition-all duration-300 hover:bg-[#C79A2E] cursor-pointer">
                <FaFacebookF size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C79A2E] transition-all duration-300 hover:bg-[#C79A2E] cursor-pointer">
                <FaInstagram size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C79A2E] transition-all duration-300 hover:bg-[#C79A2E] cursor-pointer">
                <FaWhatsapp size={18} />
              </div>

            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © 2026 Imobiliária Jardim Ingá. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}