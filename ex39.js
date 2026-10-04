// d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
let somatorioD = 0
for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
        somatorioD += i
    }
}
alert(`O somatório dos valores pares de 1 até 500 é: ${somatorioD}`)