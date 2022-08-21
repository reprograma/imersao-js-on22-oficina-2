const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe("Cálculos para valores de projeto", () => {
    test("Total de horas trabalhadas no projeto", () => {
        const funcionalidadesTrabalhadasPorProjeto = [
            "responsividade",
            "otimizacao_seo",
            "ssr",
        ]
        
        const valorHora = 50

        expect(calcularValorTotalProjeto(funcionalidadesTrabalhadasPorProjeto, valorHora)).toBe(1000)
    })
})

describe("Verificação de itens do projeto", () => {
    test("Itens trabalhados por projeto", () => {
        const funcionalidadesTrabalhadasPorProjeto = [
            "integracao_mailchimp", 
            "setup",
            "ssr"
        ]

        expect(funcionalidadesTrabalhadasPorProjeto).toContain("ssr")
    })
})