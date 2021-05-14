//----- Array

// 1. Crie uma array com 5 frutas diferentes;

let frutas = ["banana", "uva", "mangaba", "mamão", "graviola"]
console.log(frutas);

//2. Crie uma array com 100 espaços vazios.

const arrayCem = new Array(100)


//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length
  console.log(frutas[frutas.length-1]);



//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;
for(let i= 0; i<frutas.length; i++) {
  console.log(frutas[i]);
  }
  

//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).
  
for(let i=0; i < arrayCem.length; i++){
  arrayCem[i] = i + 1
}
console.log(arrayCem);

//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.
 
arrayCem.forEach((item) => {
  console.log(item * 2);
})

//(a,b) =>
// function(a,b)

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração


//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;
const nomes = ["laís", "luiza", "fernanda", "marina"];
const pessoas = nomes.map(obj => { 
    return {nomes: " Sra." + obj}
});
console.log(pessoas);
//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.
const precosLivros2 = [10, 30, 25, 50, 40, 60];
const precoPorcentagem = precosLivros2.map(valor=> valor*(20/100));
console.log(precoPorcentagem);

//---- Filter

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;

const numeros = [1, 2, 3, 4, 5]
  let filtrado = numeros.filter((item) => {
    return item * 2
  })

  const precosLivros = [10, 30, 25, 50, 40, 60];

  function abaixoDeTrinta(item) {
    return item < 30
  }

//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array
const precoDosLivrosQueVouComprar =[8, 10, 30, 40];
    const somaPrecos = precoDosLivrosQueVouComprar.reduce(function(acc, ValorInicial){
        return acc + ValorInicial
    }, 0);

let soma = 0;
for(let i = 0; i < precoDosLivrosQueVouComprar.length; i++) {
  soma = soma + precoDosLivrosQueVouComprar[i];
}
console.log(soma);

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser

  animal = {
    porte: "pequeno",
    especie: "cachorro",
    raca: "chow chow"
  }



//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log
  curso = {
    nome: "Aline",
    periodo: 8,
    professora: "Katia"
  }
  console.log(curso.nome);
  console.log(curso.periodo);
  console.log(curso.professora);

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
const apenasCachorros = data.filter(animal => animal.tipo == "cachorro");
console.log(apenasCachorros);
// printe no console apenas os gatos
const apenasGatos = data.filter(animal => animal.tipo == "gato");
console.log(apenasGatos);
 //some a idade de todos os gatos juntos
// function  somaGatos(total, data ) {
//   const valorGatos = data.tipo.apenasGatos + data.tipo.apenasGatos;
//     return total + valorGatos;
// }
// const valorTotalGatos = data.reduce(somaGatos,0);
// console.log(valorTotalGatos);

// const somaGatos = data.reduce(function(acumulador, idadeGatos){ 
//   return acumulador + idadeGatos
// },0);
// console.log(somaGatos);


