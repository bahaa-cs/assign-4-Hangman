
var letters = document.querySelectorAll('.letter')

function typing_letters(){
    console.log(letters[0].textContent)
}

letters[0].addEventListener("click",typing_letters)

