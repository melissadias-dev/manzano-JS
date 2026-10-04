// b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
let numeroB = parseInt(prompt("Digite um número para ver a tabuada:"))
let resultadoB = ""
for (let i = 1; i <= 10; i++) {
    resultadoB += `${numeroB} x ${i} = ${numeroB * i}\n`
}
alert(resultadoB)