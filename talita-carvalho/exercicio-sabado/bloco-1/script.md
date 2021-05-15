/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.

multiplicacao(a,b) {
    a * b 
} 
<!-- FORMA CORRETA ABAIXO: -->
function multiplicacao(n1, n2) {
    return n1 * n2
}

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

//---2. 

while(item > 10) {
    item++
}
<!-- FORMA CORRETA ABAIXO: -->
1°: o item precisa de uma variável

let item = 0 

while(item < 10) {
    item++
}

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = 0; x+) {
    consolelog(x)
}

<!-- FORMA CORRETA ABAIXO: -->
const fruits = ["Maça", "Banana", "Limão", "Pêra"]

for (let index = 0; index < 4; index++) {
    console.log(fruits[1]);
}

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

if frases < palavras {
    alert("oi gente")
} else if {
    aler ("tchau gente")
}
<!-- FORMA CORRETA ABAIXO: -->
const frases = 'saudação'
const palavras = 'despedida'

function alerta() {
    if (frases > palavras) {
        return console.log('Oi, gente!')
    } else if (frases > palavras) {
        return console.log('Tchau, gente!')
    }
}
alerta()


<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

//---5. Deve exibir o valor da propriedade "sobrenome"


let curso: {
  nome = "Jardinagem";
  periodo = "manha" ;
  professora = "Amanda" {
      sobrenome = "Lopes"
  };
}

<!-- FORMA CORRETA ABAIXO: -->
const curso = {
    nome:'Jardinagem',
    periodo:'manhã',
    professora:'Amanda'
};
console.log(curso);
curso.sobrenome = 'carvalho'
console.log(curso);

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~ FIM! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->