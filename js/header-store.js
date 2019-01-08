const $buttonMenu = document.querySelector(".action.icon");
const $menu = document.querySelector(".menu");

$buttonMenu.addEventListener("click", event => {
    event.preventDefault();
    $menu.classList.toggle("-active");
});