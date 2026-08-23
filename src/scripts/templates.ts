import * as app from "./index";

// ─── Screen Templates ───────────────────────────────────────────────────────

/**
 * Builds the start screen's HTML markup.
 * @returns HTML string
 */
export function startScreenTemplate(): string {
    return `
    <section id="start-screen" class="start-screen">
        <div class="section-content">
            <div id="start-screen-titles">
                <p>It’s play time.</p>
                <h1 id="app">Ready to play?</h1>
            </div>
            <button class="button start-button" id="start-button">
                <img src="./src/img/stadia_controller (1).png" alt="start" class="start-button-controller">
                Play
                <img src="./src/img/Arrow 1.svg" id="play-arrow" class="play-arrow" alt="arrow">
                <img src="./src/img/Arrow 2.svg" id="play-arrow-hover" class="play-arrow-hover hidden" alt="arrow">
            </button>
            <img class="controller" src="./src/img/stadia_controller.png" alt="start" id="start">
        </div>
    </section>`;
}

/**
 * Builds one radio-option label (radio input + text + active-icon).
 * @param name - The radio group's name attribute.
 * @param option - The option's value, label text, and default-checked state.
 * @returns HTML string
 */
function optionLabel(name: string, option: app.interfaces.RadioOption): string {
    const checkedAttr = option.checked ? " checked" : "";
    const iconClass = option.checked ? "active-icon" : "active-icon hidden";

    return `
                        <label>
                            <input type="radio" name="${name}"${checkedAttr} value="${option.value}"> ${option.label}
                            <img src="./src/img/active.svg" alt="active choice" class="${iconClass}">
                        </label>`;
}

/**
 * Builds one settings fieldset (icon + legend + a list of radio options).
 * @param iconSrc - The legend icon's image source.
 * @param iconAlt - The legend icon's alt text.
 * @param legendText - The fieldset's legend text.
 * @param name - The radio group's name attribute shared by all options.
 * @param options - The radio options to render.
 * @returns HTML string
 */
function optionFieldset(
    iconSrc: string,
    iconAlt: string,
    legendText: string,
    name: string,
    options: app.interfaces.RadioOption[],
): string {
    return `
                    <fieldset class="settings-screen-option">
                        <legend>
                            <img src="${iconSrc}" alt="${iconAlt}">
                            ${legendText}
                        </legend>${options.map((option) => optionLabel(name, option)).join("")}
                    </fieldset>`;
}

/**
 * Builds the theme preview image for the given theme.
 * @param theme - The selected theme identifier ('gaming' | 'da-projects').
 * @returns HTML string
 */
function themePreviewImage(theme: string): string {
  return `<img id="theme-preview" src="${app.themes.themePreviewImages[theme]}" alt="theme">`;
}

/**
 * Builds the default/active splitter image pair shown between status labels.
 * @returns HTML string
 */
function statusSplitter(): string {
    return `
                        <img src="./src/img/splitter.svg" alt="splitter" class="default-splitter">
                        <img class="hidden active-splitter" src="./src/img/splitter2.svg" alt="the other splitter">`;
}

/**
 * Builds one status-bar label, optionally followed by a splitter.
 * @param id - The label's element id.
 * @param text - The label's placeholder text.
 * @param withSplitter - Whether to append a splitter after the label.
 * @returns HTML string
 */
function statusLabel(id: string, text: string, withSplitter: boolean): string {
    return `
                        <p id="${id}">${text}</p>${withSplitter ? statusSplitter() : ""}`;
}

/**
 * Builds the settings screen's HTML markup.
 * @returns HTML string
 */
