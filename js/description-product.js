const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", heartHandleClick);

function heartHandleClick() {
    $heart.classList.toggle("-active");
}


/* Star Rank */
const $stars = window.document.querySelector(".-star").childNodes;

$stars.forEach(star => {
    if(star.nodeName === "IMG"){
        star.addEventListener("click", fillStars);
    }
});

function fillStars(){
    const { rate } = this.dataset;
    $stars.forEach(star => {
        if(star.nodeName === "IMG" && star.dataset.rate <= rate){
            star.src = "img/star-active.png";
        } else {
            star.src = "img/star.png";
        }
    })
}