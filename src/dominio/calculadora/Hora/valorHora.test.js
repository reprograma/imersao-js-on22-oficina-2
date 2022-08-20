const {calcularValorPorHora } = require("./valorHora");

// test("trala lala", () =>{
//     expect( 1 + 1 ).toBe(2)
// })

test(" testa se 2 * 2 = 4", () =>{
    expect( 2 * 2 ).not.toBe(8)
})

// const listaDeCompras = [
//     "fraldas",
//     "sabonete",
//     "saco de lixo",
//     "leite",
//     "carne",
// ];

// test("Verifica se existe leite na minha lista", () => {
//     expect(listaDeCompras).toContain("leite")
// })

// test("Qual o valor hora, de um salário de 1500", () => {
//     // const salario = 1500
//     // const valorHora = calcularValorPorHora(salario)
//     // const resultado = 9
//     // console.log(valorHora)
//     // expect(valorHora).toBe(resultado)
//     expect(calcularValorPorHora(1500)).toBe(9)
// })

describe("Teste contas matemáticas", () =>{
    test(" 10 + 10 = 20 teste de soma", () => {
        expect( 10 + 10 ).toBe(20)
    })
    test(" 10 * 10 = 100 teste de multiplicação", () =>{
        expect( 10 * 10).toBe(100)
    })
})