// function multiply(num1, num2) {
//   let multiplicationTable = ``;
//   for (let i = 0; i <= num2; i++) {
//     multiplicationTable = `${num1} X ${i} = ${num1 * i}`;
//     console.log(multiplicationTable);
//   }
// }

// multiply(2, 20);

// const alpha = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// const reversedAlpha = [...alpha].reverse();

// const reverseString = (str) => {
//   let result = "";

//   for (let char of str.toUpperCase()) {
//     const index = alpha.indexOf(char);

//     if (index !== -1) {
//       result += reversedAlpha[index];
//     } else {
//       result += char;
//     }
//   }

//   return result;
// };

// console.log(reverseString("The Beginning After the end"));

// class Name {
//   constructor(name) {
//     this.name = name;
//   }


//   getName = () => {
//     return method.Name;
//   };
// }

// const myname = new Name("Oluwafemi");
// console.log(myname.getName());



const alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const reversedAlpha = [...alpha].reverse();

const reverseString = (str) => {
  let result = "";

  for (let char of str.toUpperCase()) {
    const index = alpha.indexOf(char);

    if (index !== -1) {
      result += reversedAlpha[index];
    } else {
      result += char;
    }
  }

  return result;
};

// console.log(reverseString("The Beginning After the end"));

console.log(document)