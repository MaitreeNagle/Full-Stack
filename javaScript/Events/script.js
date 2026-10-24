function ShowAlert() {
    alert("click me Button clicked using html")
}

document.getElementById("ClickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("click me Button clicked using Js Event")
}
document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The box was clicked";
});

// document.getElementById("mouseover").addEventListener("mouseenter", () => {
//     document.getElementById("mouseover").innerText = "Pointer is over the paragraph!";
// });
// document.getElementById("mouseover").addEventListener("mouseout", () => {
//     document.getElementById("mouseover").innerText = "Pointer is exit the paragraph!";
// });

// document.getElementById("mousePress").addEventListener("mousedown", () => {
//     document.getElementById("mousePress").innerText = "Mouse button pressed!";
// });

// document.getElementById("mousePress").addEventListener("mouseup", () => {
//     document.getElementById("mousePress").innerText = "Mouse button released!";
// });
// document.getElementById("nameSubmit").addEventListener('click', () => {
//     console.log(document.getElementById("fullName").addEventListener("keydown"))

// })

// // function Login(e) {
// //     document.getElementById("LoginForm").addEventListener("submit", (e) => )
// //     console.log("Login Done");

// // }

function ShowAlert() {
    alert("Click Me Button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("Click Me Button clicked using JS Events");
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});

document.getElementById("box2").addEventListener("mouseenter", () => {
    document.getElementById("box2").innerText = "The mouse Entered to Box";
});
document.getElementById("box2").addEventListener("mouseout", () => {
    document.getElementById("box2").innerText = "The mouse Exit From Box";
});

document.getElementById("nameSubmit").addEventListener("click", () => {
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
    e.key === "Enter" &&
        console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Login Done");
});