// g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação (^).
let resultadoG = ""
let potenciaG = 1
for (let i = 0; i <= 15; i++) {
    resultadoG += `3 ^ ${i} = ${potenciaG}\n`
    potenciaG = potenciaG * 3
}
alert(resultadoG)