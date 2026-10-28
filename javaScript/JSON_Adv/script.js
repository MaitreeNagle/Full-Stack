const ab = {
    name: "Aarav",
    age: 20,
    city: "Bhopal",
    course: "MERN Stack"
}

console.log(Object.keys(ab));
console.log(Object.values(ab));
console.log(Object.entries(ab));
//Destructuring

const { name, age, city } = ab;
// Extract Only the Properties You Need
console.log(name);
console.log(age);
console.log(ab.course);



//Spread operator
const ar = [10, 20, 30, 40];

console.log(...ar); //for loop only 3dought
for (var i = 0; i < ar.length; i++) {
    console.log(ar[i]);

}

const xyz = () => {
    console.log({...ar });

};
xyz();

const ar2 = [1, 2, 3, ...ar, 4, 5];
console.log(ar2);

//Rest Operatorfunction
function displayStudent(name, ...subjects) {
    console.log("Student:", name);
    console.log("Subjects:", subjects);
}


displayStudent("Aarav", "HTML", "CSS", "JavaScript");


function sum(...n) {
    return n.result = n.reduce((result = 0, num) => (result += num));
}
const answer = sum(2, 3, 4, 5, 6, 7, 8, 9);
console.log(answer);