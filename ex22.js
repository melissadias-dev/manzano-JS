// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.
let somatorioI = 0
for (let i = 1; i <= 10; i++) {
    let valor = parseFloat(prompt(`Digite o ${i}º valor:`))
    somatorioI += valor
}
let mediaI = somatorioI / 10
alert(`Somatório: ${somatorioI}\nMédia aritmética: ${mediaI}`)