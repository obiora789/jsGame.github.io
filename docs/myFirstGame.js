//getting the Username
var userName = prompt("Please enter your name: ");

//sound master
var audio = new Audio("All_I_do.mp3");
audio.loop = true;
audio.play();

function audioMute(){
audio.muted = !audio.muted;
}
    //declare counter
    var counter = 0;

   //score board   
    var score = 0;
    function displayScore() {
    display = document.getElementById("score");
    display.innerHTML = ["<p><h2>Scoreboard:</h2> "+userName+"'s Score is "+score+".</p>"];
}

//to make score stop at 0
function stopScore(){
    if(score<0){
        score = 0;
    }
}

//main function
function checkResult() {
    
    //takes user guess between 1 and 100
    var input = document.getElementById("inputNo");
    var user = input.value;
    userChoice = parseInt(user);
    
    //takes computer guess
    var pcChoice = Math.floor(5 * Math.random()) + 1;
    pcChoice = parseInt(pcChoice);
    
    //output Panel
    var output = document.getElementById("outputPnl");
    var message;
    counter++;
    if (userChoice < pcChoice) {
        message = userName + ", sorry your guess is too low.";
        output.innerHTML = ['<h3>'+message+'</h3>'];
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
    else if (userChoice > pcChoice) {
        message = userName + ", sorry your guess is too high.";
        output.innerHTML= ['<h3>'+message+'</h3>'];
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
    else if(userChoice == pcChoice) {
        message = userName + ", CORRECT!!!";
        output.innerHTML = ['<h3>'+message+'</h3>'];
        score+=5;
        counter = 0;
        }
    else {
        output.innerHTML = "<h3>Invalid selection.</h3>";
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
displayScore();

    //to get no of failed attempts
function maxTrials(){
        output.innerHTML = "<h3>Game Over, Restart</h3>";
        document.getElementById("restart").style.display = "block";
        document.getElementById("submit").style.display = "none";
        counter = 0;
        
    }
}

//restart function
function restart(){
        document.getElementById("restart").style.display = "none";
        document.getElementById("submit").style.display = "block";
        score = 0;
        
        }

