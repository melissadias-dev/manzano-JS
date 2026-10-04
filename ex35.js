// j) Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.
let dividendo = parseInt(prompt("Digite o valor do dividendo:"))
let divisor = parseInt(prompt("Digite o valor do divisor:"))
let quociente = 0

if (divisor !== 0) {
    let resto = dividendo
    while (resto >= divisor) {
        resto -= divisor
        quociente++
    }
    alert(`O resultado inteiro da divisão (quociente) é: ${quociente}`)
} else {
    alert("Erro: Não é possível dividir por zero.")
}