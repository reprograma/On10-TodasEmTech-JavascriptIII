EXTRA: 

/* O [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login) é uma plataforma de exercícios para praticar lógica, selecionei alguns exercícios como lição de casa, caso queira praticar sinta-se a vontade de fazer outros exercícios da plataforma. */

/* - [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038)  */
let code = prompt("Digite o código do seu pedido: ")
let amount = prompt("Digite a quantidade desejada: ")

switch (code) {
    case "1":
        value = 4 * amount
        break;
    case "2":
        value = 4.50 * amount
        break;
    case "3":
        value = 5 * amount
        break;
    case "4":
        value = 2 * amount
        break;
    case "5":
        value = 1.50 * amount
        break;
    default:
        alert('Desculpe, item indisponível! Favor, escolher um numero entre 1 e 5!');
}

alert("O pagamento total é de R$" + value.toFixed(2)  + "! Volte Sempre!") 












