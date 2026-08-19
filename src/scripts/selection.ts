import * as app from './index';

// ─── Active Icons ─────────────────────────────────────────────────────────────

/**
 * Toggles the active icon for one label based on whether it matches the selected input.
 * @param label - The label element to check.
 * @param selectedInput - The currently selected radio input.
 * @returns void
 */
function toggleLabelIcon(label: HTMLLabelElement, selectedInput: HTMLInputElement): void {
    const radio = label.querySelector('input[type="radio"]');
    const icon = label.querySelector('.active-icon');

    if (radio && icon) {
        icon.classList.toggle('hidden', radio !== selectedInput);
    }
}

/**
 * Updates the active-icon visibility for all radio labels.
 * @param selectedInput - The currently selected radio input element.
 * @returns void
 */
export function updateActiveIcons(selectedInput: HTMLInputElement): void {
    const fieldset = selectedInput.closest('.settings-screen-option');
    if (!fieldset) return;

    fieldset
        .querySelectorAll<HTMLLabelElement>('label')
        .forEach(label => toggleLabelIcon(label, selectedInput));
}

/**
 * Restores the active-icon visibility of a fieldset's labels to match the actually checked input.
 * @param fieldset - The option fieldset to restore.
 * @returns void
 */
function restoreFieldsetIcons(fieldset: Element): void {
    const checked = fieldset.querySelector('input[type="radio"]:checked');

    fieldset.querySelectorAll<HTMLLabelElement>('label').forEach(label => {
        const radio = label.querySelector('input[type="radio"]');
        const icon = label.querySelector('.active-icon');
        icon?.classList.toggle('hidden', radio !== checked);
    });
}

/**
 * Shows the active-icon for the hovered label only, hiding it for its fieldset siblings.
 * @param label - The hovered label.
 * @param fieldset - The option fieldset containing the label.
 * @returns void
 */
function previewLabelIcon(label: HTMLLabelElement, fieldset: Element): void {
    fieldset.querySelectorAll<HTMLLabelElement>('label').forEach(sibling => {
        const icon = sibling.querySelector('.active-icon');
        icon?.classList.toggle('hidden', sibling !== label);
    });
}

/**
 * Registers hover listeners so that hovering an option previews its selected look,
 * temporarily overriding the actually selected option until the fieldset is left.
 * @param fieldset - The option fieldset to wire up.
 * @returns void
 */
function addFieldsetIconHoverListeners(fieldset: Element): void {
    fieldset.querySelectorAll<HTMLLabelElement>('label').forEach(label => {
        label.addEventListener('mouseenter', () => previewLabelIcon(label, fieldset));
    });

    fieldset.addEventListener('mouseleave', () => restoreFieldsetIcons(fieldset));
}

/**
 * Initializes hover-preview listeners for the active-icon on all settings fieldsets.
 * @returns void
 */
export function initOptionIconHover(): void {
    document
        .querySelectorAll('.settings-screen-option')
        .forEach(addFieldsetIconHoverListeners);
}

// ─── Status Bar Labels ────────────────────────────────────────────────────────

/**
 * Updates the theme label text inside the status bar.
 * @param theme - The selected theme value, or undefined if not selected.
 * @returns void
 */
function updateThemeLabel(theme: string | undefined): void {
    const el = document.getElementById('selected-theme');
    if (theme && el) el.textContent = 'Game Theme';
}

/**
 * Updates the player label text inside the status bar.
 * @param player - The selected player value, or undefined if not selected.
 * @returns void
 */
function updatePlayerLabel(player: string | undefined): void {
    const el = document.getElementById('selected-player');
    if (player && el) {
        el.textContent = player[0].toUpperCase() + player.slice(1) + ' Player';
    }
}

/**
 * Updates the board-size label text inside the status bar.
 * @param size - The selected board size value, or undefined if not selected.
 * @returns void
 */
function updateSizeLabel(size: string | undefined): void {
    const el = document.getElementById('selected-size');
    if (size && el) el.textContent = 'Board-' + size + ' Cards';
}

// ─── Status Bar Animation & State ────────────────────────────────────────────

/**
 * Runs the expand-pulse animation on the selections status bar.
 */
function triggerStatusAnimation(): void {
    const status = document.getElementById('selections-status');
    if (!status) return;

    status.classList.remove('animate-expand');
    void status.offsetWidth;
    status.classList.add('animate-expand');
}

/**
 * Toggles between the default and active splitter images.
 * @param allSelected - Whether all three options are selected.
 * @returns void
 */
