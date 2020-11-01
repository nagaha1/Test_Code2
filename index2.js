const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

console.log(myHeading);

// import chalk from "chalk";
// nmpなので、そもそもインストールしてない
// console.log(chalk.yellow("Helloooooo"));

const nmubers = [1, 2, 3];

console.log(nmubers);

nmubers.push(10);

console.log(nmubers);

nmubers.forEach(nmb => {
  console.log(nmb);
});

nmubers.forEach(abc => {
  console.log(abc);
});

const names = [
  { firstName: "nagisa", lastName: "arakaki" },
  { firstName: "kendta", lastName: "maeda" }
];
console.log(names);

// const fullName = names.map(names => {
//   return names.firstName + names.lastName;
// });
// // return names.firstName + names.lastName;

// console.log(fullName);
