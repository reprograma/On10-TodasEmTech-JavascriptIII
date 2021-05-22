/* --------- SHERLOCK BUGS --------------- 

Vocês são grandes desenvolvedoras na empresa que sempre sonharam! Uma das suas funções é 
encontrar bugs que fazem com que o projeto não funcione. Para essa tarefa, encontre os erros que fazem com que esses códigos não funcionem e escreva uma solução.

ATENÇÃO: Não é permitido rodar esse código em NENHUM console ou playcode. Usem todo o conhecimento
de vocês para abstrair, supor os problemas e escrever uma possível solução.

*/


//---1.

//FALTOU COLOCAR A FUNCTION e o RETURN

function multiplicacao(a,b) {
    return a * b
}

//---2. 

let item = 0;
while(item < 10) {
    item++
    console.log(item)
};

OU

item = 0;
while(item < 10) {
    return item++
};


//---3. Deve exibir "Banana" 4 vezes // É UM LOOPING 

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(x; x = 0; x+) {
    console.log('x')
}

//O CERTO:
for(let x=0; x < fruits.lenght; x++){
    console.log(fruits[1])
}

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

//NÃO IMPORTA SE NÃO DEFINIR FRASES NEM PALAVRAS

IF(ALGUMA CONDIÇÃO){
    resultado se atende condição
}

OU 

IF(ALGUMA CONDIÇÃO){
    resultado se atende condição
}ELSE{
    OUTRO RESULTADO 
}

DE OUTRA FORMA

if (tiver coca){
    coca
}else if{
    pepsi
} fanta

if(acordar){
    return voltar
}

//resultado

if (frases > palavras) {
    alert("oi gente")
} else if {
    alert ("tchau gente")
}


//---5. Deve exibir o valor da propriedade "sobrenome"


const curso: {
  nome: "Jardinagem",
  periodo: "manha",
  professora: {nome: "Amanda", sobrenome: "Lopes"},    
  } 
  
  console.log('professora.sobrenome');
