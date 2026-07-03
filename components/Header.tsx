import Link from "next/link";

export default function Header() {
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
      <div className="mx-auto flex h-32 max-w-[1600px] items-center justify-between px-10">
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://i.ibb.co/TM62mjgf/file-000000000320720ea667cf785ae277a9.png"
            alt="Imobiliária Jardim Ingá"
            className="h-auto w-[340px] transition duration-300 hover:scale-105"
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
          className="rounded-xl bg-[#214D2F] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#183923] active:scale-95"
        >
          Falar com Corretor
        </a>
      </div>
    </header>
  );
}