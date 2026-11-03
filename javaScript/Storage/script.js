const DIV = document.createElement("div");
DIV.innerText = getLSData;

const BODY = document.querySelector("body");
BODY.appendChild(DIV);

function PasswordVisibility() {
    const IN = document.getElementById("myPassword");
    const BN = document.getElementById("PasswordControl");

    if (BN.innerHTML === `<i class="bi bi-eye"></i>`) {
        IN.type = "text";
        BN.innerHTML = `<i class="bi bi-eye-slash"></i>`;
    } else {
        IN.type = "password";
        BN.innerHTML = `<i class="bi bi-eye"></i>`;
    }
}