import Link from "next/link";

export default function DiferenciaisPage() {
  const whatsapp =
    "https://wa.me/556191010505?text=Olá!%20Gostaria%20de%20receber%20atendimento%20e%20conhecer%20os%20imóveis%20disponíveis.";

  const diferenciais = [
    {
      titulo: "Atendimento Humanizado",
      texto:
        "Cada cliente recebe um atendimento personalizado, com atenção às suas necessidades e objetivos antes da escolha do imóvel.",
    },
    {
      titulo: "Avaliação de Imóveis",
      texto:
        "Auxiliamos proprietários na avaliação de seus imóveis com base no mercado da região e nas características de cada imóvel.",
    },
    {
      titulo: "Segurança em Todo o Processo",
      texto:
        "Acompanhamos todas as etapas da negociação, oferecendo mais tranquilidade durante a compra ou venda do imóvel.",
    },
    {
      titulo: "Conhecimento da Região",
      texto:
        "Nossa equipe conhece profundamente o Jardim Ingá e os principais bairros da região, facilitando a busca pelo imóvel ideal.",
    },
    {
      titulo: "Transparência",
      texto:
        "Prezamos pela clareza nas informações e por um relacionamento baseado na confiança e no respeito aos nossos clientes.",
    },
    {
      titulo: "Compromisso com Você",
      texto:
        "Nosso objetivo é encontrar a melhor oportunidade para cada cliente, sempre com dedicação, responsabilidade e profissionalismo.",
    },
  ];

  return (
    <main className="bg-[#FAF8F2] min-h-screen">

      <section className="max-w-[1300px] mx-auto px-8 py-20">

        <p className="uppercase tracking-[4px] text-[#C79A2E] font-semibold">
          Diferenciais
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-[#183D24]">
          Por que escolher a Imobiliária Jardim Ingá?
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Trabalhamos para oferecer uma experiência segura, transparente e
          personalizada em todas as etapas da compra, venda e avaliação de
          imóveis.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {diferenciais.map((item) => (
            <div
              key={item.titulo}
              className="rounded-3xl bg-white p-8 shadow-md border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-[#183D24]">
                {item.titulo}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] bg-[#183D24] px-10 py-14 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-extrabold">
            Ainda está procurando o imóvel ideal?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Nossa equipe está pronta para ajudar você a encontrar a melhor
            oportunidade no Jardim Ingá e região.

            Atendemos compradores, vendedores e proprietários com atendimento
            humanizado, transparência e segurança durante todo o processo.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl bg-[#C79A2E] px-8 py-4 font-semibold text-white transition hover:brightness-110"
          >
            Conversar pelo WhatsApp
          </a>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="font-semibold text-[#183D24] hover:text-[#C79A2E]"
          >
            ← Voltar para a página inicial
          </Link>
        </div>

      </section>

    </main>
  );
}