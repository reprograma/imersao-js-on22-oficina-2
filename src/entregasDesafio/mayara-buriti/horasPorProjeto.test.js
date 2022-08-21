const {  calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calcular horas determinadas funcionalidades', () => {
  test('Calcular 3 funcionalidades da lista', () => {
    const listaFuncionalidadesTrabalhadas = [
      'responsividade',
      'otimizacao_seo',
      'ssr'
    ]
    const horasParaCriacao = calcularHorasDeProjeto(
      listaFuncionalidadesTrabalhadas
    )
    expect(horasParaCriacao).toBe(40)
  })

  test('Calcular horas de outras duas funcinalidades', () => {
    const outrasDuasFuncionalidades = ['formulario', 'integracao_api_propria']
    const horasParaCriacaoDois = calcularHorasDeProjeto(
      outrasDuasFuncionalidades
    )
    expect(horasParaCriacaoDois).toBe(32)
  })

  test('Calcular todas as funcionalidades', () => {
  const calculoTodasFuncionalidades = [
    'setup',
    'formulario',
    'responsividade',
    'otimizacao_seo',
    'construcao_1_pagina',
    'integracao_mailchimp',
    'ssr',
    'integracao_api_propria'
  ]

  const tempoTotalFuncionalidades = calcularHorasDeProjeto(calculoTodasFuncionalidades)
  expect(tempoTotalFuncionalidades).toBe(104)
})
})
