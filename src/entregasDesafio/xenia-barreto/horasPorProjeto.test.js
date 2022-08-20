const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calculo horas trabalhadas para determinadas funcionalidades", () => {
    test("Cálculo 3 funcionalidades da lista", () => {
        const listaFuncionalidadesTrabalhadas = ["responsividade", "otimizacao_seo", "ssr"]
        const horasParaCriacaoAlgumasFuncionalidades = calcularHorasDeProjeto(listaFuncionalidadesTrabalhadas)

        expect(horasParaCriacaoAlgumasFuncionalidades).toBe(40)
    })

    test("Calcular horas de duas outras funcionalidades", () => {
        const outrasDuasFuncionalidades = ["formulario","integracao_api_propria"]
        const horasParaCriacaoMaisDuasFuncionalidades = calcularHorasDeProjeto(outrasDuasFuncionalidades)

        expect(horasParaCriacaoMaisDuasFuncionalidades).toBe(32)
    })

})
