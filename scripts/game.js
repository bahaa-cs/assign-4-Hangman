
function typing_letters(elements,iteration){
    console.log(elements[iteration].textContent)
}

var letters = document.querySelectorAll('.letter')

for(let i=0;i<letters.length;i++){
    letters[i].addEventListener("click",function(){typing_letters(letters,i)})
}

function word_generator(){
    var words=["Engineer", "Art", "FlexBox", "Pressure", "Vision"]
    var index=Math.floor(Math.random() * words.length)
    return words[index]
}

console.log(word_generator())


// document.getElementById("answer-section").innerHTML = "-".repeat(2);
