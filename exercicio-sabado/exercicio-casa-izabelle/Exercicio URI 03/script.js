//- [Exercício 03](https://www.urionlinejudge.com.br/judge/pt/problems/view/1066) //

let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    par++;
  } else {
    impar++;
  }
  if (i > 0) {
    positivo++;
  } else if (i < 0) {
    negativo++;
  }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`) 
console.log(`${negativo} valor(es) negativos(s)`)