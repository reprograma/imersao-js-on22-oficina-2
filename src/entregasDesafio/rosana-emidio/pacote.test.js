// calcular o maximo de horas do pacote
// testar em qual pacote eu me enquadro
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote.js')

describe("Calcular Pacote", () => {
    test("Pacote de todas funcionalidades", () =>{
        const horasTotal = 100

        expect(calcularPacote(horasTotal)).toBe("pacote_intermediario")
    })

    test("Pacote basico", () => {
        const horasTotal = 42
        expect(calcularPacote(horasTotal)).toBe("pacote_basico")
    })

    test ("Pacote premium", () =>{
        const horas  = 190
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })

 
})