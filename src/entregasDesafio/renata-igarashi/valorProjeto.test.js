 const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");
const { calcularValorBaseProjeto, calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

const rendaMensal = 2500;
const valorPorHora = calcularValorPorHora(rendaMensal);
const listaDeFuncionalidades = [
  "integracao_mailchimp",
  "ssr",
  "integracao_api_propria",
];
const totalHorasProjeto = calcularHorasDeProjeto(listaDeFuncionalidades);


describe("Valores do Projeto", () => {
  test("Deve calcular o valor Base do projeto", () => {
    const result = calcularValorBaseProjeto(totalHorasProjeto, valorPorHora);
    expect(result).toBe(600);
  });

  test("Deve calcular o valor Total do projeto", () => {
   const valorTotalDoProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorPorHora)
   expect(valorTotalDoProjeto).toBe(660)
  });

  test('Deve calcular o valor do projeto no pacote básico ', () => {
    const funcionalidadesContratadas = [
      "setup",
      "formulario",
      "responsividade",
    ];
    const valorTotalDoProjeto = calcularValorTotalProjeto(funcionalidadesContratadas, valorPorHora)
    expect(valorTotalDoProjeto).toBe(660)
  })

  test('Deve calcular o valor do projeto no pacote intermediario ', () => {
    const funcionalidadesContratadas = [
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const valorTotalDoProjeto = calcularValorTotalProjeto(funcionalidadesContratadas, valorPorHora)
    expect(valorTotalDoProjeto).toBe(1152)
  })

  test('Deve calcular o valor do projeto no pacote premium ', () => {
    const funcionalidadesContratadas = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const valorTotalDoProjeto = calcularValorTotalProjeto(funcionalidadesContratadas, valorPorHora)
    expect(valorTotalDoProjeto).toBe(2340)
  })
});
