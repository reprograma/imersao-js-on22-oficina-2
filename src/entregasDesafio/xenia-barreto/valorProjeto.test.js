const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

//prova real = 40h x $9 x 1.1% = $396
describe("Calcular Valor Total Projeto Pacote Básico", () => {
    test("Total Projeto Pacote Básico", () => {
        const listaFuncionalidadesTrabalhadas = [
            "responsividade",
            "otimizacao_seo",
            "ssr",
          ];
        const valorHoras = 9


        expect(calcularValorTotalProjeto(listaFuncionalidadesTrabalhadas, valorHoras)).toBe(396)
    })
});

//prova real = 80h x $9 x 1.2% = $864
describe("Calcular Valor Total Projeto Pacote Intermediário", () => {
    test("Total Projeto Pacote Intermediário", () => {
        const listaFuncionalidadesTrabalhadas = [
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "integracao_mailchimp",
            "integracao_api_propria",
          ];
        const valorHoras = 9


        expect(calcularValorTotalProjeto(listaFuncionalidadesTrabalhadas, valorHoras)).toBe(864)
    })
});

//prova real = 104h x $9 x 1.5% = $1404
describe("Calcular Valor Total Projeto Pacote Premium", () => {
    test("Total Projeto Pacote Premium", () => {
        const listaFuncionalidadesTrabalhadas = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
          ];

        const valorHoras = 9


        expect(calcularValorTotalProjeto(listaFuncionalidadesTrabalhadas, valorHoras)).toBe(1404)
    })
});


