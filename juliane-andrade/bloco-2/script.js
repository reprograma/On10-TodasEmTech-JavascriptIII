//----- Array

// 1. Crie uma array com 5 frutas diferentes;

const frutas = ['maçã', 'uva', 'abacate', 'morango', 'pinha'];


//2. Crie uma array com 100 espaços vazios.


let posicoes = new Array(100);

//let posicoes = [];
//posicoes.length = 100;
//console.log(posicoes);

//3. Printe o ultimo elemento da array de frutas, baseando-se no seu length

//console.log(frutas[frutas.length - 1]);


//----- For

//4. Printar na tela em cada linha o nome de uma fruta da array anterior;

/*

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])

}

for (i of frutas) {
    console.log(i);
}
*/

//5. Inserir números crescentes a partir do 1 na array de 100 slots (a array vai ter 100 items, com o primeiro sendo 1 e o último sendo 100).


for (let i = 0; i < posicoes.length; i++) {
    posicoes[i] = i + 1;
}
//console.log(posicoes);



//----- ForEach

//6. criar uma array, cujos itens sejam o dobro dos items da array de 100 itens.
/*UMA FORMA DE RETORNAR O DOBRO(PRINTA UM ITEM DO ARRAY POR LINHA)*/

posicoes.forEach((value, index, array) => {
    console.log(array[index] = value * 2);
});


/* OUTRA FORMA DE RETORNAR O DOBRO SEM ALTERAR O VALOR DO ARRAY ORIGINAL (PRINTA UM ITEM DO ARRAY POR LINHA)
posicoes.forEach((item) => {
    console.log(item * 2)
})
*/

/*ESTA FORMA VOCÊ ALTERA O VALOR DO ARRAY ORIGINAL, E RETORNA O ARRAY ORIGINAL COM OS VALORES DUPLICADOS
posicoes.forEach((item, index) => {
    return posicoes[index] = item * 2;
})
console.log(posicoes);*/

//7. Dada a seguinte array, printe o tamanho de cada string a cada iteração.

const elementosQuimicos = ['Hidrogênio', 'Hélio', 'Lítio', 'Oxigênio']

elementosQuimicos.forEach((tamanhoNome) => {
    console.log(tamanhoNome.length)
})


//---- Map

//8. Dada uma array de nomes, criar uma nova array que adiciona o pronome de tratamento "sra." antes de cada nome;

const nomes = ['Mariana', 'Juliane', 'Vitoria', 'Ferdinanda']

let nomesFormatados = nomes.map((nome) => {
    return 'Sra. ' + nome
})
console.log(nomesFormatados);

//9. Dado uma array de preços de livros, retorne uma array com os preços com desconto de 20%.

const precoLivros = [10, 20, 30, 40]

let desconto = precoLivros.map((preco) => {
    return preco - (preco * 0.20)
})

console.log(desconto)


//---- Filter

const numeros = [1, 2, 3, 4, 5];
let filtrado = numeros.filter((item) => {
    return item > 3;
})

console.log(filtrado);

//10. Dada a array de livros *com desconto*, crie uma nova array contendo todos os preços que estão abaixo de 30;
const precosLivros = [8, 10, 30, 40]

let resultado = precosLivros.filter((preco) => {
    if (preco < 30) {
        return preco
    }
})

console.log(resultado)


//---- Reduce

//11. Como essa promoção de livros está muito boa e você tem dinheiro para comprar os livros que quer, some os preços com desconto dessa array

const precoDosLivrosQueVouComprar = [8, 10]

const somaPrecos = precoDosLivrosQueVouComprar.reduce((acc, valorInicial) => {
    return acc + valorInicial
}, 0)

console.log(somaPrecos)

//---- Objetos

//12. Crie um objeto chamado animal com as seguintes propriedades: porte, especie e raca; coloque os valores que quiser


//13. Crie um objeto curso que receba as propriedades: nome, período, professora. Atribua valores as propriedades criadas e separadamente mostre as propriedades no console.log


//--- tudo junto e misturado!!

//. Dada a seguinte array de objetos:

const data = [{
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
    return animal.tipo == 'cachorro'
});

console.log(doguinhos)

// printe no console apenas os gatos
let gatinhos = data.filter((animal) => {
    return animal.tipo == 'gato'
});

console.log(gatinhos)

// some a idade de todos os gatos juntos

let reducer = data.reduce((acc, val) => {
    if (val.tipo == 'gato') {
        acc += val.idade
    }
    return acc
}, 0)

console.log(reducer)