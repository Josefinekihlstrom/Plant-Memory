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
let firstCard;
let secondCard;

$(cards).on('click', function cardFlip() {
    $(this).addClass('flip');

    if (!cardIsFlipped) {
        // the first card is clicked
        cardIsFlipped = true;
        firstCard = this;
    } else {
        // the second card is clicked
        cardIsFlipped = false;
        secondCard = this;

        // does the cards match?
        if (firstCard.dataset.id === secondCard.dataset.id) {
            $(firstCard).off('click', cardIsFlipped);
            $(secondCard).off('click', cardIsFlipped);
        } else {
            // if cards don't match
            setTimeout(() => {
                $(firstCard).removeClass('flip');
                $(secondCard).removeClass('flip');
            }, 1200);
        }
    }
});


