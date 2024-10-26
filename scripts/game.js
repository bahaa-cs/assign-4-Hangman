var hang_html=[];
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
        if(!result.includes("_")){
            setTimeout(() => {
                alert("You Win");
                location.reload();
            }, 600);   
        }
    }
    else{
        
        var head = "<img src='./assets/head.svg' class='head' />"
        var body = "<img src='./assets/body.svg' class='body' />"
        var left_hand = "<img src='./assets/left-hand.svg' class='left-hand' />"
        var left_leg = "<img src='./assets/left-leg.svg' class='left-leg' />"
        var right_hand = "<img src='./assets/right-hand.svg' class='right-hand' />"
        var right_leg = "<img src='./assets/right-leg.svg' class='right-leg' />"
        
        if (!hang_html.includes("head")){
            document.getElementById(hangman_id).innerHTML+=head;
            hang_html.push("head")}
        else if(!hang_html.includes("body")){
            document.getElementById(hangman_id).innerHTML+=body;
            hang_html.push("body")}
        else if (!hang_html.includes("left_hand")){
            document.getElementById(hangman_id).innerHTML+=left_hand;
            hang_html.push("left_hand")}
        else if (!hang_html.includes("right_hand")){
            document.getElementById(hangman_id).innerHTML+=right_hand;
            hang_html.push("right_hand")}
        else if (!hang_html.includes("left_leg")){
            document.getElementById(hangman_id).innerHTML+=left_leg;
            hang_html.push("left_leg")}
        else if (!hang_html.includes("right_leg")){
            document.getElementById(hangman_id).innerHTML+=right_leg;
            hang_html.push("right_leg")
            setTimeout(() => {
                alert("You Lose");
                location.reload();
            }, 600);  
        }
        else{
            
        }

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








