// - [Exercício 02](https://www.urionlinejudge.com.br/judge/pt/problems/view/1049) //

function setAnimalType(tipoVertebra) {
  if (tipoVertebra === "vertebrado") {
    const tipoAnimal = prompt("É ave ou mamífero")

    if (tipoAnimal === "ave") {
      const tipoComida = prompt("É carnivoro ou onivoro?")
      tipoComida === "carnivoro" && alert("É uma aguia")
      tipoComida === "onivoro" && alert("É uma pomba")
      return
    }

    if (tipoAnimal === "mamífero"){
      const tipoComida = prompt("É onivoro ou herbivoro?")
      tipoComida === "onivoro" && alert("É um homem")
      tipoComida === "herbivoro" && alert("É uma vaca")
      return
    }
  }

  if (tipoVertebra === "invertebrado")  {
    const tipoAnimal = prompt("É inseto ou anelideo")

    if (tipoAnimal === "inseto") {
      const tipoComida = prompt("É hematofago ou herbivoro?")
      tipoComida === "hematofago" && alert("É uma pulga")
      tipoComida === "herbivoro" && alert("É uma lagarta")
      return
    }

    if (tipoAnimal === "anelideo") {
      const tipoComida = prompt("É hematofago ou onivoro?")
      tipoComida === "hematofago" && alert("É uma sanguessuga")
      tipoComida === "onivoro" && alert("É uma minhoca")
      return
    }
  }
}
setAnimalType(prompt("É vertebrado ou invertebrado?"))