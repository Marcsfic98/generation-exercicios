programa
{

    funcao inicio()
    {
    
        inteiro vetor[10] 
        inteiro i         
        inteiro soma = 0 
        real media     
        
        
        escreva("--- ENTRADA DE DADOS ---\n")
        para (i = 0; i < 10; i++) {
            escreva("Digite o número para a posição ", i, ": ")
           
            leia(vetor[i]) 
        }

       
        escreva("\n--- SAÍDA DE DADOS ---\n")
        
      
        escreva("Elementos nos índices ímpares: ")
        para (i = 0; i < 10; i++) {
            
            se (i % 2 != 0) {
                escreva(vetor[i], " ")
            }
        }
        escreva("\n")

      
        escreva("Elementos pares: ")
        para (i = 0; i < 10; i++) {
           
            soma = soma + vetor[i]
            
            
            se (vetor[i] % 2 == 0) {
                escreva(vetor[i], " ")
            }
        }
        escreva("\n")
        
      
        escreva("Soma: ", soma, "\n")
       
        media = soma / 10.0 
        
        escreva("Média: ", media, "\n") 
                                   
    }
}