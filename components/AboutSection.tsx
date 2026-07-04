export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#FAF8F2] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-10 rounded-[32px] bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-16">

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[28px] border-2 border-[#C79A2E]/40 lg:-left-6 lg:-top-6" />

            <img
              src="https://i.ibb.co/KjvBKqrC/file-000000009490720ebf0d2958dc67b298.png"
              alt="Atendimento da Imobiliária Jardim Ingá"
              className="relative z-10 h-[260px] w-full rounded-[28px] object-cover shadow-xl md:h-[360px] lg:h-[460px]"
            />
          </div>

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C79A2E] md:text-sm">
              Sobre nós
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#183D24] md:text-5xl">
              Há 17 anos ajudando famílias a conquistarem o imóvel ideal.
            </h2>

            <div className="mt-6 h-[3px] w-24 rounded-full bg-[#C79A2E]" />

            <p className="mt-7 text-base leading-8 text-[#555] md:text-lg md:leading-9">
              A Imobiliária Jardim Ingá atua com atendimento humanizado,
              transparência e segurança em cada negociação. Nossa missão é
              acompanhar cada cliente com responsabilidade, desde o primeiro
              contato até a realização do sonho da casa própria.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">
                  17+
                </h3>

                <p className="mt-2 text-sm text-[#666]">
                  anos de experiência
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">
                  150+
                </h3>

                <p className="mt-2 text-sm text-[#666]">
                  famílias atendidas
                </p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">
                  100%
                </h3>

                <p className="mt-2 text-sm text-[#666]">
                  atendimento próximo
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}