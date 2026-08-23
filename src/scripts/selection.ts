import * as app from "./index";

/**
 * Radio options for the "Game Themes" fieldset.
 */
export const themeOptions: app.interfaces.RadioOption[] = [
  { value: "gaming", label: "Gaming theme", checked: true },
  { value: "da-projects", label: "DA Projects theme" },
];

/**
 * Radio options for the "Choose Player" fieldset.
 */
export const playerOptions: app.interfaces.RadioOption[] = [
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
];

/**
 * Radio options for the "Board Size" fieldset.
 */
export const boardOptions: app.interfaces.RadioOption[] = [
  { value: "16", label: "16 cards" },
  { value: "24", label: "24 cards" },
  { value: "36", label: "36 cards" },
];

export let currentGameConfig: app.interfaces.GameSettings = {
  theme: "Gaming theme",
  player: "color",
  size: "0",
  orangePlayerScore: 0,
  bluePlayerScore: 0,
};


// ─── Active Icons ─────────────────────────────────────────────────────────────

/**
 * Toggles the active icon for one label based on whether it matches the selected input.
 * @param label - The label element to check.
 * @param selectedInput - The currently selected radio input.
 */
function toggleLabelIcon(
  label: HTMLLabelElement,
  selectedInput: HTMLInputElement,
): void {
  const radio = label.querySelector('input[type="radio"]');
  const icon = label.querySelector(".active-icon");

  if (radio && icon) {
    icon.classList.toggle("hidden", radio !== selectedInput);
  }
}

/**
 * Updates the active-icon visibility for all radio labels.
 * @param selectedInput - The currently selected radio input element.
 */
export function updateActiveIcons(selectedInput: HTMLInputElement): void {
  const fieldset = selectedInput.closest(".settings-screen-option");
  if (!fieldset) return;

  fieldset
    .querySelectorAll<HTMLLabelElement>("label")
    .forEach((label) => toggleLabelIcon(label, selectedInput));
}

/**
 * Restores the active-icon visibility of a fieldset's labels to match the given checked input.
 * @param fieldset - The option fieldset to restore.
 * @param checked - The radio input that should appear selected, if any.
 */
function restoreFieldsetIcons(fieldset: Element, checked: Element | null): void {
  fieldset.querySelectorAll<HTMLLabelElement>("label").forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');
    const icon = label.querySelector(".active-icon");
    icon?.classList.toggle("hidden", radio !== checked);
  });
}

/**
 * Shows the active-icon for the hovered label only, hiding it for its fieldset siblings.
 * @param label - The hovered label.
 * @param fieldset - The option fieldset containing the label.
 */
function previewLabelIcon(label: HTMLLabelElement, fieldset: Element): void {
  fieldset.querySelectorAll<HTMLLabelElement>("label").forEach((sibling) => {
    const icon = sibling.querySelector(".active-icon");
    icon?.classList.toggle("hidden", sibling !== label);
  });
}

/**
 * Holds, per fieldset, the radio input that was actually chosen before a hover
 * preview started overriding it (or null if none was chosen yet).
 */
const lastCheckedByFieldset = new WeakMap<Element, HTMLInputElement | null>();

/**
 * Records the actually checked input of a fieldset, so it can be restored later.
 * @param fieldset - The option fieldset to record.
 */
function recordActualChecked(fieldset: Element): void {
  const checked = fieldset.querySelector<HTMLInputElement>('input[type="radio"]:checked');
  lastCheckedByFieldset.set(fieldset, checked);
}

/**
 * Previews a radio input as checked without firing a "change" event or
 * persisting the selection, so hovering only affects the visual state.
 * @param label - The hovered label whose radio should be previewed as checked.
 * @param fieldset - The option fieldset containing the label.
 */
function previewLabelChecked(label: HTMLLabelElement, fieldset: Element): void {
  const radio = label.querySelector<HTMLInputElement>('input[type="radio"]');
  if (!radio || radio.checked) return;

  if (!lastCheckedByFieldset.has(fieldset)) {
    recordActualChecked(fieldset);
  }

  radio.checked = true;
  previewLabelIcon(label, fieldset);
}

