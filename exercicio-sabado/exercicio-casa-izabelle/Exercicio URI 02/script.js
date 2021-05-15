// - [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1049) //

const tipoVertebra = prompt("É vertebrado ou invertebrado?")

if(tipoVertebra == "vertebrado") {
  const tipoAnimal = prompt("É ave ou mamifero")
    if(tipoAnimal == "ave") {
      const tipoComida = prompt("É carnivoro ou onivoro?")
        if(tipoComida == "carnivoro") {
          alert("É uma aguia")
        } else {
          alert("É uma pomba")
        }
    } else {
      const tipoComida = prompt("É onivoro ou herbivoro?")
        if(tipoComida == "onivoro") {
          alert("É um homem")
        } else {
          alert("É uma vaca")
        }
    } 
} else {  
  const tipoAnimal = prompt("É inseto ou anelideo")
    if(tipoAnimal == "inseto"){
      const tipoComida = prompt("É hematofago ou herbivoro?")
        if(tipoComida == "hematofago") {
          alert("É uma pulga")
        } else {
          alert("É uma lagarta")
        }
    } else {
      const tipoComida = prompt("É hematofago ou onivoro?")
        if(tipoComida == "hematofago") {
          alert("É uma sanguessuga")
        } else {
          alert("É uma minhoca")
        }
    }
}