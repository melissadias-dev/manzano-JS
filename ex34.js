// i) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
let maiorI = null
let menorI = null
let valorI = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"))

while (valorI >= 0) {
    if (maiorI === null || valorI > maiorI) {
        maiorI = valorI
    }
    if (menorI === null || valorI < menorI) {
        menorI = valorI
    }
    valorI = parseInt(prompt("Digite um valor inteiro positivo (ou um valor negativo para encerrar):"))
}

if (maiorI !== null) {
    alert(`Maior valor informado: ${maiorI}\nMenor valor informado: ${menorI}`)
} else {
    alert("Nenhum valor positivo válido foi informado.")
}