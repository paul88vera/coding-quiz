var questionContainer = document.querySelector("#question-container");
var btnContainer = document.querySelector(".btn-container");
var button = document.querySelector("#q");
var time = document.querySelector("#time");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");

// tells user how much time they will start with
time.innerHTML = "Time: 60 seconds";
var setTimer = 60;

// runs a welcome page then onclick it will run the first question
function start() {
  score = 0;
  questionCounter = 0;
  totalQuestions = 5;

  // hides the welcome page
  $("#welcome").addClass("hidden");

  // answer check function
  answerCheck();

  // Timer Start Interval
  var timer = setInterval(function () {
    if (setTimer === false) {
      time.innerHTML = "Times Up!";
    } else if (setTimer < 1) {
      setTimer = false;
      // Tells user time and score at end of quiz
      time.innerHTML =
        "You finished with a time of " +
        JSON.parse(localStorage.getItem("Time")) +
        " seconds! Your score is " +
        JSON.parse(localStorage.getItem("Score"));
    } else {
      time.innerHTML = "Time: " + setTimer + " seconds";
    }
    // additional time and score to make up for the wait time
    setTimer -= 1;
  }, 1000);
}

// Answer Verification Function
var answerCheck = function () {
  var verify = document.querySelector("#verify");

  // incorrect answer variety
  var negAnswerArr = [
    "That's not quite right. Try again!",
    "Nope, not That one... Try again!",
    "That's not it!",
    "Incorrect!",
  ];

  // correct answer variety
  var posAnswerArr = [
    "Correct!",
    "Nice!",
    "You got it!",
    "Let's go!",
    "You're on a roll!",
  ];

  // starts with question 1 visible
  q1.style.display = "none";
  q1.style.display = "block";

  // Verification for Correct answer clicks
  $(".correct").click(function () {
    var arrRandom =
      posAnswerArr[Math.floor(Math.random() * negAnswerArr.length)];
    var verified = document.createElement("h3");
    verify.className = "h3";
    verify.append(verified);
    verify.textContent = arrRandom;
    setTimer += 2;
    score += 2;
    questionCounter++;

    // Turns the questions on and off
    if (q1.style.display === "block") {
      q1.style.display = "none";
      q2.style.display = "block";
    } else if (q2.style.display === "block") {
      q2.style.display = "none";
      q3.style.display = "block";
    } else if (q3.style.display === "block") {
      q3.style.display = "none";
      q4.style.display = "block";
    } else if (q4.style.display === "block") {
      q4.style.display = "none";
      q5.style.display = "block";
    }
  });

  // Verification for Incorrect answer clicks
  $(".incorrect").click(function () {
    var arrRandom =
      negAnswerArr[Math.floor(Math.random() * negAnswerArr.length)];
    var verified = document.createElement("h3");
    verify.className = "h3";
    verify.append(verified);
    verify.textContent = arrRandom;
    setTimer -= 1;
    score -= 1;
  });

  // Ending Highscore Form Function
  $(".fifth").click(function () {
    // lets the user view their time before switching to initials submission
    setTimeout(() => {
      q5.style.display = "none";
      $("#verify").addClass("hidden");
      $("#highscore-form").removeClass("hidden");
      $("#highscore-form").addClass("visible");

      // to make up for time lost viewing verifcation
      setTimer += 1;
      score += 1;

      // adding score and time to localStorage
      localStorage.setItem("Score", score);
      localStorage.setItem("Time", setTimer);

      // stopping the timer
      setTimer = false;
    }, 1000);
  });
};

function save() {
  // save and push new names to array
  var saveName = window.localStorage.setItem("Name", "[]");
  var newData = document.getElementById("initials").value;
  var getName = localStorage.getItem("Name");

  // if the array is empty then create an array
  if (getName === null) {
    saveName;
  }

  // supposed to get old data from the name array and push the new data back to the array but it is not working correctly
  var oldData = JSON.parse(getName);
  oldData.push(newData);

  // set initials in localStorage
  localStorage.setItem("Name", JSON.stringify(oldData));

  // reloads page to start the quiz over again
  location.reload();
}

// TODO:  correct localStorage data
// TODO:  Show High Score Data in Table
