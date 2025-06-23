const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = 400;
  const dodgerWidth = 40;

  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

function initializeDodger() {
  // Set initial position
  dodger.style.left = "180px";
  dodger.style.bottom = "0px";
}

document.addEventListener("DOMContentLoaded", function() {
  initializeDodger();
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
});

// For testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight,
    initializeDodger
  };
}