let completeStringDisplay = []
let displayString = ''
let result = 0

cleanDisplay() //limpa tela ao recarregar 

function insertValue(value)
    {       
        //caso exista um resultado na tela ele é adicionado no array para continuar a execução do proximo calculo caso seja pressionada um operador
        if(document.getElementById('resultDisplay').innerHTML == result)
            {
                //caso uma tecla numerica for pressionada o resultado é descartado 
                switch(value)
                    {
                        case '0':
                            cleanDisplay()
                        case '1':
                            cleanDisplay()
                        case '2':
                            cleanDisplay()
                        case '3':
                            cleanDisplay()
                        case '4':
                            cleanDisplay()
                        case '5':
                            cleanDisplay()
                        case '6':
                            cleanDisplay()
                        case '7':
                            cleanDisplay()
                        case '8':
                            cleanDisplay()
                        case '9':
                            cleanDisplay()
                        case '.':
                            cleanDisplay()
                        
                        default:    
                            completeStringDisplay.push(result)
                    }
                
            }
        else
            {
                //pass
            }
            
        //Caso a calculadora esteja exibindo o 0 ao pressionar um numero ele sera removido da esquerda
        //o segundo operando da logica && serve para quando o resultado de uma operação der 0 ao clicar em um operador ele nao apague o zero o que deixa fora de formatação
        if(document.getElementById('resultDisplay').innerHTML == '0' && document.getElementById('historicDisplay').innerHTML == 'Historico')
            {
                document.getElementById('resultDisplay').innerHTML = ''     
            }
        else
            {
                //pass
            }

        let valuesButton = document.getElementById('resultDisplay').innerHTML;

        document.getElementById('resultDisplay').innerHTML = valuesButton + value;
        
        completeStringDisplay.push(value)

    }

//função que imprime o operador no display
function insertOperator(value)
    {
        lastOperator(value);
        displayString = displayToString(completeStringDisplay)
    }

    //função que limpa o display
function cleanDisplay()
    {
        document.getElementById('resultDisplay').innerHTML = '0'
        document.getElementById('historicDisplay').innerHTML = 'Historico'
        completeStringDisplay = []
    }

//função que calcula o resultado baseado na string do display
function calculate()
    {
        result = eval(document.getElementById('resultDisplay').innerHTML)
        document.getElementById('historicDisplay').innerHTML = document.getElementById('resultDisplay').innerHTML
        document.getElementById('resultDisplay').innerHTML = result
        //completeStringDisplay = []
    }

//função de soma (sera usada na implemmentação de um eval() proprio)
function addition(a, b)
    {
        return a + b
    }

//função de subtração (sera usada na implemmentação de um eval() proprio)
function subtraction(a, b)
    {
        return a - b
    }

//função de multiplicação (sera usada na implemmentação de um eval() proprio)
function multiplication(a, b)
    {
        return a * b
    }

//função de divisão (sera usada na implemmentação de um eval() proprio)
function division(a, b)
    {
        return a / b
    }

//função que troca ultimo operador caso nao seguido de um numero
function lastOperator(value) 
    {
        let valuesButton = document.getElementById('resultDisplay').innerHTML;
        let lastValueButton = valuesButton.charAt(valuesButton.length-1)

        //Valida paranao colocar dois operadores seguidos, verifica o ultimo inserido e caso pressionada outro ira substitui-lo 
        if ( lastValueButton == ('%') || lastValueButton == ('/') || lastValueButton == ('*') || lastValueButton == ('-') || lastValueButton == ('+'))
            {
                document.getElementById('resultDisplay').innerHTML = valuesButton.substring(0, valuesButton.length -1);
                console.log( 'if' + valuesButton.charAt(valuesButton.length-1) )
                insertValue(value);
            }
        else
            {
                insertValue(value);
            }
        
    }

//função que converte array em string, nao sendo necessaria devido ao eval(), sera usado adiante em um eval() proprio
function displayToString(array)
    {
        var array2 = [];
        var tamanho = array.length

        for (i = 0; i < tamanho; i++)
            {
                if (array[i] != ',')
                    {
                        array2.push(array[i]).toString()
                    }
                else
                    {
                        //pass
                    }
            }

        return array2

    }