// Apresentar os quadrados dos números inteiros de 15 a 200.
let resultadoA = ""
for (let i = 15; i <= 200; i++) {
    resultadoA += `${i}² = ${i ** 2}\n`
}
alert(resultadoA)