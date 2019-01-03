const $search = document.querySelector(".search");
const $searchIcon = document.querySelector(".search > .icon");

$searchIcon.addEventListener("click", () => {
    $search.classList.toggle("-active");
});