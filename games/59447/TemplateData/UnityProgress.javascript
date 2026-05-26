function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) return;

  // Create the container for loading animation
  if (!gameInstance.loadingContainer) {
    gameInstance.loadingContainer = document.createElement("div");
    gameInstance.loadingContainer.className = "loading-container";
    gameInstance.container.appendChild(gameInstance.loadingContainer);

    // Create rotating 3D text
    gameInstance.rotatingText = document.createElement("div");
    gameInstance.rotatingText.className = "rotating-text";
    gameInstance.rotatingText.innerText = "VODOGAME";
    gameInstance.loadingContainer.appendChild(gameInstance.rotatingText);

    // Create fading dots
    gameInstance.fadingDots = document.createElement("div");
    gameInstance.fadingDots.className = "fading-dots";
    for (let i = 0; i < 5; i++) {
      const dot = document.createElement("span");
      dot.className = `dot dot-${i}`;
      gameInstance.fadingDots.appendChild(dot);
    }
    gameInstance.loadingContainer.appendChild(gameInstance.fadingDots);
  }

  // Hide the loading animation when loading is complete
  if (progress === 1) {
    gameInstance.loadingContainer.style.display = "none";
  }
}
