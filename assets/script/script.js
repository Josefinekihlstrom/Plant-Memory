/* ---------- Audio variables ---------- */
var clickAudio = new Audio('assets/audio/click-card.mp3');
var matchCardAudio = new Audio('assets/audio/cards-match.wav');
var winAudio = new Audio('assets/audio/win-game.wav');
var backgroundAudio = new Audio('assets/audio/background-sound.mp3');
backgroundAudio.volume = 0.3;
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

    $("body").addClass("dark-mode");
    $(".logo").addClass("dark-mode");
    $(".logo h1").addClass("dark-mode");
    $(".high-score").addClass("dark-mode");
    $(".memory-game").addClass("dark-mode");
    $(".card-back").attr("src", "assets/images/cardbackbeige.jpg");
    $(".start-game").addClass("dark-mode");
    $(".overlay-finish").addClass("dark-mode");

    $("#light-theme").removeAttr("disabled");
    $("#dark-theme").attr("disabled", "disabled");
  });
});

$(function() {
    $("#light-theme").click(function() {
        if (themeLight == false) {

            themeLight = true;

            $("body").removeClass("dark-mode");
            $(".logo").removeClass("dark-mode");
            $(".logo h1").removeClass("dark-mode");
            $(".high-score").removeClass("dark-mode");
            $(".memory-game").removeClass("dark-mode");
            $(".card-back").attr("src", "assets/images/cardbackgreen.jpg");
            $(".start-game").removeClass("dark-mode");
            $(".overlay-finish").removeClass("dark-mode");

            $("#dark-theme").removeAttr("disabled");
            $("#light-theme").attr("disabled", "disabled");
        };
    });
});


/* ---------- Starting the game ---------- */

// When clicking on the play button the start-game div disappears
$(".start-game").on("click", function () {
  $(this).remove();

    const timeCounter = setInterval(() => {
    timeSecond++;
    displayTime(timeSecond);
    // Set to == 8 when project is finished! <------------------------------
    if (matches == 2) {
        clearInterval(timeCounter);
        localStorage.setItem("lastRoundTime", timeHour.innerHTML);
    }
},1000)

function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeHour.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`
}

});

/* ---------- Playing the game ---------- */

// flips the cards
$(cards).on('click', function cardFlip() {

    clickAudio.play();
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

    let cardsMatch = firstCard.dataset.id === secondCard.dataset.id;

    // if cards match go to disableCards function
    if (firstCard.dataset.id === secondCard.dataset.id) {
        matchCardAudio.play();
        matches = matches + 1;

        // if all cards are paired. Set to == 8 when project is finished! <------------------------------
        if (matches == 2) { 
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
 };

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