import * as interfaces from "./interfaces";

/**
 * Builds the score-board HTML markup for the given theme.
 * @param theme - game theme score images
 * @returns HTML string
 */
export function scoreTemplate(theme: interfaces.GameTheme["images"]): string {
  return `
        <div id="score-board-player1" class="score-board-player">
            <img src="${theme.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">0</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${theme.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">0</div>
        </div>
    `;
}

/**
 * Builds the game cards HTML markup for the given theme and card order.
 * @param theme - game theme card images
 * @param cardIndexes - the card image index for each card slot, in render order
 * @returns HTML string
 */
export function cardsTemplate(
  theme: interfaces.GameTheme["images"],
  cardIndexes: number[],
): string {
  return cardIndexes
    .map(
      (i) => `
        <div class="card" data-value="card-${i}">
            <div class="card__inner">
                <div class="card__face"></div>
                <div class="card__face card__face--back">
                    <img class="card__image" src="${theme.cards[i]}" alt="card-image">    
                </div>
            </div>
        </div>`,
    )
    .join("");
}
