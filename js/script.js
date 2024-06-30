// opening and closing mobile menu

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#open-menu-btn").addEventListener("click", function () {
        document.querySelector(".mobile-menu").classList.add("visible")
    });


    document.querySelector("#close-menu-btn").addEventListener("click", function () {
        document.querySelector(".mobile-menu").classList.remove("visible")
    });

    document.querySelector(".mobile-nav").addEventListener("click", function () {
        document.querySelector(".mobile-menu").classList.remove("visible")
    });
});
