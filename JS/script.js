function toggleCheck() {
    document.querySelector('.custom-checkbox').classList.toggle('checked');
}
function toggleCheck1() {
    document.querySelector('.custom-checkbox1').classList.toggle('checked');
}

const passwordInput = document.getElementById("password")
const passwordToggle = document.getElementById("password-toggle")

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener("click", () => {
        passwordInput.type =
            passwordInput.type === "password" ? "text" : "password";

        passwordToggle.classList.toggle("on");
        passwordToggle.classList.toggle("off");
    });
}
