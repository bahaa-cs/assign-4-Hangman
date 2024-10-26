
function display_answer(elements,iteration,element_id,word){
    var letter = elements[iteration].textContent
    
    if (word.includes(letter)){

        var result = Array(word.length).fill('_ ')
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                result[i] = letter;
            }
        }
        document.getElementById(element_id).innerHTML = result.join(' ')
    }
    
}

function word_generator(){
    var words=["ENGINEER", "ART", "FLEXBOX", "PRESSURE", "VISION","DISCIPLINE","LOGIC","DEADLINES"]
    var index=Math.floor(Math.random() * words.length)
    return words[index]
}
var word = word_generator()
document.getElementById("answer-section").innerHTML = "_ ".repeat(word.length)

var letters = document.querySelectorAll('.letter')


for(let i=0;i<letters.length;i++){
    letters[i].addEventListener("click",function(){display_answer(letters,i,"answer-section",word)})
}







