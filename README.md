# Reprograma Turma10 - Todas em Tech (front-end)

> Objetivo da aula: Nivelar e consolidar o conhecimento de JavaScript até então, com muita ênfase na prática e em desafios de lógica e programação

## O que será revisado:

1. [Variáveis](#variáveis)
2. [String X Template strings](#string-x-template-strings)
3. [Condicional](#condicional)
   - [if...else X Operador condicional ternário](#if...else-x-operador-condicional-ternário)
   - [switch](#switch)
4. [Function X Arrow function](#function-x-arrow-function)
5. [Função Callback](#função-callback)
6. [Array](#array)
7. [Métodos de iteração](#métodos-de-iteração)
    - [while](#while)
    - [for](#for)
    - [for...in](#for...in)
    - [forEach](#foreach)
    - [find](#find)
    - [map](#map)

## Quais nossas novidades - mas nem tanto:
    - [filter](#filter)
    - [reduce](#reduce)
8. [Objetos](#objetos)
9. [JSON](#json)
10. [SPOILER - PRÓXIMA AULA](#spoiler-alert!!!)

---

### Variáveis

Declarando variáveis:

```js
const nome = 'Bruna'
let num = 2

```

Documentação: [var](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var), [const](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const), 
[let](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let)

---

### String X Template strings
> String é uma cadeia de caracteres, geralmente utilizada para representar palavras, frases ou textos de um programa.
> Template String são strings que permitem expressões embutidas

Exemplo de string:

```js
const frase = 'Olá, mundo!'

console.log(frase)
```

Exemplo de template string:

```js
const elogio = 'Maravilhosas'

const templateString = `Olá, ${elogio}`

console.log(templateString)
```

MDN: [template strings](https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/template_strings)

---

### Condicional 

#### if...else X Operador condicional ternário

Exemplo de condicional usando `if...else`:

```js
const notaFinal = 3

if (nota >= 7) {
  return 'aprovado'
} else {
  return 'reprovado'
}
```

Exemplo de condicional usando ternário:
> condição ? expressao1(se true) : expressao2(se false) 

```js
const notaFinal = 3

(nota >= 7) ? 'aprovado' : 'reprovado'
```

MDN: [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else), [operador condicional ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional)

---

#### switch

> A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção(case) especifica. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.Ele obrigatoriamente deve ter um "break", que finaliza a expressão

Exemplo de condicional usando `switch`:

```js
const expressao = 'Beyoncé';
switch (expressao) {
  case 'Shakira':
    console.log('É colombiana!');
    break;
  case 'Beyoncé':
  case 'Katy Perry':
    console.log('É americana!');
    break;
  case 'IZA':
    console.log('É brasileira!');
    break;
  default:
    console.log(`Desculpe, não encontramos a nacionalidade da ${expressao}.`);
}
// log: É americana!
```

Exemplo: O que acontece se eu esquecer um break?
> Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não

```js
const expressao = 0;
switch (expressao) {
    case -1:
        console.log('Amo gatinhos!');
        break;
    case 0: // expressao é 0 então aqui o critério foi correspondido
        console.log('Amo cachorrinhos!')
        //----NOTA: o break esquecido deveria estar aqui
    case 1: // nenhuma instrução break em 'case 0:' então verificação continua
        console.log('Amo esquilos!');
        break; // o programa encontra esse break então não vai continuar para o 'case 2:'
    case 2:
        console.log('Amo pandas!');
        break;
    default:
        console.log('Amo todos os animais!');
}
// Amo cachorrinhos!
// Amo esquilos!
```

MDN: [switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

---

### Function X Arrow function

> Uma função é um procedimento
> Uma arrow function possui uma sintaxe mais curta, mas também é uma forma de declarar uma função

Declarando funções:

```js
function falar() {
    return 'Tchacabum'
}
console.log(falar()) // Tchacabum

function dobro(num) {
    return num * 2
}
console.log(dobro(2)) // 4

function calcularMedia(nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3)
    const media = soma / 3
    return media
}
console.log(calcularMedia(10, 5, 6)) // 7
```

Escrevendo as mesmas funções usando Arrow function: 

```js
const falar = () => {
  return 'Tchacabum'
}

const dobro = (num) => {
  return num * 2
}

const calcularMedia = (nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}
```

MDN: [funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es),[arrow function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

### Função Callback

> Uma função callback é uma função que é passada para outra função como parâmetro. Assim ela é   invocada dentro da função de fora para completar algum tipo de rotina ou ação. 

```js
function somar(a, b) {
  return a + b
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

function dividir(a, b) {
  return a / b
}

function ordenar(a, b) {
  if (a <= b) {
    return [a, b]
  } else {
    return [b, a]
  }
}

function calcular(a, b, callback) { // qualquer função de cálculo pode entrar como parâmetro
  return callback(a, b) // essa função irá retornar o resultado da função interna
}

// Exemplo com números

const num1 = 7
const num2 = 2

const somaDoisNumeros = calcular(num1, num2, somar)
console.log(somaDoisNumeros) // 9

const subtracaoDoisNumeros = calcular(num1, num2, subtrair)
console.log(subtracaoDoisNumeros) // 5

const multiplicacaoDoisNumeros = calcular(num1, num2, multiplicar)
console.log(multiplicacaoDoisNumeros) // 14

const divisaoDoisNumeros = calcular(num1, num2, dividir)
console.log(divisaoDoisNumeros) // 3.5

const ordenarDoisNumeros = calcular(num1, num2, ordenar)
console.log(ordenarDoisNumeros) // [2, 7]
```


MDN: [Função callback](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)

---

### Array

> O objeto Array do JavaScript é um objeto global usado na construção de 'arrays'.
> Array(Arranjo) é uma estrutura de dados que armazena uma coleção de elementos aonde cada um deles possa ser identificado por, pelo menos, um índice ou uma chave

Declaração de array:

```js
const frutas = new Array('pera', 'uva', 'maçã', 'banana') ou
const frutas = ['pera', 'uva', 'maçã', 'banana']

const numeros = [9, 2, 5]
```

Acessando elementos pela posição do array:

```js
const primeiroItem = lista[0]

console.log(primeiroItem) // pera
```

Tamanho de array:

```js
const tamanho = numeros.length

console.log(tamanho) // 4
```

Atribuição via desestruturação

```js
const [primeiro, segundo, terceiro, quarto] = lista

console.log(primeiro) // pera
console.log(segundo) // uva
console.log(terceiro) // maçã
console.log(quarto) // salada mista
```

MDN: [array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), [atribuição via desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

**Trabalhando com Array**

**Principais Métodos**
* **concat** faz cópia simples do Array e adiciona os argumentos 
* **join** cria um string do Array. Adiciona o argumento como cola entre cada membro do Array. 
* **shift** remove e retorna o primeiro elemento 
* **pop** remove e retorna o ultimo elemento 
* **unshift** anexa os argumentos na frente do Array  
* **push** anexa os argumentos no final do Array  
* **reverse** inverte o Array sem copiá-lo 
* **slice** faz cópia simples da porção do Array delimitada por argumentos do índice 
* **splice** remove elementos especificados do Array, e os substitui com argumentos adicionais opcionais 
* **sort** classifica o Array sem copiá-lo, opcionalmente usando um argumento comparador 
* **toString** chama join sem passar um argumento
* **indexOf** retorna o primeiro elemento igual ao valor especificado, ou -1 *se nenhum for encontrado 
* **lastIndexOf** retorna o último elemento igual ao valor especificado, ou -1 se nenhum for encontrado 
* **forEach** aplica a função fornecida para todos elementos do Array
map cria um novo Array contendo os resultados da aplicação da função a todos elementos do Array 
* **filter** cria um novo Array contendo todos os elementos para os quais a função fornecida retorna verdadeiro 
* **reduce** aplica uma função simultaneamente para dois valores do Array (da esquerda para a direita) de forma a reduzi-los a um valor único 

---

### Métodos de iteração

#### while

> Um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

```js
const numeros = [9, 2, 5]

let i = 0

while (i < numeros.length) {
  const dobro = numeros[i] * 2
  console.log(dobro)
  i++
}
// 18
// 4
// 10
```

MDN: [while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)

---

#### for

> A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência(inicialização, condição , expressão final e declaração).

```js
const numeros = [9, 2, 5]

for (let i = 0; i < numeros.lenght; i++) {
  const dobro = numeros[i] * 2
  console.log(dobro)
}
// 18
// 4
// 10
```

Modificando a lista de números:

```js
const numeros = [9, 2, 5]

for (let i = 0; i < numeros.lenght; i++) {
  numeros[i] = numeros[i] * 2
}

console.log(numeros) // [18, 4, 10]
```

MDN: [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for)

---

#### for...in

> O laço **for...in** interage sobre as propriedades(keys) enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

Exibindo cada propriedade(key) do objeto:

```js
const cadeira = {
    material: "madeira",
    tipo: "jardim",
    ano: 1991
}

for (const key in cadeira) {
    console.log(key)
}
// material
// tipo
// ano
```

Exibindo cada propriedade(key) e valor(value) do objeto:

```js
for (const key in cadeira) {
    const value = cadeira[key]
    console.log(`${key}: ${value}`)
}
// material: madeira
// tipo: jardim
// ano: 1991
```

MDN: [for...in](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)

---

#### forEach

> O método forEach() executa uma dada função para cada elemento de um array.

```js
const numeros = [9, 2, 5]

function dobrar(item) {
  const dobro = item * 2
  console.log(dobro)
}

numeros.forEach(dobrar)
// 18
// 4
// 10
```

Modificando a lista de números:

```js
const numeros = [9, 2, 5]

function dobrar(item) {
  item = item * 2
}
numeros.forEach(dobrar)
console.log(numeros) // [9, 2, 5] 

// Ele usa o item do array de forma imutável(não muda), para resolver podemos usar os demais parâmetros da função callback
const numeros = [9, 2, 5]

function dobrar(item, index, numeros) {
    numeros[index] = item * 2
}
numeros.forEach(dobrar)
console.log(numeros) // [18, 4, 10]

```

Deixando mais conciso:

```js
const numeros = [9, 2, 5]

numeros.forEach(function dobrar(item, index, numeros) {
    numeros[index] = item * 2
})

console.log(numeros) // [18, 4, 10]
```

Refatorando para JS moderno:

```js
numeros.forEach((item, index, numeros) => numeros[index] = item * 2)

console.log(numeros) // [18, 4, 10]
```

MDN: [forEach](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

### Métodos mais usados com arrays/objetos

#### map

> O método `map()` invoca a função `callback` passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

```js
const numeros = [9, 2, 5]

function dobrar(item) {
  return item * 2
}

const numerosDobrados = numeros.map(dobrar)

console.log(numerosDobrados) // [18, 4, 10]
```

Deixando mais conciso:

```js
const numerosDobrados = numeros.map(function (item) {
  return item * 2
})

console.log(numerosDobrados) // [18, 4, 10]
```

Refatorando para JS moderno:

```js
const numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados) // [18, 4, 10]
```

**Obs:** o método `map` não altera o array original. Ele retorna um array novo com o resultado do `map`.

MDN: [map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

#### find

> O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback retorne o valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined.

```js
const numeros = [9, 2, 5]

function procuraCinco(item) {
  return item === 5
}

const achouCinco = numeros.find(procuraCinco)

console.log(achouCinco) // 5
```

MDN: [find](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

---

#### filter

> O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```js
const numeros = [9, 2, 5]

function impar(item) {
  return item % 2 !== 0
}

const numerosImpares = numeros.filter(impar)
```

Deixando mais conciso:

```js
const numerosImpares = numeros.filter(function (item) {
  return item % 2 !== 0
})
```

Refatorando para JS moderno:

```js
const numerosImpares = numeros.filter(item => item % 2 !== 0)

console.log(numerosImpares) // [9, 5]
```

**Obs:** o método `filter` não alterar o array original. Ele retorna um array novo com o resultado do `filter`.

MDN: [filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)

---

#### reduce

> O método `reduce` recebe uma função callback com alguns parâmetros e essa função é executada a cada elemento presente no array. O resultado é a redução do array a um valor só. Normalmente, utilizamos os dois primeiros parâmetros: `acumulador` e `itemAtual`.

Por exemplo, podemos executar a soma de todos os valores do array utilizando o método `reduce`:

```js
const numeros = [9, 2, 5]

function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

const numerosSomados = numeros.reduce(somarTodos)

console.log(numerosSomados) // 16
```

Deixando mais conciso:

```js
const numerosSomados = numeros.reduce(function (acumulador, itemAtual) {
  return acumulador + itemAtual
})

console.log(numerosSomados) // 16
```

Refatorando para JS moderno:

```js
const numerosSomados = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual)

console.log(numerosSomados) // 16
```

MDN: [reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

![map, filter, reduce](https://github.com/reprograma/On10-TodasEmTech-JavascriptIII/main/assets/img.jpg)

![map, filter, reduce](https://github.com/reprograma/On10-TodasEmTech-JavascriptIII/main/assets/img-2.jpg)

---

## Objetos

> Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções). Podem ser de qualquer tipo.

Declaração de objetos

```js
const objeto = new Object()
objeto.nome = 'mesa'
objeto.tipo = 'madeira'
objeto.peso = 20

const pokemon = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  altura: 40.6,
}
```

Acessando o valor de uma propriedade do objeto.

```js
console.log(pokemon.nome) // Pikachu
```

Declarando uma variável de mesmo nome que a propriedade.

```js
const nome = pokemon.nome
const tipo = pokemon.tipo
const altura = pokemon.altura

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

Atribuição via desestruturação

```js
const { nome, tipo, altura } = pokemon

console.log(nome) // Pikachu
console.log(tipo) // elétrico
console.log(altura) // 40.6
```

MDN: [objetos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico), [atribuição via desestruturação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao)

---

### JSON

> JSON significa **J**ava**S**cript **O**bject **N**otation - Notação de Objetos JavaScript. É uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado em um subconjunto da linguagem de programação JavaScript, a pesar disso, JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares à maioria das linguagens atuais.

Os dados salvos em um arquivo .json consistem em uma lista com uma sequencia de pares de chave / valor. Cujo formato se parece muito com o formato literal do objeto JavaScript.


```json
    { 
      "key": "value" 
    }
```

```json
  [
      {
          "key": "value"
      },
      {
          "key": "value"
      },
      {
          "key": "value"
      }
  ]
```

Você pode incluir os mesmos tipos de dados básicos dentro do JSON, como em um objeto JavaScript padrão — strings, números, matrizes, booleanos e outros literais de objeto. Porem, diferente das Arrays e Objetos os nomes das propriedades(key) devem ser strings com aspas duplas e as vírgulas à direita são proibidas.

```json
  [
    {
        "id": 1,
        "nome": "Super Mario World",
        "plataformas": ["Wii", "New Nintendo 3DS", "Wii U", "Super Nintendo Entertainment System (SNES)"],
        "ativo": true,
        "Empresa": "Nintendo EAD",
        "imagem": "https://images.igdb.com/igdb/image/upload/t_cover_big/co23jy.jpg"
    },
    {
        "id": 2,
        "nome": "Angry Birds Fight!",
        "plataformas": ["Android"],
        "ativo": false,
        "Empresa": "Rovio Entertainment",
        "imagem": "https://images.igdb.com/igdb/image/upload/t_cover_big/myewkwhbaxeg5fugaaj9.jpg"
    }
  ]
```

MDN: [JSON](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON)

---

## Spoiler!

> Na proxima semana vamos aprender requisições a APIs, então trouxe para vocês alguns materias e artigos para já nos familiarizarmos com o assunto. Divirtam-se!

- [Protocolo HTTP, API e REST de forma resumida](https://medium.com/@luanacm/protocolo-http-api-e-rest-de-forma-resumida-36a5494f3da4)
- [O que é API?](https://medium.com/@sampaioaanaluiza/o-que-%C3%A9-api-f507b643f50c)
- [Usando fetch API](https://medium.com/bruno-pulis/usando-fetch-api-ad0650f13a25)
- [Promises: Uma abordagem simples](https://medium.com/@dellean.santos/promises-uma-abordagem-simples-b0c8331fa077)

--

