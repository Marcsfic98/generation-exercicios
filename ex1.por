programa {
 funcao inicio()
    {
       
        inteiro vetor[] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
        inteiro tamanho = 10 
        inteiro i, j, temp 

   

        escreva("Vetor de ENTRADA :\n")
        escreva(" | ")
        para (i = 0; i < tamanho; i++) {
            escreva(vetor[i])
            escreva(",")
        }
        escreva("\n\n")

   
        
       
        para (i = 0; i < tamanho - 1; i++) {
            
            
            para (j = 0; j < tamanho - 1 - i; j++) {
                
            
                se (vetor[j] < vetor[j+1]) {
                    
                
                    temp = vetor[j] 
                    vetor[j] = vetor[j+1] 
                    vetor[j+1] = temp 
                }
            }
        }
        
       

        escreva("Vetor de SAÍDA (Decrescente):\n")
        escreva(" | ")
        para (i = 0; i < tamanho; i++) {
            escreva(vetor[i] )
            escreva(",")
        }
        escreva("\n")
        escreva("---------------------------------------------------\n")
    }
}

