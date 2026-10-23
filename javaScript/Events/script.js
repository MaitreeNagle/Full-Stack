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

document.getElementById("mouseover").addEventListener("mouseenter", () => {
    document.getElementById("mouseover").innerText = "Pointer is over the paragraph!";
});
document.getElementById("mouseover").addEventListener("mouseout", () => {
    document.getElementById("mouseover").innerText = "Pointer is exit the paragraph!";
});

document.getElementById("mousePress").addEventListener("mousedown", () => {
    document.getElementById("mousePress").innerText = "Mouse button pressed!";
});

document.getElementById("mousePress").addEventListener("mouseup", () => {
    document.getElementById("mousePress").innerText = "Mouse button released!";
});
document.getElementById("nameSubmit").addEventListener('click', () => {
    console.log(document.getElementById("fullName").addEventListener("keydown"))

})

// function Login(e) {
//     document.getElementById("LoginForm").addEventListener("submit", (e) => )
//     console.log("Login Done");

// }