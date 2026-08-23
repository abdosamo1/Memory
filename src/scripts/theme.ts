// Theme handlers in Settings Screen

import * as interfaces from "./interfaces";

export const themeGaming: interfaces.GameTheme = {
  name: "gaming",
  images: {
    cards: loadThemeImages("gaming"),
    win1: "src/img/dark_theme/win.svg",
    tie: "src/img/dark_theme/tie.svg",
    score1: "src/img/score1.svg",
    score2: "src/img/score2.svg",
  },
};

export const themeDaProjects: interfaces.GameTheme = {
  name: "da-projects",
  images: {
    cards: loadThemeImages("da-projects"),
    win1: "src/img/light_theme/win1.svg",
    win2: "src/img/light_theme/win2.svg",
    tie: "src/img/light_theme/tie.svg",
    score1: "src/img/score1.svg",
    score2: "src/img/score2.svg",
  },
};

/**
 * Maps each theme identifier to its settings-screen preview image.
 */
const themePreviewImages: Record<string, string> = {
  gaming: "./src/img/theme-dark.svg",
  "da-projects": "./src/img/theme-light.svg",
};

/**
 * Updates the theme preview image based on the given theme value.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 * @returns void
 */
export function updateThemePreview(theme: string): void {
  const preview = document.getElementById("theme-preview") as HTMLImageElement | null;
  if (!preview) return;

  const src = themePreviewImages[theme];
  if (src) preview.src = src;
}

/**
 * Registers the change listener for a single theme radio input.
 * @param input - The radio input to listen on.
 * @returns void
 */
function addThemeChangeListener(input: HTMLInputElement): void {
  input.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) updateThemePreview(target.value);
  });
}

/**
 * Restores the theme preview to the currently checked theme on mouse-leave.
 * @returns void
 */
function restoreCheckedThemePreview(): void {
  const checked = document.querySelector<HTMLInputElement>(
    'input[name="theme"]:checked',
  );
  if (checked) updateThemePreview(checked.value);
}

/**
 * Registers mouseenter/mouseleave listeners for a single theme label.
 * @param input - The radio input whose parent label is targeted.
 * @returns void
 */
function addThemeHoverListeners(input: HTMLInputElement): void {
  const label = input.closest("label");
  label?.addEventListener("mouseenter", () => updateThemePreview(input.value));
  label?.addEventListener("mouseleave", restoreCheckedThemePreview);
}

/**
 * Sets up click listeners on all theme radio buttons to update the preview.
 * @returns void
 */
export function updateThemeonclick(): void {
  document
    .querySelectorAll<HTMLInputElement>('input[name="theme"]')
    .forEach(addThemeChangeListener);
}

/**
 * Sets up hover listeners on all theme radio labels to update the preview.
 * @returns void
 */
export function updateThemeonHover(): void {
  document
    .querySelectorAll<HTMLInputElement>('input[name="theme"]')
    .forEach(addThemeHoverListeners);
}

// Theme handler in Game Screen

/**
 * Applies the selected theme to the game board by adding the appropriate CSS class.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 * @returns void
 */
export function applyThemeToGameBoard(theme: string): void {
  const gameScreen = document.getElementById("game-screen");
  if (!gameScreen) return;

  gameScreen.classList.remove("theme-gaming", "theme-da-projects");
  gameScreen.classList.add(`theme-${theme}`);
}

/**
 * Loads the appropriate theme images based on the selected theme.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 * @returns string[] - Array of theme image paths.
 */
function loadThemeImages(theme: string): string[] {
  let themeCards: string[] = [];
  for (let i = 1; i <= 18; i++) {
    themeCards.push("src/img/" + theme + "/card" + i + ".svg");
  }
  return themeCards;
}
