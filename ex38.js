// c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
let somaC = 0
for (let i = 1; i <= 100; i++) {
    somaC += i
}
alert(`O total da soma dos cem primeiros números inteiros é: ${somaC}`)