/**
 * Applies the actually-checked input to a fieldset's radio group, unchecking
 * whichever input the hover preview had checked instead.
 * @param fieldset - The option fieldset to update.
 * @param actualChecked - The radio input that should end up checked, if any.
 */
function applyActualChecked(fieldset: Element, actualChecked: HTMLInputElement | null): void {
  const currentlyChecked = fieldset.querySelector<HTMLInputElement>('input[type="radio"]:checked');
  if (currentlyChecked === actualChecked) return;

  if (actualChecked) {
    actualChecked.checked = true;
  } else if (currentlyChecked) {
    currentlyChecked.checked = false;
  }
}

/**
 * Restores a fieldset's radio input (and active icons) back to the option that
 * was actually chosen before hovering started.
 * @param fieldset - The option fieldset to restore.
 */
function restoreFieldsetChecked(fieldset: Element): void {
  if (!lastCheckedByFieldset.has(fieldset)) return;

  const actualChecked = lastCheckedByFieldset.get(fieldset) ?? null;
  lastCheckedByFieldset.delete(fieldset);

  applyActualChecked(fieldset, actualChecked);
  restoreFieldsetIcons(fieldset, actualChecked);
}

/**
 * Registers hover listeners so that hovering an option previews it as selected
 * (radio + icon), reverting to the actually chosen option once the fieldset is
 * left without a real selection being made.
 * @param fieldset - The option fieldset to wire up.
 */
function addFieldsetIconHoverListeners(fieldset: Element): void {
  fieldset.querySelectorAll<HTMLLabelElement>("label").forEach((label) => {
    label.addEventListener("mouseenter", () =>
      previewLabelChecked(label, fieldset),
    );
  });

  fieldset.addEventListener("mouseleave", () => restoreFieldsetChecked(fieldset));
}

/**
 * Initializes hover-preview listeners for the active-icon on all settings fieldsets.
 */
export function initOptionIconHover(): void {
  document
    .querySelectorAll(".settings-screen-option")
    .forEach(addFieldsetIconHoverListeners);
}

// ─── Status Bar Labels ────────────────────────────────────────────────────────

/**
 * Updates the theme label text inside the status bar.
 * @param theme - The selected theme value, or undefined if not selected.
 */
function updateThemeLabel(theme: string | undefined): void {
  const el = document.getElementById("selected-theme");
  if (theme && el) el.textContent = "Game Theme";
}

/**
 * Updates the player label text inside the status bar.
 * @param player - The selected player value, or undefined if not selected.
 */
function updatePlayerLabel(player: string | undefined): void {
  const el = document.getElementById("selected-player");
  if (player && el) {
    el.textContent = player[0].toUpperCase() + player.slice(1) + " Player";
  }
}

/**
 * Updates the board-size label text inside the status bar.
 * @param size - The selected board size value, or undefined if not selected.
 */
function updateSizeLabel(size: string | undefined): void {
  const el = document.getElementById("selected-size");
  if (size && el) el.textContent = "Board-" + size + " Cards";
}

// ─── Status Bar Animation & State ────────────────────────────────────────────

/**
 * Runs the expand-pulse animation on the selections status bar.
 */
function triggerStatusAnimation(): void {
  const status = document.getElementById("selections-status");
  if (!status) return;

  status.classList.remove("animate-expand");
  void status.offsetWidth;
  status.classList.add("animate-expand");
}

/**
 * Toggles between the default and active splitter images.
 * @param allSelected - Whether all three options are selected.
 */
function toggleSplitters(allSelected: boolean): void {
  document
    .querySelectorAll<HTMLElement>(".default-splitter")
    .forEach((s) => s.classList.toggle("hidden", allSelected));
  document
    .querySelectorAll<HTMLElement>(".active-splitter")
    .forEach((s) => s.classList.toggle("hidden", !allSelected));
}

/**
 * Enables or disables the start-game button and swaps its icon.
 * @param allSelected - Whether all three options are selected.
 */
function toggleStartButton(allSelected: boolean): void {
  const btn = document.getElementById(
    "start-game-button",
  ) as HTMLButtonElement | null;
  const activeIcon = document.getElementById("start-game-active-icon");
  const disabledIcon = document.getElementById("start-game-disabled-icon");

  if (btn) btn.disabled = !allSelected;
  activeIcon?.classList.toggle("hidden", !allSelected);
  disabledIcon?.classList.toggle("hidden", allSelected);
}

