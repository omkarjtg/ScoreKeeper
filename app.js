let p1 = {
    score : 0,
    button : document.querySelector("#p1"),
    display : document.querySelector("#player1")
}

let p2 = {
    score : 0,
    button : document.querySelector("#p2"),
    display : document.querySelector("#player2")
}

const resetB = document.querySelector("#reset");
let isGameOver= false;

const winningScoreElement= document.querySelector("#PlayUpTo")
let winningScore = 5;

function reset(){
    isGameOver=false;
    p1.score=0;
    p2.score=0;
    p1.display.innerHTML=p1.score;
    p2.display.innerHTML=p2.score;
    p1.display.style.color="black";
    p2.display.style.color="black";

}
winningScoreElement.addEventListener("change", function(){
    winningScore=parseInt(this.value);
    reset();
});

function updateScores(player, opponent) {
    if(!isGameOver){
        player.score++;
        if(player.score===winningScore){
            isGameOver=true;
            player.display.style.color="green";
            opponent.display.style.color="red";
        }
        player.display.innerHTML=player.score;
    }
}


p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
});

p2.button.addEventListener("click", function(){
    updateScores(p2, p1);
});


resetB.addEventListener('click', reset);