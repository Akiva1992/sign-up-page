const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const error = document.querySelector(".error");
const form = document.getElementById("form");



form.addEventListener("submit", (e) => {
    if (password.value != confirmPassword.value) {
        error.textContent="*The passwords do not match"
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        e.preventDefault()
    }

});