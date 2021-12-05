// new question divisions with all elements
// multiple questions
// if statement to check to see if the answer is false
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

// var questions = [
// {
//   question: "What does a multiplication symbol look like in Python?",
//   choice1: "+",
//   choice2: "//",
//   choice3: "*",
//   choice4: "%",
//   answer: "*"
// },
// {
//   question: "What does a modular division symbol look like in Python?",
//   choice1: "+",
//   choice2: "%",
//   choice3: "//",
//   choice4: "*",
//   answer: "%"
// },
// {
//   question: "What does a division symbol look like in Python?",
//   choice1: "/",
//   choice2: "//",
//   choice3: "%",
//   choice4: "*",
//   answer: "/"
// },
// {
//   question: "What does a floor division symbol look like in Python?",
//   choice1: "//",
//   choice2: "*",
//   choice3: "/",
//   choice4: "%",
//   answer: "//"
// },
// {
//   question: "What does an addition symbol look like in Python?",
//   choice1: "+",
//   choice2: "*",
//   choice3: "/",
//   choice4: "%",
//   answer: "+"
// },
// ]

// TODO: create a question reveal function
// TODO: create a view highscore function

// runs a welcome page then onclick it will run the first question
$(".start-btn").click(function () {
  score = 0;
  questionCounter = 0;
  totalQuestions = 5;


  var welcome = document.querySelector("#welcome");
  welcome.remove();
  createQuestion();
  // answerCheck();

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
});

// TODO: create a better quiz function that uses the array of questions and creates the correct elements
// corrected function
var createQuestion = function () {
  answerCheck();
  if (q1 === "#q1") {
    $("#q1").removeClass('visible');
    $("#q1").addClass("hidden");
    $("#q2").removeClass("hidden");
    $("#q2").addClass("visible");
    
  }
  else if (q2 === "#q2") {
    $("#q2").removeClass("visible");
    $("#q2").addClass("hidden");
    $("#q3").removeClass("hidden");
    $("#q3").addClass("visible");
   
  }

  
  
  
};

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
  
  // div. #q1 / #q4 -- h3.question -- button.correct or .incorrect
  $("#q1").removeClass("hidden");
  $("#q1").addClass("visible");
  
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

}