"use client";

import { useState } from "react";

type Answers = {
  renda: string;
  entrada: string;
  nomeLimpo: string;
  trabalho: string;
};

const questions = [
  {
    field: "renda",
    title: "Qual é a renda da sua família?",
    options: [
      ["ate-2000", "Até R$ 2.000"],
      ["2000-3000", "R$ 2.000 a R$ 3.000"],
      ["3000-4500", "R$ 3.000 a R$ 4.500"],
      ["4500+", "Acima de R$ 4.500"],
    ],
  },
  {
    field: "entrada",
    title: "Você tem algum valor para dar de entrada?",
    options: [
      ["nao", "Ainda não"],
      ["5000", "Até R$ 5.000"],
      ["10000", "Até R$ 10.000"],
      ["20000", "Acima de R$ 20.000"],
    ],
  },
  {
    field: "nomeLimpo",
    title: "Seu nome está limpo?",
    options: [
      ["sim", "Sim"],
      ["nao", "Não"],
      ["nao-sei", "Não sei"],
    ],
  },
  {
    field: "trabalho",
    title: "Você trabalha atualmente?",
    options: [
      ["sim", "Sim"],
      ["autonomo", "Sou autônomo(a) ou MEI"],
      ["nao", "Não no momento"],
    ],
  },
] as const;

export default function SimulacaoPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<Answers>({
    renda: "",
    entrada: "",
    nomeLimpo: "",
    trabalho: "",
  });

  function handleAnswer(field: keyof Answers, value: string) {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(questions.length);
      }, 1800);
    }
  }

  function calculateResult() {
    let value = 115000;
    let parcela = 600;

    if (answers.renda === "2000-3000") {
      value += 20000;
      parcela += 100;
    }

    if (answers.renda === "3000-4500") {
      value += 45000;
      parcela += 220;
    }

    if (answers.renda === "4500+") {
      value += 70000;
      parcela += 350;
    }

    if (answers.entrada === "5000") value += 8000;
    if (answers.entrada === "10000") value += 15000;
    if (answers.entrada === "20000") value += 25000;

    if (answers.nomeLimpo === "sim") value += 12000;
    if (answers.trabalho === "sim") value += 10000;
    if (answers.trabalho === "autonomo") value += 5000;

    return { value, parcela };
  }

  const result = calculateResult();

  const whatsappMessage = `Olá! Fiz a pré-análise no site da Imobiliária Jardim Ingá e gostaria de falar com um especialista.

Resultado estimado:
Imóvel de até R$ ${result.value.toLocaleString("pt-BR")}
Parcelas a partir de R$ ${result.parcela.toLocaleString("pt-BR")}/mês.`;

  const whatsappLink = `https://wa.me/556191010505?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const currentQuestion = questions[step];

  return (
    <main className="min-h-screen bg-[#FAF8F2] px-4 py-6 sm:px-5 sm:py-10">
      <section className="mx-auto flex min-h-[560px] max-w-3xl items-center justify-center rounded-[24px] bg-white p-5 shadow-xl sm:min-h-[620px] sm:rounded-[32px] sm:p-6 md:p-12">
        {loading ? (
          <div className="text-center">
            <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-[#C79A2E] border-t-transparent" />

            <h1 className="mt-8 text-2xl font-extrabold text-[#183D24] sm:text-3xl">
              Analisando suas respostas...
            </h1>

            <p className="mt-4 text-[#666]">
              Estamos calculando uma estimativa inicial para você.
            </p>
          </div>
        ) : step < questions.length ? (
          <div className="w-full">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C79A2E] sm:text-sm sm:tracking-[0.3em]">
              Pergunta {step + 1} de {questions.length}
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#EFE8D8]">
              <div
                className="h-full rounded-full bg-[#214D2F] transition-all"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h1 className="mt-8 text-3xl font-extrabold leading-tight text-[#183D24] sm:text-4xl">
              {currentQuestion.title}
            </h1>

            <div className="mt-8 grid gap-4">
              {currentQuestion.options.map(([value, label]) => (
                <button
                  key={value}
                  onClick={() =>
                    handleAnswer(currentQuestion.field as keyof Answers, value)
                  }
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left text-base font-semibold text-[#333] transition hover:border-[#214D2F] hover:bg-[#FAF8F2] sm:px-6 sm:py-5 sm:text-lg"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C79A2E] sm:text-sm sm:tracking-[0.3em]">
              Resultado da pré-análise
            </p>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-[#183D24] sm:text-4xl">
              Você pode ter boas chances de comprar
            </h1>

            <div className="mt-6 rounded-3xl bg-[#FAF8F2] p-5 sm:mt-8 sm:p-8">
              <p className="text-base font-semibold text-[#555] sm:text-lg">
                Imóvel estimado de até
              </p>

              <p className="mt-2 text-4xl font-extrabold text-[#183D24] sm:text-5xl">
                R$ {result.value.toLocaleString("pt-BR")}
              </p>

              <p className="mt-5 text-base font-semibold text-[#555] sm:mt-6 sm:text-lg">
                Parcelas a partir de
              </p>

              <p className="mt-2 text-3xl font-extrabold text-[#C79A2E] sm:text-4xl">
                R$ {result.parcela.toLocaleString("pt-BR")}/mês
              </p>
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#666] sm:mt-6">
              Esta é uma estimativa inicial. A aprovação final depende da análise
              da Caixa Econômica Federal, renda, entrada, documentação e
              condições do imóvel.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-xl bg-[#214D2F] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#183923] sm:px-8 md:w-[360px]"
              >
                Falar com Especialista
              </a>

              <button
                onClick={() => {
                  setStep(0);
                  setAnswers({
                    renda: "",
                    entrada: "",
                    nomeLimpo: "",
                    trabalho: "",
                  });
                }}
                className="text-sm font-semibold text-[#183D24] transition hover:text-[#C79A2E]"
              >
                Refazer o questionário
              </button>

              <a
                href="/"
                className="text-sm font-semibold text-[#183D24] transition hover:text-[#C79A2E]"
              >
                ← Voltar ao início
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}