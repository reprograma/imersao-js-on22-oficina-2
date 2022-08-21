    const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

    describe("Cálculo de horas trabalhadas para determinadas funcionalidades", () => {
        test("Cálculo das 3 funcionalidades da lista", () => {
            const listaFuncionalidadesTrabalhadas = ["responsividade", "otimizacao_seo", "ssr"]
            const horasParaCriacaoDeAlgumasFuncionalidades= calcularHorasDeProjeto(listaFuncionalidadesTrabalhadas)
            expect(horasParaCriacaoDeAlgumasFuncionalidades).toBe(40)
        })

        test("Calcular as horas para 2 outras funcionalidades", () => {
            const outas2FuncionalidadesTrabalhadas = ["formulario","integracao_api_propria"]
            const horasParaCriacaoMais2FuncionalidadesTrabalhadas = calcularHorasDeProjeto(outas2FuncionalidadesTrabalhadas)
            expect(horasParaCriacaoMais2FuncionalidadesTrabalhadas).toBe(32)
        })
        
        test("Calcular todas as horas trabalhadas nas funcionalidades", () => {
            const calculoTodasFuncionalidades = [
                "setup",
                "formulario",
                "responsividade",
                "otimizacao_seo",
                "construcao_1_pagina",
                "integracao_mailchimp",
                "ssr",
                "integracao_api_propria"
            ]
            const tempoTotalTodasFuncionalidades = calcularHorasDeProjeto(calculoTodasFuncionalidades)
            expect(tempoTotalTodasFuncionalidades).toBe(104)
        })
    })