//- [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134) //

let preferenciaAlcool=0;
let preferenciaGasolina=0;
let preferenciaDiesel=0;

function calcularPreferenciaCombustivel(){
    
    let codigoCombustivel = Math.abs(parseInt(prompt('Qual o código do combustível abastecido por você?'))); 
    
    while(codigoCombustivel!=4){
        if(codigoCombustivel==1){
            preferenciaAlcool++
        }else if(codigoCombustivel==2){
            preferenciaGasolina++
        }else if(codigoCombustivel==3){
            preferenciaDiesel++
        }else{
            let novoCodigoCombustivel =  Math.abs(parseInt(prompt('Esse código é inválido. Qual o código do combustível abastecido por você?')));  
            codigoCombustivel = novoCodigoCombustivel
            if(codigoCombustivel==1){
                preferenciaAlcool++
            }else if(codigoCombustivel==2){
                preferenciaGasolina++
            }else if(codigoCombustivel==3){
                preferenciaDiesel++
            } 
        } 
        alert (`MUITO OBRIGADO. Quantidade de abastecimento(s) do alcool: ${preferenciaAlcool}, quantidade de abastecimento(s) da gasolina: ${preferenciaGasolina}, quantidade de abastecimento(s) do diesel: ${preferenciaDiesel}.`);
        codigoCombustivel = Math.abs(parseInt(prompt('Qual o código do combustível abastecido por vc?')))
    }
};
calcularPreferenciaCombustivel();