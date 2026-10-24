// const button = document.getElementById("greetBtn");
// const result = document.getElementById("result");

// function greetUser() {
//     result.textContent = "Hello, student!";
// }

// button.addEventListener("click", greetUser);

// const b = document.getElementById("wellcome");
// button.addEventListener("click", function() {
//     document.getElementById("wellcome").textContent = "wellcome to bhopal";

// });
const button = document.getElementById("messageBtn");

function showMessage() {
    console.log("Button clicked!");
}

button.addEventListener("click", showMessage);

// Remove the click listener
button.removeEventListener("click", showMessage);
const shownAssbtn = document.getElementById("stopAssignmentNotification");
const shownAttbtn = document.getElementById("stopAssignmentNotification");
const shopAssbtn = document.getElementById("stopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
// const attparaument.getElementById("AssignmentNotification");


function shownAssigment() {
    assPara.textContent = "Your assisment deadline is approved!";
}
shownAssbtn.addEventListener("click", shownAssigmen);

shownAttbtn.addEventListener("click", () => {
    attPara.textContent = "please check your attendence status";

});



const parant = document.getElementById("outter");
const child = document.getElementById("inner");

parent.addEventListener("click", () => {
    console.log("parent Clicked");

});
child.addEventListener("click", () => {
    console.log("Child Clicked");

});