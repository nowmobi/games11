const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");
const resultScreen = document.getElementById("result-screen");
const resultMessage = document.getElementById("result-message");
const playAgainBtn = document.getElementById("play-again");

let currentPlayer = "X";
let boardState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning Combinations
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Handle Cell Click
cells.forEach(cell => {
    cell.addEventListener("click", () => {
        const index = cell.getAttribute("data-index");
        if (boardState[index] === "" && gameActive) {
            boardState[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

// Check Winner
function checkWinner() {
    let roundWon = false;

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        showAd(() => showResult(`${currentPlayer} Wins!`));
        return;
    }

    if (!boardState.includes("")) {
        gameActive = false;
        showAd(() => showResult("It's a Draw!"));
        return;
    }
}

// Show Result Screen
function showResult(message) {
    resultMessage.textContent = message;
    resultScreen.style.display = "block";
}

// Show Ad Before Result
function showAd(callback) {
    if (typeof sdk !== "undefined" && sdk.showBanner) {
        sdk.showBanner();
    }
    callback();
}

// Reset Game
function resetGame() {
    boardState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
    resultScreen.style.display = "none";
}

// Event Listeners for Reset Buttons
resetBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", resetGame);
