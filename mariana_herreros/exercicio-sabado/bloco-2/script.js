//----- Array

// 1. Crie uma array com 5 frutas diferentes;

//let fruta = ["banana", "caqui", "pessego", "uva", "mamao"]

//prof
const frutas = ["banana","pera","caqui", "uva", "abacate"]

//2. Crie uma array com 100 espaços vazios.
 //let espaços = new Array(100)
 const arrayCem = nem Array(100)

 //ou
 let posicoes = [];
 posicoes.lenght = 100;
//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length

console.log(frutas[frutas.length - 1])
//frutas[5 - 1]
//frutas[4]
//como já está declarado lá em cima a const não precisa declarar

//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;



for(let i=0; i < frutas.length; i++){
  console.log(fruta[i])
}
//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

for(let i=0; i < arrayCem.length; i++){
  arrayCem[i] = i + 1
}

// [arrayCem[0]=1
// arrayCem[1= 2]]

// ou 

// arraycem[0]=1
// arrayCem[1]=2


//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

arrayCem.forEach((item) => {
  console.log(item * 2);
} )

// let espacos2 = [];
// espacos.forEach((item) => {
//   espacos2.push(item*2)
// });
// console.log(espacos2);

//(a,b) =>
//function(a,b)


//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração
const elementosQuimicos = ["hidrogenio" , "litio", "helio", "oxigenio" ]


//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;

//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.


//---- Filter


const numeros = [1, 2, 3, 4 , 5]
//numeros.filter(function(item))   //função anônima, recebe callback

let filtrado = numeros.filter((item) => { 
  return item > 2
})

console.log(filtrado) // [3, 4, 5]

//filtrado vai ser o resultado da iteração. Dom , você armazena as informações e da vários valores pra ela


//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;
const precoLivros = [8, 10, 30, 40]
let resultado = precoLivros.filter((preco) => {
if(preco < 30) {
  return preco
}
})

// quando chama o resultado, retorna [8,10]

//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array

const precosDosLivrosQueVouComprar = [8, 10];
const somaPrecos = precosDosLivrosQueVouComprar.reduce(function(acc, valorInicial) {
  return acc + valorInicial
}, 0)

//com for
// //let soma = 0;    //não precisa de variavel externa//
// for(let i= 0; i < precosDosLivrosQueVouComprar.length; i++) {   // o outro já sabe que é uma iteração//
// soma = soma + precosDosLivrosQueVouComprar[i]
// // }

// console.log(soma)

// primeira iteração
// i = 0
// soma= 8

// segunda iteração
// i= 1
// soma = 8 + 10


// dentro do escopo passa o valor zero, quer dizer que a soma começa do zero
//---- Objetos



//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log


//--- tudo junto e misturado!!

//. Dada a seguinte array de objetos:

const data = [
  {
    nome: "Scooby Doo",
    idade: 7,
    tipo: "cachorro",
  },
  {
    nome: "Sofia",
    idade: 1,
    tipo: "gato",
  },
  {
    nome: "Bidu",
    idade: 6,
    tipo: "cachorro",
  },
  {
    nome: "Mimi",
    idade: 3,
    tipo: "gato",
  },
  {
    nome: "Alfredo",
    idade: 10,
    tipo: "gato",
  },

];

// printar no console apenas os cachorros

let doguinhos = data.filter((animal) => {
  return animal.tipo === 'cachorro'   // compare
})

// dai chama // doguinhos


// printe no console apenas os gatos

// some a idade de todos os gatos juntos

//Exemplos de Map, reduce e Filter

const numero= ["1", "2","40","60"]

array.filter((numero) => {
  return numero > 10
})

array.reduce((acumulador, valorAtual))