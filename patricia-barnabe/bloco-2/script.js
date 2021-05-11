//----- Array

// 1. Crie uma array com 5 frutas diferentes;

const frutas = ["banana", "pera", "morango", "kiwi", "manga"]

//2. Crie uma array com 100 espaços vazios.

const arrayCem = new Array(100);

//Outra alternativa:
let posicoes = [];
posicoes.length = 100;

//Criando um array preenchido com 100 itens vazios
let espacos = [];
while(espacos.length < 100){
  espacos.push("")
}
console.log(espacos)

//Para preencher o array acima
for (let i = 0; i < espacos.length; i++){
  espacos[i] = (i + 1)
};
console.log(espacos);

//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length

console.log(frutas[frutas.length - 1])

//----- For

//4. Printar na tela em cada linha o nome de uma fruta do array anterior;

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

//Outra alternativa:
for (i of frutas) {
  console.log(i);
}

//5. Inserir números crescentes a partir do 1 no array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).

for (let i = 0; i < arrayCem.length; i++) {
  arrayCem[i] = i + 1
}

//----- ForEach

//6. Criar um array, cujos itens sejam o dobro dos items do array de 100 itens.

arrayCem.forEach((item) => {
  console.log(item * 2)
})

//7. Dado o seguinte array (???), printe o tamanho de cada string a cada iteração

const arrayCasa = ["cama", "mesa", "cadeira", "sofá", "tv"]

arrayCasa.forEach((item) => {
  console.log(item.length)
})

//Outra alternativa
for (item of arrayCasa) {
  console.log(item.length)
}

//---- Map

//8. Dado um array de nomes, criar um novo array que adiciona o pronome de tratamento "sra." antes de cada nome;

const arrayNomes = ["Maria", "Sandra", "Cristina", "Eunice", "Odete"]

arrayNomes.map((item) => {
  return `Sra. ${item}`
})

//9. Dado uma array de preços de livros, retorne um array com os preços com desconto de 20%.

const precosLivros = [10, 20, 40, 50, 100]

const desconto = precosLivros.map((item) => {
  return item - (item*0.2)
})

//---- Filter

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

desconto.filter((precos) => {
  return precos < 30
})

//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array

desconto.reduce((acc, value) =>{
  return acc + value
})

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser

let animal = {
  especie: "Cachorro",
  porte: "Grande",
  raca: "Samoieda"
}

//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log

let curso = {
  nome: "Reprograma",
  periodo: "1",
  professora: {
    nome: "Bruna",
    sobrenome: "Gil",
    empresa: "Itaú Unibanco"
  }
}

console.log(curso.nome);
console.log(curso.professora.nome);
console.log(curso.professora.empresa);

//--- Tudo junto e misturado!!

//. Dado o seguinte array de objetos:

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

]

// Printar no console apenas os cachorros

data.filter((objeto) => {
  if (objeto.tipo == "cachorro") {
    console.log(objeto)
  }
})

// Printe no console apenas os gatos

data.filter((objeto) => {
  if (objeto.tipo == "gato") {
    console.log(objeto)
  }
})

// Some a idade de todos os gatos juntos

data.filter((objeto) => {
  if (objeto.tipo == "gato") {
    console.log(objeto.idade)
  }
})