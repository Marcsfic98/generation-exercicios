const leia = require('readline-sync')

console.log('------------------------atv5-----------------------')

const codigo = leia.questionInt('Digite o codigo do item (de 1 a 6 ): ')
const quant = leia.questionInt('Digite a quantidade de itens: ')
let preco = 0

switch(codigo){

    case 1:
        console.log('Produto: Cachorro quente')
        let precopreco = 10
        console.log('Preco:10.00 ')
        console.log(preco * quant)
        break

    
    case 2:
        console.log('Produto: X-salada ')
        preco = 15
        console.log('Preco: 15.00 ')
        console.log(preco * quant)
        break
        
    
    case 3:
        console.log('Produto: X-bacon')
         preco = 18
        console.log('Preco: 18.00')
        console.log(preco * quant)
        break
        
    
    case 4:
        console.log('Produto: Bauru ')
        preco = 12
        console.log('Preco: 12.00')
        console.log(preco * quant)
        break
    
    
    case 5:
        console.log('Produto: Refri ')
        preco = 8
        console.log('Preco: 8.00')
        console.log(preco * quant)
        break
        
    
    case 6:
        console.log('Produto: Suco  de laranja')
        preco = 13
        console.log('Preco: 13.00')
        console.log(preco * quant)
        break    

    default:
             console.log('Digite o codigo do item (de 1 a 6 )')
}


console.log('------------------------atv6-----------------------')



const codigo2 = leia.questionInt('Digite o codigo do item (de 1 a 6 ): ')
const nome = leia.question('Digite seu nome: ')
const salario = leia.questionInt('Digite seu salario: ')
let reajuste

switch(codigo2){

    case 1:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Gerente ')
        reajuste = 0.10
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break

    
    case 2:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Vendedor ')
        reajuste = 0.7
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break
        
    
    case 3:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Supervisor ')
        reajuste = 0.9
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break
        
    
    case 4:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Motorista ')
        reajuste = 0.6
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break
    
    
    case 5:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Estoquista ')
        reajuste = 0.5
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break
        
    
    case 6:
        console.log(`Nome do colaborador ${nome}`)
        console.log('cargo: Ti ')
        reajuste = 0.8
        console.log(`Salario ${(reajuste * salario) + salario}`)
        break   

    default:
             console.log('Digite o codigo do item (de 1 a 6 )')
}

