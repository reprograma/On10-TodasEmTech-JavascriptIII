
/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.

function multiplicacao(a,b) {
    return a * b  
}

Esse é o certo

function multiplicacao(a, b) {
    return a * b
}

console.log(multiplicacao(2, 5));

//---2. 

while(item > 10) {
    item++
}

Esse é o certo

let item = 0;
while (item < 10) {
    console.log(item);
    item++
}


//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = 0; x+) {
    consolelog(x)
}

Esse é o certo

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for (x = 0; x < fruits.length; x++) {
    console.log(fruits[1])
}

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

let frases = 2;
let palavras = 1;

if (frases > palavras) {
    alert("oi gente")
} else if {
    alert ("tchau gente")
}


//---5. Deve exibir o valor da propriedade "sobrenome"


let curso: {
  nome = "Jardinagem";
  periodo = "manha" ;
  professora = "Amanda" {
      sobrenome = "Lopes"
  };
}
console.log(professora.sobrenome)

FORMA CORRETA

let curso = {
    nome: "Jardinagem",
    periodo: "manha",
    professora: {
        nome: "Amanda",
        sobrenome: "Lopes",
    }
}
console.log(curso.professora.sobrenome)