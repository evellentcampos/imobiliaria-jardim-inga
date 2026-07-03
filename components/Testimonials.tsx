export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria S.",
      role: "Compradora",
      text: "Fui muito bem atendida desde o primeiro contato. A equipe me ajudou durante todo o processo da compra e tornou tudo muito mais tranquilo.",
    },
    {
      name: "João P.",
      role: "Comprador",
      text: "Excelente atendimento, profissionais muito prestativos e transparentes. Hoje estou realizando o sonho da casa própria.",
    },
    {
      name: "Ana C.",
      role: "Cliente",
      text: "Atendimento rápido, sempre disponíveis para esclarecer dúvidas. Recomendo a Imobiliária Jardim Ingá.",
    },
  ];

  return (
    <section className="bg-white py-20 px-10">
      <div className="max-w-[1500px] mx-auto">

        <div className="text-center mb-16">
          <div className="text-4xl text-[#C79A2E] tracking-[10px]">
            ★★★★★
          </div>

          <h2 className="mt-6 text-5xl font-extrabold text-[#183D24]">
            O que nossos clientes dizem
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            A confiança de nossos clientes é construída com atendimento
            transparente, dedicação e compromisso em cada negociação.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white shadow-lg border border-gray-100 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-[#C79A2E] text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-700 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8 border-t pt-5">
                <h4 className="font-bold text-xl text-[#183D24]">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.role}
                </p>
              </div>

              <div className="mt-6 h-1 w-full rounded-full bg-[#C79A2E]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}