const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular Pacote', () => {
  test('Projeto por pacote', () => {
    const horas = 200
    expect(calcularPacote(horas)).toBe('pacote_premium')
  })

  test('Projeto por pacote', () => {
    const horas = 20
    expect(calcularPacote(horas)).not.toBe('pacote_premium')
  })

  test('Projeto por pacote', () => {
    const horas = 100
    expect(calcularPacote(horas)).toBe('pacote_intermediario')
  }) 
  
  test('Projeto por pacote', () => {
    const horas = 40
    expect(calcularPacote(horas)).toBe('pacote_basico')
  })

  test('Projeto por pacote', () => {
    const horas = 200
    expect(calcularPacote(horas)).not.toBe('pacote_basico')
  })
  
})

