// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
// considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
// neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

let resultadoE = ""
let potencia = 1
for (let i = 0; i <= 15; i++) {
    resultadoE += `3 ^ ${i} = ${potencia}\n`
    potencia = potencia * 3
}
alert(resultadoE)