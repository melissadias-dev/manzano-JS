// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
// PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).

let valor = parseFloat(prompt("Digite o valor original da prestação:"))
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"))
let tempo = parseFloat(prompt("Digite o tempo em atraso (meses/dias):"))

let prestacao = valor + (valor * taxa / 100) * tempo

alert(`O valor atualizado da prestação em atraso é: R$ ${prestacao.toFixed(2)}`)