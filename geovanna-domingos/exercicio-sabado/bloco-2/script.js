//----- Array

// 1. Crie uma array com 5 frutas diferentes;
let fruits = ["Maça", "Banana", "Limão", "Pêra", "Morango"];


//2. Crie uma array com 100 espaços vazios.
let espacos = new Array(100);

/* Uma solução alternativa:
let espacos = [];
while(espacos.length < 100){
  espacos.push("")
}
console.log(espacos)*/


//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length
console.log(fruits[fruits.length - 1]);


//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;
for(i in fruits){
  console.log(fruits[i])
};


//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).
for(let i = 0; i < 100; i++){
  espacos[i] = i + 1
}
console.log(espacos);

/* Uma solução alternativa:
for(let i = 0; i < espacos.length; i++){
  espacos[i] = (i + 1)
};
console.log(espacos);*/


//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.
let espacos2 = [];
espacos.forEach((item) => {
  espacos2.push(item*2)
});
console.log(espacos2);

/*Uma solução alternativa utilizando apenas for
let espacos2 = [];
for(let i = 0; i < espacos.length; i++){
  espacos2.push(espacos[i] = ((i + 1)*2))
}
/*Uma solução alternativa utilizando o forEach
let espacos2 = [];
espacos.forEach((item) => {
  espacos2.push(item*2)
});
console.log(espacos2);*/


//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração
const elementosQuimicos = ["Hidrogenio", "Helio", "Litio", "Oxigenio"];
elementosQuimicos.forEach((elementosQuimico) => {
  return console.log(`O elemento ${elementosQuimico} tem ${elementosQuimico.length} caracteres em seu nome.`)
})


//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;
let nomes = ["Judite", "Serafina", "Marisa", "Benedita"];
let nomes2 = nomes.map((nome) => {
  return nome = "sra."+nome
});
console.log(nomes2);


//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.
let precosLivros = [10.00, 15.60, 18.99, 65.99, 99.99, 103.78];
let precosLivrosComDesconto = precosLivros.map((preco)=>{
  preco = parseFloat((0.8*preco).toFixed(2))
  return preco
});
console.log(precosLivrosComDesconto);


//---- Filter

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;
let precosLivrosComDesconto2 = precosLivrosComDesconto.filter((preco) => {
  return preco < 30.00
});
console.log(precosLivrosComDesconto2);


//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array
let precoTotalComDesconto = precosLivrosComDesconto.reduce((precoTotal, precoIndividual) => {
  return parseFloat((precoTotal + precoIndividual).toFixed(2))
})
console.log(precoTotalComDesconto);


//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser
let animal = {
  porte: 'pequeno',
  especie: 'cachorro',
  raca: 'chow-chow',
};
console.log(`O ${animal.especie} pertence a raça ${animal.raca} e é de ${animal.porte} porte.`);


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log
const curso = {
  nomeDoCurso: 'Inglês Top',
  periodoDoCurso: '4',
  professoraDoCurso: 'Jamilie',
};
console.log(`${curso.nomeDoCurso} é o nome do curso`);
console.log(`${curso.periodoDoCurso} é o período do curso`);
console.log(`${curso.professoraDoCurso} é a professora do curso`);


//--- tudo junto e misturado!!

//14. Dada a seguinte array de objetos:
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
let cachorros = data.filter((item) => {
  if(item.tipo === "cachorro"){
    return item.nome
  }
});
console.log(cachorros);
/*Uma solução alternativa utilizando ForEach
data.forEach((item) => {
  if(item.tipo === "cachorro"){
    console.log(`${item.nome} é um ${item.tipo}`)
  }
});*/


// printe no console apenas os gatos
let gatos = data.filter((item) => {
  if(item.tipo === "gato"){
    return item.nome
  }
});
console.log(gatos);


// some a idade de todos os gatos juntos
/* Solução utilizando reduce no array gatos */
let idadeTotalGatos = gatos.reduce(function (acumulador, objetoAtual){
  return acumulador + objetoAtual.idade;
}, 0);
console.log(idadeTotalGatos);

/*Uma solução alternativa utilizando ForEach no array data 
let idadeGatos=0;
data.forEach((item) => {
  if(item.tipo === "gato"){
    idadeGatos = idadeGatos + item.idade
  }
});
console.log(`A soma das idades dos gatos é ${idadeGatos}`);*/

/*Uma solução alternativa utilizando reduce no array data 
let idadeTotalGatos = data.reduce(function (acumulador, objetoAtual){
  if(objetoAtual.tipo === "gato"){
    return acumulador + objetoAtual.idade;
  }
}, 0);
console.log(idadeTotalGatos);*/