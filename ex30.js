// e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.
let somatorioFatoriais = 0
for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Digite o ${i}º valor inteiro:`))
    let fatorial = 1
    for (let j = 1; j <= valor; j++) {
        fatorial *= j
    }
    somatorioFatoriais += fatorial
}
alert(`O somatório das fatoriais dos 15 valores lidos é: ${somatorioFatoriais}`)