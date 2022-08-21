 const { calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');
 
 test('Qual o valor hora de um salario de 1500 reais ', () => {
   const  salario = 3000
   const valorHora = calcularValorPorHora(salario)
   expect(valorHora).toBe(18)
  })
  
  //metodo jest, o primeiro parametro é uma informação sobre o teste
  // segundo vai ser o teste