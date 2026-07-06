let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

const colors = ["red", "green", "yellow", "blue"];

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        nextLevel();
    }
});

function nextLevel(){

    userSeq=[];

    level++;

    document.getElementById("level-title").innerText =
    "Level " + level;

    let randomIndex = Math.floor(Math.random()*4);

    let randomColor = colors[randomIndex];

    gameSeq.push(randomColor);

    let btn = document.getElementById(randomColor);

    gameFlash(btn);

}

function gameFlash(btn){

    btn.classList.add("flash");

    setTimeout(function(){

        btn.classList.remove("flash");

    },1000);

}

function userFlash(btn){

    btn.classList.add("userflash");

    setTimeout(function(){

        btn.classList.remove("userflash");

    },200);

}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){

    btn.addEventListener("click", btnPress);

}

function btnPress(){

    let btn = this;

    userFlash(btn);

    let color = btn.getAttribute("id");

    userSeq.push(color);

    checkAnswer(userSeq.length-1);

}

function checkAnswer(index){

    if(userSeq[index]===gameSeq[index]){

        if(userSeq.length===gameSeq.length){

            setTimeout(function(){

                nextLevel();

            },800);

        }

    }

    else{

        gameOver();

    }

}

function gameOver(){

    document.body.classList.add("game-over");

    setTimeout(function(){

        document.body.classList.remove("game-over");

    },300);

    document.getElementById("level-title").innerHTML =
    "Game Over!<br>Score : "+level+
    "<br><br>Press Any Key to Restart";

    started=false;

}