// new question divisions with all elements
// multiple questions
// if statement to check to see if the answer is false
// high score pop up
// store high score in localStorage

var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("h2");
var btnContainer = document.querySelector(".btn-container");
var button = document.querySelector("button");
var time = document.querySelector("#time");

// time notify
time.innerHTML = "Time: 60";

// questions array
var questions = [
 {
  question: "What does a header element look like in html?",
  answers: [
   "<html>",
   "<body>",
   "<header>",
   "<script>"
  ],
  correctAnswer: "<html>"
 },
 {
  question: "This is another question?",
  answers: [
   "Answer",
   "Incorrect Answer",
   "Incorrect Answer",
   "Incorrect Answer"
  ],
  correctAnswer: "Answer"
 },
 {
  question: "What?",
  answers: [
   "Answer",
   "Incorrect Answer",
   "Incorrect Answer",
   "Incorrect Answer"
  ],
  correctAnswer: "Answer"
 },

]

// TODO: create a better quiz function that uses the array of questions and creates the correct elements
//// test function
var createQuestion1 = function() {
 var questionEl = document.createElement("h2");
 questionContainer.appendChild(questionEl);
 questionEl.className = "question";
 // questionEl.textContent = questions[question[0]];

 var buttonEl1= document.createElement("button");
 btnContainer.appendChild(buttonEl1);
 buttonEl1.className = "answer-btn";
 // buttonEl1.textContent = questions.answer[0];

 var buttonEl2= document.createElement("button");
 btnContainer.appendChild(buttonEl2);
 buttonEl2.className = "answer-btn";
 buttonEl2.textContent = "I'm the second one here...";

 var buttonEl3= document.createElement("button");
 btnContainer.appendChild(buttonEl3);
 buttonEl3.className = "answer-btn";
 buttonEl3.textContent = "I'm third...";

 var buttonEl4= document.createElement("button");
 btnContainer.appendChild(buttonEl4);
 buttonEl4.className = "answer-btn";
 buttonEl4.textContent = "I'm fourth baby!";
};
// corrected function
var questionSection = function() {
 var questionEl = document.createElement("h2");

 questions.question.addClass(".question");
 questions.answers.addClass(".answer-btn");
};



// runs a welcome page then onclick it will run the first question
window.onclick = function(event) {
 var welcome = document.querySelector("#welcome");
 welcome.remove();
 questionSection();

// Timer Start Interval
var setTimer = 60;
var timeCounter = 0;
var timer = setInterval(function() {
  if (setTimer <= 0) {
   clearInterval(setTimer);
   time.innerHTML = "Times Up!";
  }
  else {
   time.innerHTML = "Time: " + setTimer;
  }
  setTimer -= 1;
  timeCounter += 1;
}, 1000);

}