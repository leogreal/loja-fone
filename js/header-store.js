const $search = document.querySelector(".search");
const $searchIcon = document.querySelector(".search > .icon");

$searchIcon.addEventListener("click", () => {
    $search.classList.toggle("-active");

    if ($searchIcon.innerHTML == "🔍") {
        $searchIcon.innerHTML = "❌"
    } else {
        $searchIcon.innerHTML = "🔍"
    }
});