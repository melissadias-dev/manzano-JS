// Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
// Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
// pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
// valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
// é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 

let t1 = 1
let t2 = 1
let fibonacci = "1\n1\n"

for (let i = 3; i <= 15; i++) {
    let proximo = t1 + t2
    fibonacci += `${proximo}\n`
    t1 = t2
    t2 = proximo
}

alert(`Série de Fibonacci (15 termos):\n${fibonacci}`)