
function typing_letters(elements,iteration){
    console.log(elements[iteration].textContent)
}

var letters = document.querySelectorAll('.letter')

for(let i=0;i<letters.length;i++){
    letters[i].addEventListener("click",function(){typing_letters(letters,i)})
}