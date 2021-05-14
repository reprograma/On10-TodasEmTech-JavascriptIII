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
Resposta da 1: falta chamar a função que é (function) e o return
->function multiplicacao(a,b) {
    return a * b 
}

//---2. 

while(item > 10) {
    item++
}
Resposta da 2: o item precisa ser definido e tbm precisa do return obs:(o while não é a melhor opção para fazer loop)

//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = 0; x+) {
    consolelog(x)
}
Resposta da 3: for(let x=0; x < fruits.length; x++){
    console.log(fruits[1])
}

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

if frases < palavras {
    alert("oi gente")
} else if {
    aler ("tchau gente")
}
Resposta da 4

//---5. Deve exibir o valor da propriedade "sobrenome"


let curso: {
  nome = "Jardinagem";
  periodo = "manha" ;
  professora = "Amanda" {
      sobrenome = "Lopes"
  };
}
console.log(professora.
sobrenome)
Resposta da 5: