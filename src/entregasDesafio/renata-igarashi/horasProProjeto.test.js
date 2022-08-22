const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas trabalhadas para determinadas funcionalidades ", () => {
  test("Calculo soma de hora de 3 funcionalidades da lista", () => {
    const listaDeFuncionalistadesTrabalhadas = [
      "responsividade",
      "otimizacao_seo",
      "ssr",
    ];
    
    const horasTrabalhadasNasFuncionalidadesSelecionadas = calcularHorasDeProjeto(listaDeFuncionalistadesTrabalhadas);

    expect(horasTrabalhadasNasFuncionalidadesSelecionadas).toBe(40);
  });

  test("Calculo da soma de horas trabalhadas de outras 2 funcionalidades", () => {
    const listaDeFuncionalistadesTrabalhadas = [
      "formulario",
      "integracao_api_propria",
    ];

    const horasTrabalhadasEmFuncionalidadesSelecionadas = calcularHorasDeProjeto(listaDeFuncionalistadesTrabalhadas);

    expect(horasTrabalhadasEmFuncionalidadesSelecionadas).toBe(32);
  });

  test("Calculo da soma de horas trabalhadas e todas as fucnionalistades", () => {
    const todasFuncionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const horasTrabalhadasTodasFuncionalidades = calcularHorasDeProjeto(todasFuncionalidades);
    expect(horasTrabalhadasTodasFuncionalidades).toBe(104);
  });
});
