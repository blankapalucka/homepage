{
    const welcome = () => { console.log("Cześć!") }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".button__themeName");

        body.classList.toggle("body__dark");
        themeName.innerText = body.classList.contains("body__dark") ? "jasny" : "ciemny";

    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);
        welcome();
    }

    init();
}