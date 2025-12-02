const leia = require('readline-sync')

 console.log("--------------atv1 -----------------");

let num1 = leia.questionInt('Digite o primeiro numero: ')
let num2 = leia.questionInt('Digite o  numero do intervalo: ')

if(num1 > num2){
    console.log('O intervalo é invalido!')
}else{
    for(num1 ;num1 < num2 ; num1++){
        if(num1 % 3 === 0 && num1 % 5 === 0){
            console.log(`${num1} é multiplo de 3 e 5`)
        }
    }
}


console.log("--------------atv3 -----------------");

let idade = leia.questionInt('Digite sua idade ou um numero negativo para sair: ')
let totalMenor21 = 0
let totalMaior50 = 0


while(idade >= 0){

    if(idade < 21) {
        totalMenor21++
    }else if(idade > 50){
        totalMaior50++
    }

    idade = leia.questionInt('Digite sua idade ou um número negativo para sair: ')
}

    console.log("--- Resultados ---");
    console.log(`Total de pessoas com menos de 21 anos: ${totalMenor21}`);
    console.log(`Total de pessoas com mais de 50 anos: ${totalMaior50}`);


    console.log("--------------atv6 -----------------");

    
    let num = 0
    let soma = 0
    do{
        num = leia.questionInt('Digite um numero: ')
         if(num > 0){
         soma = soma + num
         }
    }while(num !== 0)

        console.log(`A soma dos numeros é: ${soma}`)    