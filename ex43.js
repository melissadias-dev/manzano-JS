// h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de B^E, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação (^).
let baseH = parseFloat(prompt("Digite a base:"))
let expoenteH = parseInt(prompt("Digite o expoente:"))
let resultadoH = 1

for (let i = 1; i <= expoenteH; i++) {
    resultadoH = resultadoH * baseH
}

alert(`${baseH} elevado a ${expoenteH} = ${resultadoH}`)