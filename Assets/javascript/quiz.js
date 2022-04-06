
// Variables to help Traverse the DOM

var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");
var progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


//Quiestions for Quiz
let questions = [
    { 
        question: "How long is New Zealand's Ninety Mile Beach?",
        choice1: "90 miles",
        choice2: "55 miles",
        choice3: "80 miles",
        choice4: "9 miles",
        answer: 2,
    },
    {
        question: "How many months have 28 days in them?",
        choice1: "1",
        choice2: "3",
        choice3: "12",
        choice4: "4",
        answer: 3,
    },
    {
        question: "What is the main ingredient of Bombay Duck?",
        choice1: "Fish",
        choice2: "Duck",
        choice3: "Beef",
        choice4: "Eggs",
        answer: 1,
    },
    {
        question: "Which movie star entered a look-a-like contest of himself only to come in 3rd place?",
        choice1: "Will Smith",
        choice2: "Matthew McConaughey",
        choice3: "Leonardo DiCaprio",
        choice4: "Charlie Chaplin",
        answer: 4,
    },
    {
        question: "How many brains does an octopus have?",
        choice1: "1",
        chocie2: "2",
        choice3:"7",
        choice4: "9",
        answer: 4,
    },    
];

var  = timer
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    timer();
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("end.html")
    }

    //Changing status bar 
    questionCounter++
    progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerHTML = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerHTML = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice=> {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(score)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerHTML = score
}

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('score').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startGame()