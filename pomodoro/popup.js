document.addEventListener("DOMContentLoaded", function () {
  const workMinutesInput = document.getElementById("workMinutes");
  const breakMinutesInput = document.getElementById("breakMinutes");
  const startPomodoroButton = document.getElementById("startPomodoro");
  const stopPomodoroButton = document.getElementById("stopPomodoro");
  const timerDisplay = document.getElementById("timerDisplay");

  let timer;
  let isRunning = false;
  let workDuration = 25 * 60; // Default work duration in seconds
  let breakDuration = 5 * 60; // Default break duration in seconds

  startPomodoroButton.addEventListener("click", function () {
    if (!isRunning) {
      workDuration = parseInt(workMinutesInput.value) * 60 || workDuration;
      breakDuration = parseInt(breakMinutesInput.value) * 60 || breakDuration;

      updateTimerDisplay(workDuration);

      timer = setInterval(function () {
        if (workDuration > 0) {
          workDuration--;
          updateTimerDisplay(workDuration);
        } else if (breakDuration > 0) {
          breakDuration--;
          updateTimerDisplay(breakDuration);
        } else {
          clearInterval(timer);
          isRunning = false;
        }
      }, 1000);

      isRunning = true;
    }
  });

  stopPomodoroButton.addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
  });

  function updateTimerDisplay(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
});
