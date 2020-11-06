/* ---------- Starting the game ---------- */

// When clicking on the play button the start-game div disappears
$(".start-game").on("click", function () {
  $(this).remove();

  // timer also starts after clicking the play button
  const startingTime = 0;
  let time = startingTime * 60;
  const countDown = document.getElementById("timer");
  setInterval(startTime, 1000);

  function startTime() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${minutes}:${seconds}`;
    time++;
    time = time < 0 ? 0 : time;
  };
});

/* ---------- Playing the game ---------- https://www.youtube.com/watch?v=ZniVgo8U7ek/ */

const cards = document.querySelectorAll('.memory-card');

let cardIsFlipped = false;
let boardLocked = false;
let firstCard;
let secondCard;

var clickSound = new Audio('assets/sound/click-card.mp3');
var matchCardSound = new Audio('assets/sound/cards-match.wav');
var winSound = new Audio('assets/sound/win-game.wav');

// flips the cards
$(cards).on('click', function cardFlip() {

    clickSound.play();
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
});

// checks for cards to match
function checkMatch() {

    let cardsMatch = firstCard.dataset.id === secondCard.dataset.id;

    // if cards match go to disableCards function
    if (firstCard.dataset.id === secondCard.dataset.id) {
        matchCardSound.play();
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

        clickSound.play();
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

// shuffels cards
(function shuffleCards() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
    });
})();