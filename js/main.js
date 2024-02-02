const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

let burgerMenu = document.querySelector(".burger");
let bars = document.querySelector(".bars");
// let burger = document.querySelector(".burger");

bars.addEventListener("click", () => {
  burgerMenu.classList.toggle("hideBurger");
});
