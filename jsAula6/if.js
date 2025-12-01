console.log('--------------atv1------------------')

const leia = require('readline-sync')

a = leia.questionFloat("Digite o primeiro valor: ")
b = leia.questionFloat("Digite o segundo valor: ")
c = leia.questionFloat("Digite o terceiro valor: ")

if(a + b > c) {
    console.log("a + b é maior que c")
}else{
    console.log("a + b é menor que c")
}

console.log('--------------atv2------------------')

num = leia.questionFloat("Digite o valor: ")

if(num % 2 === 0){
    if(num > 0){
        console.log('o numero é par e positivo')
    }else{
        console.log('o numero é par e negativo')
    }
}else{
    if(num > 0){
        console.log('o numero é impar e positivo')
    }else{
        console.log('o numero é impar e negativo')
    }


    console.log('--------------atv3------------------')

    nome = leia.question('Digite seu nome: ')
    idade = leia.questionInt('Digite sua idade: ')
    doador = leia.keyInYN('Ja fez doacao? ')

    if(idade >= 18 && idade <= 69){
        if(idade >=60){
            if(doador === true){
                console.log(`${nome} esta apto(a) para doar`)
            }else{
                console.log(`${nome} nao esta apto(a) para doar`)
            }
        }

        if(idade < 60){
            console.log(`${nome} esta apto(a) para doar`)
        }
    }else{
        console.log(`${nome} nao esta apto(a) para doar`)
    }

   

    console.log('--------------atv4------------------')

    carac1 = leia.question('Digite a Primeira caracteristica: ')
    carac2 = leia.question('Digite a Segunda caracteristica: ')
    carac3 = leia.question('Digite a Terceira caracteristica: ')

    if(carac1 === 'vertebrado'){
        if(carac2 === 'ave'){
            if(carac3 === 'carnivoro'){
                console.log('Aguia')
            }else if(carac3 === 'onivoro'){
                console.log('Pomba')
            }else{
                  console.log('Digite algo valido')
            }

        }else if(carac2 === 'mamifero'){

            if(carac3 === 'herbivoro'){
                console.log('Vaca')
            }else if(carac3 === 'onivoro'){
                console.log('Homem')
            }else{
                  console.log('Digite algo valido')
            }

        }
    }else if(carac1 === 'invertebrado'){
        if(carac2 === 'inseto'){
            if(carac3 === 'hematofago'){
                console.log('pulga')
            }else if(carac3 === 'herbivoro'){
                console.log('largata')
            }else{
                  console.log('Digite algo valido')
            }

        }else if(carac2 === 'anelideo'){
            
            if(carac3 === 'hematofago'){
                console.log('Sanguessuga')
            }else if(carac3 === 'onivoro'){
                console.log('Minhoca')
            }else{
                  console.log('Digite algo valido')
            }

        }
    }
}