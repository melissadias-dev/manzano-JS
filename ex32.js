// g) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.
let resultadoG = ""
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        let fatorial = 1
        for (let j = 1; j <= i; j++) {
            fatorial *= j
        }
        resultadoG += `Fatorial de ${i} = ${fatorial}\n`
    }
}
alert(`Fatoriais dos valores ímpares de 1 a 10:\n${resultadoG}`)