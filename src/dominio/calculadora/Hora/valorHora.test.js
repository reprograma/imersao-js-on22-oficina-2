const {calcularValorPorHora} = require("./valorHora");

test("Esse teste é uma soma de 1 + 1 ", () =>{
    expect(1 + 1).toBe(2)
});


test("Teste se 2 * 2 = 4", () =>{
    expect(2 * 2).not.toBe(8)
});

const listaDeCompras = [
    "fralfas",
    "sabonete",
    "saco de lixo",
    "leite",
    "carne"
]

test("Verifica se existe leite na minha lista ", () => {
    expect(listaDeCompras).toContain("leite")
});

//testar se a funcao calcular valor hora
test("Qual valor hora, de um salário de 1500", () => {
    const salario = 1500
    const valorHora = calcularValorPorHora(salario)
    const resultado = 9
    console.log(valorHora)

    expect(valorHora).toBe(resultado)
})