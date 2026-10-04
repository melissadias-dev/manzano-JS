// f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.
let somatorioF = 0
let totalValoresF = 0
let valorF = parseFloat(prompt("Digite um valor numérico positivo (ou um valor negativo para encerrar):"))

while (valorF >= 0) {
    somatorioF += valorF
    totalValoresF++
    valorF = parseFloat(prompt("Digite um valor numérico positivo (ou um valor negativo para encerrar):"))
}

if (totalValoresF > 0) {
    let mediaF = somatorioF / totalValoresF
    alert(`Total do somatório: ${somatorioF}\nMédia aritmética: ${mediaF.toFixed(2)}\nTotal de valores lidos: ${totalValoresF}`)
} else {
    alert("Nenhum valor positivo foi informado. Não é possível calcular a média.")
}