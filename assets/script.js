// new question divisions with all elements
// multiple questions
// high score pop up
// store high score in localStorage

var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("h2");
var btnContainer = document.querySelector(".btn-container");
var button = document.querySelector("button");

// css calls
var buttonClass;

var createQuestion1 = function() {
 var questionEl = document.createElement("h2");
 questionContainer.appendChild(questionEl);
 questionEl.className = "question";
 questionEl.textContent = "What's up, homies!!";

 var buttonEl1= document.createElement("button");
 btnContainer.appendChild(buttonEl1);
 buttonEl1.className = "answer-btn";
 buttonEl1.textContent = "I'm new here!";

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

createQuestion1();