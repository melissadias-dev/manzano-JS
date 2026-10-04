// f) Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.
let resultadoF = ""
let contadorF = 1
while (contadorF < 200) {
    if (contadorF % 4 === 0) {
        resultadoF += contadorF + "\n"
    }
    contadorF++
}
alert(`Números divisíveis por 4 menores que 200:\n${resultadoF}`)