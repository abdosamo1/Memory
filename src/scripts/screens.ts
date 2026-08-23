import { toggleClass } from './dom';
import * as app from './index';

// ─── Screen Mounting ──────────────────────────────────────────────────────────

/**
 * The three mountable screens.
 */
type ScreenName = 'start' | 'settings' | 'game';

/**
 * Maps each screen name to its HTML-markup-generating template function.
 */
const screenTemplates: Record<ScreenName, () => string> = {
    start: app.templates.startScreenTemplate,
    settings: app.templates.settingScreenTemplate,
    game: app.templates.gameScreenTemplate,
};

/**
 * Maps each screen name to its event-binding initializer, run after mount.
 */
const screenInitializers: Record<ScreenName, () => void> = {
    start: () => initStartScreen(),
    settings: () => initSettingsScreen(),
    game: () => initGameScreen(),
};

/**
 * Renders the given screen's markup into the #app-view mount point,
 * replacing whatever screen is currently mounted, then runs that screen's
 * event-binding initializer.
 * @param name - The screen to render ('start' | 'settings' | 'game').
 * @returns void
 */
export function renderScreen(name: ScreenName): void {
    const mount = document.getElementById('app-view');
    if (!mount) return;

    mount.innerHTML = screenTemplates[name]();
    screenInitializers[name]();
}

// ─── Screen Transitions ───────────────────────────────────────────────────────

/**
 * Transitions from the game screen back to the settings screen, resetting the
 * settings screen to look as if it was just opened for the first time.
 * @returns void
 */
export function backToSetting(): void {
    renderScreen('settings');
    app.resetSettingsScreen();
}

// ─── Start Screen ─────────────────────────────────────────────────────────────

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

/**
 * Binds the start screen's event listeners (play-arrow hover, start click).
 * Runs after the start screen template is mounted.
 * @returns void
 */
export function initStartScreen(): void {
    const startButton = document.getElementById('start-button');

    startButton?.addEventListener('mouseenter', togglePlayArrows);
    startButton?.addEventListener('mouseleave', togglePlayArrows);
    startButton?.addEventListener('click', () => renderScreen('settings'));
}

// ─── Settings Screen ──────────────────────────────────────────────────────────

/**
 * Binds the settings screen's event listeners (options, theme preview, start
 * game button). Runs after the settings screen template is mounted.
 * @returns void
 */
export function initSettingsScreen(): void {
    app.initSelection();
    app.initOptionIconHover();
    app.themes.updateThemeonclick();
    app.themes.updateThemeonHover();

    const startGameButton = document.getElementById(
        'start-game-button',
    ) as HTMLButtonElement | null;

    startGameButton?.addEventListener('click', () => {
        app.applySelection();
        renderScreen('game');
        app.renderGameScreen();
    });
}

// ─── Game Screen ──────────────────────────────────────────────────────────────

/**
 * Binds the game screen's event listeners (card flip, quit button, quit
 * overlay buttons). Runs after the game screen template is mounted.
 * @returns void
 */
export function initGameScreen(): void {
    app.cardFlip();
    app.addQuitEventListener();
    app.addQuitOverlayButtonsEventListeners();
}
