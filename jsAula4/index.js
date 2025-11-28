console.log('--------------atv1------------------')

const leia = require('readline-sync')


let salario = leia.questionFloat('Digite o salario: ')
console.log(`Seu salario é: ${salario}`)

let abono = leia.questionFloat('Digite o valor do abono: ')
console.log(`O valor do abono é: ${abono}`)

let novoSalario = salario + abono
console.log(`Seu novo salario é: ${novoSalario}`)


console.log('--------------atv2------------------')


let nota1 = leia.questionFloat('Digite a primeira nota: ')
let nota2 = leia.questionFloat('Digite a segunda nota: ')
let nota3 = leia.questionFloat('Digite a terceira nota: ')
let nota4 = leia.questionFloat('Digite a quarta nota: ')

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log(`A média das notas é: ${media}`)

console.log('--------------atv3------------------')


let salarioBruto = leia.questionFloat('Digite o salario bruto: ')
let adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ')
let horasExtras = leia.questionFloat('Digite tempo de  horas extras: ')

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5)
console.log(`O salario liquido é: ${salarioLiquido}`)


console.log('--------------atv4------------------')

n1 = leia.questionFloat('Digite a primeira nota: ')
n2 = leia.questionFloat('Digite a segunda nota: ')
n3 = leia.questionFloat('Digite a terceira nota: ')
n4 = leia.questionFloat('Digite a quarta nota: ')

console.log(`A diferença é de : ${(n1 * n2) - (n3 * n4)}`)