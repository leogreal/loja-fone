const $btnSecond = window.document.querySelector(".-second");
const $actionLast = window.document.querySelector("a.-last");
 
$btnSecond.addEventListener("click", btnSecondHandleClick);
 
function btnSecondHandleClick() {
    $actionLast.innerHTML = "Carrinho Cheio";
}
