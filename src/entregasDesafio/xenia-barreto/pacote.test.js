const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
  
describe("Calcular Pacote", () => {
    test("Pacote de todas funcionalidades", () => {
        const horas = 104

        expect(calcularPacote(horas)).toBe("pacote_premium")
    });

    test("Pacote duas funcionalidades", () => {
        const horas = 32

        expect(calcularPacote(horas)).toBe("pacote_basico")
    });

    test("Pacote cinco funcionalidades", () => {
        const horas = 80

        expect(calcularPacote(horas)).toBe("pacote_intermediario")
    });

})