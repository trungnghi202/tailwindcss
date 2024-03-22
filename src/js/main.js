window.addEventListener("scroll", (e) => {
    var header = document.querySelector("header");
    if (window.scrollY > header.offsetHeight) {
        header.classList.add("bg-primary");
    } else {
        header.classList.remove("bg-primary");
    }
});