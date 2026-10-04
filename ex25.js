// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
let maior = null
let menor = null
let valor = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"))

while (valor >= 0) {
    if (maior === null || valor > maior) {
        maior = valor
    }
    if (menor === null || valor < menor) {
        menor = valor
    }
    valor = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"))
}

if (maior !== null) {
    alert(`Maior valor informado: ${maior}\nMenor valor informado: ${menor}`)
} else {
    alert("Nenhum valor positivo válido foi informado.")
}