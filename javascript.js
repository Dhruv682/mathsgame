var playing = false;
var score;
var action;
var timeremaining;
var correctans;

document.getElementById("startreset").onclick = function () {
    if (playing == true) {
        location.reload();
        
 }
      else{
          
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        document.getElementById("time").style.visibility =  "visible";


        timeremaining = 60;
        document.getElementById("timevalue").innerHTML = timeremaining;
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        

        document.getElementById("gameover").style.display = "none";
        
        //countdown start//
         startCountdown();


         generateQnA();

    }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctans){
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                document.getElementById("wrong").style.display = "none";
                document.getElementById("correct").style.display = "block";
                setTimeout(function(){
                    document.getElementById("correct").style.display = "none";
                },1000);
                generateQnA();
            }else{
                document.getElementById("wrong").style.display = "block";
                document.getElementById("correct").style.display = "none";
                setTimeout(function(){
                    document.getElementById("wrong").style.display = "none";
                },1000);

                
            
    
            }
        }
    }
}

    function startCountdown(){
        action = setInterval(function(){
            timeremaining -= 1;
            document.getElementById("timevalue").innerHTML = timeremaining;

            if(timeremaining == 0){
                stopCountdown();
                document.getElementById("gameover").style.display = "block";
                document.getElementById("gameover").innerHTML = "<p>game over !</p><p>your score is "+ score +"</p>";
                document.getElementById("time").style.visibility = "hidden";
                document.getElementById("correct").style.display = "none";
                document.getElementById("wrong").style.display = "none";
                playing = false;
                document.getElementById("startreset").innerHTML = "Start Game";

            }
        },1000);
        
    }
    function stopCountdown(){
        clearInterval(action);

    }

    function generateQnA(){
        var x = 1+ Math.round(9*Math.random());
        var y = 1+ Math.round(9*Math.random());
        correctans = x*y;
        document.getElementById("questionbox").innerHTML = x + "x"+y;

        var correctpos = 1+ Math.round(3*Math.random());
        document.getElementById("box"+correctpos).innerHTML = correctans;
        var answer = [correctans];

        for(i=1; i<5; i++){
            if(i!= correctpos){
                var wrongans = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
                document.getElementById("box"+i).innerHTML = wrongans;
            }
        }


    }
    
