import * as app from "./index";

/**
 * Renders the score-board template into the score-board container based on the game theme.
 * @param theme - game theme name
 * @returns void
 */
export function renderScoreBoard(theme: app.interfaces.GameTheme["name"]): void {
  const themeImages = theme === "gaming" ? app.themes.themeGaming.images : app.themes.themeDaProjects.images;
  const container = document.getElementById("score-board-container");
  if (!container) return;

  container.innerHTML = app.templates.scoreTemplate(themeImages);
}

/**
 * Renders the game cards template into the game board container, in random order.
 * @param theme - game theme card images
 * @param size - number of cards to render (should be an even number)
 * @returns void
 */
export function renderCards(theme: app.interfaces.GameTheme["name"], size: number): void {
  const themeImages = theme === "gaming" ? app.themes.themeGaming.images : app.themes.themeDaProjects.images;
  const container = document.getElementById("game-board-content");
  if (!container) return;

  const pairCount = size / 2;
  const cardIndexes = app.math.shuffle([...Array.from({ length: pairCount }, (_, i) => i), ...Array.from({ length: pairCount }, (_, i) => i)]);

  container.innerHTML = app.templates.cardsTemplate(themeImages, cardIndexes);
  container.classList.add(`cards-${size}`);
}

/**
 * Renders the player turn icon based on the selected player.
 * @param player - The selected player value.
 */
export function renderCurrentPlayer(player: string): void {
  const icon = document.getElementById("current-player-icon");
  if (!icon) return;

  switch (player) {
    case "blue":
      icon.classList.remove("orange");
      icon.classList.add("blue");
      break;
    case "orange":
      icon.classList.remove("blue");
      icon.classList.add("orange");
      break;
  }
}
