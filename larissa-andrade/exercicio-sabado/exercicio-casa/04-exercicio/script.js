//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let cod = 0; 

while(cod === 0){
    let tipoCombustivel = Number(prompt(`Qual combustível você prefere?  
1.Álcool 
2.Gasolina 
3.Diesel 
Para finalizar digite 4`));
    if (tipoCombustivel === 1 || tipoCombustivel === 2 || tipoCombustivel === 3 || tipoCombustivel === 4){
        switch(tipoCombustivel){
            case 1:
                alcool++;
                break;
            case 2:
                gasolina++;
                break;
            case 3:
                diesel++;
                break;
            case 4:
                cod = 1;
                break;
        }
    }
    else {
        alert(`Código inexistente ou inválido!
As opções são:
1.Álcool 
2.Gasolina 
3.Diesel
Para sair digite 4.`);
    }
}
alert(`MUITO OBRIGADO!
Alcool: ${alcool}
Gasolina: ${gasolina}
Diesel: ${diesel}`);
   
