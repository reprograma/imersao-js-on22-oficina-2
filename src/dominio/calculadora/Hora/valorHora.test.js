const  {calcularValorPorHora} = require('./valorHora');

test('1 + 1 = 2', () =>{
  expect(1 + 1).toBe(2)
})

test('testar se 2 * 2 = 4', () =>{
  expect(2 * 2).toBe(4)
})

const listaDeCompras = [
  "fraldas",
  "sabonete",
  "saco de lixo",
  "leite",
  "carne",
]

test('verificar se existe leite na lista', () => {
  expect(listaDeCompras).toContain("leite")
})

/**PARA TESTAR APENAS UM DOS TESTES, COLOCA test.only */
test('Qual valor hora, de um salário de 1500', () => {
  const salario = 1500
  const valorHora = calcularValorPorHora(salario)
  const resultado = 9

  expect(valorHora).toBe(resultado)
})

/** O comando a seguir, gera o teste automático, criando uma pasta para demonstrando no html e no terminal npm test -- --coverage src/dominio/calculadora/Hora/valorHora.test.js  */


/** Describe uma forma de criar um conjunto de test. */
describe('teste contas contas matemáticas', () => {
  test('10 + 10 = 20', () => {
    expect(10 + 10).toBe(20)
  })  
})