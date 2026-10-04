// d) Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior... até atingir o sexagésimo quarto (64º) quadro. Utilize variáveis do tipo real como acumuladores.
let totalGraos = 0
let graosQuadro = 1
for (let i = 1; i <= 64; i++) {
    totalGraos += graosQuadro
    graosQuadro *= 2
}
alert(`Somatório total de grãos de trigo no tabuleiro de xadrez: ${totalGraos}`)