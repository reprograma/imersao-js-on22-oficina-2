const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

test("1 + 1 = 2", () =>{
    expect(1 + 1).toBe(2)

})

test(" testa se 2 * 2 = 4", () => {
    expect( 2 * 2 ).toBe(4)
})

const listaDeCompras = [
    "fraldas",
    "sabonete",
    "saco de lixo",
    "leite",
    "carne",
];

test("verifica se existe leite na minha lista", () => {
    expect(listaDeCompras).toContain("leite")
})

test("Qual valor hora, de um salario de 1500", () => {
    const salario = 1500;
    const valorHora = calcularValorPorHora(salario)
    const resultado = 9
    expect(valorHora).toBe(resultado)
})

describe("Teste contas matemáticas", () => {
    test("10 + 10 =20", () =>{
        expect(10 + 10).toBe(20)
    })
})