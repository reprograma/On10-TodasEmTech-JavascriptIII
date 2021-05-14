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

// chama depois: 
multiplicacao(2,2)


//---2. 

while(item > 10) {
    return item++  
}

// Resolução

item = 0

while(item < 10) {
    return item++  
}


//---3. Deve exibir "Banana" 4 vezes

const fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(1; x = 0; x+) {
    consolelog(1);
}

//sintaxe for
for(let i=0; i < fruits.length; i++){
    console.log(fruits[1])
}

//para entender melhor



i < frutis.length = true ou false
1) 0 < 4 ? Sim => ++ => Banana
2) 1 < 4 ? Sim => ++ => Banana
3) 2 < 4 ? Sim => ++ => Banana
4) 3 < 4 ? Sim => ++ => Banana
5) 4 < 4 ? Não => false => saio do break, termina o looping

return 4x banana


//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo

if(alguma condicao){
    resultado atende condicao
}

if(acordar){

}

if(alguma condicao){
    resultado atende condicao
} else {
    outro resultado
}


if(tiver coca) {
    coca
} else if {
    pepsi
} fanta

if frases > palavras {
    alert("oi gente")
} else if {
    alert ("tchau gente")
}

// só tem duas possibilidades então só precisa do else
tudo que vem depois do if tem que estar entre parenteses
comando(coordena, aquilo que precisa ser feito)

pra testar no console
let frases = 2
palavras = 1


if (frases > palavras) {
    alert("oi gente")
} else{
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
console.log(professora.sobrenome);

//certo

const objeto = {
    nome: "jardinagem",               
    periodo: "manha",
    professora: {                   //propriedade que tem outras propriedades                                           
        nome: "Amanda",
        sobrenome: "lopes",
        //colocar virgula em tudo nesse caso
        // no console log
        objeto.professora.sobrenome
    }


console.log(objeto.professora.sobrenome)