//----- Array

// 1. Crie uma array com 5 frutas diferentes;

const frutas = ["banana", "pera", "morango", "kiwi", "manga"];

//2. Crie uma array com 100 espaços vazios.

const arrayCem = new Array(100);

// slots = espaços
arrayCem[2]; //undefined
arrayCem[10]; // undefined

//exemplo da aluna <3
let posicoes = [];
posicoes.length = 100;

//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length

console.log(frutas[frutas.length - 1]);
// frutas[5 - 1]
// frutas[4]

//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
//output: banana, pera, morango, kiwi, manga

//exemplo da aluna <3
for (i of frutas) {
  console.log(i);
}

//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

for (let i = 0; i < arrayCem.length; i++) {
  arrayCem[i] = i + 1;
}

//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

arrayCem.forEach((item) => {
  console.log(item * 2);
});

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração

const elementosQuimicos = ["Hidrogenio", "Helio", "Litio", "Oxigenio"];

elementosQuimicos.forEach((elemento) => {
  console.log(elemento.length);
});
//10,5,5,8