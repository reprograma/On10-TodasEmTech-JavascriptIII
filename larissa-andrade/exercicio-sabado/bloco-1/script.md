/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.

function multiplicacao(a,b) {
    return(a * b);  
}

//---2. 
let item =0;
while(item < 10) {
    item++;
}


//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(let x=0; x < 4; x++) {
    console.log(fruits[1]);
}

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

if (frases.length > palavras.length) {
    alert("oi gente");
} else {
    alert("tchau gente");
}


//---5. Deve exibir o valor da propriedade "sobrenome"


let curso = {
  nome: "Jardinagem",
  periodo: "manha",
  professora: {nome: "Amanda",
  sobrenome: "Lopes"
  };
};
console.log(curso.professora.sobrenome);