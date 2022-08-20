const { calcularValorPorHora } = require("./valorHora");

test("testa ai 1 + 1 = 2", () => {
    expect(1 + 1).toBe(2)
})

test("testa se 2 * 2 = 4", () => {
    expect(2 * 2).toBe(5)
}) 

test.only("Qual valor hora, de um salário de 1500 ", () => {
    const salario = 1500
    const valorHora = calcularValorPorHora(salario)
    console.log(valorHora)
    const resultado = 9
    expect(valorHora).toBe(resultado)
})