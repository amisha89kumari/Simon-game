var gamePattern=[ ];
var userClickedPattern=[];
var level =0;
var started= false;

var buttonColours=["red", "blue", "green", "yellow"];

$(".btn").click( function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
});
function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
              }, 1000);
      
            }
      
          } else {
      
            console.log("wrong");
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
      
          }
      
      }
function startOver()
{
    level = 0;
  gamePattern = [];
  started = false;
}

function nextSequence(){
    var randomNumber= Math.floor(Math.random()*4) ;
    var randomChosenColour = buttonColours(randomNumber);
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
     playSound(randomChosenColour);
}
function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;  
    }
});