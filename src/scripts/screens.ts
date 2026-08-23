import { toggleClass } from './dom';
import * as app from './index';

// ─── Screen Transitions ───────────────────────────────────────────────────────

/**
 * Hides the start screen by adding the 'hidden' class.
 * @param screen - The screen element.
 * @returns void
 */
function hideScreen(screen: HTMLElement): void {
    screen.classList.add('hidden');
}

/**
 * Shows the settings screen by removing the 'hidden' class.
 * @param screen - The screen element.
 * @returns void
 */
function showScreen(screen: HTMLElement): void {
    screen.classList.remove('hidden');
}

/**
 * Transitions from the start screen to the settings screen.
 * @returns void
 */
export function showSettingsScreen(): void {
    const startScreen = document.getElementById('start-screen') as HTMLElement;
    const settingsScreen = document.getElementById('setting-screen') as HTMLElement;

    if (startScreen && settingsScreen) {
        hideScreen(startScreen);
        showScreen(settingsScreen);
    }
}

/**
 * Transitions from the setting screen to the game screen.
 * @returns void
 */
export function showGameScreen(): void {
    const settingsScreen = document.getElementById('setting-screen') as HTMLElement;
    const gameScreen = document.getElementById('game-screen') as HTMLElement;

    if (settingsScreen && gameScreen) {
        hideScreen(settingsScreen);
        showScreen(gameScreen);
    }
}

/**
 * Transitions from the game screen back to the settings screen, resetting the
 * settings screen to look as if it was just opened for the first time.
 * @returns void
 */
export function backToSetting(): void {
    const gameScreen = document.getElementById('game-screen') as HTMLElement;
    const settingsScreen = document.getElementById('setting-screen') as HTMLElement;

    if (gameScreen && settingsScreen) {
        hideScreen(gameScreen);
        showScreen(settingsScreen);
    }

    app.resetSettingsScreen();
}

// ─── Start Screen UI ──────────────────────────────────────────────────────────

/**
 * Toggles both play-arrow icons between their default and hover states.
 * @returns void
 */
export function togglePlayArrows(): void {
    const playArrow = document.getElementById('play-arrow');
    const playArrowHover = document.getElementById('play-arrow-hover');

    if (playArrow && playArrowHover) {
        toggleClass(playArrow, 'hidden');
        toggleClass(playArrowHover, 'hidden');
    }
}