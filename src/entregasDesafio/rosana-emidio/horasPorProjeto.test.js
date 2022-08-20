const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo horas determinadas funcionalidades", () =>{
    test("Validando se a lista de funcionalidade está definida", ()=>{
        const listaFuncionalidadesTrabalhadas = ["responsividade", "otimizacao_seo", "ssr"]
        expect(listaFuncionalidadesTrabalhadas).toBeDefined()
    })
    test("Calculo 3 funcionalidades da lista", ()=>{
        const listaFuncionalidadesTrabalhadas = ["responsividade", "otimizacao_seo", "ssr"]
        const horasParaCriacaoAlgumasFuncionalidades = calcularHorasDeProjeto(listaFuncionalidadesTrabalhadas)
        expect(horasParaCriacaoAlgumasFuncionalidades).toBe(40)
    })

    test("Calcular horas de duas outras funcionalidades", () =>{
        const outrasDuasFuncionalidades = ["formulario", "integracao_api_propria"]
        const horasParaCriacaoMaisDuasFuncionalidades = calcularHorasDeProjeto(outrasDuasFuncionalidades)
        expect(horasParaCriacaoMaisDuasFuncionalidades).toBe(32)
    })

    test("Calcular todas funcionalidades", () =>{
        const calculoTodasFuncionalidades = [
            "responsividade",
            "otimizacao_seo",
            "ssr", 
            "formulario", 
            "integracao_api_propria",
            "setup",
            "construcao_1_pagina",
            "integracao_mailchimp"
        ];

        const tempoTotalFuncionalidades = calcularHorasDeProjeto(calculoTodasFuncionalidades)
        expect(tempoTotalFuncionalidades).toBe(104)
    })
})