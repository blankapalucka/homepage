console.log("Cześć!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".button__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body__dark");
    themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";

});
