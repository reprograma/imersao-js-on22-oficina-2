const { calcularHorasDeProjeto, calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular qual Pacote está contratado", () => {

    test("Verificar qual pacote é compaível", () => {
        const horasTrabalhadas = 40;
        expect(calcularPacote(horasTrabalhadas)).toBe("pacote_basico")
    })

    test("Verificar qual pacote é compaível", () => {
        const horasTrabalhadas = 100;
        expect(calcularPacote(horasTrabalhadas)).toBe("pacote_intermediario")
    })
    
    test("Verificar qual pacote é compaível", () => {
        const horasTrabalhadas = 190;
        expect(calcularPacote(horasTrabalhadas)).toBe("pacote_premium")
    })
})