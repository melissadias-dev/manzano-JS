// Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.
let somatorioJ = 0
let quantidadeJ = 0
for (let i = 50; i <= 70; i++) {
    if (i % 2 === 0) {
        somatorioJ += i
        quantidadeJ++
    }
}
let mediaJ = somatorioJ / quantidadeJ
alert(`Soma dos pares: ${somatorioJ}\nMédia aritmética dos pares: ${mediaJ}`)