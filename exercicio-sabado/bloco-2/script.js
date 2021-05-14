//----- Array

// 1. Crie uma array com 5 frutas diferentes;
const fruits = ["banana", "manga", "laranja", "morango", "uva"];

//console.log(fruits)

//2. Crie uma array com 100 espaços vazios.
const espacosVazios = [];
while(espacosVazios.length < 100){
  espacosVazios.push("")
}

//console.log(espacosVazios)



//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length
console.log(fruits[fruits.length - 1]);


//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}


//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).


for(let i = 0; i < espacosVazios.length; i++) {
  espacosVazios[i] = i + 1
}

console.log(espacosVazios)

//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.

espacosVazios.forEach( (item) => {
  console.log(item * 2);
} )

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração
const elementosQuimicos = ["Hidrogenio", "Helio", "Litio", "Oxigenio"];



//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;
const nomes = ["Mariana", "Jaqueline", "Bruna", "Jumara", "Carol"]

function pronome(item) {
  return "Sra" + " " + item 
}
    

const adicionaPronomes = nomes.map(pronome) 
      console.log(adicionaPronomes)


//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.

const precoDeLivros = [10, 30, 25, 50, 40, 60];


function insereDesconto(item) {
  return (20/100 * item)
}

const aplicaDesconto = precoDeLivros.map(insereDesconto)
      console.log(aplicaDesconto)

//---- Filter

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

function abaixoDeTrinta(item) {
  return item < 30
}

const menoresQueTrinta = aplicaDesconto.filter(abaixoDeTrinta)
console.log(menoresQueTrinta)

//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array

function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

const numerosSomados = aplicaDesconto.reduce(somarTodos)
console.log(numerosSomados)

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser


const animal =  {
  porte: "pequeno",
  especie: "canis familiaris",
  raca: "labrador",
  }


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log

const curso =  {
  nome: "frontend",
  periodo: 2,
  professora: "bruna",
  }

console.log(curso.nome);
console.log(curso.periodo);
console.log(curso.professora)

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


let returnCachorro = data.filter(cao => cao.tipo === "cachorro");
console.log(returnCachorro);


/*Outra forma de fazer
let returnCachorro = data.find(cao => cao.tipo === "cachorro");*/

//printe no console apenas os gatos

let returnGato = data.filter(gato => gato.tipo === "gato");
console.log(returnGato);


// some a idade de todos os gatos juntos

function somarTodos(acumulador, itemAtual) {
  return acumulador + itemAtual
}

let reducer = data.reduce((acumulador, itemAtual) => {
  if (itemAtual.tipo == 'gato') {
      return (acumulador + itemAtual.idade)
  }
}, 0)

console.log(reducer);