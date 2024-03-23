window.addEventListener("scroll", (e) => {
    var header = document.querySelector("header");
    if (window.scrollY > header.offsetHeight) {
        header.classList.add("bg-primary");
    } else {
        header.classList.remove("bg-primary");
    }
});

document.querySelector(".btn-eye").addEventListener("click", (e) => {
    var inputPass = document.querySelector(".form-login #password");

    if (inputPass.getAttribute("type") == "password") {
        inputPass.setAttribute("type", "text");
    } else {
        inputPass.setAttribute("type", "password");
    }
});

// tab login & register
document.querySelector("form .btn-register").addEventListener("click", (e) => {
    var cardLogin = document.querySelector(".card-login");
    var cardRegister = document.querySelector(".card-register");

    if (cardLogin.getAttribute("class").includes("hidden")) {
        cardLogin.classList.remove("hidden");
        cardRegister.classList.add("hidden");
    } else {
        cardLogin.classList.add("hidden");
        cardRegister.classList.remove("hidden");
    }
});