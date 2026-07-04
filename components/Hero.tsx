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
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center lg:min-h-[650px] lg:grid-cols-2">
        <div className="z-10 px-5 py-10 sm:px-8 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <h1 className="max-w-[620px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#171717] sm:text-[50px] md:text-[58px] lg:text-[64px]">
            O seu novo lar
            <br />
            <span className="text-[#214D2F]">te espera aqui.</span>
          </h1>

          <div className="mt-6 h-[3px] w-24 rounded-full bg-[#C79A2E] md:mt-7 md:w-28" />

          <p className="mt-6 max-w-[520px] text-[17px] leading-8 text-[#292929] md:mt-8 md:text-[21px] md:leading-[1.55]">
            Casas de qualidade, com segurança e o melhor custo-benefício nas
            Faixas 1 e 2 do Jardim Ingá.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-12 md:gap-8 lg:gap-10">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 sm:block"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
                />

                <div>
                  <h3 className="text-[17px] font-semibold leading-tight text-[#1F3E2D] sm:mt-4 md:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-6 text-[#666] md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.zapimoveis.com.br/imobiliaria/849619/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full justify-center rounded-xl bg-[#214D2F] px-7 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#183923] hover:shadow-xl active:scale-95 sm:w-auto md:mt-10 md:px-8"
          >
            Ver imóveis disponíveis
          </a>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[650px]">
          <img
            src="https://i.ibb.co/B53S4WGq/1783081920557.png"
            alt="Família feliz"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAF8F2] to-transparent lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[48%] lg:bg-gradient-to-r lg:from-[#FAF8F2] lg:via-[#FAF8F2]/80 lg:to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-2xl sm:left-auto sm:right-8 sm:max-w-[320px] sm:px-7 sm:py-5 lg:bottom-24 lg:right-16 lg:px-8 lg:py-6">
            <p className="text-base font-semibold text-[#1D1D1D] lg:text-lg">
              Mais de 150 famílias
            </p>

            <p className="text-base text-[#1D1D1D] lg:text-lg">
              já realizaram o sonho!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}