export function settingScreenTemplate(): string {
    return `
    <section class="setting-screen" id="setting-screen">
        <div class="section-content setting-screen-content">
            <div class="h2-container">
                <h2>Settings</h2>
                <img src="./src/img/underline.svg" alt="underline" class="settings-underline-icon">

            </div>
            <div class="settings-content">
                <div class="options-container">
                    ${optionFieldset("./src/img/palette.svg", "theme", "Game Themes", "theme", app.themeOptions)}
                    ${optionFieldset("./src/img/chess_pawn.svg", "player", "Choose Player", "player", app.playerOptions)}
                    ${optionFieldset("./src/img/style.svg", "board icon", "Board Size", "board", app.boardOptions)}
                </div>
                <div class="choices-container">
                    <div id="preview-theme">
                        ${themePreviewImage("gaming")}
                    </div>
                    <div id="selections-status" class="selections-status">
                        ${statusLabel("selected-theme", "Theme", true)}
                        ${statusLabel("selected-player", "Player", true)}
                        ${statusLabel("selected-size", "Size", false)}
                        <button class="button" disabled id="start-game-button">
                            <img class="hidden start-game-active-icon start-button-controller" id="start-game-active-icon" src="./src/img/smart_display.svg" alt="start">
                            <img id="start-game-disabled-icon" src="./src/img/smart_display_disabled.svg" alt="start" class="start-button-controller">
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

/**
 * Builds the game screen's HTML markup.
 * @returns HTML string
 */
export function gameScreenTemplate(): string {
    return `
    <section id="game-screen" class="game-screen">
        <div class="section-content game-board">
            <div id="game-board-header" class="game-board-header">
                <div id="score-board-container" class="score-board-container"></div>
                <div id="current-player-container" class="current-player-container">
                    <p>Current Player:</p>
                    <img id="current-player-icon" class="current-player-icon" src="./src/img/chess_pawn_white.svg" alt="white pawn">
                </div>
                <button class="button" id="quit-button">
                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.4375 12.5H7.5C7.14583 12.5 6.84896 12.3802 6.60938 12.1406C6.36979 11.901 6.25 11.6042 6.25 11.25C6.25 10.8958 6.36979 10.599 6.60938 10.3594C6.84896 10.1198 7.14583 10 7.5 10H21.4375L20.375 8.9375C20.125 8.6875 20.0052 8.39583 20.0156 8.0625C20.026 7.72917 20.1458 7.4375 20.375 7.1875C20.625 6.9375 20.9219 6.80729 21.2656 6.79688C21.6094 6.78646 21.9062 6.90625 22.1562 7.15625L25.375 10.375C25.625 10.625 25.75 10.9167 25.75 11.25C25.75 11.5833 25.625 11.875 25.375 12.125L22.1562 15.3438C21.9062 15.5938 21.6094 15.7135 21.2656 15.7031C20.9219 15.6927 20.625 15.5625 20.375 15.3125C20.1458 15.0625 20.026 14.7708 20.0156 14.4375C20.0052 14.1042 20.125 13.8125 20.375 13.5625L21.4375 12.5ZM15 6.25V2.5H2.5V20H15V16.25C15 15.8958 15.1198 15.599 15.3594 15.3594C15.599 15.1198 15.8958 15 16.25 15C16.6042 15 16.901 15.1198 17.1406 15.3594C17.3802 15.599 17.5 15.8958 17.5 16.25V20C17.5 20.6875 17.2552 21.276 16.7656 21.7656C16.276 22.2552 15.6875 22.5 15 22.5H2.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H15C15.6875 0 16.276 0.244792 16.7656 0.734375C17.2552 1.22396 17.5 1.8125 17.5 2.5V6.25C17.5 6.60417 17.3802 6.90104 17.1406 7.14062C16.901 7.38021 16.6042 7.5 16.25 7.5C15.8958 7.5 15.599 7.38021 15.3594 7.14062C15.1198 6.90104 15 6.60417 15 6.25Z"
                            fill="white" />
                    </svg>

                    Exit Game
                </button>
            </div>
            <div id="game-board-content" class="game-board-content">
            </div>
            <div id="exit-game" class="closed exit-game">
                <p>Are you sure you want to quit the game?</p>
                <div class="buttons">
                    <button class="button no-button" id="no-button">No</button>
                    <button class="button" id="yes-button">Yes</button>
                </div>
            </div>
        </div>
    </section>`;
}

/**
 * Builds the score-board HTML markup for the given theme.
 * @param theme - game theme score images
 * @returns HTML string
 */
export function scoreTemplate(theme: app.interfaces.GameTheme["images"]): string {
    return `
        <div id="score-board-player1" class="score-board-player">
            <img src="${theme.score2}" alt="orange pawn">
            <div id="score-board-player2-score" class="player-score player1">${app.currentGameConfig.orangePlayerScore}</div>
        </div>
        <div id="score-board-player2" class="score-board-player">
            <img src="${theme.score1}" alt="blue pawn">
            <div id="score-board-player1-score" class="player-score player2">${app.currentGameConfig.bluePlayerScore}</div>
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
    theme: app.interfaces.GameTheme["images"],
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

// ─── Game Over & Winner Screens ─────────────────────────────────────────────

/**
 * Builds the (larger-icon) score-board markup shown on the game-over screen.
 * @param theme - game theme score images
 * @returns HTML string
 */
function gameOverScoreTemplate(theme: app.interfaces.GameTheme["images"]): string {
    return `
        <div class="score-board-player">
            <img src="${theme.score2}" alt="orange pawn">
            <div class="player-score player1">${app.currentGameConfig.orangePlayerScore}</div>
        </div>
        <div class="score-board-player">
            <img src="${theme.score1}" alt="blue pawn">
            <div class="player-score player2">${app.currentGameConfig.bluePlayerScore}</div>
        </div>`;
}

/**
 * Builds the game-over screen's HTML markup (title + final score).
 * @param theme - The current theme identifier ('gaming' | 'da-projects').
 * @returns HTML string
 */
export function gameOverScreenTemplate(theme: string): string {
    const themeImages = theme === "gaming" ? app.themes.themeGaming.images : app.themes.themeDaProjects.images;

    return `
    <div class="game-over-screen theme-${theme}">
        <h3 class="game-over-screen__title">Game Over</h3>
        <div class="game-over-screen__score">
            <p>Final Score</p>
            <div class="score-board-container score-board-container--large">${gameOverScoreTemplate(themeImages)}</div>
        </div>
    </div>`;
}

/**
 * Builds the winner screen's HTML markup (winner texts, trophy, home button).
 * @param theme - The current theme identifier ('gaming' | 'da-projects').
 * @param data - The resolved winner text/trophy content to render.
 * @returns HTML string
 */
export function winnerScreenTemplate(theme: string, data: app.interfaces.WinnerScreenData): string {
    return `
    <div class="winner-screen theme-${theme}">
        <div class="winner-screen__texts">
            <p class="winner-screen__line1">${data.line1}</p>
            <p class="winner-screen__line2 ${data.line2Class}">${data.line2}</p>
        </div>
        <div class="winner-screen__trophy">
            <img class="winner-screen__trophy-image ${data.trophyClass}" src="${data.trophySrc}" alt="trophy">
        </div>
        <button class="button" id="home-button">Home</button>
    </div>`;
}
