export default function Hero() {
  const benefits = [
    {
      icon: "https://i.ibb.co/bR5jNWFs/file-000000001b1071f5a1772f529bdc365c.png",
      title: "Bairros tranquilos",
      text: "e com segurança",
    },
    {
      icon: "https://i.ibb.co/4ZPpnHmQ/file-0000000034fc720eb3158e101045fd88.png",
      title: "Preços que cabem",
      text: "no seu bolso",
    },
    {
      icon: "https://i.ibb.co/kC7p2c3/file-000000002da8720ebf9f53e9a588120a.png",
      title: "Casas prontas",
      text: "para sua família",
    },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#FAF8F2]">
      <div className="mx-auto grid min-h-[650px] max-w-[1500px] grid-cols-1 items-center lg:grid-cols-2">

        <div className="z-10 px-10 py-16 lg:px-14">

          <h1 className="max-w-[620px] text-[64px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#171717]">
            O seu novo lar
            <br />
            <span className="text-[#214D2F]">
              te espera aqui.
            </span>
          </h1>

          <div className="mt-7 h-[3px] w-28 rounded-full bg-[#C79A2E]" />

          <p className="mt-8 max-w-[520px] text-[21px] leading-[1.55] text-[#292929]">
            Casas de qualidade, com segurança e o melhor custo-benefício nas
            Faixas 1 e 2 do Jardim Ingá.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-10">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />

                <h3 className="mt-4 text-[20px] font-semibold text-[#1F3E2D] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-1 text-[15px] leading-6 text-[#666]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          <a
            href="#imoveis"
            className="mt-10 inline-flex rounded-xl bg-[#214D2F] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#183923] hover:shadow-xl active:scale-95"
          >
            Ver imóveis disponíveis
          </a>

        </div>

        <div className="relative h-[650px]">

          <img
            src="https://i.ibb.co/B53S4WGq/1783081920557.png"
            alt="Família feliz"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-[#FAF8F2] via-[#FAF8F2]/80 to-transparent" />

          <div className="absolute bottom-24 right-16 rounded-2xl bg-white px-8 py-6 shadow-2xl">
            <p className="text-lg font-semibold text-[#1D1D1D]">
              Mais de 150 famílias
            </p>

            <p className="text-lg text-[#1D1D1D]">
              já realizaram o sonho!
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}