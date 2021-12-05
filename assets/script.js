// high score pop up
// store high score in localStorage

var questionContainer = document.querySelector("#question-container");
var btnContainer = document.querySelector(".btn-container");
var button = document.querySelector("#q");
var time = document.querySelector("#time");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

// time notify
time.innerHTML = "Time: 60 seconds";
var setTimer = 60;
var timeCounter = 0;

// runs a welcome page then onclick it will run the first question
$(".start-btn").click(function () {
  score = 0;
  questionCounter = 0;
  totalQuestions = 5;


  var welcome = document.querySelector("#welcome");
  welcome.remove();
  answerCheck();

  // Timer Start Interval
  var timer = setInterval(function () {
    if (setTimer <= 0) {
      clearInterval(setTimer);
      time.innerHTML = "Times Up!";
    } else {
      time.innerHTML = "Time: " + setTimer + " seconds";
    }
    setTimer -= 1;
    timeCounter += 1;
  }, 1000);
  
  console.log(score);
});

// Answer Verification Function
var answerCheck = function() {
  var verify = document.querySelector("#verify");
  
  var negAnswerArr = [
    "That's not quite right. Try again!",
    "Nope, not That one... Try again!",
    "That's not it!",
    "Incorrect!"
  ]
  
  var posAnswerArr = [
    "Correct!",
    "Nice!",
    "You got it!",
    "Let's go!",
    "You're on a roll!"
  ]
  
  // starts with question one visible
  q1.style.display = "none";
  q1.style.display = "block";
  
  // Verification for Correct answer clicks
  $(".correct").click(function() {
    var arrRandom = posAnswerArr[Math.floor(Math.random() * negAnswerArr.length)];
    var verified = document.createElement("h3");
    verify.className = "h3";
    verify.append(verified);
    verify.textContent = arrRandom;
    setTimer += 2;
    score += 2;
    questionCounter++;
    
    if (q1.style.display === "block") {
      q1.style.display = "none";
      q2.style.display = "block";   
    }
    else if (q2.style.display === "block"){
      q2.style.display = "none";
      q3.style.display = "block"; 
    }
    else if (q3.style.display === "block") {
      q3.style.display = "none";
      q4.style.display = "block";        
    }
    else if (q4.style.display === "block") {
      q4.style.display = "none";
      q5.style.display = "block";
    }
    else {
      style.display = "none";
    }
    
  });
  
  // Verification for Incorrect answer clicks
  $(".incorrect").click(function() {
    var arrRandom = negAnswerArr[Math.floor(Math.random() * negAnswerArr.length)];
    var verified = document.createElement("h3");
    verify.className = "h3";
    verify.append(verified);
    verify.textContent = arrRandom;
    setTimer -= 1;
    score -= 1;
  });

};

// TODO: create a view highscore function