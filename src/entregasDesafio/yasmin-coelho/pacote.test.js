const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')
  
describe("Cálculos para valores de pacote", () => {
    test("Total de horas por pacote", () => {
        const horasPorPacote = 104

        expect(calcularPacote(horasPorPacote)).toBe("pacote_basico")
    })
})