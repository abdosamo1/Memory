import * as app from "./index";

/**
 * Determines the winning player based on the final scores.
 * @returns 'blue', 'orange', or 'tie' if both players scored equally.
 */
function determineWinner(): app.interfaces.Winner {
  const { bluePlayerScore, orangePlayerScore } = app.currentGameConfig;
  if (bluePlayerScore === orangePlayerScore) return "tie";
  return bluePlayerScore > orangePlayerScore ? "blue" : "orange";
}

/**
 * Picks the trophy image for the given theme and winner.
 * @param theme - The current theme identifier ('gaming' | 'da-projects').
 * @param winner - The winning player, or 'tie'.
 * @returns Image source path.
 */
function winnerTrophyImage(theme: string, winner: app.interfaces.Winner): string {
  const images = theme === "gaming" ? app.themes.themeGaming.images : app.themes.themeDaProjects.images;
  if (winner === "tie") return images.tie;
  if (theme === "gaming") return images.win1;
  return winner === "orange" ? images.win1 : (images.win2 ?? images.win1);
}

/**
 * Builds the two winner-screen text lines for the given winner.
 * @param winner - The winning player, or 'tie'.
 * @returns The line1/line2 text pair.
 */
function winnerText(winner: app.interfaces.Winner): { line1: string; line2: string } {
  if (winner === "tie") return { line1: "It's a", line2: "Draw" };
  const playerLabel = winner === "blue" ? "Blue Player" : "Orange Player";
  return { line1: "The Winner is", line2: playerLabel };
}

/**
 * Resolves the winner screen's dynamic content for the given theme and winner.
 * @param theme - The current theme identifier ('gaming' | 'da-projects').
 * @param winner - The winning player, or 'tie'.
 * @returns The winner-screen render data.
 */
function buildWinnerScreenData(theme: string, winner: app.interfaces.Winner): app.interfaces.WinnerScreenData {
  const { line1, line2 } = winnerText(winner);

  return {
    line1,
    line2,
    line2Class: winner === "tie" ? "winner-screen__line2--draw" : `winner-screen__line2--${winner}`,
    trophySrc: winnerTrophyImage(theme, winner),
    trophyClass: winner === "tie" ? "winner-screen__trophy-image--draw" : "",
  };
}

/**
 * Binds the home button to return to the settings screen.
 */
function bindHomeButton(): void {
  document
    .getElementById("home-button")
    ?.addEventListener("click", () => app.backToSetting());
}

/**
 * Ends the game: shows the game-over screen, then the winner screen 3
 * seconds later, both sliding down from the top of the game screen.
 */
export function endTheGame(): void {
  const gameScreen = document.getElementById("game-screen");
  if (!gameScreen) return;

  const theme = app.currentGameConfig.theme;
  const winner = determineWinner();

  gameScreen.insertAdjacentHTML("beforeend", app.templates.gameOverScreenTemplate(theme));

  setTimeout(showWinnerScreen, 2000, theme, winner, gameScreen);
}

/**
 * Shows the winner screen with delay.
 * @param theme - The current theme identifier ('gaming' | 'da-projects').
 * @param winner - The winning player, or 'tie'.
 * @param gameScreen - The game screen element.
 */
function showWinnerScreen(theme: string, winner: app.interfaces.Winner, gameScreen: HTMLElement): void {
  const data = buildWinnerScreenData(theme, winner);
  gameScreen.insertAdjacentHTML("beforeend", app.templates.winnerScreenTemplate(theme, data));
  bindHomeButton();
}
