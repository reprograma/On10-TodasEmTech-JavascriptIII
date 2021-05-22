## Exercícios para casa 


### 1. Revisando conceitos

Vamos revisar conceitos? Resposta as perguntas abaixo com as suas palavras: 

```
1. O que é iteração?
é uma sequência de execuções repetidas até que tal condição for alcançada.

2. Qual a diferença de uma function padrão e a arrow function?
arrow function tem uma estrutura mais curta comparada ao function padrão.
Além disso, o Arrow function são funções anonimas. Não precisa usar a expressão "function" e "return" Também não há necessidade de usar chaves, só se usa se tiver mais de uma instrução.

3. Como funciona o método map()? 
utilizado para mapear objetos de um array, onde é possóvel construir um novo array a partir do array que está sendo feito o mapeamento.
```

### 2. Manipulando objetos 
O desafio está no `script.js` e consiste em manipular uma array de objetos, juntando alguns conceitos que revisamos hoje. O exercício não é fácil e por isso, tenha calma na resolução. Pesquise e utilize todos os links da referência para chegar a uma solução possível. 

Não tenha medo de errar! Entregue o que conseguiu fazer.


----

#### EXTRA: 

O [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login) é uma plataforma de exercícios para praticar lógica, selecionei alguns exercícios como lição de casa, caso queira praticar sinta-se a vontade de fazer outros exercícios da plataforma.


- [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 
let cod = prompt ("O que vc quer pedir: 1- Cachorro Quente | 2- X-salada | 3- X-Bacon | 4- Torrada simples | 5- Refrigerante")
let qtde = prompt ("Quantos?")

switch (cod) {
    case "1":
    val = 4 * qtde
    break;
    case "2":
    val = 4.50 * qtde
    break;
    case "3":
    val = 5 * qtde
    break;
    case "4":
    val = 2 * qtde
    break;
    case "5":
    val = 1.50 * qtde
    break;
    default: 
    break;
}

alert ("O valor final é R$" + val.toFixed(2))


- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1049)

const tipoVertebrado = prompt("Vertebrado ou invertebrado?")

if(tipoVertebrado == "vertebrado") {
  const tipoAnimal = prompt("É ave ou mamifero")
    if(tipoAnimal == "ave") {
      const tipoAlimen = prompt("É carnivoro ou onivoro?")
        if(tipoAlimen == "carnivoro") {
          alert("É uma águia")
        } else {
          alert("É uma pomba")
        }
    } else {
      const tipoAlimen = prompt("É onivoro ou herbivoro?")
        if(tipoAlimen == "onivoro") {
          alert("É um homem")
        } else {
          alert("É uma vaca")
        }
    } 
} else {  
  const tipoAnimal = prompt("É inseto ou anelideo")
    if(tipoAnimal == "inseto"){
      const tipoAlimen = prompt("É hematofago ou herbivoro?")
        if(tipoAlimen == "hematofago") {
          alert("É uma pulga")
        } else {
          alert("É uma lagarta")
        }
    } else {
      const tipoAlimen = prompt("É hematofago ou onivoro?")
        if(tipoAlimen == "hematofago") {
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


for (i = 0; i <= 4; i++) {
    const i = prompt("Digite um número:")
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

//- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

let combustivel = 0

let contadorAlcool = 0
let contadorGasolina = 0 
let contadorDiesel = 0

combustivel = prompt("Qual seu produto de maior preferência no nosso posto?");
while (combustivel <= 4) {
  switch(combustivel){
  case "1": 
  contadorAlcool++
    break;
  case "2": 
  contadorGasolina++
  break;
  case "3":
    contadorDiesel++
    break;
  case "4":
    alert (`MUITO OBRIGADO
       Álcool: ${contadorAlcool}, Gasolina: ${contadorGasolina}, Diesel: ${contadorDiesel}`)
       contadorAlcool = 0
       contadorGasolina = 0 
       contadorDiesel = 0
    break;
} 
 combustivel = prompt("Qual seu produto de maior preferência no nosso posto?"); 
};

- [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

let senha = prompt('digite sua senha: ')
while(senha !== '2002'){
    alert('Senha inválida')
    senha = prompt('digite sua senha: ') 
}

      alert('Acesso permitido')

- [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)

let nome = prompt ("Nome do vendedor:")
let salarioFixo = prompt ("Qual seu salário?")
let totalDeVendas = prompt ("Qual total de vendas realizado?")

let comissao = (salarioFixo * 1) + (totalDeVendas * 1) * 0.15

alert ("O valor total é R$" + (comissao * 1).toFixed(2))


Lembrem-se: quanto mais praticamos, mais aprendemos!

Beijos, falem comigo se tiverem dúvidas
