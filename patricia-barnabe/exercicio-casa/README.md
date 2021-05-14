## Exercícios para casa 


### 1. Revisando conceitos

Vamos revisar conceitos? Resposta as perguntas abaixo com as suas palavras: 

```
1. O que é iteração?
    É uma repetição de comandos, ações ou sequências de instruções realizadas dentro de um determinado escopo até que seja atingida uma
    condição pre-determinada ou até que seja alcançado o fim da execução. 

2. Qual a diferença de uma function padrão e a arrow function?
    São apenas formas diferentes de representação de uma função. O uso da palavra reservada function requer uma determinada sintaxe, assim
    como o uso da arrow function requer outros tipos de sintaxes. O nome arrow function está vinculado ao uso do símbolo "=>" para representar
    a existência da função.

3. Como funciona o método map()? 
    Esse método é específico para arrays. Ele percorre um determinado array e retorna um cópia modificada desse array, que deve ter o mesmo
    tamanho do array original. Ao percorrer o array original, é executada uma função callback (função que só é executada após uma primeira 
    função ser executada, nesse caso, a função/método map()) que irá realizar a modificação que resultará no array modificado. 

### 2. Manipulando objetos 
O desafio está no `script.js` e consiste em manipular uma array de objetos, juntando alguns conceitos que revisamos hoje. O exercício não é fácil e por isso, tenha calma na resolução. Pesquise e utilize todos os links da referência para chegar a uma solução possível. 

Não tenha medo de errar! Entregue o que conseguiu fazer.


----

#### EXTRA: 

O [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login) é uma plataforma de exercícios para praticar lógica, selecionei alguns exercícios como lição de casa, caso queira praticar sinta-se a vontade de fazer outros exercícios da plataforma.


- [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

let codigoDoLanche = Number(prompt("Digite o código do lanche desejado: 1- Cachorro Quente | 2- X-salada | 3- X-Bacon | 4- Torrada simples | 5- Refrigerante"));

let quantidadeDoLanche = Number(prompt("Quantos lanches você deseja?"));

switch (codigoDoLanche) {
    case "1":
    valor = 4 * quantidadeDoLanche
    break;
    case "2":
    valor = 4.50 * quantidadeDoLanche
    break;
    case "3":
    valor = 5 * quantidadeDoLanche
    break;
    case "4":
    valor = 2 * quantidadeDoLanche
    break;
    case "5":
    valor = 1.50 * quantidadeDoLanche
    break;
    default: 
    alert("O código digitado não corresponde a nenhum lanche. Por favor, insira um código válido.")
    break;
};

alert ("O valor total é R$" + valor.toFixed(2));



- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1049)

const tipoVertebra = prompt("É vertebrado ou invertebrado?")

if(tipoVertebra == "vertebrado") {
  const tipoAnimal = prompt("É ave ou mamifero")
    if(tipoAnimal == "ave") {
      const tipoComida = prompt("É carnivoro ou onivoro?")
        if(tipoComida == "carnivoro") {
          alert("É uma aguia")
        } else {
          alert("É uma pomba")
        }
    } else {
      const tipoComida = prompt("É onivoro ou herbivoro?")
        if(tipoComida == "onivoro") {
          alert("É um homem")
        } else {
          alert("É uma vaca")
        }
    } 
} else {  
  const tipoAnimal = prompt("É inseto ou anelideo")
    if(tipoAnimal == "inseto"){
      const tipoComida = prompt("É hematofago ou herbivoro?")
        if(tipoComida == "hematofago") {
          alert("É uma pulga")
        } else {
          alert("É uma lagarta")
        }
    } else {
      const tipoComida = prompt("É hematofago ou onivoro?")
        if(tipoComida == "hematofago") {
          alert("É uma sanguessuga")
        } else {
          alert("É uma minhoca")
        }
    }
}



- [Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1066)

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    par++;
  } else {
    impar++;
  }
  if (i > 0) {
    positivo++;
  } else if (i < 0) {
    negativo++;
  }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`) 
console.log(`${negativo} valor(es) negativos(s)`)



- [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = 0;

let alcool = 0;
let gasolina = 0;
let diesel = 0;

combustivel = parseInt(prompt("Qual dos nossos produtos você prefere? 1.Álcool | 2.Gasolina | 3.Diesel | 4.Fim"));

while (combustivel <= 4) {
  switch(combustivel){
  case '1': 
    alcool++
    break;
  case '2': 
    gasolina++
    break;
  case '3':
    diesel++
    break;
  case '4':
      alert (`MUITO OBRIGADO
       Álcool: ${alcool}, Gasolina: ${gasolina}, Diesel: ${diesel}`)
    break;
  default:
      alert ("O código digitado não corresponde a nenhum de nossos produtos. Por favor, insira um código válido.")
    break;
    } 
 combustivel = prompt("Qual dos nossos produtos você prefere? 1.Álcool | 2.Gasolina | 3.Diesel | 4.Fim"); 
}; 



- [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = prompt('Digite sua senha: ');

while(senha !== '2002'){
    alert('Senha inválida')
    senha = prompt('Digite sua senha: ') 
}

      alert('Acesso permitido');



- [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nomeVendedor = prompt("Nome do vendedor:");
let salarioFixo = Number(prompt("Salário fixo:"));
let totalDeVendas = Number(prompt("Total de vendas efetuadas no mês:"));
let comissao = 0.15;

let total = salarioFixo + (vendas*comissao);

alert ("O valor total é R$" + total.toFixed(2));




Lembrem-se: quanto mais praticamos, mais aprendemos!

Beijos, falem comigo se tiverem dúvidas
