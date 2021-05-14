//---1.
function multiplicacao(a,b) {
    return a * b 
};
console.log(multiplicacao(2,4));

//---2. 
let item = 0;
while(item < 10) {
    item++
    console.log(item)
};

//---3. Deve exibir "Banana" 4 vezes
let fruits = ["Maça", "Banana", "Limão", "Pêra"];
for(let x = 0; x < fruits.length; x++) {
    if(fruits[x] === 'Banana'){
        for(let i = 1; i<=4; i++){
            console.log(fruits[x])
        }
    }
};

//---4. Deve exibir um alerta "oi gente" se o primeiro elemento for maior que o segundo
let elemento1 = "frases";
let elemento2 = "palavras";
if (elemento1.length > elemento2.length) {
    console.log("oi, gente")
} else {
    console.log("tchau, gente")
};

//---5. Deve exibir o valor da propriedade "sobrenome"
let curso = {
  nome: "Jardinagem",
  periodo: "manha" ,
  professora:{
    nome: "Amanda",
    sobrenome: "Lopes"
  }
};
console.log(curso.professora.sobrenome);