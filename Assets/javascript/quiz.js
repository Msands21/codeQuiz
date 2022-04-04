// Variables to keep track of time
var questionsIndex = 0;

//indexed at 0
var time = questions.length * 15;

//Allows you to keep a timer and score for quiz
var timerId;

// Variables to help Traverse the DOM

var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let quiestionCounter = 0
let availableQuestions = []


//Quiestions for Quiz
var questions = [
    { 
        title: "How long is New Zealand's Ninety Mile Beach?",
        choice1: "90 miles",
        choice2: "55 miles",
        choice3: "80 miles",
        choice4: "9 miles",
        answer: 2,
    },
    {
        title: "How many months have 28 days in them?",
        choice1: "1",
        choice2: "3",
        choice3: "12",
        choice4: "4",
        answer: 3,
    },
    {
        title: "What is the main ingredient of Bombay Duck?",
        choice1: "Fish",
        choice2: "Duck",
        choice3: "Beef",
        choice4: "Eggs",
        answer: 1,
    },
    {
        title: "Which movie star entered a look-a-like contest of himself only to come in 3rd place?",
        choice1: "Will Smith",
        choice2: "Matthew McConaughey",
        choice3: "Leonardo DiCaprio",
        choice4: "Charlie Chaplin",
        answer: 4,
    },
    {
        title: "How many brains does an octopus have?",
        choice1: "1",
        chocie2: "3",
        choice3:"7",
        choice4: "9",
        answer: 4,
    },    
];

