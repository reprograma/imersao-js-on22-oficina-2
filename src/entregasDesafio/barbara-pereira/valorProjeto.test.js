const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")


describe("Calculo Valor Total de horas trabalhada", () => {  
        /* Calculo:
         * valor trabalhado por funcionalidades: ex todas as funcionalidades) = 104
         * multiplicar a quantidade de funcionalidades pelo valor da hora (104 * 9) = 156
         * multiplicar pela taxa do pacote (ex: pacote_premium de 15%): 156 * 1,5 = 1404
         */
    test("Valor recebido por trabalhar em todas as funcionalidades -> 104 horas - PACOTE PREMIUN", () => {
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria"
        ]
        const valorHoraTrabalhada = 9         
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHoraTrabalhada)).toBe(1076)
    })

    test("Valor recebido por trabalhar em 7 funcionalidades -> 96 horas- PACOTE INTERMEDIARIO", () => {
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "integracao_api_propria"
        ]
        const valorHoraTrabalhada = 9
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHoraTrabalhada)).toBe(968)
    })
    test("Valor recebido por trabalhar em 4 funcionalidades -> 56 horas - PACOTE INTERMEDIARIO", () => {
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
        ]
        const valorHoraTrabalhada = 9
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHoraTrabalhada)).toBe(564)
    })

    test("Valor recebido por trabalhar em 4 funcionalidades -> 48 horas - PACOTE BASICO", () => {
        const listaFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "ssr"
        ]
        const valorHoraTrabalhada = 9
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHoraTrabalhada)).toBe(475)
    })
    test("Valor recebido por trabalhar em 1 funcionalidades -> 16 horas - PACOTE BASICO", () => {
        const listaFuncionalidades = [
            "responsividade",
        ]
        const valorHoraTrabalhada = 9
        expect(calcularValorTotalProjeto(listaFuncionalidades, valorHoraTrabalhada)).toBe(158)
    })
})