// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
// multiplicação e apresentar doze resultados de saída

let A = parseInt(prompt("Digite o valor de A:"))
let B = parseInt(prompt("Digite o valor de B:"))
let C = parseInt(prompt("Digite o valor de C:"))
let D = parseInt(prompt("Digite o valor de D:"))

let somaAB = A + B
let somaAC = A + C
let somaAD = A + D
let somaBC = B + C
let somaBD = B + D
let somaCD = C + D

let multAB = A * B
let multAC = A * C
let multAD = A * D
let multBC = B * C
let multBD = B * D
let multCD = C * D

alert(`Resultados das Adições:
A + B = ${somaAB}
A + C = ${somaAC}
A + D = ${somaAD}
B + C = ${somaBC}
B + D = ${somaBD}
C + D = ${somaCD}

Resultados das Multiplicações:
A * B = ${multAB}
A * C = ${multAC}
A * D = ${multAD}
B * C = ${multBC}
B * D = ${multBD}
C * D = ${multCD}`)