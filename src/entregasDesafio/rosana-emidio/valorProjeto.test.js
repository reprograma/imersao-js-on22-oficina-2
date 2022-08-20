const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Calculo do valor total do projeto", ()=>{
    test("Calcular valor de um projeto com 4 funcionalidades no pacote intermediario", () =>{
        const funcionalidades = [
            "construcao_1_pagina",
            "integracao_api_propria",
            "otimizacao_seo",
            "responsividade"
        ]
        const valorHora = 9

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toEqual(605)
    })
    
    test("Calcular valor de um projeto com 2 funcionalidades no pacote basico", () =>{
        const duasFuncionalidades = [
            "setup",
            "formulario",
        ]
        const valorHora = 9

        expect(calcularValorTotalProjeto(duasFuncionalidades, valorHora)).toEqual(238)
    })

    test("Calcular valor de um projeto com todas funcionalidades no pacote premium", () =>{
        const funcionalidades = [
            "construcao_1_pagina",
            "integracao_api_propria",
            "otimizacao_seo",
            "responsividade",
            "setup",
            "formulario",
            "ssr",
            "integracao_mailchimp",
        ]
        const valorHora = 9

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toEqual(1404)
    })

    test("Validar se funcionalidades e valorHora estão definidos", () =>{
        const funcionalidades = [
            "integracao_api_propria",
        ]
        const valorHora = 9

        expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBeDefined()
    })

})