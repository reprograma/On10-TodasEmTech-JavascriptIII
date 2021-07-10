// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 


let cod = Number(prompt("Digite o codigo do item"));
let qtd = Number(prompt("Digite a quantidade deste item"));
let total = 0.00;

switch(cod){
    case 1:
        total = (4.00*qtd);
        break;
    case 2:
        total = (4.50*qtd);
        break;
    case 3:
        total = (5.00*qtd);
        break;
    case 4:
        total = (2.00*qtd);
        break;
    case 5:
        total = (1.50*qtd);
        break;
    default:
        alert("Código inválido! Digite um valor entre 1 e 5");
        break;
}

alert(`Total: R$ ${total.toFixed(2)}`);
