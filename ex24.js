// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.
let areaTotal = 0
let continuar = "SIM"
while (continuar.toUpperCase() !== "NAO") {
    let nomeComodo = prompt("Digite o nome do cômodo:")
    let largura = parseFloat(prompt("Digite a largura do cômodo:"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo:"))
    let areaComodo = largura * comprimento
    areaTotal += areaComodo
    alert(`A área do(a) ${nomeComodo} é: ${areaComodo.toFixed(2)} m²`)
    continuar = prompt("Deseja continuar calculando novos cômodos? (SIM / NAO)")
}
alert(`O valor total acumulado da área residencial é: ${areaTotal.toFixed(2)} m²`)