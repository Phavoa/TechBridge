const alpha = {
  A: "Z",
  B: "Y",
  C: "X",
  D: "W",
  E: "V",
  F: "U",
  G: "T",
  H: "S",
  I: "R",
  J: "Q",
  K: "P",
  L: "O",
  M: "N",
  N: "M",
  O: "L",
  P: "K",
  Q: "J",
  R: "I",
  S: "H",
  T: "G",
  U: "F",
  V: "E",
  W: "D",
  X: "C",
  Y: "B",
  Z: "A",
};

const reverseWord = (str) => {
  let reversedWord = "";
  for (let char of str.toUpperCase()) {
    if (alpha[char]) {
      reversedWord += alpha[char];
    } else {
      reversedWord += char;
    }
  }
  return reversedWord;
};

console.log(reverseWord("My love"));

// const gameOptions = ["rock", "paper", "scissors"];

// const computerChoice = () => {
//     return gameOptions[Math.floor(Math.random() * 3)];
// };

// const startGame = (userChoice) => {
//     const computer = computerChoice();
//     userChoice = userChoice.toLowerCase();

//     alert(`User Choice: ${userChoice} Computer Choice: ${computer}`);

//     if (userChoice === computer) {
//         alert("It's a Draw!");
//     } else if (
//         (userChoice === "rock" && computer === "scissors") ||
//         (userChoice === "scissors" && computer === "paper") ||
//         (userChoice === "paper" && computer === "rock")
//     ) {
//         alert("You Win!");
//     } else {
//         alert("You Lose!");
//     }
// };

// const runGame = () => {
//     let user = window.prompt("ROCK PAPER SCISSORS");
//     if(!user){
//         alert("LOSER YOU DIDNT PICK ANYTHING")
//     }
//     startGame(user);
// }
// // PLAY GAME:
// const playGame = document.querySelector("button");
// playGame.addEventListener("click", () => {
//     runGame()
// })

// const myName = "Oghenetega";
// let age = 24;

// age = 200;
// console.log(age)

// const school = null;
// const age = 24;
// let isBoy = null;

// console.log(typeof(animal));

// const name = "tega";

// const names = [
//   "tega",
//   "stanley",
//   "Taiwo",
//   "kaffy",
//   "Bridget",
//   "Taiwo",
//   "Moshood",
// ];

// const ageOfPeople = [24, 25, 28, 83, 99];

// const isInTheMeeting = [true, false];

// const nameAndAge = [
//   "name",
//   ["tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy"],
//   "sdafhkiloikujdfszdgfhjkl",
//   [24, 25, 28, 83, 99],
//   [true, false, true, false, false],
// ];

// console.log(nameAndAge[1][3]);

// const age = {
//     tega: 24,
//     stanley: 27,
//     kaffy: 29,
//     taiwo: 49
// }


// {
//     tega: {}
// }

// console.log(age.taiwo)


// let i = 1;

// const names = ["tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy","tega", "stanley", "Taiwo", "kaffy", "tega", "Taiwo", "kaffy"];

// for (i; i <= names.length; i++) {
//     console.log(names[i])
// }