/* - [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)  */

let nome = prompt("Digite nome: ")
let salarioFixo = Number(prompt("Digite valor do salário fixo: "))
let vendas = Number(prompt("Digite o valor total de vendas: "))
let salarioTotal = salarioFixo + (vendas * 0.15)
alert(`TOTAL R$ ${salarioTotal.toFixed(2)}`)