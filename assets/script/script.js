/*jshint esversion: 6 */

/* ---------- Audio variables ---------- */
var clickAudio = new Audio('assets/audio/click-card.mp3');
var matchCardAudio = new Audio('assets/audio/cards-match.wav');
var winAudio = new Audio('assets/audio/win-game.wav');
var backgroundAudio = new Audio('assets/audio/background-sound.mp3');
backgroundAudio.volume = 0.2;
clickAudio.volume = 0.5;
matchCardAudio.volume = 0.6;
winAudio.volume = 0.7;
var playPauseIcon = document.getElementById('play-pause');
var count = 0;

/* ---------- Playing the game variables ---------- */
const cards = document.querySelectorAll('.memory-card');
let cardIsFlipped = false;
let boardLocked = false;
let firstCard;
let secondCard;
let matches = 0;

/* ---------- Timer variables ---------- */
const timeHour = document.getElementById('timer');
let timeSecond = 0;
timeHour.innerHTML = `00:0${timeSecond}`;

/* ---------- counting moves variables ---------- */
let counter = document.getElementById('moves');
var moves = 0;
/* ---------- theme variable ---------- */
let themeLight = true;
$("#light-theme").attr("disabled", "disabled");

/* ---------- local storage ---------- */
let localStorageBestTime = localStorage.getItem("lastRoundTime", timeHour.innerHTML);
let localStorageTheme = localStorage.getItem("theme");

/* ---------- Check Theme ---------- */
window.onload = checktheTheme();

function checktheTheme() {

    if (localStorageTheme === "dark") {

       themeLight = false;

       $("body, .logo, .logo h1, .high-score, .memory-game, .start-game, .overlay-finish").addClass("dark-mode");
        $(".card-back").attr("src", "assets/images/cardbackbeige.jpg");
    
        $("#light-theme").removeAttr("disabled");
        $("#dark-theme").attr("disabled", "disabled");
    }
    if (localStorageTheme === "light") {

        themeLight = true;

        $("body, .logo, .logo h1, .high-score, .memory-game, .start-game, .overlay-finish").removeClass("dark-mode");
        $(".card-back").attr("src", "assets/images/cardbackgreen.jpg");

        $("#dark-theme").removeAttr("disabled");
        $("#light-theme").attr("disabled", "disabled");
    }
}

/* ---------- Play/pause music ---------- */
function playPause() {
    
    if(count === 0) {
        count = 1;
        backgroundAudio.play();
        playPauseIcon.className = "fas fa-volume-up";
    } else {
        count = 0;
        backgroundAudio.pause();
        playPauseIcon.className = "fas fa-volume-mute";
    }
}
/* ---------- How to play modal ---------- */
$("#how-to").click(function() {
    $("#myModal").modal('show');
});

/* ---------- Latest round ---------- */
$("#highscore").text(localStorageBestTime);

/* ---------- Theme buttons ---------- */
$(function() {
  $("#dark-theme").click(function() {

    themeLight = false;
    localStorage.setItem("theme", "dark");

    $("body, .logo, .logo h1, .high-score, .memory-game, .start-game, .overlay-finish").addClass("dark-mode");
    $(".card-back").attr("src", "assets/images/cardbackbeige.jpg");
    
    $("#light-theme").removeAttr("disabled");
    $("#dark-theme").attr("disabled", "disabled");
  });
});

$(function () {
    $("#light-theme").click(function() {
        if (themeLight == false) {

            themeLight = true;
            localStorage.setItem("theme", "light");

            $("body, .logo, .logo h1, .high-score, .memory-game, .start-game, .overlay-finish").removeClass("dark-mode");
            $(".card-back").attr("src", "assets/images/cardbackgreen.jpg");

            $("#dark-theme").removeAttr("disabled");
            $("#light-theme").attr("disabled", "disabled");
        }
    });
});

/* ---------- Starting the game ---------- */

// When clicking on the play button the start-game div disappears
$(".start-game").on("click", function () {
  $(this).remove();

    const timeCounter = setInterval(() => {
    timeSecond++;
    displayTime(timeSecond);
    
    if (matches == 8) {
        clearInterval(timeCounter);
        localStorage.setItem("lastRoundTime", timeHour.innerHTML);
    }
},1000);

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeHour.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

});

/* ---------- Playing the game ---------- */

// flips the cards
$(cards).on('click', function cardFlip() {

    clickAudio.play();
    clickAudio.currentTime = 0;
    
    // lock the board if true
    if (boardLocked) return;
    // to avoid dubble click on first card
    if (this === firstCard) return;

    $(this).addClass('flip');

    if (!cardIsFlipped) {
        // the first card is clicked
        cardIsFlipped = true;
        firstCard = this;

        return;
    }
        // the second card is clicked
        secondCard = this;

        checkMatch();
        countMoves();
});

// checks for cards to match
function checkMatch() {

    // if cards match go to disableCards function
    if (firstCard.dataset.id === secondCard.dataset.id) {
        matchCardAudio.play();
        matchCardAudio.currentTime = 0;

        matches = matches + 1;

        if (matches == 8) { 
            gameFinished();
        }

        disableCards();

    } else {
        // if cards don't match go to unflipCards function
        unflipCards();
    }
}

//disables cards
function disableCards() {
    $(firstCard).off('click', cardIsFlipped);
    $(secondCard).off('click', cardIsFlipped);

    boardReset();
}

// flip cards back
function unflipCards() {
    boardLocked = true;

    setTimeout(() => {
        $(firstCard).removeClass('flip');
        $(secondCard).removeClass('flip');

        clickAudio.play();
        boardReset();
    }, 1200);
}

// resets the board
function boardReset() {
    cardIsFlipped = false;
    boardLocked = false;
    firstCard = null;
    secondCard = null;
}

// count moves
 function countMoves() {
     moves++;
     counter.innerHTML = moves;
 }

// shuffels cards
(function shuffleCards() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
    });
})();

/* ---------- Restarting the game ---------- */
function restartGame() {
    location.reload();
}

/* ---------- Finishing the game ---------- */
function gameFinished() {
    winAudio.play();
    $('.overlay-finish').show();

    if (count === 1) {
        count = 0;
        backgroundAudio.pause();
        playPauseIcon.className = "fas fa-volume-mute";
    }
}