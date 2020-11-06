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

const cards = $('.memory-card');

let cardIsFlipped = false;
let boardLocked = false;
let firstCard;
let secondCard;

$(cards).on('click', function cardFlip() {
    // lock the board if true
    if (boardLocked) return;

    $(this).addClass('flip');

    if (!cardIsFlipped) {
        // the first card is clicked
        cardIsFlipped = true;
        firstCard = this;

        return;
    }
        // the second card is clicked
        cardIsFlipped = false;
        secondCard = this;

        checkMatch();
});

function checkMatch() {

    let cardsMatch = firstCard.dataset.id === secondCard.dataset.id;

    // if cards match go to disableCards function
    if (firstCard.dataset.id === secondCard.dataset.id) {
        disableCards();
    } else {
        // if cards don't match go to unflipCards function
        unflipCards();
    }
}

function disableCards() {
    $(firstCard).off('click', cardIsFlipped);
    $(secondCard).off('click', cardIsFlipped);
}

function unflipCards() {
    // unlock after cards has been flipped
    boardLocked = true;

    setTimeout(() => {
        $(firstCard).removeClass('flip');
        $(secondCard).removeClass('flip');

        boardLocked = false;
    }, 1200);
}


