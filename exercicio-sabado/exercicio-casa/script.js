/// Manipulando objetos 
// Dado o seguinte objeto:

const users = [
  {
    fullName: 
      {
        firstName: "Mariana",
        lastName: "Lopes"
      },
    age: 23,
    roles: ["user", "admin"],
    genres: ["kpop", "rock"],
    score: 153
  },
  {
    fullName: 
      {
        firstName: "Mirella",
        lastName: "Raposo"
      },
    age: 24,
    roles: ["user", "admin"],
    genres: ["rock", "rap"],
    score: 103
  },
]

function novaInterface () {
  return users.map(user => ({
    fullName: `${user.fullName.firstName} ${user.fullName.lastName}`,
    genres: user.genres,
    score: user.score,
  }))
};

const tableItem = novaInterface();

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