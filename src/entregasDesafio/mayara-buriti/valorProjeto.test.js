const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

test('Valor total do projeto de 50h com taxa de 10%', () => {
    const listaDeFuncionalidades = [
      'setup',
      'formulario',
      'responsividade'
    ]
    const valorHora = 9
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(396)
})

test('Valor total do projeto de 100h com taxa de 12%', () => {
  const listaDeFuncionalidades = [
    'responsividade',
    'otimizacao_seo',
    'construcao_1_pagina',
    'integracao_mailchimp',
    'ssr',
    'integracao_api_propria'
  ]
  const valorHora = 9
  expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(864)
})

test('Valor total do projeto de 200h com taxa de 15%', () => {
  const listaDeFuncionalidades = [
    'setup',
    'formulario',
    'responsividade',
    'otimizacao_seo',
    'construcao_1_pagina',
    'integracao_mailchimp',
    'ssr',
    'integracao_api_propria'
  ]
  const valorHora = 9
  expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(1404)
})

describe('Testar valores errados de acordo com cada porcentagem de progeto', () =>{
  test('Valor total do projeto de 50h com taxa de 10%', () => {
    const listaDeFuncionalidades = [
      'setup',
      'formulario',
      'responsividade'
    ]
    const valorHora = 10
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).not.toBe(410)
})

test('Valor total do projeto de 100h com taxa de 12%', () => {
  const listaDeFuncionalidades = [
    'responsividade',
    'otimizacao_seo',
    'construcao_1_pagina',
    'integracao_mailchimp',
    'ssr',
    'integracao_api_propria'
  ]
  const valorHora = 10
  expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).not.toBe(920)
})

test('Valor total do projeto de 200h com taxa de 15%', () => {
  const listaDeFuncionalidades = [
    'setup',
    'formulario',
    'responsividade',
    'otimizacao_seo',
    'construcao_1_pagina',
    'integracao_mailchimp',
    'ssr',
    'integracao_api_propria'
  ]
  const valorHora = 10
  expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).not.toBe(1500)
})
})