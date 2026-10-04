// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Volume *Raio * Altura

let raio = parseFloat(prompt("Digite o raio da lata de óleo:"))
let altura = parseFloat(prompt("Digite a altura da lata de óleo:"))

let volume = 3.14159 * (raio ** 2) * altura

alert(`O volume da lata de óleo é: ${volume.toFixed(2)}`)