## Exercícios para casa 


### 1. Revisando conceitos

Vamos revisar conceitos? Resposta as perguntas abaixo com as suas palavras: 

```
1. O que é iteração?
É executar uma sequência de instruções em um determinado número de vezes ou até que determinada condição seja satisfeita. Ex.: comandos for e while. (wikipedia)


2. Qual a diferença de uma function padrão e a arrow function?

A Arrow function é um recurso que foi introduzido no ES6. É uma maneira mais concisa de escrever expressões de função e funciona de maneira semelhante às funções regulares, mas com certas diferenças.

let somar = function(n1, n2){
    return n1 + n2;
}
// Utilizando arrow functions =>
let somar = (n1, n2) => { return n1 + n2 };
O arrow function permite ao desenvolvedor alcançar o mesmo resultado simplificando o seu código. Os colchetes se tornam desnecessários se apenas uma expressão seja realizada:

let somar = (n1, n2) => n1 + n2;
Se houver apenas um argumento na função, os parênteses tornam-se desnecessários:

let multiplicaQuadrado = x =:> x * x;
E, caso não existam argumentos:

let dizerOla = _ => console.log("Olá");
As arrow functions têm acesso ao objeto de argumentos da função pai regular mais próxima. Os parâmetros nomeados e restantes são muito utilizados para capturar argumentos passados para arrow functions:

// Em uma função regular
let minhaFuncao = {
    mostrarArgumentos(){
        console.log(argumentos);
    }
};
minhaFuncao.mostrarArgumentos(1, 2, 3, 4);
// Utilizando arrow functions:
let minhaFuncao = {
    mostrarArgumentos: () => {
        console.log(...argumentos);
    }
};
minhaFuncao.mostrarArgumentos(1, 2, 3, 4);
// Argumento is not defined
As funções de seta não tem as suas próprias THIS, sendo o contrário de uma expressão regular. O valor de this dentro de um arrow está sempre ligado ao valor de this na função pai regular que seja mais próxima.

let pessoa = {
    nome: "Fulano Ciclano",
    thisArrow: () => {
        console.log("O nome é: " + this.nome); // Não há binding para this aqui
    },
    thisRegular(){
        console.log("O nome é: " + this.nome); // O bind vai funcionar aqui
    }
};
pessoa.thisArrow();
pessoa.thisRegular();
/* Saída */
//Meu nome é
//Meu nome é Fulano Ciclano
As funções regulares criadas utilizando declarações ou expressões de função são construtivas. Como elas são funções construtoras, elas podem ser invocadas utilizando a palavra-chave new.

As arrow functions  não são construtivas, então, não podem ser chamadas utilizando a palavra-chave new:

let soma = (n1, n2) => console.log(n1 + n2);
new soma(2, 3);
/* Saída */
// soma is not a constructor
As funções de seta também não podem ter parâmetros nomeados duplicados, seja no modo estrito ou não. Isso significa que:

// Isso aqui é válido
function somar(x, x){
    //...Seu código aqui
}
Mas ao utilizar o modo estrito, não é válido:

'use strict'
function somar(x, x) {} 
// SyntaxError: duplicate formal argument x
Com as arrow functions, os argumentos duplicados serão sempre inválidos, independente de estar ou não em modo estrito:

(x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context
Referência: https://medium.com/better-programming/difference-between-regular-functions-and-arrow-functions-f65639aba256

3. Como funciona o método map()? 

Os objetos “Map” confiam seus dados em um algoritmo hash (hash code). Esse algoritmo transforma uma grande quantidade de dados em uma pequena quantidade de informações, sendo que o mecanismo de busca se baseia na construção de índices.
https://www.devmedia.com.br/conhecendo-a-interface-map-do-java/37463

### 2. Manipulando objetos 
O desafio está no `script.js` e consiste em manipular uma array de objetos, juntando alguns conceitos que revisamos hoje. O exercício não é fácil e por isso, tenha calma na resolução. Pesquise e utilize todos os links da referência para chegar a uma solução possível. 

Não tenha medo de errar! Entregue o que conseguiu fazer.


----

#### EXTRA: 

O [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login) é uma plataforma de exercícios para praticar lógica, selecionei alguns exercícios como lição de casa, caso queira praticar sinta-se a vontade de fazer outros exercícios da plataforma.


- [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

- [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1049)

- [Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1066)

- [Exercício 04](https://www.urionlinejudge.com.br/judge/pt/problems/view/1134)

- [Exercício 05](https://www.urionlinejudge.com.br/judge/pt/problems/view/1114)

- [Exercício 06](https://www.urionlinejudge.com.br/judge/pt/problems/view/1009)


Lembrem-se: quanto mais praticamos, mais aprendemos!

Beijos, falem comigo se tiverem dúvidas
