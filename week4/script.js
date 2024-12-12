// const number = 100;

// let answer = "No even not in this number range";

// let count = 0;

// for (i = 1; i < number; i++) {
//   if (i % 2 === 0) {
//     count = count + 1;
//   }
// }

// console.log(
//   count === 0 ? answer : `There are ${count} even numbers in this range`
// );

// const namesArray = [
//     "Tega", "Samuel", "Goodwill", "Itunu", "Stanley", "Great", "Micheal", "Samuel", "Itunu", "Stanley",
//     "Tega", "Goodwill", "Samuel", "Great", "Tega", "Micheal", "Stanley", "Goodwill", "Itunu", "Samuel",
//     "Micheal", "Great", "Tega", "Stanley", "Goodwill", "Itunu", "Samuel", "Great", "Micheal", "Stanley",
//     "Itunu", "Samuel", "Tega", "Goodwill", "Stanley", "Itunu", "Great", "Micheal", "Samuel", "Stanley",
//     "David", "Favour", "Jessica", "Linda", "Amaka", "Emeka", "Grace", "Ada", "Chidi", "Kemi"
// ];

// for (let i = 0; i < namesArray.length; i++) {
//     if (namesArray[i] === "Amaka") {
//         break;
//     }
//     console.log(namesArray[i]);
// }

const fizz = "Fizz";
const buzz = "Buzz";

for (let i = 1; i <= 100; i++) {
    console.log(i % 2 === 0 ? `${fizz}: ${i}` : `odd: ${buzz}: ${i}`);
}
