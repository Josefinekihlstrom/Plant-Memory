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
