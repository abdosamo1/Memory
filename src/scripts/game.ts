
import * as app from "./index";


/**
 * selecting a card flipping it over (only nearest card to mouse pointer)
 * @returns void
 */
export function cardFlip() {
  const gameBoard = document.getElementById("game-board-content");

  gameBoard?.addEventListener("click", (event) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(".card");
    if (!target) return;

    const flippedCards = document.querySelectorAll<HTMLElement>(".card.flipped");
    const canFlip = flippedCards.length < 2 && !target.classList.contains("matched") && !target.classList.contains("flipped");

    if (canFlip) {
      app.toggleClass(target, "flipped");
      document.querySelectorAll<HTMLElement>(".card.flipped").length === 2 ? checkMatch() : null;
    }
  });
}

/**
 * Checks if the flipped cards are a match.
 * @returns void
 */
function checkMatch() {
  const flippedCards = document.querySelectorAll<HTMLElement>(".card.flipped");
  const areMatch = flippedCards[0].dataset.value === flippedCards[1].dataset.value;
  const scoreElement = document.getElementById("score-board-container");

  areMatch ? updateState(flippedCards) : flipBackAndChangeTurn(flippedCards);
}

/**
 * Updates the score and checks if the game is won.
 * @param cards - The cards that were matched.
 * @returns void
 */
function updateState(cards: NodeListOf<HTMLElement>) {
  updateScore(app.currentGameConfig.theme);
  matchTheCards(cards);
  checkWin();
}

/**
 * Updates the score based on the current player.
 * @returns void
 */
function updateScore(theme: string) {
  const currentPlayer = app.currentGameConfig.player;

  currentPlayer === "orange" ? app.currentGameConfig.orangePlayerScore++ : app.currentGameConfig.bluePlayerScore++;

  app.render.renderScoreBoard(theme);
}

/**
 * Checks if the game has been won.
 * @returns void
 */
function checkWin() {
  const matchedCards = document.querySelectorAll<HTMLElement>(".card.matched");
  const totalCards = document.querySelectorAll<HTMLElement>(".card");

  if (matchedCards.length === totalCards.length) {
    app.endTheGame();
  }
}

/**
 * Flips back the cards and changes the turn after a delay.
 * @param cards - The cards to flip back.
 */
function flipBackAndChangeTurn(cards: NodeListOf<HTMLElement>) {
  setTimeout(() => {
    flipBack(cards);
    playerTurn();
  }, 500);
}

/**
 * Matches the cards.
 * @param cards - The cards to match.
 * @returns void
 */
function matchTheCards(cards: NodeListOf<HTMLElement>) {
  cards.forEach((card) => {
    app.toggleClass(card, "matched");
    app.toggleClass(card, "flipped");
  });
}

/**
 * Flips back the cards that are not a match.
 * @param cards - The cards to flip back.
 * @returns void
 */
function flipBack(cards: NodeListOf<HTMLElement>): void {
  cards.forEach((card) => app.toggleClass(card, "flipped"));
}

/**
 * determines player turns
 * @returns void
 */

function playerTurn() {
  changeTurn();
  app.render.renderCurrentPlayer(app.currentGameConfig.player);
}

/**
 * Changes the current player.
 * @returns void
 */
function changeTurn() {
  app.currentGameConfig.player =
    app.currentGameConfig.player === "blue" ? "orange" : "blue";
}

/**
 * adds event listener to quit button
 */

export function addQuitEventListener() {
  const quitButton = document.getElementById("quit-button");
  quitButton?.addEventListener("click", showQuitOverlay);
}

/**
 * shows quit overlay
 */

function showQuitOverlay() {
  const quitOverlay = document.getElementById("exit-game");
  if (quitOverlay) {
    app.toggleClass(quitOverlay, "closed");
  }
  renderbuttons();
}

/**
 * renders the buttons texts based on theme
 */

function renderbuttons() {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  if (!noButton || !yesButton) return;

  const theme = app.currentGameConfig.theme;
  switch (theme) {
    case "gaming":
      noButton.textContent = "No, back to game ";
      yesButton.textContent = "Yes, quit the game";
      break;
    case "da-projects":
      noButton.textContent = "Back to Game";
      yesButton.textContent = "Exit Game";
      break;
  }
}

/**
 * closes the quit overlay
 */
function closeQuitOverlay(): void {
  const quitOverlay = document.getElementById("exit-game");
  quitOverlay?.classList.add("closed");
}

/**
 * adds event listeners to the quit overlay's no/yes buttons
 */
export function addQuitOverlayButtonsEventListeners() {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");

  noButton?.addEventListener("click", closeQuitOverlay);
  yesButton?.addEventListener("click", () => {
    closeQuitOverlay();
    app.backToSetting();
  });
}

/**
 * closes the quit overlay when clicking outside of it
 */
export function addQuitOverlayOutsideClickListener() {
  document.addEventListener("click", (event) => {
    const quitOverlay = document.getElementById("exit-game");
    const quitButton = document.getElementById("quit-button");
    if (!quitOverlay || quitOverlay.classList.contains("closed")) return;

    const target = event.target as HTMLElement;
    if (!quitOverlay.contains(target) && !quitButton?.contains(target)) {
      quitOverlay.classList.add("closed");
    }
  });
}

