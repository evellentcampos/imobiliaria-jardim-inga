export default function FeaturedProperties() {
  const zapAllLink = "https://www.zapimoveis.com.br/imobiliaria/849619/";

  const icons = {
    bed: "https://i.ibb.co/cX1mS4bW/file-00000000c67c720e9697945e58e87102.png",
    shower: "https://i.ibb.co/TBpbcf6k/file-0000000030d0720e9ca52e66c1cd8bae.png",
    garage: "https://i.ibb.co/ym5rLvFR/file-00000000a2f4720e87956e3cff1f3a42.png",
  };

  const properties = [
    {
      tag: "Destaque",
      title: "Apartamento com 2 Quartos",
      location: "Parque Estrela Dalva IX",
      price: "R$ 120.000",
      image: "https://i.ibb.co/fY1NRGM0/Screenshot-20260703-121943-Samsung-Internet.jpg",
      link: "https://www.zapimoveis.com.br/imovel/venda-apartamento-2-quartos-parque-estrela-dalva-ix-luziania-go-45m2-id-2890988225/?source=ranking%2Crp",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
    },
    {
      tag: "Destaque",
      title: "Apartamento com 2 Quartos",
      location: "Parque Estrela Dalva IX e X",
      price: "R$ 135.000",
      image: "https://i.ibb.co/bRDMdm5D/Screenshot-20260703-122110-Samsung-Internet.jpg",
      link: "https://www.zapimoveis.com.br/imovel/venda-apartamento-2-quartos-parque-estrela-dalva-ix-e-x-luziania-go-65m2-id-2892973675/?source=ranking%2Crp",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
    },
    {
      tag: "Destaque",
      title: "Apartamento com 3 Quartos",
      location: "Parque Estrela Dalva IX e X",
      price: "R$ 180.000",
      image: "https://i.ibb.co/LzNGm4T3/20260706-163734-582.jpg",
      link: "https://www.zapimoveis.com.br/imovel/venda-apartamento-3-quartos-parque-estrela-dalva-ix-e-x-luziania-go-80m2-id-2897486909/?preview=true",
      quartos: 3,
      banheiros: 1,
      vagas: 1,
    },
    {
      tag: "Destaque",
      title: "Apartamento com 1 Quarto",
      location: "Jardim do Ingá",
      price: "R$ 165.000",
      image: "https://i.ibb.co/jvCvTcYV/file-00000000500871f5bf9bdc5ddb390b76.png",
      link: "https://www.zapimoveis.com.br/imovel/venda-apartamento-1-quarto-jardim-do-inga-luziania-go-360m2-id-2865340082/?source=ranking%2Crp",
      quartos: 1,
      banheiros: 1,
      vagas: "-",
    },
    {
      tag: "Destaque",
      title: "Apartamento com 2 Quartos",
      location: "Parque Estrela",
      price: "R$ 120.000",
      image: "https://i.ibb.co/tnJfhyZ/Screenshot-20260703-125023-Samsung-Internet.jpg",
      link: "https://www.zapimoveis.com.br/imovel/venda-apartamento-2-quartos-parque-estrela-dalva-ix-e-x-luziania-go-65m2-id-2893029939/?source=ranking%2Crp",
      quartos: 2,
      banheiros: 1,
      vagas: 1,
    },
  ];

  return (
    <section id="imoveis" className="bg-[#FAF8F2] px-10 py-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-[#183D24]">
            Encontre sua casa
          </h2>

          <p className="mt-2 text-lg text-[#555]">
            Imóveis em destaque selecionados para você.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <a
              key={property.link}
              href={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-lg bg-[#C79A2E] px-4 py-2 text-xs font-bold uppercase text-white">
                  {property.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#666]">{property.location}</p>

                <h3 className="mt-2 text-xl font-bold text-[#171717]">
                  {property.title}
                </h3>

                <p className="mt-3 text-2xl font-extrabold text-[#183D24]">
                  {property.price}
                </p>

                <div className="mt-5 flex items-center gap-5 text-sm font-semibold text-[#333]">
                  <span className="flex items-center gap-2">
                    <img src={icons.bed} alt="Quartos" className="h-5 w-5" />
                    {property.quartos}
                  </span>

                  <span className="flex items-center gap-2">
                    <img src={icons.shower} alt="Banheiros" className="h-5 w-5" />
                    {property.banheiros}
                  </span>

                  <span className="flex items-center gap-2">
                    <img src={icons.garage} alt="Vagas" className="h-5 w-5" />
                    {property.vagas}
                  </span>
                </div>
              </div>
            </a>
          ))}

          <a
            href={zapAllLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-[#D8CCB4] bg-[#214D2F] p-10 text-center text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-[#183923] hover:shadow-2xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D8B04C]">
              Catálogo completo
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              Ver todas as opções
            </h3>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-white/80">
              Confira todos os imóveis disponíveis da Imobiliária Jardim Ingá no
              ZAP.
            </p>

            <span className="mt-8 rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase text-[#214D2F] transition group-hover:scale-105">
              Acessar imóveis
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}