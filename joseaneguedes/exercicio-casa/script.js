/// Manipulando objetos 

// Dado o seguinte objeto:

const users = [{
  fullName: {
    firstName: "Mariana",
    lastName: "Lopes"
  },
  age: 23,
  roles: ["user", "admin"],
  genres: ["kpop", "rock"],
  score: 153

}]


let tableItem = users.forEach(element => {
  console.log('{ Fullname: ' + element.fullName.firstName + ' ' + element.fullName.lastName + ';\nGenres: ' + '[' + element.genres + '];' + '\nScores: ' + element.score + ' }')
});



//Uma solução:

/* let tableItem = [] 
for (objeto of users) {
  tableItem.push({
    fullName: `${objeto.fullName.firstName} ${objeto.fullName.lastName}`,
    genres: objeto.genres,
    score: objeto.score
  })
}

console.log(tableItem) */

// Outra solução: 

/* let tableItem = [] 
for (objeto of users) {
  tableItem.push({
    fullName: objeto.fullName.firstName + ' ' + objeto.fullName.lastName,
    genres: objeto.genres,
    score: objeto.score
  })
}

console.log(tableItem)  */

/*   Você recebeu uma array de objetos da nova desenvolvedora backend do seu trabalho dos sonhos. Porém, percebeu que não vai precisar de todas essas informações! Por conta disso, será necessário criar um novo objeto apenas com aquilo que será utilizado

  Dado o input "users", crie um novo objeto a partir da acima. Ela deverá ter a interface descrita abaixo

  interface TableItem {
    fullName: string;
    genres: string;
    score: number;
  }

  OUTPUT (o que sai do console)

  tableItem = {
    fullName: "Mariana Lopes";
    genres: ["kpop", "rock"];
    score: 153

  } */

// Fonte: https://ricardo-reis.medium.com/objetos-javascript-e347adc3a8ac