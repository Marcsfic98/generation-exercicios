

import input = require('readline-sync')

console.log('-----------------------atv1---------------------------')

const colorsList: Array<string> = new Array<string>

for(let i=0 ; i< 5 ; i++){
    colorsList.push(input.question('Digite uma  cor: '))
}
console.log('Lista das cores:')
console.log(colorsList)
console.log('Ordenar cores:')
console.log(colorsList.sort())


console.log('-----------------------atv2--------------------------')

const numberList : Array<number> = new Array<number>

numberList.push(10,20,30,45,55,65,70,80,90,95)

let numberUser = input.questionInt('Digite o numero que deseja encontrar: ')

if(numberList.includes(numberUser)){
    console.log(`o numero ${numberUser} esta localizado na posiçao ${numberList.indexOf(numberUser)}`)
}else{
    console.log(`O número ${numberUser} não foi encontrado!`)
}


console.log('-----------------------atv3--------------------------')

const valuesList : Set<number> = new Set<number>

for(let i = 0 ; i < 10 ; i++){
    valuesList.add(input.questionInt('Digite um numero: '))
}

console.log('Lista de dados: ')
console.log(valuesList);


console.log('-----------------------atv4--------------------------')

const numList : Set<number> = new Set<number>

numList.add(10)
numList.add(20)
numList.add(30)
numList.add(40)
numList.add(50)
numList.add(60)
numList.add(70)
numList.add(80)
numList.add(90)
numList.add(102)


let numFind = input.questionInt('Digite o numero que deseja encontrar: ')

if(numList.has(numFind)){
    console.log(`o numero ${numFind}  esta na lista`);
}else{
    console.log(`o numero ${numFind} nao esta na lista`);
    
}
