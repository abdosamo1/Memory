
import * as app from "./index";


/**
 * selecting a card flipping it over (only nearest card to mouse pointer)
 * @returns void
 */
function cardFlip() {
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
  const areMatch =
    flippedCards[0].dataset.value === flippedCards[1].dataset.value;

  areMatch
    ? flippedCards.forEach((card) => {
        app.toggleClass(card, "matched");
        app.toggleClass(card, "flipped");
      })
    : flipBack(flippedCards);
}

/**
 * Flips back the cards that are not a match.
 * @param cards - The cards to flip back.
 * @returns void
 */
function flipBack(cards: NodeListOf<HTMLElement>): void {
  setTimeout(() => {
    cards.forEach((card) => app.toggleClass(card, "flipped"));
  }, 1000);
}

/**
 * Initializes the card flip and match functionality.
 * @returns void
 */
export function initCardFlip() {
  cardFlip();
}

/**
 * determines player turns
 * @returns void
 */

export function playerTurn() {

  let player = "player1";

  if(player === "player1") {
    player = "player2";
  } else {
    player = "player1";
  }

}