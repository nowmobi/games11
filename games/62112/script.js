const gridSize = 20;
const gameGrid = document.getElementById('game-grid');
const winScreen = document.getElementById('win-screen');
const drawScreen = document.getElementById('draw-screen');
const resetButton = document.getElementById('reset-button');
const playAgainButton = document.getElementById('play-again-button');
const retryButton = document.getElementById('retry-button');

// Generate random numbers for pre-filled boxes
const correctNumbers = Array.from({ length: gridSize }, () => Math.floor(Math.random() * 9) + 1);

// Create the game grid
function createGrid() {
  gameGrid.innerHTML = '';

  for (let i = 0; i < gridSize; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '9';

    if (Math.random() < 0.5) {
      input.value = correctNumbers[i];
      input.disabled = true;
      input.style.background = "linear-gradient(135deg, #0f3443, #34e89e)";
      input.style.color = "#fff";
    }

    input.addEventListener('input', checkWin);
    gameGrid.appendChild(input);
  }
}

// Check if player wins or it's a draw
function checkWin() {
  const inputs = document.querySelectorAll('#game-grid input');
  let isComplete = true;
  let isCorrect = true;

  inputs.forEach((input, index) => {
    if (input.value === '') {
      isComplete = false;
    } else if (!input.disabled && parseInt(input.value) !== correctNumbers[index]) {
      input.style.color = 'red';
      isCorrect = false;
    } else {
      input.style.color = '#fff';
    }
  });

  if (isComplete) {
    sdk.showBanner();
    isCorrect ? showWinScreen() : showDrawScreen();
  }
}

// Show win screen
function showWinScreen() {
  winScreen.classList.remove('hidden');
}

// Show draw screen
function showDrawScreen() {
  drawScreen.classList.remove('hidden');
}

// Start a new game
function newGame() {
  sdk.showBanner();
  winScreen.classList.add('hidden');
  drawScreen.classList.add('hidden');
  createGrid();
}

// Event listeners
resetButton.addEventListener('click', newGame);
playAgainButton.addEventListener('click', newGame);
retryButton.addEventListener('click', newGame);

// Initialize the game
createGrid();
