// - [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009) //

let vendedor = prompt("Nome do Vendedor");
let salarioFixo = Number(prompt("Salário Fixo"))
let comissao = 0.15;
let vendas = Number(prompt("Total de Vendas"))


let total = salarioFixo + (vendas*comissao);
alert(`Total: R$ ${total}`);