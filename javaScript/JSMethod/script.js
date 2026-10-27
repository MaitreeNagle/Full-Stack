const str = "Maitree Nagle";
console.log(str.charAt(3));
console.log(str.at(3));


// const arr = [10, 24, 32, 53, 46, 76, 89]
// console.log(arr.at[2]);
// console.log(arr.charAt[2]);


const str2 = str.slice(1, 6);
console.log(str2);

const str3 = str.substring(2, 5);
console.log(str3);

const name = "   Rahul Sharma   ";

console.log(name.trim());
const text = "   Hello   ";

console.log(text.trimStart());
console.log(text.trimEnd());

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));
console.log("Hi ".repeat(3));
console.log("*".repeat(5));

const subjects = "HTML,JavaScript,React";

console.log(subjects.split(","));
const sentence = "JavaScript is useful";

console.log(sentence.split(" "));
const word = "CODE";

console.log(word.split(""));

console.log("HTML CSS JS".split());