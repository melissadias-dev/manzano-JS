// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
// real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
// com o usuário, para que seja apresentado o valor em moeda americana

let cotacaoDolar = parseFloat(prompt("Digite a cotação atual do dólar:"))
let quantidadeReais = parseFloat(prompt("Digite a quantidade de reais disponível:"))

let valorEmDolares = quantidadeReais / cotacaoDolar

alert(`O valor correspondente em dólares é: US$ ${valorEmDolares.toFixed(2)}`)