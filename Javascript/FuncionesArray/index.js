const users = [
  {
    name: "Ronaldinho Gaúcho",
    city: "Porto Alegre",
    birthYear: 1980,
  },
  {
    name: "Van Batchelder",
    city: "London",
    birthYear: 1998,
  },
  {
    name: "Winter Rubino",
    city: "Madrid",
    birthYear: 1992,
  },
  {
    name: "Yusuf Shea",
    city: "Paris",
    birthYear: 1990,
  },
  {
    name: "Zion Shively",
    city: "Alabama",
    birthYear: 2002,
  },
];

const currentYear = new Date().getFullYear();

// const funcion = () => {
//   for (let index = 0; index < users.length; index++) {
//     if (currentYear - users[index].birthYear > 25) {
//       return true;
//     }
//   }
// };

const filteredUsers = users.find((item) => currentYear - item.birthYear < 25);
console.log(filteredUsers);
// users.forEach((item) => console.log(item));
