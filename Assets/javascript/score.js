const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const deleteHighScores = document.querySelector("#delete-scores");



highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')



//high score function
function printScores() {
    //getting scores from local storage or set to an empty array

    //var playerScores = JSON.parse(window.localStorage.getItem("highscores"))
    var playerScores = [];

    // sorting the different scorse in descending order
    playerScores.sort(function(a, b) {
        return b.scores - a.scores;
    });

    playerScores.forEach(function(scores){
    //create an li tag for scores
        var liEl = document.createElement("li");
        liEl.textContent = scores.initials + " - " + scores.scores;
        
        var olEl =document.querySelector("#highscores");
        olEl.appendChild(liEl);
    })
};

//clear high score function
function deleteScores() {
    // will remove items from local storage
    localStorage.removeItem("highScores");

    // Reload everything:
    function reload() {
    reload = location.reload();
    }
// Event listeners for reload
deleteHighScores.addEventListener("click", reload, false)
}




//callback function to run the page on load
printScores ();
