//[Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)


let seller = {
    name: '',
    salary: 0,
    sales: 0
};


seller.name = prompt("Nome do vendedor");
seller.salary = Number(prompt("Salário fixo do vendedor"));
seller.sales = Number(prompt("Total de vendas efetuadas no mês"));


let total = (0.15*seller.sales)+seller.salary;
alert(`TOTAL = R$ ${total.toFixed(2)}`);