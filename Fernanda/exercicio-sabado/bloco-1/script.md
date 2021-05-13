/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.

multiplicacao (a,b){
     a*b
}


let a = 1
let b = 2

multiplicacao(a*b) => {
    console.log(multiplicação);  
}
resposta 
function multiplicacao (a,b){
    return a*b
}


//---2. 

while(item > 10) {
    item++
}

resposta 

item = 0 ( em uma função do tipo while precisa ser atendida para que a rotina rode e ela precisa de uma inicialização , exemplo item = 11 ( maior que 10 e foi inicializada com um valor atribuído ao item))

//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = [1]; ) {
    consolelog(x)
}

resposta
const fruits = ["Maça", "Banana", "Limão", "Pêra"];

for (let x=0 ; x< fruits.lenght; x++){
    console.log(fruits[1])
}

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

const frases; 
const palavras;

if (frases < palavras) => {
    alert("oi gente");
} else if {
    alerta ("tchau gente");
}

resposta 
if (frases > palavras) {
    alert("oi gente");
} else {
    alerta ("tchau gente");
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

resposta 

let curso: {
  nome: "Jardinagem",
  periodo: "manha" ,
  professora:{
      nome: "Amanda" ,
      sobrenome: "Lopes"
  };
}
console.log(professora.sobrenome);