/**
 * Updates splitters and the start button based on whether all selections are made.
 * @param allSelected - Whether theme, player, and board size are all selected.
 */
export function updateSelectionsStatusComplete(allSelected: boolean): void {
  toggleSplitters(allSelected);
  toggleStartButton(allSelected);
}

// ─── Preview Orchestration ────────────────────────────────────────────────────

/**
 * Reads the current settings-screen selection and saves it into the game
 * config. Must run while the settings screen is still mounted.
 */
export function applySelection(): void {
  const { theme, player, size } = readSelectedValues();

  if (theme && player && size) {
    setGameState(theme, player, size);
  }
}

/**
 * Renders the game screen (score board, cards, current player, theme) from
 * the saved game config. Must run after the game screen is mounted.
 */
export function renderGameScreen(): void {
  const { theme, player, size } = currentGameConfig;

  app.render.renderCurrentPlayer(player);
  app.render.renderScoreBoard(theme);
  app.render.renderCards(theme, parseInt(size));
  app.themes.applyThemeToGameBoard(theme);
}

/**
 * Saves the current user selection into the game config.
 * @param theme - The selected theme.
 * @param player - The selected player.
 * @param size - The selected board size.
 */
export function setGameState(theme: string, player: string, size: string): void {
  currentGameConfig = {
    theme,
    player,
    size,
    orangePlayerScore: 0,
    bluePlayerScore: 0,
  };
}

/**
 * Reads the currently checked values for theme, player, and board size.
 * @returns An object containing the three optional values.
 */
function readSelectedValues(): { theme?: string; player?: string; size?: string; } {
  return {
    theme: document.querySelector<HTMLInputElement>(
      'input[name="theme"]:checked',
    )?.value,
    player: document.querySelector<HTMLInputElement>(
      'input[name="player"]:checked',
    )?.value,
    size: document.querySelector<HTMLInputElement>(
      'input[name="board"]:checked',
    )?.value,
  };
}

/**
 * Refreshes all status-bar labels, triggers the animation, and updates the complete state.
 */
export function updatePreview(): void {
  const { theme, player, size } = readSelectedValues();

  updateThemeLabel(theme);
  updatePlayerLabel(player);
  updateSizeLabel(size);
  triggerStatusAnimation();
  updateSelectionsStatusComplete(Boolean(theme && player && size));
}

// ─── Reset ────────────────────────────────────────────────────────────────────

/**
 * Resets the status-bar labels back to their placeholder text.
 */
function resetStatusLabels(): void {
  const theme = document.getElementById("selected-theme");
  const player = document.getElementById("selected-player");
  const size = document.getElementById("selected-size");

  if (theme) theme.textContent = "Theme";
  if (player) player.textContent = "Player";
  if (size) size.textContent = "Size";
}

/**
 * Resets the settings screen (selections, active icons, status bar, theme
 * preview) back to its initial, just-opened state.
 */
export function resetSettingsScreen(): void {
  document.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach((input) => { input.checked = input.defaultChecked; });

  document.querySelectorAll(".settings-screen-option").forEach((fieldset) => {
    restoreFieldsetIcons(fieldset, fieldset.querySelector('input[type="radio"]:checked'));
  });

  resetStatusLabels();
  updateSelectionsStatusComplete(false);

  const checkedTheme = document.querySelector<HTMLInputElement>('input[name="theme"]:checked')?.value;
  if (checkedTheme) app.themes.updateThemePreview(checkedTheme);
}

// ─── Initialization ───────────────────────────────────────────────────────────

/**
 * Registers the change listener for a single radio input.
 * @param input - The radio input to listen on.
 */
function addSelectionChangeListener(input: HTMLInputElement): void {
  input.addEventListener("click", (event) => {
    const target = event.target as HTMLInputElement;
    if (!target.checked) return;

    const fieldset = target.closest(".settings-screen-option");
    if (fieldset) lastCheckedByFieldset.delete(fieldset);

    updateActiveIcons(target);
    updatePreview();
  });
}

/**
 * Initializes change listeners on all radio inputs in the settings screen.
 */
export function initSelection(): void {
  document.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach(addSelectionChangeListener);
}

