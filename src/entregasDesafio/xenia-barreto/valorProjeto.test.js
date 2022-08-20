const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

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

