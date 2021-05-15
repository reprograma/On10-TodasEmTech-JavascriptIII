/// Manipulando objetos 

// Dado o seguinte objeto:

const users = [
  {
    fullName: {
      firstName: "Mariana",
      lastName: "Lopes"
    },
    age: 23,
    roles: ["user", "admin"],
    genres: ["kpop", "rock"],
    score: 153
  },
]

// Resolução, Rosalyne
let newUsers = [];
for (let i=0; i < users.length; i++) {
  
  let user = users[i];
  let fullNameNew = user.fullName.firstName + " " + user.fullName.lastName;

  let newObject = {
    fullName : fullNameNew,
    genres: user.genres,
    score: user.score
  }

  newUsers.push(newObject);
}

console.log(newUsers);

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

/* RESOLUÇÕES DAS QUESTÔES ABERTAS

1. O que é iteração?

Repetição de uma ação, como por exemplo: pega a função e faz um for com a condição (A cada elemento do meu Array 
multiplica, por 2 ), cada repetição, seria uma interação seria.

2. Qual a diferença de uma function padrão e a arrow function?

O Arrow Function é a forma mais recente de escrever uma função regular (função normal), sendo no formato mais 
clara e concisa

*/
