// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas.
let resultadoH = ""
for (let c = 10; c <= 100; c += 10) {
    let f = (9 * c + 160) / 5
    resultadoH += `${c}°C = ${f}°F\n`
}
alert(resultadoH)