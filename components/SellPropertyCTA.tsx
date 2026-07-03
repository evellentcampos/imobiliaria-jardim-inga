export default function SellPropertyCTA() {
  const whatsappLink =
    "https://wa.me/556191010505?text=Olá!%20Tenho%20um%20imóvel%20e%20gostaria%20de%20solicitar%20uma%20avaliação.";

  return (
    <section className="bg-[#FAF8F2] px-10 py-16">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[32px] bg-gradient-to-r from-[#102818] via-[#183D24] to-[#245832] px-12 pt-14 text-white shadow-2xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="pb-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D8B04C]">
              Avaliação de imóvel
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight lg:text-5xl">
              Está vendendo seu imóvel?
            </h2>

            <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/85">
              Fale com a Imobiliária Jardim Ingá e solicite uma avaliação para
              vender seu imóvel com segurança, boa apresentação e atendimento
              profissional.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-xl bg-[#D8B04C] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#183D24] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6C15A] hover:shadow-2xl active:scale-95"
            >
              Solicitar avaliação
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="https://i.ibb.co/W43xM0T8/file-0000000018c8720e954be6eacef43a33.png"
              alt="Consultora da Imobiliária Jardim Ingá"
              className="max-h-[440px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}