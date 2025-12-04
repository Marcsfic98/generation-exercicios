import input = require('readline-sync')
import { Queue } from "../queue";
import { Stack } from '../stack';

const listName : Queue<string> = new Queue<string>()

let opcao: number

do{
    console.log('\n**********************************************************')
    console.log('1 - Adicionar Cliente à Fila')
    console.log('2 - Listar Todos os Clientes')
    console.log('3 - Retirar Cliente da Fila ')
    console.log('0 - Sair') 
    console.log('**********************************************************')

    
    opcao = input.questionInt('Digite a opcao desejada: ') 
    console.log('**********************************************************\n')

    switch(opcao){
        case 1:
            
            let name = input.question('Digite o nome do cliente: ')
            listName.enqueue(name)
            console.log(`\nCliente ${name} adicionado à fila.`);
            break;
        case 2:
            
            if (listName.isEmpty()) {
                console.log('A Fila está vazia!');
            } else {
                console.log('Clientes na Fila:');
                console.log(listName.printQueue()); 
            }
            break;
        case 3:
           
            if (listName.isEmpty()) {
                console.log('A Fila está vazia! Não é possível retirar.');
            } else {
                let retirado = listName.dequeue();
                console.log(`\nCliente ${retirado} foi retirado da fila.`);
            }
            break;
        case 0:
           
            console.log('Obrigado por usar o sistema! Encerrando...');
            break;
        default:
            
            console.log('Opção Inválida! Digite uma opção de 0 a 3.');
            break;
    }

}while(opcao !== 0); 


const listaLivros: Stack<string> = new Stack<string>()

let option:number


do{
    console.log('\n**********************************************************')
    console.log('1 - Adicionar livro a pilha')
    console.log('2 - Listar livros ')
    console.log('3 - Retirar livro ')
    console.log('0 - Sair') 
    console.log('**********************************************************')

    
    option = input.questionInt('Digite a opcao desejada: ') 
    console.log('**********************************************************\n')

    switch(option){
        case 1:
            let livro = input.question('Nome do livro: ')
            listaLivros.push(livro)
            console.log('Adicionado');
            break

        case 2:
            listaLivros.printStack()
            break
            
       case 3:
         if (listaLivros.isEmpty()) {
                console.log('A Fila está vazia! Não é possível retirar.');
            } else {
                let retirado = listaLivros.pop();
                console.log(`\no livro ${retirado} foi retirado da fila.`);
            }
            break;   
            
        default:
            console.log('Digite uma opção valida');
                
    }

}while(option !==0)