function toggleSplitters(allSelected: boolean): void {
    document.querySelectorAll<HTMLElement>('.default-splitter')
        .forEach(s => s.classList.toggle('hidden', allSelected));
    document.querySelectorAll<HTMLElement>('.active-splitter')
        .forEach(s => s.classList.toggle('hidden', !allSelected));
}

/**
 * Enables or disables the start-game button and swaps its icon.
 * @param allSelected - Whether all three options are selected.
 * @returns void
 */
function toggleStartButton(allSelected: boolean): void {
    const btn = document.getElementById('start-game-button') as HTMLButtonElement | null;
    const activeIcon = document.getElementById('start-game-active-icon');
    const disabledIcon = document.getElementById('start-game-disabled-icon');

    if (btn) btn.disabled = !allSelected;
    activeIcon?.classList.toggle('hidden', !allSelected);
    disabledIcon?.classList.toggle('hidden', allSelected);
}

/**
 * Updates splitters and the start button based on whether all selections are made.
 * @param allSelected - Whether theme, player, and board size are all selected.
 * @returns void
 */
export function updateSelectionsStatusComplete(allSelected: boolean): void {
    toggleSplitters(allSelected);
    toggleStartButton(allSelected);
}

// ─── Preview Orchestration ────────────────────────────────────────────────────

export let currentGameConfig: app.interfaces.GameSettings = {
    theme: 'Gaming theme',
    player: 'color',
    size: '0'
};

/**
 * Updates the selected theme, player, and board size from user selection.
 * @returns void
 */
export function applySelection(): void {
    const { theme, player, size } = readSelectedValues();

    if (theme && player && size) {
        setGameState(theme, player, size);
        renderscoreTheme(theme);
        renderCurrentPlayer(player);
        app.themes.applyThemeToGameBoard(theme);
    }
}

/**
 * Renders the player turn icon based on the selected player.
 * @param player - The selected player value.
 */
function renderCurrentPlayer(player: string): void {
    const icon = document.getElementById('current-player-icon');
    if (!icon) return;

    switch (player) {
        case ('blue'):
            icon.classList.add('blue');
            break;
        case ('orange'):
            icon.classList.add('orange');
            break;
    }
}

/**
 * Renders the score theme template based on the selected theme.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 */
function renderscoreTheme(theme: string): void {
    switch (theme) {
        case (app.themes.themeGaming.name):
            app.templates.renderscoreThemeTemplate(app.themes.themeGaming.images);
            break;
        case (app.themes.themeDaProjects.name):
            app.templates.renderscoreThemeTemplate(app.themes.themeDaProjects.images);
            break;
    }
}

/**
 * Saves the current user selection into the game config.
 * @param theme - The selected theme.
 * @param player - The selected player.
 * @param size - The selected board size.
 * @returns void
 */
export function setGameState(theme: string, player: string, size: string): void {
    currentGameConfig = {
        theme,
        player,
        size
    };
}

/**
 * Reads the currently checked values for theme, player, and board size.
 * @returns An object containing the three optional values.
 */
function readSelectedValues(): { theme?: string; player?: string; size?: string } {
    return {
        theme: document.querySelector<HTMLInputElement>('input[name="theme"]:checked')?.value,
        player: document.querySelector<HTMLInputElement>('input[name="player"]:checked')?.value,
        size: document.querySelector<HTMLInputElement>('input[name="board"]:checked')?.value,
    };
}

/**
 * Refreshes all status-bar labels, triggers the animation, and updates the complete state.
 * @returns void
 */
export function updatePreview(): void {
    const { theme, player, size } = readSelectedValues();

    updateThemeLabel(theme);
    updatePlayerLabel(player);
    updateSizeLabel(size);
    triggerStatusAnimation();
    updateSelectionsStatusComplete(Boolean(theme && player && size));
}

// ─── Initialization ───────────────────────────────────────────────────────────

/**
 * Registers the change listener for a single radio input.
 * @param input - The radio input to listen on.
 * @returns void
 */
function addSelectionChangeListener(input: HTMLInputElement): void {
    input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.checked) {
            updateActiveIcons(target);
            updatePreview();
        }
    });
}

/**
 * Initializes change listeners on all radio inputs in the settings screen.
 * @returns void
 */
export function initSelection(): void {
    document
        .querySelectorAll<HTMLInputElement>('input[type="radio"]')
        .forEach(addSelectionChangeListener);
}