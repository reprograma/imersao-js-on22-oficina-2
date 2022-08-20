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

test("Verifica se existe leite na minha lista ", () =>{
    expect(listaDeCompras).toContain("leite")
});

