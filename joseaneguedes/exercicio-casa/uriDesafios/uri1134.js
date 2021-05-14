// - [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)
let countA = 0
let countG = 0
let countD = 0
let fuel = 0

fuel = prompt("Digite sua preferência de combustível entre as opções 1 e 3: ");


switch (fuel) {
  case '1':
    countA = countA + 1
    break;
  case '2':
    countG = countG + 1
    break;
  case '3':
    countD = countD + 1
    break;
  case '4':
    alert("MUITO OBRIGADO");
    break;
  default:
    alert(`Favor, digitar um item válido!`);
}

alert(`Quantidade de clientes por tipo combustível: \n Álcool: ${countA} \n Gasolina: ${countG} \n Diesel: ${countD} `);

