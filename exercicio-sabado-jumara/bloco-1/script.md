/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.
Errado:
multiplicacao(a,b) {
    a * b  
}

Certo:
function multiplicacao(a,b) {
    return a * b  
}


//---2. 

Errado:
while(item > 10) {
    item++
}

Certo:
item = 0;

while(item < 10) {
    return item++;
    console.log(item);
}


//---3. Deve exibir "Banana" 4 vezes

Errado:
const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = 0; x+) {
    consolelog(x)
}

Certo:
const fruits = ["Maça", "Banana", "Limão", "Pêra"];
 
for(let x=0; x < fruits.length; x++);
    console.log(fruits[1]);
}

let x = 0
x = 0 
x < fruits.length = TRUE OR FALSE
0 < 4 => SIM => 1x => BANANA 
1 < 4 => SIM => 1x => BANANA 
2 < 4 => SIM => 1x => BANANA 
3 < 4 => SIM => 1x => BANANA 
4 < 4 => NÃO => não roda mais => fim



//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

Errado:
if frases < palavras {
    alert("oi gente")
} else if {
    aler ("tchau gente")
}

Certo:
if (frases > palavras) {
    alert("oi gente")
} else {
    alert ("tchau gente")
}


//---5. Deve exibir o valor da propriedade "sobrenome"

Errado:
let curso: {
  nome = "Jardinagem";
  periodo = "manha" ;
  professora = "Amanda" {
      sobrenome = "Lopes"
  };
}
console.log(professora.sobrenome)

Certo:
const objeto = {
  nome: "Jardinagem",
  periodo: "manha", 
  professora: {nome: "Amanda", sobrenome: "Lopes"},
};
console.log(objeto.professora.sobrenome);

