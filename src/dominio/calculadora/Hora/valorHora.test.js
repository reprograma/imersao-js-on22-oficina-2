 const { calcularValorPorHora} = require('./valorHora');

//metodo jest, o primeiro parametro é uma informação sobre o teste
// segundo vai ser o teste
test('1 + 1 = 2 ', () => {
  expect(1 + 1).toBe(2)
})

test('Testar se 2 * 2 é igual a 4', () => {
  expect(2 * 2).toBe(4)
})

const listDeCompras = ['frutas', 'arroz', 'feijao', 'farinha', 'legumes', 'leite']

test("verifica se existe leite na lista", () => {
  expect(listDeCompras).toContain('leite')
})

test('Qual o valor hora de um salario de 1500 reais ', () => {
  const  salario = 1500
  const valorHora = calcularValorPorHora(salario)
  console.log(valorHora)
  expect(valorHora).toBe(9)
  expect(calcularValorPorHora(1500)).toBe(9)
})

describe("Teste contas matemáticas", () => {
  test('Conta: 10 + 10 = 20', () => {
    expect(10+10).toBe(20)
  })
})

describe("Cadastro usuario", () => {
  test('Verifica se usuario adicionou cpf foi preenchido', () => {
    const cpf = '11122233344'
    expect(cpf).not.toBeNull()
  })
  test('Verifica se usuario adicionou nome', () => {
    const nome = 'Renata'
    expect(nome).not.toBeNull()
  })
})