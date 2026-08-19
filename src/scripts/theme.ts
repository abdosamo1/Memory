// Theme handlers in Settings Screen

import * as interfaces from "./interfaces";

/**
 * Applies the gaming theme to the preview images.
 * @param dark - The dark-theme image element.
 * @param light - The light-theme image element.
 */
function applyGamingTheme(dark: HTMLElement, light: HTMLElement): void {
    dark.classList.remove('hidden');
    light.classList.add('hidden');
}

/**
 * Applies the DA-projects theme to the preview images.
 * @param dark - The dark-theme image element.
 * @param light - The light-theme image element.
 */
function applyDaProjectsTheme(dark: HTMLElement, light: HTMLElement): void {
    dark.classList.add('hidden');
    light.classList.remove('hidden');
}

/**
 * Updates the theme preview image based on the given theme value.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 */
export function updateThemePreview(theme: string): void {
    const dark = document.getElementById('theme-dark');
    const light = document.getElementById('theme-light');

    if (!dark || !light) return;

    if (theme === 'gaming') applyGamingTheme(dark, light);
    else if (theme === 'da-projects') applyDaProjectsTheme(dark, light);
}


/**
 * Registers the change listener for a single theme radio input.
 * @param input - The radio input to listen on.
 */
function addThemeChangeListener(input: HTMLInputElement): void {
    input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) updateThemePreview(target.value);
    });
}

/**
 * Restores the theme preview to the currently checked theme on mouse-leave.
 */
function restoreCheckedThemePreview(): void {
    const checked = document.querySelector<HTMLInputElement>('input[name="theme"]:checked');
    if (checked) updateThemePreview(checked.value);
}

/**
 * Registers mouseenter/mouseleave listeners for a single theme label.
 * @param input - The radio input whose parent label is targeted.
 */
function addThemeHoverListeners(input: HTMLInputElement): void {
    const label = input.closest('label');
    label?.addEventListener('mouseenter', () => updateThemePreview(input.value));
    label?.addEventListener('mouseleave', restoreCheckedThemePreview);
}

/**
 * Sets up click listeners on all theme radio buttons to update the preview.
 */
export function updateThemeonclick(): void {
    document
        .querySelectorAll<HTMLInputElement>('input[name="theme"]')
        .forEach(addThemeChangeListener);
}

/**
 * Sets up hover listeners on all theme radio labels to update the preview.
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
    const gameScreen = document.getElementById('game-screen');
    if (!gameScreen) return;

    gameScreen.classList.remove('theme-gaming', 'theme-da-projects');
    gameScreen.classList.add(`theme-${theme}`);
}

/**
 * Loads the appropriate theme images based on the selected theme.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 * @returns string[] - Array of theme image paths.
 */
function loadThemeImages(theme: string): string[] {
    let themeCards: string[] = [];
    switch (theme) {
        case 'gaming':
            for (let i = 1; i <= 18; i++) { themeCards.push('../img/dark_theme/card' + i + '.svg'); }
            break;
        case 'da-projects':
            for (let i = 1; i <= 18; i++) { themeCards.push('../img/light_theme/card' + i + '.svg'); }
            break;
    }
    return themeCards;
}

export const themeGaming: interfaces.GameTheme = {
    name: 'gaming',
    images: {
        cards: loadThemeImages('gaming'),
        win1: 'src/img/dark_theme/win.svg',
        tie: 'src/img/dark_theme/tie.svg',
        score1: 'src/img/score1.svg',
        score2: 'src/img/score2.svg'
    }
}

export const themeDaProjects: interfaces.GameTheme = {
    name: 'da-projects',
    images: {
        cards: loadThemeImages('da-projects'),
        win1: 'src/img/light_theme/win1.svg',
        win2: 'src/img/light_theme/win2.svg',
        tie: 'src/img/light_theme/tie.svg',
        score1: 'src/img/score1.svg',
        score2: 'src/img/score2.svg'
    }
}