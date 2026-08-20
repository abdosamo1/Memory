import "../styles/main.scss";
import * as app from "./index";

document.addEventListener("DOMContentLoaded", init);

/**
 * Binds all start-button interaction events (hover + click).
 * @returns void
 */
function bindStartButtonEvents(): void {
  const startButton = document.getElementById("start-button");

  startButton?.addEventListener("mouseenter", app.togglePlayArrows);
  startButton?.addEventListener("mouseleave", app.togglePlayArrows);
  startButton?.addEventListener("click", app.showSettingsScreen);
}

/**
 * Binds the start game button event.
 * @returns void
 */
function bindStartGameButtonEvents(): void {
  const startGameButton = document.getElementById(
    "start-game-button",
  ) as HTMLButtonElement;

  startGameButton?.addEventListener("click", () => {
    app.applySelection();
    app.showGameScreen();
  });
}

/**
 * Initializes theme preview listeners (click and hover).
 * @returns void
 */
function initThemePreview(): void {
  app.themes.updateThemeonclick();
  app.themes.updateThemeonHover();
}

/**
 * Entry point: initializes all event listeners after the DOM is ready.
 * @returns void
 */
function init(): void {
  app.initSelection();
  app.initOptionIconHover();
  app.initCardFlip();
  initThemePreview();
  bindStartButtonEvents();
  bindStartGameButtonEvents();
}
