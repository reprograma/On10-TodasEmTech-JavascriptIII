//  Função que precisa de um nome e uma lista de argumentos
//RESPOSTA: Exemplo 1 DO SCRIPT.MD: se colocar a palavra debugger no meio da funcao e abrir o console log no google da pra ver os bugs.

/* 
#return não necessariamente exibe. como se fosse uma palavra reservada que o js usa e que vai executar uma funcao e dar o resultado. O resultado é o return. return é o resultado de uma funcao que foi executada.#
#alert aparece um popup no navegador ==>  para o usuario.
#console.log aparece o resultado no console ==> para o desenvolvedor.

resumo: 
1 - alert() => para o usuário
2 - console.log() => para o desenvolvedor 
FUNCAO:
#Toda vez que a gente ouvir metodo, estamos tratando de uma funcao.#
metodo X funcao
especifico X generico

*/
/* A forma correta de fazer para rodar no console do gogle chrome */
/* //---1.
function multiplicacao(a,b) {
    return(a * b)
}
multiplicacao(2,2) */

/* Para imprimir precisaria criar um arquivo index.html e rodar pelo html em conexão com o script. */
/* ==================================================== */
// EXEMPLO II
//---2. 
/* item = 0
while(item > 10) {

    item++
}
 */
/* Tomar cuidado com o atendimento das condicoes do while para nao entrar num loop infinito. O uso é desaconselhado. */

// EXEMPLO III

//---3. Deve exibir "Banana" 4 vezes
// Jeito errado:
/* const fruits = ["Maça", "Banana", "Limão", "Pêra"];

for(fruits; fruits <=4; fruits++) {
  console.log(fruits)  
} */

//Jeito certo:
/* const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for (let x =0; x < fruits.length; x++) {
  console.log(fruits[1])
} */

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo
//exemplo 4 corrigido

/* if (frases > palavras) {
    alert("oi gente")
} else {
    alert ("tchau gente")
} */

//5.Deve exibir o valor da propriedade "sobrenome"
// jeito certo.

/* const objeto = {
  nome: "Jardinagem",
  periodo: "manha",
  professora: {
      nome: "Amanda", 
      sobrenome: "Lopes",
  }
}
console.log(objeto.professora.sobrenome) */





