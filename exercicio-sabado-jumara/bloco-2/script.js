//----- Array

// 1. Crie uma array com 5 frutas diferentes;

// const frutas = ['Graviola', 'Cupuaçu', 'Taperebá', 'Açaí', 'Manga'];

// console.log(frutas);



//2. Crie uma array com 100 espaços vazios.

// const arrayCem = new Array(100);

// outra maneira: 
// let posicoes = [];
// posicoes.length = 100;

//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length

// console.log(frutas[frutas.length -1])

// console.log(fruits.length - 1)

//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;

// for(let i=0; i < frutas.length; i++){
//   console.log(frutas[i]);
// }

// for (i of frutas) {
//   console.log(i);
// }


//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

// for(let i=0; i < arrayCem.length; i++) {
//   arrayCem[i] = i + 1 
// }


//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

// arrayCem.forEach((item) => {
//   console.log(item * 2);  
// });

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração

const elementosQuimicos = ["Hidrogenio", "Helio", "Litio", "Oxigenio"];



//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;

// const nomes = ['Gabriela', 'Juliana', 'Jaqueline'];

//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.


//---- Filter

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

const precosLivros = [8, 10, 30, 40];

precosLivros.filter((preco) => {
  if(preco < 30) {
    return preco
  } 
});

// vai retornar 10, 8


//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array


//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log


//--- tudo junto e misturado!!

//. Dada a seguinte array de objetos:

// const data = [
//   {
//     nome: "Scooby Doo",
//     idade: 7,
//     tipo: "cachorro",
//   },
//   {
//     nome: "Sofia",
//     idade: 1,
//     tipo: "gato",
//   },
//   {
//     nome: "Bidu",
//     idade: 6,
//     tipo: "cachorro",
//   },
//   {
//     nome: "Mimi",
//     idade: 3,
//     tipo: "gato",
//   },
//   {
//     nome: "Alfredo",
//     idade: 10,
//     tipo: "gato",
//   },

// ];

// printar no console apenas os cachorros

// printe no console apenas os gatos

// some a idade de todos os gatos juntos

// ARRAY FILTER
// const array = [1,2,40,60];

// array.filter((numero) => {
//   return numero > 10
// });

ARRAY REDUCE

const array = [1,2,40,60];

array.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual    
});
