var buttonColours = ["red", "blue", "green", "yellow"];


var gamePatterns1 = [];

var userClickedPattern = [];

var level = 0;



$("body").one("click", function name() {



  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];


  gamePatterns1.push(randomChosenColour);

  $("#" + gamePatterns1[0]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  switch (gamePatterns1[0]) {

    case "yellow":

      var audio1 = new Audio("sounds/yellow.mp3");
      audio1.loop = false;
      audio1.play();
      break;


    case "red":

      var audio2 = new Audio("sounds/red.mp3");
      audio2.loop = false;
      audio2.play();
      break;


    case "blue":

      var audio3 = new Audio("sounds/blue.mp3");
      audio3.loop = false;
      audio3.play();
      break;



    case "green":

      var audio4 = new Audio("sounds/green.mp3");
      audio4.loop = false;
      audio4.play();
      break;
    default:
  }
  level = 1;
  $("h1").text("Level " + level);


});



function playSound(name) {


  switch (name) {

    case "yellow":

      var audio1 = new Audio("sounds/yellow.mp3");
      audio1.loop = false;
      audio1.play();
      break;


    case "red":

      var audio2 = new Audio("sounds/red.mp3");
      audio2.loop = false;
      audio2.play();
      break;


    case "blue":

      var audio3 = new Audio("sounds/blue.mp3");
      audio3.loop = false;
      audio3.play();
      break;



    case "green":

      var audio4 = new Audio("sounds/green.mp3");
      audio4.loop = false;
      audio4.play();
      break;
    default:

  }
}

$(".btn").click(function(event) {




  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(event.target.id);
  animatePress(event.target);


  console.log(userClickedPattern);
  console.log(gamePatterns1);

  console.log(userClickedPattern.length);
  console.log(gamePatterns1.length);




  if (checkAnswer() == true) {

    console.log("I'm here");
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePatterns1.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    userClickedPattern = [];
    change();
  }

  if (checkAnswer() == false) {

    userClickedPattern = [];
    gamePatterns1 = [];
    $("h1").text("Game over");
    var audioFail = new Audio("sounds/wrong.mp3");
    audioFail.loop = false;
    audioFail.play();
    $("body").addClass("game-over");


    setTimeout(function() {
      location.reload();
      return false;
    }, 1500);




  }



  if (inside() == true) {

    console.log("truth");
  }

  if (inside() == false) {


    userClickedPattern = [];
    gamePatterns1 = [];
    $("h1").text("Game over");
    var audioFail = new Audio("sounds/wrong.mp3");
    audioFail.loop = false;
    audioFail.play();
    $("body").addClass("game-over");


    setTimeout(function() {
      location.reload();
      return false;
    }, 1500);




  }
});





function animatePress(currentColour) {

  $(currentColour).addClass("pressed");


  setTimeout(function() {
    $(currentColour).removeClass("pressed");
  }, 100);

}

function change() {

  level++;
  $("h1").text("Level " + level);

}


function checkAnswer() {

  var len = gamePatterns1.length;


  if (gamePatterns1.length === userClickedPattern.length) {

    for (let i = 0; i < len; i++) {
      if (gamePatterns1[i] !== userClickedPattern[i]) {

        return false;
      }
    }
    return true;
  }

}




function inside() {
  var len = userClickedPattern.length;
  for (let i = 0; i < len; i++) {


    if (gamePatterns1[i] !== userClickedPattern[i]) {

      return false;
    }
  }
  return true;
}
