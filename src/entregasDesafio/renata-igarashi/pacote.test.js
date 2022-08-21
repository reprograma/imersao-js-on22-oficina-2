const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('Calcular valores dos pacotes', () => {
  test('Pacote de todas funcionalidades', () => {
    const horas = 100

    expect(calcularPacote(horas)).toBe('pacote_intermediario')
  })

  test('Verificar se o pacote é pacote básico', () => {
    const horas = 50
    expect(calcularPacote(horas)).toBe('pacote_basico')
  })

  test('Verificar se o pacote é pacote premium', () => {
    const horas = 200
    expect(calcularPacote(horas)).toBe('pacote_premium')
  })

  test('Verificar se o pacote é pacote premium', () => {
    const horas = 200
    expect(calcularPacote(horas)).toBe('pacote_premium')
  })
})