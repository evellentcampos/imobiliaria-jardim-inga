export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#FAF8F2] px-10 py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-16 rounded-[32px] bg-white px-12 py-16 shadow-sm lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[28px] border-2 border-[#C79A2E]/40" />

            <img
              src="https://i.ibb.co/KjvBKqrC/file-000000009490720ebf0d2958dc67b298.png"
              alt="Atendimento da Imobiliária Jardim Ingá"
              className="relative z-10 h-[460px] w-full rounded-[28px] object-cover shadow-xl"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C79A2E]">
              Sobre nós
            </p>

            <h2 className="mt-5 max-w-[620px] text-5xl font-extrabold leading-tight text-[#183D24]">
              Há 17 anos ajudando famílias a conquistarem o imóvel ideal.
            </h2>

            <div className="mt-7 h-[3px] w-24 rounded-full bg-[#C79A2E]" />

            <p className="mt-8 max-w-[650px] text-[18px] leading-9 text-[#555]">
              A Imobiliária Jardim Ingá atua com atendimento humanizado,
              transparência e segurança em cada negociação. Nossa missão é
              acompanhar cada cliente com responsabilidade, desde o primeiro
              contato até a realização do sonho da casa própria.
            </p>

            <div className="mt-12 grid max-w-[620px] grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">17+</h3>
                <p className="mt-2 text-sm text-[#666]">anos de experiência</p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">150+</h3>
                <p className="mt-2 text-sm text-[#666]">famílias atendidas</p>
              </div>

              <div className="rounded-2xl bg-[#FAF8F2] p-6 text-center">
                <h3 className="text-4xl font-extrabold text-[#214D2F]">100%</h3>
                <p className="mt-2 text-sm text-[#666]">atendimento próximo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}