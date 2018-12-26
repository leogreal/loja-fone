const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", heartHandleClick);

function heartHandleClick() {
    $heart.classList.toggle("-active");
}


/* Star Rank */
const $stars = window.document.querySelector(".-star").childNodes;

for (let i = 0; i < $stars.length; i++) {
    $stars[i].addEventListener("click", function() {
        if(this.src.includes("star.png")){
            this.src = "img/star-active.png";
        } else {
            this.src = "img/star.png";
        }
    });        
}
