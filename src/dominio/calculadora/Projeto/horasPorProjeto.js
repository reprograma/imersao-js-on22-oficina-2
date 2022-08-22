const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

// map metodo que percorre todos os itens de um array
// reduce, executa uma funcao reducer para cada elemento do array, resultado num unico valor de retorno
exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
