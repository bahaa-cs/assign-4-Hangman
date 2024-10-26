
function typing_letters(elements,iteration){
    console.log(elements[iteration].textContent)
}

var letters = document.querySelectorAll('.letter')

for(var i=0;i<letters.length;i++){
    var letters = document.querySelectorAll('.letter')
    letters[i].addEventListener("click",function(){typing_letters(letters,i)})
}