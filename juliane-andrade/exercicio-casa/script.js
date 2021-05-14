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
}, ]

/*
  Você recebeu uma array de objetos da nova desenvolvedora backend do seu trabalho dos sonhos. Porém, percebeu que não vai precisar de todas essas informações! Por conta disso, será necessário criar um novo objeto apenas com aquilo que será utilizado

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

  }
*/
const tableItem = users.map((item) => {
    return {
        fullName: item.fullName.firstName + '' + item.fullName.lastName,
        genres: item.genres,
        score: item.score
    }
})

console.log(tableItem);



//Aprendendo outras Formas de fazer das colegas do bootcamp
/*
let newArray = [];

for (let i = 0; i < users.length; i++) {
    let people = users[i];
    let name = people.fullName.firstName + ' ' + people.fullName.lastName;
    let newObject = {
        fullName: name,
        genres: people.genres,
        score: people.score
    };
    newArray.push(newObject);
}
console.log(newArray)
*/