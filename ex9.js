// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
// segundo.

let A = parseInt(prompt("Digite o valor de A:"))
let B = parseInt(prompt("Digite o valor de B:"))

let resultado = (A - B) ** 2

alert(`O quadrado da diferença entre ${A} e ${B} é: ${resultado}`)