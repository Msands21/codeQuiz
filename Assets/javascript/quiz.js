// Variables to keep track of time
var questionsIndex = 0;

//indexed at 0
var time = questions.length * 15;

//Allows you to keep a timer and score for quiz
var timerId;

// Variables to help Traverse the DOM

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feebackEl = document.querySelector("#feeback");


//Quiestions for Quiz
var questions = [
    { 
        title: "How long is New Zealand's Ninety Mile Beach?",
        choices: ["90 miles", "55 miles", "80 miles", "9 miles"],
        answer: "55 miles",
    },
    {
        title: "How many months have 28 days in them?",
        choices: ["1", "3", "12", "4"],
        answer: "12",
    },
    {
        title: "What is the main ingredient of Bombay Duck?",
        choices: ["Fish", "Duck", "Beef", "Eggs"],
        answer: "Fish",
    },
    {
        title: "Which movie star entered a look-a-like contest of himself only to come in 3rd place?",
        choices: ["Will Smith", "Matthew McConaughey", "Leonardo DiCaprio", "Charlie Chaplin"],
        answer: "Charlie Chaplin",
    },
    {
        title: "How many brains does an octopus have?",
        choices: ["1", "3", "7", "9"],
        answer: "9",
    },    
];

// Start Quiz funciton
function beginQuiz() {
    //hide start screen during quiz
    var startQuizEl = document.querySelector("#start");
    startQuizEl.setAttribute("class", "hide");
    
    //Make questions appear on page
    questionsEl.removeAttribute("class");
    
    //Start timer
    timerCountDown();
    //Show starting time on page

    getQuestions();
}

//Get quiz questions
function getQuestions() {
    //create a variable to get the current questions array
    var currentQuestions = questions[questionsIndex];

    // update the code question title with current code

    // clear out old question choices

    // loop over choices using forEach (or for loop)

    // attach click event to listener

    // display choice on page 
}

// Question button clicks
function clickQuestions(){
    //error handling needed for incorrect answer to question

    //Add time deduction

    //display the new time once time deducted

    //flash the wrong/right feedback on the page under the questions

    //move to the next question

    //check if we've finished asking all the questions

}

//End the quiz
function endQuiz() {
    // Stop timer
    clearInterval(timerId);

    //show final screen

    //show final score

    //hide questions
}

// Timer function
function timerCountDown() {
    //update the time
    time--;
    timerEl.textContent = time;
    // check if the user is out of time
    if (time <= 0) {
        endQuiz();
    }
}
console.log(timerCountDown)
//Save score
function saveHighScores() {
    //get value from your input box 

    //make sure user wrote initials in box

    //local storage

    //redirect to next page (highscore.html)
}

// Key event functions 
function enterBtnEvent() {
    //give enter key ability to save your high score when keydown

}

// user clicks button to submit initials 
submitBtn.onclick = saveHighScores;

//user clicks to begin the quiz
startBtn.onclick = beginQuiz;

//this checks if the user hit enter for their initials 
initialsEl.onkeyup = enterBtnEvent