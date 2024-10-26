


function display_answer(elements,iteration,element_id,word,hangman_id){
    var letter = elements[iteration].textContent
    
    if (word.includes(letter)){

        var result = document.getElementById(element_id).innerHTML.split(' ')
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                result[i] = letter;
            }
        }
        document.getElementById(element_id).innerHTML = result.join(' ')

    }
    else{
        var hang_html=document.getElementById(hangman_id).innerHTML
        var head = "<img src='./assets/head.svg' class='head' />"
        var body = "<img src='./assets/body.svg' class='body' />"
        var left_hand = "<img src='./assets/left-hand.svg' class='left-hand' />"
        var left_leg = "<img src='./assets/left_leg.svg' class='left_leg' />"
        var right_hand = "<img src='./assets/right_hand.svg' class='right_hand' />"
        var right_leg = "<img src='./assets/right_leg.svg' class='right_leg' />"
        if (!hang_html.includes(head))
            document.getElementById(hangman_id).innerHTML+=head;
        else if(!hang_html.includes(body))
            document.getElementById(hangman_id).innerHTML+=body;
        else if (!hang_html.includes(left_leg))
            document.getElementById(hangman_id).innerHTML+=left_leg;
        else if (!hang_html.includes(right_leg))
            document.getElementById(hangman_id).innerHTML+=right_leg;
        else if (!hang_html.includes(left_hand))
            document.getElementById(hangman_id).innerHTML+=left_hand;
        else if (!hang_html.includes(right_hand))
            document.getElementById(hangman_id).innerHTML+=right_hand;
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
    letters[i].addEventListener("click",function(){display_answer(letters,i,"answer-section",word,"hang")})
}

// if(!document.getElementById(answer-section).innerHTML.includes("_")){
//     alert("You Won!")
//     location.reload()
// }







