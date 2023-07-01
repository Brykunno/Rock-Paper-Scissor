let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorbtn = document.getElementById("scissor");

let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");


let rockplayer = 1;
let paperplayer = 2;
let scissorplayer = 3;

let rockcom = 1;
let papercom = 2;
let scissorcom = 3;

let choiceplayer = 0;
let comchoice = 0;

rockbtn.onclick = rockclicked;
paperbtn.onclick = paperclicked;
scissorbtn.onclick = scissorclicked;





function rockclicked(){
    choiceplayer = rockplayer;
    player.innerHTML ="Player: Rock";
    

    comchoice = Math.floor(Math.random()*3)+1;

    compchoice(comchoice);

    rockresults(choiceplayer,comchoice);


}

function paperclicked(){
    choiceplayer = paperplayer;
    player.innerHTML ="Player: Paper";
   

    comchoice = Math.floor(Math.random()*3)+1;

    compchoice(comchoice);

    paperresults(choiceplayer,comchoice);


}

function scissorclicked(){
    choiceplayer = scissorplayer;
    player.innerHTML ="Player: Scissor";
    

    comchoice = Math.floor(Math.random()*3)+1;

    compchoice(comchoice);

    scissorresults(choiceplayer,comchoice);

}
function compchoice(choice){
    switch(choice){
        case 1: computer.innerHTML ="Computer: Rock";
        break;
        case 2: computer.innerHTML ="Computer: Paper";
        break;
        case 3: computer.innerHTML ="Computer: Scissor";
        break;

    }
}

function rockresults(player,computer){
    if(player == 1 && computer == 3){
        result.innerHTML = "Player Wins!";
    }
    else if(player == 1 && computer == 2){
        result.innerHTML = "Computer Wins!";
    }
    else if(player == computer){
        result.innerHTML = "Draw!";
    }
}

function paperresults(player,computer){
    if(player == 2 && computer == 3){
        result.innerHTML = "Computer Wins!";
    }
    else if(player == 2 && computer == 1){
        result.innerHTML = "Player Wins!";
    }
    else if(player == computer){
        result.innerHTML = "Draw!";
    }
}

function scissorresults(player,computer){
    if(player == 3 && computer == 1){
        result.innerHTML = "Computer Wins!";
    }
    else if(player == 3 && computer == 2){
        result.innerHTML = "Player Wins!";
    }
    else if(player == computer){
        result.innerHTML = "Draw!";
    }
}