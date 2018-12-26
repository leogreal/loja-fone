const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", heartHandleClick);

function heartHandleClick() {
    $heart.classList.toggle("-active");
}
