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
    }
  ]

  
  // console.log(users[0].fullName.lastName);

  for (const user of users) {
    const tableItem = {}
    tableItem.fullName = `${user.fullName.firstName} ${user.fullName.lastName}`
    tableItem.genres = user.genres
    tableItem.score = user.score

    // console.log(tableItem);
  }

  const alterados = users.map(function (user) {
    return {
      fullName: `${user.fullName.firstName} ${user.fullName.lastName}`,
      genres: user.genres,
      score: user.score
    }
  })

  console.log('alterados', alterados)

  // tableItem = {
  //   fullName: "Mariana Lopes";
  //   genres: ["kpop", "rock"];
  //   score: 153
  // }

